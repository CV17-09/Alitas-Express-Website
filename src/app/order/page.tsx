export default function OrderPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] px-6 py-16 text-white">
      <div className="mx-auto max-w-3xl rounded-3xl border border-[#E6A11A]/40 bg-white/5 p-8">
        <h1 className="text-5xl font-black text-[#E6A11A]">
          Place Your Order
        </h1>

        <form className="mt-8 grid gap-5">
          <input
            placeholder="Customer Name"
            className="rounded-xl border border-white/20 bg-white/10 px-4 py-3"
          />

          <input
            placeholder="Phone Number"
            className="rounded-xl border border-white/20 bg-white/10 px-4 py-3"
          />

          <input
            placeholder="Delivery Address"
            className="rounded-xl border border-white/20 bg-white/10 px-4 py-3"
          />

          <select className="rounded-xl border border-white/20 bg-white/10 px-4 py-3">
            <option>Classic</option>
            <option>BBQ</option>
            <option>Buffalo</option>
            <option>Hot</option>
            <option>Lemon Pepper</option>
            <option>Mango Habanero</option>
            <option>Teriyaki</option>
          </select>

          <input
            type="number"
            min="1"
            placeholder="Quantity"
            className="rounded-xl border border-white/20 bg-white/10 px-4 py-3"
          />

          <button
            type="submit"
            className="rounded-xl bg-[#A61E1E] px-6 py-4 text-xl font-black uppercase"
          >
            Submit Order
          </button>
        </form>
      </div>
    </main>
  );
}