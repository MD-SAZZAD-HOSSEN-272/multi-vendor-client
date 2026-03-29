"use client";

import { createContext, useEffect, useState } from "react";
import useSecureAxios from "../hooks/useSecureAxios";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const axiosSecure = useSecureAxios();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // ✅ Register
    const registerUser = async (data) => {
        try {
            const res = await axiosSecure.post("/api/auth/register", data);
            return res.data;
        } catch (err) {
            return { success: false, message: "Server error" };
        }
    };

    // ✅ Login
    const loginUser = async (data) => {
        try {
            const res = await axiosSecure.post("/api/auth/login", data);

            if (res.data?.data?.token) {
                const token = res.data.data.token;

                localStorage.setItem("token", token);

                // 🔥 instant UI update
                setUser({
                    id: res.data.data.id,
                    email: res.data.data.email,
                    role: res.data.data.role,
                });

                // 🔥 important: re-fetch user AFTER token set
                setTimeout(() => {
                    getMe();
                }, 0);
            }

            return res.data;
        } catch (err) {
            return { success: false, message: "Server error" };
        }
    };

    // ✅ Get current user
    const getMe = async () => {
        try {
            const res = await axiosSecure.get("/api/auth/me");

            if (res.data?.success) {
                setUser(res.data.data);
            }
        } catch (err) {
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    // ✅ Logout
    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
    };

    // ✅ Auto check user on load
    useEffect(() => {
        getMe();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                registerUser,
                loginUser,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}