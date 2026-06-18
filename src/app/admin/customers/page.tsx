const customers = [
  { name: "Maria Lopez", phone: "470-379-5122", orders: 4 },
  { name: "Jose Perez", phone: "470-555-2198", orders: 2 },
  { name: "Ana Garcia", phone: "470-222-1900", orders: 7 },
];

export default function AdminCustomersPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] px-6 py-12 text-white">
      <div className="mx-auto max-w-5xl">
        <a href="/admin" className="text-[#E6A11A]">← Back to Dashboard</a>

        <h1 className="mt-6 text-5xl font-black uppercase text-[#E6A11A]">
          Customers
        </h1>

        <div className="mt-8 grid gap-4">
          {customers.map((customer) => (
            <div key={customer.phone} className="rounded-2xl border border-[#E6A11A]/30 bg-white/5 p-5">
              <h2 className="text-2xl font-bold">{customer.name}</h2>
              <p className="text-[#F3E7D3]">{customer.phone}</p>
              <p className="mt-2 text-[#E6A11A] font-bold">
                Orders: {customer.orders}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}