"use client";

import Link from "next/link";
import { useState } from "react";
import useAuthContext from "../hooks/useAuthContext";

export default function Navbar() {
  const { logout, user } = useAuthContext();
  const [open, setOpen] = useState(false);

  console.log(user, 'navbar user');

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <h1 className="text-xl font-bold">🎬 MovieHub</h1>

      {/* Middle nav */}
      <div className="hidden md:flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/movies">Movies</Link>

        {
            user?.role === 'vendor' ? (
                <Link href="/dashboard">Dashboard</Link>
            ) : (
                <Link href="/apply_for_the_vendor">apply for the vendor</Link>
            )

        }
      </div>

      {/* Right */}
      <div className="relative">
        {!user ? (
          <Link href="/login" className="bg-blue-600 px-4 py-2 rounded-lg">
            Login
          </Link>
        ) : (
          <div>
            <img
              src={user.image || "https://i.ibb.co/2kRz9qP/user.png"}
              className="w-10 h-10 rounded-full cursor-pointer"
              onClick={() => setOpen(!open)}
            />

            {open && (
              <div className="absolute right-0 mt-2 bg-gray-800 rounded-lg shadow-lg p-3">
                <Link href="/profile" className="block mb-2">
                  Profile
                </Link>
                <button onClick={() => {
                  logout();
                  setUser(null);
                }} className="text-red-400">
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}