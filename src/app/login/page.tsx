export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] px-6 py-16 text-white">
      <div className="mx-auto max-w-md rounded-3xl border border-[#E6A11A]/40 bg-white/5 p-8">
        <h1 className="text-4xl font-black uppercase text-[#E6A11A]">
          Customer Login
        </h1>

        <p className="mt-3 text-[#F3E7D3]">
          Log in to place orders faster and view your order history.
        </p>

        <form className="mt-8 grid gap-5">
          <input
            type="email"
            placeholder="Email address"
            className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-gray-400"
          />

          <input
            type="password"
            placeholder="Password"
            className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-gray-400"
          />

          <button
            type="button"
            className="rounded-xl bg-[#A61E1E] px-6 py-4 text-lg font-black uppercase text-white hover:bg-red-800"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-[#F3E7D3]">
          New customer?{" "}
          <a href="/create-account" className="font-bold text-[#E6A11A]">
            Create an account
          </a>
        </p>
      </div>
    </main>
  );
}