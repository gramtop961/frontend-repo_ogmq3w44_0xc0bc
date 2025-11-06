import { ArrowRight, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#cee4e4] via-[#e8eded] to-white pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium bg-[#e5dabd] text-[#2c3e3e]">
          <Star className="h-3.5 w-3.5" />
          All-in-one platform for modern creators
        </div>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#2c3e3e]">
          Build, launch, and grow with Chronix Creator’s Corner
        </h1>
        <p className="mt-4 text-[#2c3e3e]/80 max-w-2xl mx-auto">
          Design landing pages and funnels, publish courses, host live events, and
          nurture your community — all in one beautiful, cohesive workspace.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <button className="px-5 py-3 rounded-md font-semibold" style={{ backgroundColor: "#edca72", color: "#2c3e3e" }}>
            Start free
          </button>
          <a href="#marketing" className="px-5 py-3 rounded-md font-semibold border border-[#e5c88a] text-[#2c3e3e] hover:bg-[#e5c88a]/20 transition inline-flex items-center">
            Explore features
            <ArrowRight className="h-4 w-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
