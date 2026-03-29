"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import useAuthContext from "../hooks/useAuthContext";


export default function AuthForm({ type }) {
  const isLogin = type === "login";
  const { registerUser, loginUser } = useAuthContext();
  const route = useRouter();


  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      let res;

      if (isLogin) {
        res = await loginUser({
          email: form.email,
          password: form.password,
        });

        console.log(res);

        if (res.success) {
          route.push("/");
        }

        console.log(res);
      } else {
        res = await registerUser(form);
        console.log(res);
      }

      console.log(res, 'outsite');

      if (!res.success) {
        setError(res.message || "Something went wrong");
      } else {
        setSuccess(res.message || "Success");

        // token store (login হলে)
        if (res.data?.token) {
          localStorage.setItem("token", res.data.token);
        }
      }
    } catch (err) {
      setError("Server error");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4">


      <div className="w-full max-w-md bg-gray-800 p-8 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isLogin ? "Login" : "Create Account"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-700 focus:outline-none"
              required
            />
          )}

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-700 focus:outline-none"
            required
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-700 focus:outline-none"
            required
          />

          {/* Role (only register) */}
          {!isLogin && (
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-700"
            >
              <option value="user">User</option>
              <option value="vendor">Vendor</option>
            </select>
          )}

          {/* Error */}
          {error && (
            <p className="text-red-400 text-sm text-center">{error}</p>
          )}

          {/* Success */}
          {success && (
            <p className="text-green-400 text-sm text-center">{success}</p>
          )}

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full p-3 rounded-lg font-semibold transition ${loading
                ? "bg-gray-500"
                : "bg-blue-600 hover:bg-blue-700"
              }`}
          >
            {loading
              ? "Please wait..."
              : isLogin
                ? "Login"
                : "Register"}
          </button>
        </form>

        {/* Switch */}
        <p className="text-center text-sm mt-4">
          {isLogin
            ? "Don't have an account?"
            : "Already have an account?"}{" "}
          <a
            href={isLogin ? "/register" : "/login"}
            className="text-blue-400 hover:underline"
          >
            {isLogin ? "Register" : "Login"}
          </a>
        </p>
      </div>
    </div>
  );
}