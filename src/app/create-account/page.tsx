"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateAccountPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setMessage("Account created successfully!");

        setTimeout(() => {
          router.push("/login");
        }, 1500);
      } else {
        setMessage(data.message || "Failed to create account.");
      }
    } catch (error) {
      setMessage("Unable to connect to server.");
    }
  };

  return (
    <main className="min-h-screen bg-[#0B0B0B] px-6 py-16 text-white">
      <div className="mx-auto max-w-md rounded-3xl border border-[#E6A11A]/40 bg-white/5 p-8">
        <h1 className="text-4xl font-black uppercase text-[#E6A11A]">
          Create Account
        </h1>

        <p className="mt-3 text-[#F3E7D3]">
          Save your delivery information and order faster next time.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full name"
            className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-gray-400"
            required
          />

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-gray-400"
            required
          />

          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Phone number"
            className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-gray-400"
          />

          <input
            value={deliveryAddress}
            onChange={(e) => setDeliveryAddress(e.target.value)}
            placeholder="Delivery address"
            className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-gray-400"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-gray-400"
            required
          />

          <button
            type="submit"
            className="rounded-xl bg-[#A61E1E] px-6 py-4 text-lg font-black uppercase text-white hover:bg-red-800"
          >
            Create Account
          </button>
        </form>

        {message && (
          <div className="mt-4 rounded-xl bg-[#E6A11A]/20 p-3 text-center text-[#E6A11A]">
            {message}
          </div>
        )}

        <p className="mt-6 text-center text-[#F3E7D3]">
          Already have an account?{" "}
          <a href="/login" className="font-bold text-[#E6A11A]">
            Login
          </a>
        </p>
      </div>
    </main>
  );
}