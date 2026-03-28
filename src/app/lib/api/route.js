// import useSecureAxios from "@/app/hooks/useSecureAxios";

// const registerUser = async (data) => {
//     const axiosSecure = useSecureAxios()
//     try {
//         const res = await axiosSecure.post('api/auth/register', data);
//         console.log(res.data);

//         return res.data;
//     } catch (err) {
//         console.log(err);
//         return {
//             success: false,
//             message: "Server error",
//         };
//     }
// }

// const loginUser = async (data) => {
//     const axiosSecure = useSecureAxios()
//     try {
//         const res = await axiosSecure.post('api/auth/login', data);
//         console.log(res.data);
//         return res.data;
//     } catch (err) {
//         console.log(err);
//         return {
//             success: false,
//             message: "Server error",
//         };
//     }
// }

// const getMe = async () => {
//     const axiosSecure = useSecureAxios()
//     try {
//         const res = await axiosSecure.get('api/auth/me');   
//         console.log(res.data);
//         return res.data;
//     } catch (err) {
//         console.log(err);
//         return {
//             success: false,
//             message: "Server error",
//         };
//     }
// }


// export { registerUser, loginUser, getMe };