import { ShieldCheck, Wrench, Truck, CheckCircle2 } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Lifetime frame warranty",
    desc: "Ride with confidence. Our frames are backed for life.",
  },
  {
    icon: Wrench,
    title: "Pro assembly included",
    desc: "Your bike arrives tuned and ready to roll.",
  },
  {
    icon: Truck,
    title: "Fast, insured shipping",
    desc: "Nationwide delivery with real-time tracking.",
  },
  {
    icon: CheckCircle2,
    title: "60-day ride guarantee",
    desc: "Love it or return it for a full refund.",
  },
];

export default function WhyUs() {
  return (
    <section id="why" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">Why riders choose us</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="h-10 w-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                <r.icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-1">{r.title}</h3>
              <p className="text-slate-600 text-sm">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
