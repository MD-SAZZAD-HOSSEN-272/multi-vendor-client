"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

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
    <div className="flex min-h-screen bg-black text-white">
      
      {/* Sidebar */}
      <div className="w-64 bg-[#141414] p-4">
        <h2 className="text-red-600 font-bold text-xl mb-6">
          Dashboard
        </h2>

        <ul className="space-y-3">
          <li onClick={() => router.push("/dashboard/user")}>
            User Panel
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
  );
}