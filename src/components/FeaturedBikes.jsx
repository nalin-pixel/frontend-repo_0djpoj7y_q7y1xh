import { Star } from "lucide-react";

const bikes = [
  {
    id: 1,
    name: "Apex Pro Road",
    price: 1899,
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1520975693416-35a1cb8c102a?q=80&w=1600&auto=format&fit=crop",
    tag: "Best Seller",
  },
  {
    id: 2,
    name: "Summit Trail 29",
    price: 1499,
    rating: 4.7,
    img: "https://images.unsplash.com/photo-1516827395553-41e43a04f261?q=80&w=1600&auto=format&fit=crop",
    tag: "New",
  },
  {
    id: 3,
    name: "City Glide Step-Through",
    price: 899,
    rating: 4.6,
    img: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=1600&auto=format&fit=crop",
    tag: "Popular",
  },
];

export default function FeaturedBikes() {
  return (
    <section id="bikes" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Featured bikes</h2>
          <a href="#" className="text-emerald-700 hover:text-emerald-800 font-semibold">View all</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bikes.map((b) => (
            <article key={b.id} className="group rounded-2xl border border-slate-200 overflow-hidden bg-white hover:shadow-xl transition">
              <div className="relative">
                <img src={b.img} alt={b.name} className="h-56 w-full object-cover" />
                <span className="absolute top-3 left-3 px-2 py-1 rounded-md text-xs font-semibold bg-white/90 border border-slate-200 text-slate-700">
                  {b.tag}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-slate-900 mb-1">{b.name}</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star className="h-4 w-4 fill-amber-500" />
                    <span className="text-sm text-slate-600">{b.rating}</span>
                  </div>
                  <div className="text-lg font-bold text-slate-900">${b.price}</div>
                </div>
                <button className="mt-4 w-full inline-flex items-center justify-center px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold">
                  Add to cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
