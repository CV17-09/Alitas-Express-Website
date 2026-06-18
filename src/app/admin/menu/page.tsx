const flavors = ["Classic", "BBQ", "Buffalo", "Hot", "Lemon Pepper", "Mango Habanero", "Teriyaki"];

export default function AdminMenuPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] px-6 py-12 text-white">
      <div className="mx-auto max-w-5xl">
        <a href="/admin" className="font-bold text-[#E6A11A]">← Back to Dashboard</a>

        <h1 className="mt-6 text-5xl font-black uppercase text-[#E6A11A]">
          Manage Menu
        </h1>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {flavors.map((flavor) => (
            <div
              key={flavor}
              className="rounded-3xl border border-[#E6A11A]/30 bg-gradient-to-br from-[#A61E1E]/40 to-white/10 p-6 shadow-xl"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-[#F3E7D3]">
                Wing Flavor
              </p>
              <h2 className="mt-2 text-3xl font-black text-[#E6A11A]">
                {flavor}
              </h2>

              <button className="mt-5 rounded-full bg-[#A61E1E] px-6 py-3 font-bold hover:bg-red-800">
                Edit Flavor
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}