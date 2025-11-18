import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-cyan-50 to-white" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-emerald-200 text-emerald-700 text-sm font-medium shadow-sm mb-6">
              <Sparkles className="h-4 w-4" />
              Summer Sale • Up to 30% off
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-4">
              Find your perfect ride.
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              Premium road, mountain, and city bikes engineered for performance and comfort. Built, tuned, and delivered ready to ride.
            </p>
            <div className="flex items-center gap-3">
              <a href="#bikes" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-lg shadow-emerald-600/20">
                Shop bikes
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#why" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50">
                Why choose us
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-16 -right-16 w-72 h-72 bg-emerald-200/40 rounded-full blur-3xl" />
            <img src="https://images.unsplash.com/photo-1518655048521-f130df041f66?q=80&w=1600&auto=format&fit=crop" alt="Road bike" className="w-full rounded-2xl shadow-2xl border border-slate-200" />
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-cyan-200/40 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
