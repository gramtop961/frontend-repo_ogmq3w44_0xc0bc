import { Rocket, Settings, User } from "lucide-react";

export default function HeaderNav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-[#e8eded]/70 border-b border-[#cee4e4]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-md bg-[#cee4e4] flex items-center justify-center">
            <Rocket className="h-5 w-5 text-[#2c3e3e]" />
          </div>
          <span className="font-semibold tracking-tight text-[#2c3e3e]">Chronix Creator’s Corner</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-[#2c3e3e]">
          <a href="#marketing" className="hover:opacity-80">Marketing</a>
          <a href="#knowledge" className="hover:opacity-80">Knowledge</a>
          <a href="#live" className="hover:opacity-80">Live</a>
          <a href="#community" className="hover:opacity-80">Community</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="hidden sm:inline-flex items-center px-3 py-2 rounded-md text-sm font-medium border border-[#e5c88a] text-[#2c3e3e] hover:bg-[#e5c88a]/20 transition">
            <Settings className="h-4 w-4 mr-2" />
            Dashboard
          </button>
          <button className="inline-flex items-center px-3 py-2 rounded-md text-sm font-medium" style={{ backgroundColor: "#edca72", color: "#2c3e3e" }}>
            <User className="h-4 w-4 mr-2" />
            Sign in
          </button>
        </div>
      </div>
    </header>
  );
}
