import { Home, Film, Users, CreditCard, Info, Settings, LogOut } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { cn } from '../lib/utilits';
export default function Sidebar() {
  const menuItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Film, label: 'Catalog', path: '/movies' },
    { icon: Users, label: 'Vendors', path: '/vendors' },
    { icon: CreditCard, label: 'Pricing', path: '/pricing' },
    { icon: Info, label: 'About', path: '/about' },
  ];

  return (
    <aside className="w-64 min-h-screen bg-surface-container-low flex flex-col pt-10 pl-10 border-r border-white/5">
      <div className="mb-12">
        <h1 className="text-2xl font-bold text-primary tracking-tighter">CINEVIEW</h1>
        <p className="text-[10px] uppercase tracking-[0.2em] text-on-surface/50 mt-1">Auteur Portal</p>
      </div>

      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <nav
            key={item.path}
            className='flex items-center gap-4 py-3 text-sm transition-all duration-300 hover:text-primary'
            // className={({ isActive }) => cn(
            //   "flex items-center gap-4 py-3 text-sm transition-all duration-300 hover:text-primary",
            //   isActive ? "text-primary" : "text-on-surface/60"
            // )}
          >
            <item.icon size={18} />
            <span className="font-medium text-left">{item.label}</span>
          </nav>
        ))}
      </nav>

      <div className="mt-auto pb-10 space-y-4">
        <button className="flex items-center gap-4 text-sm text-on-surface/60 hover:text-white transition-colors">
          <Settings size={18} />
          <span>Settings</span>
        </button>
        <button className="flex items-center gap-4 text-sm text-primary/80 hover:text-primary transition-colors">
          <LogOut size={18} />
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  );
}