"use client";

import useSecureAxios from "./useSecureAxios";

export function useAuth() {

    const registerUser = async (data) => {
        const axiosSecure = useSecureAxios()
        try {
            const res = await axiosSecure.post('api/auth/register', data);
            console.log(res.data);

            return res.data;
        } catch (err) {
            console.log(err);
            return {
                success: false,
                message: "Server error",
            };
        }
    }

    const loginUser = async (data) => {
        const axiosSecure = useSecureAxios()
        try {
            console.log(data);
            const res = await axiosSecure.post('api/auth/login', data);
            console.log(res.data);
            return res.data;
        } catch (err) {
            console.log(err);
            return {
                success: false,
                message: "Server error",
            };
        }
    }

    const getMe = async () => {
        const axiosSecure = useSecureAxios()

        try {
            const res = await axiosSecure.get('api/auth/me');
            return res.data;
        } catch (err) {
            console.log(err);
            return {
                success: false,
                message: "Server error",
            };
        }
    }


    return { registerUser, loginUser, getMe };
}

