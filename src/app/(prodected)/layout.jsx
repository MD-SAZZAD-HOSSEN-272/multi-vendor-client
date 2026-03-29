"use client";

import useAuthContext from "../hooks/useAuthContext";

export default function ProtectedLayout({ children }) {
    const { user } = useAuthContext();
    if (!user) {
        return <div className="min-h-screen flex items-center justify-center bg-black text-white">Access Denied. Please login to continue.</div>;
    }

  return (
    <div className="min-h-screen bg-black text-white">
      {children}
    </div>
  );
}