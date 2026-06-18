export default function AdminLoginPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] px-6 py-16 text-white">
      <div className="mx-auto max-w-md rounded-3xl border border-[#E6A11A]/40 bg-white/5 p-8">
        <h1 className="text-4xl font-black uppercase text-[#E6A11A]">
          Admin Login
        </h1>

        <form className="mt-8 grid gap-5">
          <input
            type="email"
            placeholder="Admin email"
            className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white"
          />

          <input
            type="password"
            placeholder="Password"
            className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white"
          />

          <a
            href="/admin"
            className="rounded-xl bg-[#A61E1E] px-6 py-4 text-center text-lg font-black uppercase text-white"
          >
            Login
          </a>
        </form>
      </div>
    </main>
  );
}