"use client";

import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      
      {/* Header */}
      <header className="bg-gray-800 p-6 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold text-red-500">Dashboard</h1>
        <nav className="space-x-4">
          <Link href="/" className="hover:text-red-400">Home</Link>
          <Link href="/dashboard" className="hover:text-red-400">Dashboard</Link>
          <Link href="/profile" className="hover:text-red-400">Profile</Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6">
        
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Card 1 */}
          <div className="bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-red-600/40 transition">
            <h2 className="text-xl font-semibold mb-2">User Stats</h2>
            <p className="text-gray-300">Total Users: 1,234</p>
            <p className="text-gray-300">Active Today: 123</p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-red-600/40 transition">
            <h2 className="text-xl font-semibold mb-2">Movies Stats</h2>
            <p className="text-gray-300">Total Movies: 567</p>
            <p className="text-gray-300">New This Month: 45</p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-red-600/40 transition">
            <h2 className="text-xl font-semibold mb-2">Vendors</h2>
            <p className="text-gray-300">Total Vendors: 89</p>
            <p className="text-gray-300">Pending Requests: 5</p>
          </div>

        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
          <div className="flex flex-wrap gap-4">
            <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded">Add Movie</button>
            <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded">Manage Users</button>
            <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded">View Vendors</button>
            <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded">Reports</button>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="bg-gray-800 p-4 text-center text-gray-400">
        &copy; 2026 Multi Vendor Platform. All rights reserved.
      </footer>
    </div>
  );
}