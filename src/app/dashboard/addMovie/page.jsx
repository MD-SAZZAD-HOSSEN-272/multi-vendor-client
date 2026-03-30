"use client";

import { useState } from "react";

export default function ApplyPage() {
  const [form, setForm] = useState({
    name: "",
    location: "",
    email: "",
    phone: "",
    description: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "file") {
      setForm({ ...form, file: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("🔥 FORM DATA:", form); // ✅ all data show

    alert("Check console for submitted data");
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">

      {/* BACKGROUND OVERLAY */}
      <div className="absolute inset-0 bg-[url('/cinema-bg.jpg')] bg-cover bg-center opacity-20"></div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-16 gap-10">

        {/* LEFT SIDE */}
        <div className="max-w-xl">
          <p className="text-red-500 text-sm tracking-widest mb-3">
            PARTNER WITH US
          </p>

          <h1 className="text-5xl font-bold leading-tight mb-6">
            Showcase <br />
            Your <span className="text-red-500">Cinema.</span>
          </h1>

          <p className="text-gray-400 mb-8">
            Join the world's premier cinematic network. Submit your venue details
            to feature your latest screenings, and exclusive content to millions
            of film enthusiasts.
          </p>

          <div className="space-y-4 text-gray-300">
            <p>✔ Global Visibility</p>
            <p>✔ Partner Insights</p>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="w-full max-w-lg bg-[#111] border border-gray-800 p-8 rounded-xl shadow-2xl backdrop-blur-md">

          <form onSubmit={handleSubmit} className="space-y-5">

            <div className="grid grid-cols-2 gap-4">
              <input
                name="name"
                onChange={handleChange}
                placeholder="Cinema Name"
                className="bg-[#1a1a1a] p-3 rounded-lg border border-gray-700 focus:outline-none"
              />
              <input
                name="location"
                onChange={handleChange}
                placeholder="Location"
                className="bg-[#1a1a1a] p-3 rounded-lg border border-gray-700 focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <input
                name="email"
                type="email"
                onChange={handleChange}
                placeholder="Contact Email"
                className="bg-[#1a1a1a] p-3 rounded-lg border border-gray-700 focus:outline-none"
              />
              <input
                name="phone"
                onChange={handleChange}
                placeholder="Phone Number"
                className="bg-[#1a1a1a] p-3 rounded-lg border border-gray-700 focus:outline-none"
              />
            </div>

            {/* Upload */}
            <div className="border border-dashed border-gray-600 rounded-lg p-6 text-center text-gray-400 cursor-pointer">
              <input
                type="file"
                name="file"
                onChange={handleChange}
                className="hidden"
                id="upload"
              />
              <label htmlFor="upload" className="cursor-pointer">
                📁 Click to upload or drag and drop <br />
                <span className="text-xs">SVG, PNG, JPG</span>
              </label>
            </div>

            <textarea
              name="description"
              onChange={handleChange}
              rows={3}
              placeholder="Cinema Description"
              className="w-full bg-[#1a1a1a] p-3 rounded-lg border border-gray-700 focus:outline-none"
            />

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 p-3 rounded-lg font-semibold transition"
            >
              Submit Application →
            </button>
          </form>

          <p className="text-xs text-gray-500 mt-4 text-center">
            By clicking submit, you agree to our Terms & Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
}