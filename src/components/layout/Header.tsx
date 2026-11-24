import { Bell, Search, ChevronDown, LogOut, User } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  return (
    <header className="h-14 border-b border-border bg-surface flex items-center justify-between px-6 shrink-0 gap-4">
      {/* Title */}
      <h1 className="text-sm font-semibold text-slate-800 shrink-0">{title}</h1>

      {/* Search */}
      <div className="flex-1 max-w-sm hidden md:block">
        <div className="relative">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-9 pr-4 py-1.5 text-sm bg-surface-subtle border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent placeholder:text-slate-400"
          />
        </div>
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-1 shrink-0">
        {/* Notifications */}
        <button className="relative p-2 rounded-md text-slate-500 hover:bg-surface-subtle hover:text-slate-700 transition-colors">
          <Bell size={16} />
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-red-500 rounded-full" />
        </button>

        {/* User menu */}
        <div className="relative ml-1">
          <button
            onClick={() => setUserMenuOpen(!userMenuOpen)}
            className="flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-md hover:bg-surface-subtle transition-colors"
          >
            <div className="w-6 h-6 rounded-full bg-brand-600 flex items-center justify-center text-white text-xs font-semibold">
              A
            </div>
            <span className="text-sm font-medium text-slate-700 hidden sm:block">Admin</span>
            <ChevronDown size={13} className="text-slate-400" />
          </button>

          {userMenuOpen && (
            <>
              <div
                className="fixed inset-0 z-10"
                onClick={() => setUserMenuOpen(false)}
              />
              <div className="absolute right-0 top-full mt-1 w-48 bg-surface border border-border rounded-lg shadow-card-hover z-20 py-1">
                <div className="px-3 py-2 border-b border-border">
                  <p className="text-sm font-medium text-slate-800">Admin User</p>
                  <p className="text-xs text-slate-500">Organization Admin</p>
                </div>
                <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-slate-600 hover:bg-surface-subtle transition-colors">
                  <User size={14} />
                  Profile
                </button>
                <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors">
                  <LogOut size={14} />
                  Sign out
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
