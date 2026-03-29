// "use client";

// import { useEffect, useState } from "react";
// import useSecureAxios from "./useSecureAxios";

// export function useAuth() {
//     const axiosSecure = useSecureAxios();

//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);

//     // ✅ Register
//     const registerUser = async (data) => {
//         try {
//             const res = await axiosSecure.post("/api/auth/register", data);
//             return res.data;
//         } catch (err) {
//             console.log(err);
//             return {
//                 success: false,
//                 message: "Server error",
//             };
//         }
//     };

//     // ✅ Login
//     const loginUser = async (data) => {
//         try {
//             const res = await axiosSecure.post("/api/auth/login", data);

//             if (res.data?.data?.token) {
//                 const token = res.data.data.token;

//                 localStorage.setItem("token", token);

//                 // 🔥 instant user set
//                 setUser({
//                     id: res.data.data.id,
//                     email: res.data.data.email,
//                     role: res.data.data.role,
//                 });
//             }

//             return res.data;
//         } catch (err) {
//             console.log(err);
//             return {
//                 success: false,
//                 message: "Server error",
//             };
//         }
//     };

//     // ✅ Get current user
//     const getMe = async () => {
//         try {
//             const res = await axiosSecure.get("/api/auth/me");

//             if (res.data?.success) {
//                 setUser(res.data.data);
//             }

//             return res.data;
//         } catch (err) {
//             console.log(err);
//             setUser(null);
//             return {
//                 success: false,
//                 message: "Unauthorized",
//             };
//         } finally {
//             setLoading(false);
//         }
//     };

//     // ✅ Logout
//     const logout = () => {
//         localStorage.removeItem("token");
//         setUser(null); // 🔥 instantly UI update
//     };

//     // ✅ Auto check user on load
//     useEffect(() => {
//         getMe();
//     }, []);

//     return {
//         user,
//         loading,
//         registerUser,
//         loginUser,
//         getMe,
//         logout,
//     };
// }