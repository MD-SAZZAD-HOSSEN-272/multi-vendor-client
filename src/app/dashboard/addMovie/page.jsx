"use client";

import { useState } from "react";

export default function ApplyPage() {
  const [form, setForm] = useState({
    name: "",
    location: "",
    email: "",
    phone: "",
    description: "",
    files: [],
  });

  const [preview, setPreview] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // ✅ HANDLE MULTIPLE IMAGE
  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);

    // ✅ allow only images
    const imageFiles = selectedFiles.filter((file) =>
      file.type.startsWith("image/")
    );

    if (imageFiles.length !== selectedFiles.length) {
      alert("Only image files are allowed!");
    }

    setForm({ ...form, files: imageFiles });

    // ✅ preview generate
    const previewUrls = imageFiles.map((file) =>
      URL.createObjectURL(file)
    );

    setPreview(previewUrls);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("🔥 FORM DATA:", form);
    console.log("🔥 FILES:", form.files);

    alert("Check console for submitted data");
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[url('/cinema-bg.jpg')] bg-cover bg-center opacity-20"></div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-16 gap-10">

        {/* LEFT */}
        <div className="max-w-xl">
          <p className="text-red-500 text-sm tracking-widest mb-3">
            PARTNER WITH US
          </p>

          <h1 className="text-5xl font-bold leading-tight mb-6">
            Showcase <br />
            Your <span className="text-red-500">Cinema.</span>
          </h1>

          <p className="text-gray-400 mb-8">
            Join the world's premier cinematic network.
          </p>
        </div>

        {/* FORM */}
        <div className="w-full max-w-lg bg-[#111] border border-gray-800 p-8 rounded-xl shadow-2xl">

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* INPUTS */}
            <div className="grid grid-cols-2 gap-4">
              <input name="name" onChange={handleChange} placeholder="Cinema Name"
                className="bg-[#1a1a1a] p-3 rounded-lg border border-gray-700" />
              <input name="location" onChange={handleChange} placeholder="Location"
                className="bg-[#1a1a1a] p-3 rounded-lg border border-gray-700" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <input name="email" onChange={handleChange} placeholder="Email"
                className="bg-[#1a1a1a] p-3 rounded-lg border border-gray-700" />
              <input name="phone" onChange={handleChange} placeholder="Phone"
                className="bg-[#1a1a1a] p-3 rounded-lg border border-gray-700" />
            </div>

            {/* ✅ FILE UPLOAD */}
            <div className="border border-dashed border-gray-600 rounded-lg p-6 text-center text-gray-400">
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
                id="upload"
              />
              <label htmlFor="upload" className="cursor-pointer">
                📁 Upload Images (Multiple)
              </label>
            </div>

            {/* ✅ IMAGE PREVIEW */}
            {preview.length > 0 && (
              <div className="grid grid-cols-3 gap-3">
                {preview.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    className="w-full h-24 object-cover rounded-lg border border-gray-700"
                  />
                ))}
              </div>
            )}

            <textarea
              name="description"
              onChange={handleChange}
              placeholder="Description"
              className="w-full bg-[#1a1a1a] p-3 rounded-lg border border-gray-700"
            />

            <button className="w-full bg-red-600 hover:bg-red-700 p-3 rounded-lg font-semibold">
              Submit →
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}