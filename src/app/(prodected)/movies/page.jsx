"use client";

import useSecureAxios from "@/app/hooks/useSecureAxios";
import { useEffect, useState } from "react";

export default function MovieCard() {
    const axiosSecure = useSecureAxios();
    const { movies, setMovies } = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const res = await axiosSecure.get("/api/public/movies");
                setMovies(res.data);
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        };

        fetchMovies();
    }, [axiosSecure]);

    console.log(movies);

    return (
        <div className="bg-black min-h-screen p-6">

            {/* Title */}
            <h1 className="text-white text-3xl font-bold mb-8">
                🎬 Movies Collection
            </h1>

            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

                {movies?.map((movie) => (
                    <div
                        key={movie._id}
                        className="group relative rounded-xl overflow-hidden bg-[#141414] shadow-lg hover:shadow-red-600/20 transition duration-300"
                    >
                        {/* Poster */}
                        <img
                            src={movie?.image}
                            alt={movie?.title}
                            className="w-full h-[360px] object-cover group-hover:scale-110 transition duration-500"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>

                        {/* Content */}
                        <div className="absolute bottom-0 p-4 w-full">
                            <h2 className="text-lg font-bold text-white">
                                {movie?.title}
                            </h2>

                            <p className="text-sm text-gray-300 line-clamp-2">
                                {movie?.description}
                            </p>

                            {/* Buttons */}
                            <div className="flex gap-2 mt-3">
                                <button className="flex-1 bg-red-600 hover:bg-red-700 text-xs py-1 rounded">
                                    Purchase
                                </button>

                                <button className="flex-1 bg-gray-700 hover:bg-gray-600 text-xs py-1 rounded">
                                    Rent
                                </button>

                                <button className="flex-1 border border-gray-400 hover:bg-white hover:text-black text-xs py-1 rounded transition">
                                    Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}