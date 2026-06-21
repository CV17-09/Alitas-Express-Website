"use client";

import { useEffect, useState } from "react";

type Order = {
  id: number;
  customerName: string;
  phoneNumber: string;
  deliveryAddress: string;
  flavor: string;
  quantity: number;
  orderStatus: string;
  createdAt: string;
};

export default function AdminDashboardPage() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/orders`);
      const data = await response.json();
      setOrders(data);
    };

    fetchOrders();
  }, []);

  const pendingOrders = orders.filter((order) => order.orderStatus === "Pending").length;
  const completedOrders = orders.filter((order) => order.orderStatus === "Completed").length;
  const recentOrders = orders.slice(0, 3);

  const stats = [
    { title: "Total Orders", value: orders.length.toString(), note: "Orders received" },
    { title: "Pending", value: pendingOrders.toString(), note: "Waiting to be prepared" },
    { title: "Completed", value: completedOrders.toString(), note: "Successfully fulfilled" },
    { title: "Menu Options", value: "7", note: "Available selections" },
  ];

  return (
    <main className="min-h-screen bg-[#0B0B0B] px-6 py-12 text-white">
      <div className="mx-auto max-w-6xl">
        <section className="rounded-[2rem] bg-gradient-to-r from-[#A61E1E] via-[#D97706] to-[#E6A11A] p-8 text-black shadow-2xl">
          <p className="text-sm font-black uppercase tracking-[0.3em]">
            Alitas Express
          </p>

          <h1 className="mt-3 text-5xl font-black uppercase">
            Admin Dashboard
          </h1>

          <p className="mt-3 text-xl font-semibold">
            Track customer orders, manage the menu, and monitor daily activity.
          </p>
        </section>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="/admin/orders"
            className="rounded-full bg-[#A61E1E] px-6 py-3 font-bold hover:bg-red-800"
          >
            View Orders
          </a>

          <a
            href="/admin/menu"
            className="rounded-full bg-[#E6A11A] px-6 py-3 font-bold text-black hover:bg-yellow-500"
          >
            Manage Menu
          </a>

          <a
            href="/admin/customers"
            className="rounded-full border border-[#E6A11A] px-6 py-3 font-bold text-[#E6A11A] hover:bg-[#E6A11A] hover:text-black"
          >
            Customers
          </a>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="rounded-3xl border border-[#E6A11A]/30 bg-gradient-to-br from-white/10 to-[#A61E1E]/20 p-6 shadow-xl"
            >
              <p className="text-[#F3E7D3]">{stat.title}</p>
              <p className="mt-3 text-5xl font-black text-[#E6A11A]">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-gray-300">{stat.note}</p>
            </div>
          ))}
        </div>

        <section className="mt-10 rounded-3xl border border-[#E6A11A]/30 bg-white/5 p-6">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-3xl font-black uppercase text-[#E6A11A]">
              Recent Orders
            </h2>

            <a href="/admin/orders" className="font-bold text-[#E6A11A]">
              See all →
            </a>
          </div>

          <div className="mt-6 grid gap-4">
            {recentOrders.length === 0 ? (
              <p className="text-[#F3E7D3]">No orders have been placed yet.</p>
            ) : (
              recentOrders.map((order) => (
                <div
                  key={order.id}
                  className="rounded-2xl bg-[#0B0B0B] p-5"
                >
                  <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
                    <div>
                      <h3 className="text-xl font-bold">
                        {order.customerName}
                      </h3>

                      <p className="text-[#F3E7D3]">
                        {order.quantity} item(s) • {order.flavor}
                      </p>

                      <p className="text-sm text-gray-400">
                        {order.phoneNumber}
                      </p>
                    </div>

                    <span className="rounded-full bg-[#E6A11A] px-4 py-2 text-sm font-black text-black">
                      {order.orderStatus}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      </div>
    </main>
  );
}