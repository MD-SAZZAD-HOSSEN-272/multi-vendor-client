"use client";

export default function ProfilePage() {
  const user = {
    name: "Alex Mercer",
    role: "Premium",
    image: "https://i.ibb.co/2kRz9qP/user.png",
    bio: "Cinephile, traveler, and aspiring director.",
  };

  return (
    <div className="bg-black text-white min-h-screen p-6 space-y-8">

      {/* 🔥 TOP PROFILE */}
      <div className="bg-[#111] p-6 rounded-xl flex items-center gap-6 border border-gray-800">

        <img
          src={user.image}
          className="w-24 h-24 rounded-xl object-cover border border-red-500"
        />

        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            {user.name}
            <span className="bg-red-600 text-xs px-2 py-1 rounded">
              {user.role}
            </span>
          </h1>

          <p className="text-gray-400 text-sm mt-2">{user.bio}</p>

          <div className="flex gap-3 mt-3">
            <button className="bg-gray-800 px-3 py-1 rounded text-sm">
              Drama
            </button>
            <button className="bg-gray-800 px-3 py-1 rounded text-sm">
              Action
            </button>
            <button className="bg-gray-800 px-3 py-1 rounded text-sm">
              Sci-Fi
            </button>
          </div>
        </div>
      </div>

      {/* 🔥 STATS */}
      <div className="grid grid-cols-3 gap-4">

        <div className="bg-[#111] p-6 rounded-xl border border-gray-800 text-center">
          <p className="text-2xl font-bold text-red-500">1,248</p>
          <p className="text-gray-400 text-sm">Films Watched</p>
        </div>

        <div className="bg-[#111] p-6 rounded-xl border border-gray-800 text-center">
          <p className="text-xl font-bold">Psych Thriller</p>
          <p className="text-gray-400 text-sm">Top Genre</p>
        </div>

        <div className="bg-[#111] p-6 rounded-xl border border-gray-800 text-center">
          <p className="text-xl font-bold">4 Years</p>
          <p className="text-gray-400 text-sm">Member Since</p>
        </div>
      </div>

      {/* 🔥 SUBSCRIPTION */}
      <div className="grid grid-cols-2 gap-6">

        <div className="bg-[#111] p-6 rounded-xl border border-gray-800">
          <p className="text-sm text-gray-400 mb-2">CURRENT PLAN</p>
          <h2 className="text-xl font-bold mb-2">Netflix Premium 4K</h2>
          <p className="text-gray-400 text-sm mb-4">
            Next Billing Date: Oct 24, 2025
          </p>

          <button className="bg-red-600 px-4 py-2 rounded text-sm">
            Manage Subscription
          </button>
        </div>

        <div className="bg-[#111] p-6 rounded-xl border border-gray-800">
          <p className="text-sm text-gray-400 mb-2">PAYMENT METHOD</p>
          <p className="text-lg font-semibold">Visa •••• 1234</p>
          <p className="text-gray-400 text-sm mb-4">Expires 12/26</p>

          <button className="text-red-500 text-sm">
            Update Payment
          </button>
        </div>
      </div>

      {/* 🔥 BILLING */}
      <div className="bg-[#111] p-6 rounded-xl border border-gray-800">
        <h2 className="text-lg font-semibold mb-4">Billing History</h2>

        <div className="space-y-3 text-sm text-gray-400">
          <div className="flex justify-between">
            <span>Sep 24, 2025</span>
            <span>$19.99</span>
          </div>
          <div className="flex justify-between">
            <span>Aug 24, 2025</span>
            <span>$19.99</span>
          </div>
        </div>
      </div>

      {/* 🔥 MOVIE GRID */}
      <div>
        <h2 className="text-lg font-semibold mb-4">My Curation</h2>

        <div className="grid grid-cols-4 gap-4">

          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="bg-[#111] p-3 rounded-xl border border-gray-800"
            >
              <img
                src="https://via.placeholder.com/300x200"
                className="rounded-lg mb-2"
              />
              <p className="text-sm">Movie Title</p>
            </div>
          ))}
        </div>
      </div>

      {/* 🔥 SETTINGS */}
      <div className="bg-[#111] p-6 rounded-xl border border-gray-800 space-y-4">

        <h2 className="text-lg font-semibold">Experience Controls</h2>

        <div className="flex justify-between items-center">
          <p>Auto-play Next Episode</p>
          <input type="checkbox" className="accent-red-600" defaultChecked />
        </div>

        <div className="flex justify-between items-center">
          <p>Email Notifications</p>
          <input type="checkbox" className="accent-red-600" />
        </div>

        <button className="text-red-500 text-sm mt-4">
          Sign out of all devices
        </button>
      </div>
    </div>
  );
}