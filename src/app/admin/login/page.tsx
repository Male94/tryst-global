"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await signIn("Credentials", {
      redirect: false,
      email,
      password,
    });

    console.log(res);

    if (res?.error) {
      setError("Invalid credentials");
    } else {
      router.replace("/admin"); // redirect to admin dashboard
    }
  };

  return (
    <main className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-md mx-auto mt-20 p-8 border rounded shadow bg-white">
        <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border px-3 py-2 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border px-3 py-2 rounded"
          />
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
          >
            Login
          </button>
        </form>
      </div>
    </main>
  );
}
