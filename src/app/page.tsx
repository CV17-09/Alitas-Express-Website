"use client";

import UserGreeting from "@/components/UserGreeting";
import { useState } from "react";

const flavors = [
  "Classic",
  "BBQ",
  "Buffalo",
  "Hot",
  "Lemon Pepper",
  "Mango Habanero",
  "Teriyaki",
];

export default function Home() {
  const [selectedFlavor, setSelectedFlavor] = useState("BBQ");

  return (
    <main className="min-h-screen bg-[#0B0B0B] px-6 py-10 text-white">
      <div className="mx-auto max-w-5xl">

        {/* Top Bar */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm text-[#F3E7D3]">
              Welcome to Alitas Express
            </p>
          </div>

          <UserGreeting />
        </div>

        {/* Hero */}
        <section className="rounded-3xl border border-[#E6A11A]/30 bg-[#151515] p-10 text-center shadow-xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#E6A11A]">
            Alitas Express
          </p>

          <h1 className="mt-4 text-5xl font-black uppercase md:text-7xl">
            Wings Delivery
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-lg text-[#F3E7D3]">
            Fresh wings, bold sauces, and fast local delivery.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/order"
              className="rounded-full bg-[#E6A11A] px-7 py-3 font-black uppercase text-black transition hover:bg-yellow-500"
            >
              Order Now
            </a>

            <a
              href="/login"
              className="rounded-full border border-[#E6A11A] px-7 py-3 font-black uppercase text-[#E6A11A] transition hover:bg-[#E6A11A] hover:text-black"
            >
              Login
            </a>

            <a
              href="/create-account"
              className="rounded-full border border-white/20 px-7 py-3 font-black uppercase text-white transition hover:bg-white hover:text-black"
            >
              Create Account
            </a>
          </div>
        </section>

        {/* Content */}
        <section className="mt-10 grid gap-8 md:grid-cols-[1fr_0.8fr]">
          {/* Menu */}
          <div className="rounded-3xl bg-[#151515] p-8 shadow-xl">
            <h2 className="text-3xl font-black text-[#E6A11A]">
              Menu
            </h2>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {flavors.map((flavor) => (
                <button
                  key={flavor}
                  onClick={() => setSelectedFlavor(flavor)}
                  className={`rounded-2xl p-4 text-left font-bold transition ${
                    selectedFlavor === flavor
                      ? "bg-[#A61E1E] text-white"
                      : "bg-white/10 text-[#F3E7D3] hover:bg-white/15"
                  }`}
                >
                  {flavor}
                </button>
              ))}
            </div>
          </div>

          {/* Selected Item */}
          <div className="rounded-3xl bg-[#151515] p-8 shadow-xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#E6A11A]">
              Selected
            </p>

            <h2 className="mt-3 text-5xl font-black">
              {selectedFlavor}
            </h2>

            <p className="mt-4 text-[#F3E7D3]">
              Ready to order? Add your name, phone number, address, and quantity.
            </p>

            <a
              href="/order"
              className="mt-8 inline-block rounded-full bg-[#A61E1E] px-7 py-3 font-black uppercase text-white transition hover:bg-red-800"
            >
              Continue
            </a>

            <div className="mt-8 border-t border-white/10 pt-6 text-sm text-[#F3E7D3]">
              <p>🚚 Delivery Only</p>
              <p>🕛 Open from 12 PM</p>
              <p>📞 Call: 470 379 5122</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}