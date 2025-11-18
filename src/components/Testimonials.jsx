const quotes = [
  {
    name: "Jordan P.",
    text: "The Apex Pro is insanely smooth. Customer service was top-notch and shipping was fast.",
  },
  {
    name: "Maya R.",
    text: "I commute daily on my City Glide. Comfortable, light, and looks fantastic!",
  },
  {
    name: "Chris L.",
    text: "Got my first trail bike here and I'm hooked. Great value and expert support.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 p-8 bg-gradient-to-br from-white to-slate-50">
          <div className="grid md:grid-cols-3 gap-6">
            {quotes.map((q, i) => (
              <figure key={i} className="rounded-xl bg-white border border-slate-200 p-6 shadow-sm">
                <blockquote className="text-slate-700">“{q.text}”</blockquote>
                <figcaption className="mt-4 text-sm font-semibold text-slate-900">{q.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
