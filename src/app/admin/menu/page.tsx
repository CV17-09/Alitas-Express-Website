const menuItems = [
  {
    name: "Classic",
    description: "Traditional crispy wings seasoned to perfection.",
  },
  {
    name: "BBQ",
    description: "Sweet and smoky barbecue sauce.",
  },
  {
    name: "Buffalo",
    description: "A bold and spicy customer favorite.",
  },
  {
    name: "Hot",
    description: "Extra heat for spice lovers.",
  },
  {
    name: "Lemon Pepper",
    description: "Savory citrus seasoning with a pepper kick.",
  },
  {
    name: "Mango Habanero",
    description: "Sweet tropical flavor with a spicy finish.",
  },
  {
    name: "Teriyaki",
    description: "Rich Asian-inspired sweet soy glaze.",
  },
];

export default function AdminMenuPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] px-6 py-12 text-white">
      <div className="mx-auto max-w-6xl">
        <a
          href="/admin"
          className="font-bold text-[#E6A11A] hover:text-yellow-400"
        >
          ← Back to Dashboard
        </a>

        <section className="mt-6 rounded-[2rem] bg-gradient-to-r from-[#A61E1E] via-[#D97706] to-[#E6A11A] p-8 text-black shadow-2xl">
          <p className="text-sm font-black uppercase tracking-[0.3em]">
            Alitas Express
          </p>

          <h1 className="mt-3 text-5xl font-black uppercase">
            Menu Management
          </h1>

          <p className="mt-3 text-xl font-semibold">
            Review, update, and organize available menu selections.
          </p>
        </section>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl border border-[#E6A11A]/30 bg-gradient-to-br from-white/10 to-[#A61E1E]/20 p-6 shadow-xl"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#F3E7D3]">
                    Menu Item
                  </p>

                  <h2 className="mt-2 text-3xl font-black text-[#E6A11A]">
                    {item.name}
                  </h2>

                  <p className="mt-3 text-[#F3E7D3]">
                    {item.description}
                  </p>
                </div>

                <span className="rounded-full bg-[#E6A11A] px-4 py-2 text-sm font-black text-black">
                  Active
                </span>
              </div>

              <div className="mt-6 flex gap-3">
                <button className="rounded-full bg-[#A61E1E] px-5 py-2 font-bold hover:bg-red-800">
                  Edit
                </button>

                <button className="rounded-full border border-[#E6A11A] px-5 py-2 font-bold text-[#E6A11A] hover:bg-[#E6A11A] hover:text-black">
                  Disable
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-[#E6A11A]/30 bg-white/5 p-6">
          <h2 className="text-2xl font-black text-[#E6A11A]">
            Menu Summary
          </h2>

          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-[#0B0B0B] p-5">
              <p className="text-[#F3E7D3]">Available Items</p>
              <p className="mt-2 text-4xl font-black text-[#E6A11A]">
                {menuItems.length}
              </p>
            </div>

            <div className="rounded-2xl bg-[#0B0B0B] p-5">
              <p className="text-[#F3E7D3]">Most Popular</p>
              <p className="mt-2 text-2xl font-black text-[#E6A11A]">
                Mango Habanero
              </p>
            </div>

            <div className="rounded-2xl bg-[#0B0B0B] p-5">
              <p className="text-[#F3E7D3]">Status</p>
              <p className="mt-2 text-2xl font-black text-green-400">
                All Active
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}