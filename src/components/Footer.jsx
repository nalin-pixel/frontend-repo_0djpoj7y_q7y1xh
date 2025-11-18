export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-8 border-b border-slate-800">
          <div>
            <h4 className="text-white font-semibold mb-3">Velocity Cycles</h4>
            <p className="text-sm text-slate-400">Performance bikes, expert service, and gear for every rider.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Shop</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#bikes" className="hover:text-white">Road</a></li>
              <li><a href="#bikes" className="hover:text-white">Mountain</a></li>
              <li><a href="#bikes" className="hover:text-white">City</a></li>
              <li><a href="#bikes" className="hover:text-white">Electric</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Support</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white">Sizing & fit</a></li>
              <li><a href="#" className="hover:text-white">Warranty</a></li>
              <li><a href="#" className="hover:text-white">Shipping & returns</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Get updates</h4>
            <div className="flex gap-2">
              <input className="flex-1 px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 placeholder:text-slate-500" placeholder="Your email" />
              <button className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between py-6 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Velocity Cycles. All rights reserved.</p>
          <div className="space-x-4 mt-3 sm:mt-0">
            <a href="#" className="hover:text-slate-300">Privacy</a>
            <a href="#" className="hover:text-slate-300">Terms</a>
            <a href="#" className="hover:text-slate-300">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
