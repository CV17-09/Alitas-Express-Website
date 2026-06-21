"use client";

import { useEffect, useState } from "react";

export default function AdminCustomersPage() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const getCustomers = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/users`
      );

      const data = await response.json();
      setCustomers(data);
    };

    getCustomers();
  }, []);

  return (
    <main className="min-h-screen bg-[#0B0B0B] px-6 py-12 text-white">
      <div className="mx-auto max-w-5xl">
        <a href="/admin" className="text-[#E6A11A]">
          ← Back to Dashboard
        </a>

        <h1 className="mt-6 text-5xl font-black uppercase text-[#E6A11A]">
          Customers
        </h1>

        <div className="mt-8 grid gap-4">
          {customers.map((customer: any) => (
            <div
              key={customer.id}
              className="rounded-2xl border border-[#E6A11A]/30 bg-white/5 p-5"
            >
              <h2 className="text-2xl font-bold">
                {customer.name}
              </h2>

              <p className="text-[#F3E7D3]">
                {customer.email}
              </p>

              <p className="mt-2 text-[#E6A11A] font-bold">
                Joined:{" "}
                {new Date(customer.createdAt).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}