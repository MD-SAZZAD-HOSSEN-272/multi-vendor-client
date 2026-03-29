"use client";
import useSecureAxios from "@/app/hooks/useSecureAxios";
import { useEffect, useState } from "react";

export default function MoviesPage() {
    const axiosSecure = useSecureAxios();

    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");
    const [genre, setGenre] = useState("");
    const [sortBy, setSortBy] = useState("");
    const [order, setOrder] = useState("desc");
    const [page, setPage] = useState(1);
    const [meta, setMeta] = useState({});

    // ✅ Fetch Function
    const fetchMovies = async () => {
        try {
            const res = await axiosSecure.get("api/public/movies", {
                params: {
                    search,
                    genre,
                    sortBy,
                    order,
                    page,
                    limit: 10,
                },
            });

            setMovies(res.data.data);
            setMeta(res.data.meta);
        } catch (error) {
            console.error("Movie fetch error:", error);
        }
    };

    useEffect(() => {
        fetchMovies();
    }, [search, genre, sortBy, order, page]);

    return (
        <div className="bg-black min-h-screen text-white p-6">

            {/* 🔥 Header */}
            <h1 className="text-3xl font-bold mb-6 text-red-600">
                🎬 Explore Movies
            </h1>

            {/* 🔍 Filter Section */}
            <div className="flex flex-wrap gap-3 mb-6">

                {/* Search */}
                <input
                    type="text"
                    placeholder="Search movie..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="p-2 rounded bg-gray-800"
                />

                {/* Genre */}
                <select
                    onChange={(e) => setGenre(e.target.value)}
                    className="p-2 rounded bg-gray-800"
                >
                    <option value="">All Genre</option>
                    <option value="action">Action</option>
                    <option value="drama">Drama</option>
                    <option value="comedy">Comedy</option>
                </select>

                {/* Sort */}
                <select
                    onChange={(e) => setSortBy(e.target.value)}
                    className="p-2 rounded bg-gray-800"
                >
                    <option value="">Sort By</option>
                    <option value="price">Price</option>
                    <option value="date">Date</option>
                </select>

                {/* Order */}
                <select
                    onChange={(e) => setOrder(e.target.value)}
                    className="p-2 rounded bg-gray-800"
                >
                    <option value="desc">Desc</option>
                    <option value="asc">Asc</option>
                </select>
            </div>

            {/* 🎬 Movies Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

                {movies?.map((movie) => (
                    <div
                        key={movie._id}
                        className="group relative rounded-xl overflow-hidden bg-[#141414] hover:shadow-red-600/20 transition"
                    >
                        <img
                            src={movie.thumbnail}
                            className="w-full h-[320px] object-cover group-hover:scale-110 transition"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                        <div className="absolute bottom-0 p-3 w-full">
                            <h2 className="font-bold">{movie.title}</h2>
                            <p className="text-sm text-gray-300">{movie.genre}</p>
                            <p className="text-red-500 font-semibold">
                                ${movie.price}
                            </p>

                            {/* Buttons */}
                            <div className="flex gap-1 mt-2">
                                <button className="flex-1 bg-red-600 text-xs py-1 rounded">
                                    Buy
                                </button>
                                <button className="flex-1 bg-gray-700 text-xs py-1 rounded">
                                    Rent
                                </button>
                                <button className="flex-1 border text-xs py-1 rounded">
                                    Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

            </div>

            {/* 📄 Pagination */}
            <div className="flex justify-center mt-8 gap-3">
                <button
                    disabled={page === 1}
                    onClick={() => setPage(page - 1)}
                    className="px-4 py-1 bg-gray-800 rounded"
                >
                    Prev
                </button>

                <span>
                    Page {meta?.page} / {meta?.totalPages}
                </span>

                <button
                    disabled={page === meta?.totalPages}
                    onClick={() => setPage(page + 1)}
                    className="px-4 py-1 bg-gray-800 rounded"
                >
                    Next
                </button>
            </div>
        </div>
    );
}