import { Link, Outlet, useLocation } from 'react-router-dom';
import { Phone, Mail, Share2, ShieldCheck } from 'lucide-react';
import { cn } from '../lib/utils';

export function Layout() {
  const location = useLocation();

  const navLinks = [
    { name: 'Lessons', path: '/lessons' },
    { name: 'About Me', path: '/about' },
    { name: 'Prices', path: '/prices' },
    { name: 'Testimonials', path: '/testimonials' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl shadow-sm">
        <nav className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
          <Link to="/" className="text-2xl font-headline italic text-blue-900">
            Elvington & Sutton Maths
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "font-medium transition-colors duration-300",
                  location.pathname === link.path || (link.path === '/lessons' && location.pathname === '/lessons')
                    ? "text-blue-900 font-bold border-b-2 border-blue-900 pb-1"
                    : "text-slate-600 hover:text-blue-700"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <a
            href="mailto:karen@broster.co.uk"
            className="bg-primary text-white px-6 py-2 rounded-xl font-medium scale-95 active:duration-150 transition-transform shadow-sm hover:shadow-lg"
          >
            Contact
          </a>
        </nav>
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-slate-50 border-t border-slate-200">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 py-16 max-w-7xl mx-auto">
          <div className="md:col-span-2 space-y-6">
            <div className="text-xl font-headline italic text-blue-900">
              Elvington & Sutton Maths Tuition
            </div>
            <div className="flex gap-4">
              <button 
                onClick={() => navigator.clipboard.writeText(window.location.origin)}
                className="text-slate-400 hover:text-blue-900 transition-colors cursor-pointer"
                title="Copy link to clipboard"
              >
                <Share2 className="w-5 h-5" />
              </button>
              <Link to="/about" className="text-slate-400 hover:text-blue-900 transition-colors" title="Qualifications & Safeguarding">
                <ShieldCheck className="w-5 h-5" />
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-primary uppercase tracking-widest text-xs font-label">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-500 text-sm hover:text-blue-900 transition-all">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-500 text-sm hover:text-blue-900 transition-all">Terms of Service</a></li>
              <li><a href="#" className="text-slate-500 text-sm hover:text-blue-900 transition-all">Safeguarding</a></li>
              <li><a href="#" className="text-slate-500 text-sm hover:text-blue-900 transition-all">Sitemap</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-primary uppercase tracking-widest text-xs font-label">Location</h4>
            <p className="text-slate-500 text-sm leading-relaxed">
              Serving Elvington, Sutton-on-Derwent, and surrounding York areas. Individual online sessions available nationwide.
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-8 py-8 border-t border-slate-200/50">
          <p className="text-slate-500 text-sm text-center md:text-left">
            © 2024 Elvington and Sutton Maths Tuition. Member of The Tutors' Association.
          </p>
        </div>
      </footer>
    </div>
  );
}
