"use client";
import useSecureAxios from "@/app/hooks/useSecureAxios";
import uploadToImgBB from "@/app/lib/UploadToImgBB";
import { useState } from "react";

export default function AddMoviePage() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    genre: "",
    price: "",
    rentalPrice: "",
    releaseDate: "",
    files: [],
  });

  const [preview, setPreview] = useState([]);
  const axiosSecure = useSecureAxios();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // ✅ MULTIPLE IMAGE
  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);

    const imageFiles = selectedFiles.filter((file) =>
      file.type.startsWith("image/")
    );

    if (imageFiles.length !== selectedFiles.length) {
      alert("Only images allowed!");
    }

    setForm({ ...form, files: imageFiles });

    const previewUrls = imageFiles.map((file) =>
      URL.createObjectURL(file)
    );

    setPreview(previewUrls);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 🔥 upload images
      const uploadedUrls = await uploadToImgBB(form.files);

      const { files, ...rest } = form;

      const finalData = {
        ...rest,
        price: Number(form.price),
        rentalPrice: Number(form.rentalPrice),
        thumbnail: uploadedUrls[0] || "",
        images: uploadedUrls,
      };

      const res = await axiosSecure.post("/api/vendor/movies", finalData);

      console.log("✅ MOVIE CREATED:", res.data);

      alert("Movie added successfully!");
    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">

      <div className="absolute inset-0 bg-[url('/cinema-bg.jpg')] bg-cover bg-center opacity-20"></div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-16 gap-10">

        {/* LEFT */}
        <div className="max-w-xl">
          <p className="text-red-500 text-sm tracking-widest mb-3">
            ADD NEW MOVIE
          </p>

          <h1 className="text-5xl font-bold leading-tight mb-6">
            Upload <br />
            Your <span className="text-red-500">Movie</span>
          </h1>

          <p className="text-gray-400 mb-8">
            Add your movie to the platform and reach thousands of users.
          </p>
        </div>

        {/* FORM */}
        <div className="w-full max-w-lg bg-[#111] border border-gray-800 p-8 rounded-xl shadow-2xl">

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* TITLE + GENRE */}
            <div className="grid grid-cols-2 gap-4">
              <input
                name="title"
                onChange={handleChange}
                placeholder="Movie Title"
                className="bg-[#1a1a1a] p-3 rounded-lg border border-gray-700"
              />
              <input
                name="genre"
                onChange={handleChange}
                placeholder="Genre"
                className="bg-[#1a1a1a] p-3 rounded-lg border border-gray-700"
              />
            </div>

            {/* PRICE */}
            <div className="grid grid-cols-2 gap-4">
              <input
                name="price"
                type="number"
                onChange={handleChange}
                placeholder="Price"
                className="bg-[#1a1a1a] p-3 rounded-lg border border-gray-700"
              />
              <input
                name="rentalPrice"
                type="number"
                onChange={handleChange}
                placeholder="Rental Price"
                className="bg-[#1a1a1a] p-3 rounded-lg border border-gray-700"
              />
            </div>

            {/* DATE */}
            <input
              name="releaseDate"
              type="date"
              onChange={handleChange}
              className="w-full bg-[#1a1a1a] p-3 rounded-lg border border-gray-700"
            />

            {/* FILE UPLOAD */}
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
                📁 Upload Movie Images
              </label>
            </div>

            {/* PREVIEW */}
            {preview.length > 0 && (
              <div className="grid grid-cols-3 gap-3">
                {preview.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    className="w-full h-24 object-cover rounded-lg border border-gray-700"
                  />
                ))}
              </div>
            )}

            {/* DESCRIPTION */}
            <textarea
              name="description"
              onChange={handleChange}
              placeholder="Movie Description"
              className="w-full bg-[#1a1a1a] p-3 rounded-lg border border-gray-700"
            />

            <button className="w-full bg-red-600 hover:bg-red-700 p-3 rounded-lg font-semibold">
              Add Movie →
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}