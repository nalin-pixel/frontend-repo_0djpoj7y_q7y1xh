import { Menu, ShoppingCart, Bike, Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-emerald-500 to-cyan-500 flex items-center justify-center text-white shadow-lg">
            <Bike className="h-5 w-5" />
          </div>
          <span className="font-bold text-slate-800 text-lg">Velocity Cycles</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
          <a href="#bikes" className="hover:text-slate-900 transition">Bikes</a>
          <a href="#categories" className="hover:text-slate-900 transition">Categories</a>
          <a href="#why" className="hover:text-slate-900 transition">Why Us</a>
          <a href="#testimonials" className="hover:text-slate-900 transition">Reviews</a>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200 bg-white text-slate-600 focus-within:ring-2 ring-emerald-500/30">
            <Search className="h-4 w-4" />
            <input placeholder="Search bikes" className="outline-none text-sm w-40 bg-transparent" />
          </div>
          <button className="relative inline-flex items-center justify-center h-10 w-10 rounded-lg border border-slate-200 bg-white hover:bg-slate-50">
            <ShoppingCart className="h-5 w-5 text-slate-700" />
            <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-emerald-500 text-white text-[11px] font-semibold flex items-center justify-center shadow">2</span>
          </button>
          <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-slate-200 bg-white">
            <Menu className="h-5 w-5 text-slate-700" />
          </button>
        </div>
      </div>
    </header>
  );
}
