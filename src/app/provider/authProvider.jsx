// "use client";

// import { createContext, useEffect, useState } from "react";
// import secureAxios from "@/lib/secureAxios";

// export const AuthContext = createContext(null);

// export default function AuthProvider({ children }) {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);

//     const fetchCurrentUser = async () => {
//         const token = localStorage.getItem("token");

//         if (!token) {
//             setLoading(false);
//             return;
//         }

//         try {
//             const res = await secureAxios.get("/api/auth/me");
//             setUser(res.data.data);
//         } catch (error) {
//             localStorage.removeItem("token");
//             setUser(null);
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchCurrentUser();
//     }, []);

//     const logout = () => {
//         localStorage.removeItem("token");
//         setUser(null);
//     };

//     return (
//         <AuthContext.Provider
//             value={{
//                 user,
//                 loading,
//                 setUser,
//                 fetchCurrentUser,
//                 logout,
//             }}
//         >
//             {children}
//         </AuthContext.Provider>
//     );
// }