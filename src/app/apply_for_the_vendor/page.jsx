"use client";
import { useState } from "react";
import useAuthContext from "../hooks/useAuthContext";
import useSecureAxios from "../hooks/useSecureAxios";

export default function VendorApplyForm() {
    const { user } = useAuthContext();
    const axiosSecure = useSecureAxios();
    const [formData, setFormData] = useState({
        userId: user?._id || "",
        name: user?.name || "",
        companyName: "",
        contactInfo: "",
        email: user?.email || "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axiosSecure.post(
                "/api/apply/vendors",
                formData
            );

            console.log(res.data);
            if(res.data?.success) {
                alert("Application submitted successfully!");
            } else {
                alert(res.data?.message || "Failed to submit application");
            }
        } catch (error) {
            console.error(error);
            alert(error?.response?.data?.message || "Something went wrong");
        }
    };

    console.log(formData);

return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="bg-[#141414] p-8 rounded-lg shadow-lg w-full max-w-md border border-gray-800">

            {/* Title */}
            <h1 className="text-2xl font-bold mb-6 text-center text-red-600">
                Apply for the Vendor
            </h1>

            <form onSubmit={handleSubmit} className="space-y-4">

                {/* Name (readonly) */}
                <div>
                    <label className="block mb-1 text-sm text-gray-400">Name</label>
                    <input
                        type="text"
                        value={formData.name}
                        readOnly
                        className="w-full p-3 rounded bg-gray-800 text-gray-400 cursor-not-allowed"
                    />
                </div>

                {/* User ID (hidden বা disabled) */}
                <input type="hidden" value={formData.userId} />

                {/* Company Name */}
                <div>
                    <label className="block mb-1 text-sm text-gray-400">
                        Company Name
                    </label>
                    <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                        placeholder="Enter your company name"
                        className="w-full p-3 rounded bg-gray-800 focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                </div>

                {/* Contact Info */}
                <div>
                    <label className="block mb-1 text-sm text-gray-400">
                        Contact Info
                    </label>
                    <input
                        type="text"
                        name="contactInfo"
                        value={formData.contactInfo}
                        onChange={handleChange}
                        required
                        placeholder="Phone / Email"
                        className="w-full p-3 rounded bg-gray-800 focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 transition p-3 rounded font-semibold"
                >
                    Submit Application
                </button>
            </form>
        </div>
    </div>
);
}