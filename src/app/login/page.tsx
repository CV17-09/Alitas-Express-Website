"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        setMessage("Login successful!");

        setTimeout(() => {
          router.push("/");
        }, 1000);
      } else {
        setMessage(data.message || "Invalid email or password.");
      }
    } catch (error) {
      setMessage("Unable to connect to server.");
    }
  };

  return (
    <main className="min-h-screen bg-[#0B0B0B] px-6 py-16 text-white">
      <div className="mx-auto max-w-md rounded-3xl border border-[#E6A11A]/40 bg-white/5 p-8">
        <h1 className="text-4xl font-black uppercase text-[#E6A11A]">
          Customer Login
        </h1>

        <p className="mt-3 text-[#F3E7D3]">
          Log in to place orders faster and view your order history.
        </p>

        <form onSubmit={handleLogin} className="mt-8 grid gap-5">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-gray-400"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-gray-400"
            required
          />

          <button
            type="submit"
            className="rounded-xl bg-[#A61E1E] px-6 py-4 text-lg font-black uppercase text-white hover:bg-red-800"
          >
            Login
          </button>
        </form>

        {message && (
          <div className="mt-4 rounded-xl bg-[#E6A11A]/20 p-3 text-center text-[#E6A11A]">
            {message}
          </div>
        )}

        <p className="mt-6 text-center text-[#F3E7D3]">
          New customer?{" "}
          <a href="/create-account" className="font-bold text-[#E6A11A]">
            Create an account
          </a>
        </p>
      </div>
    </main>
  );
}