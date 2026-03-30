"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function DashboardLayout({ children }) {
  const router = useRouter();

  const user = {
    role: "vendor", // 🔥 এটা তুমি auth context / JWT থেকে আনবে
  };

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  return (
    <div>

      {/* Header */}
      <header className="bg-gray-800 p-6 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold text-red-500">Dashboard</h1>
        <nav className="space-x-4">
          <Link href="/" className="hover:text-red-400">Home</Link>
          <Link href="/dashboard" className="hover:text-red-400">Dashboard</Link>
          <Link href="/profile" className="hover:text-red-400">Profile</Link>
        </nav>
      </header>


      <div className="flex min-h-screen bg-black text-white">

        {/* Sidebar */}
        <div className="w-64 bg-[#141414] p-4">

          <ul className="space-y-3">
            <li onClick={() => router.push("/dashboard/user")}>
              User Panel
            </li>
            <li onClick={() => router.push("/dashboard/addMovie")}>
              Add Movie
            </li>
            <li onClick={() => router.push("/dashboard/vendor")}>
              Vendor Panel
            </li>
            <li onClick={() => router.push("/dashboard/admin")}>
              Admin Panel
            </li>
          </ul>
        </div>

        {/* Content */}
        <div className="flex-1 p-6">{children}</div>
      </div>

    </div>
  );
}