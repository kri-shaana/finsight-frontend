import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Search, Bell, ChevronDown, LogOut, UserCircle, Settings } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { ROLE_LABELS } from '@/permissions/roles';
import { ThemeSwitcher } from './ThemeSwitcher';
import { NAV_GROUPS } from '@/permissions/navigation';

function useBreadcrumbs() {
  const { pathname } = useLocation();
  const allItems = NAV_GROUPS.flatMap((g) => g.items);
  const current = allItems.find((item) => item.path === pathname);
  return current
    ? [{ label: 'Home', path: '/dashboard' }, { label: current.label, path: current.path }]
    : [{ label: 'Home', path: '/dashboard' }];
}

export function Topbar() {
  const { user } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const breadcrumbs = useBreadcrumbs();

  return (
    <header
      className="flex items-center justify-between px-5 shrink-0 gap-4"
      style={{
        height: 'var(--topbar-height)',
        backgroundColor: 'var(--color-sidebar)',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-1.5 min-w-0">
        {breadcrumbs.map((crumb, i) => (
          <span key={crumb.path} className="flex items-center gap-1.5">
            {i > 0 && (
              <span className="text-2xs" style={{ color: 'var(--color-text-muted)' }}>/</span>
            )}
            {i === breadcrumbs.length - 1 ? (
              <span
                className="text-sm font-medium truncate"
                style={{ color: 'var(--color-text-primary)' }}
              >
                {crumb.label}
              </span>
            ) : (
              <Link
                to={crumb.path}
                className="text-sm transition-colors duration-fast truncate"
                style={{ color: 'var(--color-text-muted)' }}
              >
                {crumb.label}
              </Link>
            )}
          </span>
        ))}
      </nav>

      {/* Right side */}
      <div className="flex items-center gap-2 shrink-0">
        {/* Search */}
        <div className="relative hidden md:block">
          <Search
            size={13}
            className="absolute left-2.5 top-1/2 -translate-y-1/2"
            style={{ color: 'var(--color-text-muted)' }}
          />
          <input
            type="text"
            placeholder="Search..."
            className="pl-8 pr-3 py-1.5 text-xs rounded-md w-44 focus:outline-none transition-all duration-base"
            style={{
              backgroundColor: 'var(--color-elevated)',
              border: '1px solid var(--color-border)',
              color: 'var(--color-text-primary)',
            }}
          />
        </div>

        <ThemeSwitcher />

        {/* Notifications */}
        <button
          className="relative p-1.5 rounded-md transition-colors duration-fast"
          style={{ color: 'var(--color-text-secondary)' }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-elevated)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
          }}
          aria-label="Notifications"
        >
          <Bell size={15} />
          <span
            className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: 'var(--color-accent)' }}
          />
        </button>

        {/* User menu */}
        <div className="relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center gap-2 px-2 py-1.5 rounded-md transition-colors duration-fast"
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-elevated)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
            }}
          >
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold shrink-0"
              style={{
                backgroundColor: 'var(--color-accent-subtle)',
                color: 'var(--color-accent)',
              }}
            >
              {user?.name.charAt(0) ?? 'U'}
            </div>
            <span
              className="text-xs font-medium hidden sm:block"
              style={{ color: 'var(--color-text-primary)' }}
            >
              {user?.name}
            </span>
            <ChevronDown size={12} style={{ color: 'var(--color-text-muted)' }} />
          </button>

          {menuOpen && (
            <>
              <div className="fixed inset-0 z-10" onClick={() => setMenuOpen(false)} />
              <div
                className="absolute right-0 top-full mt-1.5 w-52 rounded-lg z-20 py-1 overflow-hidden"
                style={{
                  backgroundColor: 'var(--color-card)',
                  border: '1px solid var(--color-border)',
                  boxShadow: 'var(--shadow-lg)',
                }}
              >
                <div
                  className="px-3 py-2.5"
                  style={{ borderBottom: '1px solid var(--color-border)' }}
                >
                  <p
                    className="text-xs font-semibold"
                    style={{ color: 'var(--color-text-primary)' }}
                  >
                    {user?.name}
                  </p>
                  <p className="text-2xs mt-0.5" style={{ color: 'var(--color-text-muted)' }}>
                    {user ? ROLE_LABELS[user.role] : ''}
                  </p>
                </div>
                {[
                  { icon: UserCircle, label: 'Profile', path: '/settings/profile' },
                  { icon: Settings, label: 'Settings', path: '/settings/organization' },
                ].map(({ icon: Icon, label, path }) => (
                  <Link
                    key={path}
                    to={path}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-2.5 px-3 py-2 text-xs transition-colors duration-fast"
                    style={{ color: 'var(--color-text-secondary)' }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor =
                        'var(--color-elevated)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
                    }}
                  >
                    <Icon size={13} />
                    {label}
                  </Link>
                ))}
                <div
                  className="my-1"
                  style={{ borderTop: '1px solid var(--color-border)' }}
                />
                <button
                  className="w-full flex items-center gap-2.5 px-3 py-2 text-xs transition-colors duration-fast"
                  style={{ color: 'var(--color-danger)' }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      'var(--color-danger-subtle)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
                  }}
                >
                  <LogOut size={13} />
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
