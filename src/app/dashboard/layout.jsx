"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useAuthContext from "../hooks/useAuthContext";
import Link from "next/link";

export default function DashboardLayout({ children }) {
  const router = useRouter();
  const { user, logout } = useAuthContext();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  // 🔥 default image fallback
  const userImage =
    user?.image || "https://i.ibb.co/2kRz9qP/user.png";

  return (
    <div className="bg-black text-white min-h-screen">

      {/* 🔥 TOP HEADER */}
      <header className="bg-[#0f0f0f] border-b border-gray-800 px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-red-500">
          🎬 Movie Dashboard
        </h1>

        {/* 🔥 USER INFO */}
        <div className="flex items-center gap-4">

          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3 bg-gray-600 hover:bg-gray-800 p-2 rounded-lg transition">
            Home
            </Link>
            <img
              src={userImage}
              alt="user"
              className="w-10 h-10 rounded-full border border-gray-700 object-cover"
            />

            <div className="text-sm">
              <p className="font-semibold">
                {user?.name || "User"}
              </p>
              <p className="text-gray-400 text-xs capitalize">
                {user?.role || "guest"}
              </p>
            </div>
          </div>

          {/* 🔥 LOGOUT BUTTON */}
          <button
            onClick={() => {
              logout();
              router.push("/login");
            }}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm font-semibold transition"
          >
            Logout
          </button>
        </div>
      </header>

      <div className="flex">

        {/* 🔥 SIDEBAR */}
        <aside className="w-64 bg-[#141414] min-h-screen border-r border-gray-800 p-4">

          <ul className="space-y-2">

            <li
              onClick={() => router.push("/dashboard/user")}
              className="p-3 rounded-lg hover:bg-gray-800 cursor-pointer transition"
            >
              👤 User Panel
            </li>

            <li
              onClick={() => router.push("/dashboard/addMovie")}
              className="p-3 rounded-lg hover:bg-gray-800 cursor-pointer transition"
            >
              🎬 Add Movie
            </li>

            <li
              onClick={() => router.push("/dashboard/vendor")}
              className="p-3 rounded-lg hover:bg-gray-800 cursor-pointer transition"
            >
              🏢 Vendor Panel
            </li>

            <li
              onClick={() => router.push("/dashboard/admin")}
              className="p-3 rounded-lg hover:bg-gray-800 cursor-pointer transition"
            >
              ⚙️ Admin Panel
            </li>
          </ul>
        </aside>

        {/* 🔥 MAIN CONTENT */}
        <main className="flex-1 p-6 bg-[#0b0b0b]">
          {children}
        </main>
      </div>
    </div>
  );
}