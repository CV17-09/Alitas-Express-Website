const orders = [
  { name: "Maria Lopez", phone: "470-379-5122", flavor: "BBQ", quantity: 2, status: "Pending" },
  { name: "Jose Perez", phone: "470-555-2198", flavor: "Lemon Pepper", quantity: 1, status: "Preparing" },
  { name: "Ana Garcia", phone: "470-222-1900", flavor: "Buffalo", quantity: 3, status: "Completed" },
];

export default function AdminOrdersPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] px-6 py-12 text-white">
      <div className="mx-auto max-w-6xl">
        <a href="/admin" className="font-bold text-[#E6A11A]">← Back to Dashboard</a>

        <h1 className="mt-6 text-5xl font-black uppercase text-[#E6A11A]">
          Customer Orders
        </h1>

        <div className="mt-8 grid gap-5">
          {orders.map((order) => (
            <div
              key={order.phone}
              className="rounded-3xl border border-[#E6A11A]/30 bg-gradient-to-r from-white/10 to-[#A61E1E]/20 p-6 shadow-xl"
            >
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                <div>
                  <h2 className="text-2xl font-black">{order.name}</h2>
                  <p className="text-[#F3E7D3]">{order.phone}</p>
                  <p className="mt-2">
                    {order.quantity} order(s) of{" "}
                    <span className="font-bold text-[#E6A11A]">{order.flavor}</span>
                  </p>
                </div>

                <span className="rounded-full bg-[#E6A11A] px-5 py-2 font-black text-black">
                  {order.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}