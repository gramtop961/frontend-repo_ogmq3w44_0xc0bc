export default function CTA() {
  return (
    <section className="bg-[#e8eded]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 flex flex-col md:flex-row items-center gap-6 md:gap-10">
        <div className="flex-1">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#2c3e3e]">
            Ready to launch your next big idea?
          </h3>
          <p className="text-[#2c3e3e]/70 mt-2">
            Get started for free. Upgrade anytime for advanced automations and growth tools.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-5 py-3 rounded-md font-semibold" style={{ backgroundColor: "#edca72", color: "#2c3e3e" }}>
            Create your workspace
          </button>
          <a href="#" className="px-5 py-3 rounded-md font-semibold border border-[#e5c88a] text-[#2c3e3e] hover:bg-[#e5c88a]/20 transition">
            Book a demo
          </a>
        </div>
      </div>
    </section>
  );
}
