import HeaderNav from "./components/HeaderNav";
import Hero from "./components/Hero";
import FeatureSections from "./components/FeatureSections";
import CTA from "./components/CTA";

function App() {
  return (
    <div className="min-h-screen bg-white text-[#2c3e3e]">
      <HeaderNav />
      <main>
        <Hero />
        <FeatureSections />
        <CTA />
      </main>
      <footer className="border-t" style={{ borderColor: "#cee4e4" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-[#2c3e3e]/70">© {new Date().getFullYear()} Chronix Creator’s Corner</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="hover:opacity-80">Privacy</a>
            <a href="#" className="hover:opacity-80">Terms</a>
            <a href="#" className="hover:opacity-80">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
