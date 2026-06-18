"use client";

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
    <main className="min-h-screen bg-[#0B0B0B] text-white">
      <section className="px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-lg font-bold uppercase tracking-[0.3em] text-[#F3E7D3]">
              Wings Delivery
            </p>

            <h1 className="mt-4 text-6xl font-black uppercase text-[#E6A11A] md:text-8xl">
              Alitas Express
            </h1>

            <p className="mt-5 text-2xl font-semibold">
              Sabor que te encanta. Servicio que te conviene.
            </p>

            <a
              href="/order"
              className="mt-8 inline-block rounded-full bg-[#A61E1E] px-8 py-4 text-lg font-bold uppercase transition hover:bg-red-800"
            >
              Start Order
            </a>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <section className="rounded-3xl border border-[#E6A11A]/40 bg-white/5 p-8">
              <h2 className="text-3xl font-black uppercase text-[#E6A11A]">
                Pick Your Flavor
              </h2>

              <p className="mt-2 text-[#F3E7D3]">
                Click a flavor to preview your choice.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4">
                {flavors.map((flavor) => (
                  <button
                    key={flavor}
                    onClick={() => setSelectedFlavor(flavor)}
                    className={`rounded-2xl border p-4 text-left font-bold transition hover:scale-105 ${
                      selectedFlavor === flavor
                        ? "border-[#E6A11A] bg-[#A61E1E] text-white"
                        : "border-white/20 bg-white/10 text-[#F3E7D3]"
                    }`}
                  >
                    {flavor}
                  </button>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-[#E6A11A]/40 bg-white/5 p-8">
              <h2 className="text-3xl font-black uppercase text-[#E6A11A]">
                Fresh Wings Delivered
              </h2>

              <p className="mt-4 text-xl text-[#F3E7D3]">
                Hot, flavorful wings made for delivery and easy ordering.
              </p>

              <div className="mt-8 rounded-2xl bg-[#F3E7D3] p-6 text-[#0B0B0B]">
                <p className="text-lg font-bold uppercase text-[#A61E1E]">
                  Selected Flavor
                </p>

                <p className="mt-2 text-4xl font-black">{selectedFlavor}</p>

                <p className="mt-4 text-lg">
                  Ready to order? Click Start Order and complete your delivery
                  details.
                </p>
              </div>

              <div className="mt-6 grid gap-4">
                <div className="rounded-xl bg-[#A61E1E]/20 p-4">
                  <h3 className="font-bold text-[#E6A11A]">Delivery Only</h3>
                  <p className="text-[#F3E7D3]">
                    Fast and convenient ordering.
                  </p>
                </div>

                <div className="rounded-xl bg-[#A61E1E]/20 p-4">
                  <h3 className="font-bold text-[#E6A11A]">
                    Available From 12 PM
                  </h3>
                  <p className="text-[#F3E7D3]">
                    Place your order anytime after noon.
                  </p>
                </div>

                <div className="rounded-xl bg-[#A61E1E]/20 p-4">
                  <h3 className="font-bold text-[#E6A11A]">Call to Order</h3>
                  <p className="text-[#F3E7D3]">470 379 5122</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}