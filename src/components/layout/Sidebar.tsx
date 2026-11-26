import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { getNavForRole, NavGroup } from '@/permissions/navigation';
import { ROLE_LABELS } from '@/permissions/roles';

interface SidebarGroupProps {
  group: NavGroup;
  collapsed: boolean;
}

function SidebarGroup({ group, collapsed }: SidebarGroupProps) {
  const [open, setOpen] = useState(true);

  return (
    <div className="mb-1">
      {!collapsed && (
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between px-3 py-1.5 mb-0.5"
          style={{ color: 'var(--color-text-muted)' }}
        >
          <span className="text-2xs font-semibold uppercase tracking-widest">{group.title}</span>
          <ChevronDown
            size={11}
            className="transition-transform duration-base"
            style={{ transform: open ? 'rotate(0deg)' : 'rotate(-90deg)' }}
          />
        </button>
      )}

      {(open || collapsed) && (
        <div className="space-y-0.5">
          {group.items.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              title={collapsed ? item.label : undefined}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors duration-fast ${
                  collapsed ? 'justify-center' : ''
                } ${
                  isActive
                    ? 'text-text-inverse font-medium'
                    : 'hover:opacity-100'
                }`
              }
              style={({ isActive }) => ({
                backgroundColor: isActive ? 'var(--color-accent)' : 'transparent',
                color: isActive ? 'var(--color-text-inverse)' : 'var(--color-text-secondary)',
              })}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                if (!el.style.backgroundColor.includes('accent')) {
                  el.style.backgroundColor = 'var(--color-elevated)';
                  el.style.color = 'var(--color-text-primary)';
                }
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                if (!el.style.backgroundColor.includes('accent')) {
                  el.style.backgroundColor = 'transparent';
                  el.style.color = 'var(--color-text-secondary)';
                }
              }}
            >
              <item.icon size={15} className="shrink-0" />
              {!collapsed && <span className="truncate">{item.label}</span>}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}

export function Sidebar() {
  const { user } = useAuth();
  const [collapsed, setCollapsed] = useState(false);
  const navGroups = user ? getNavForRole(user.role) : [];

  return (
    <aside
      className="flex flex-col h-screen sticky top-0 shrink-0 transition-all duration-slow"
      style={{
        width: collapsed ? 'var(--sidebar-collapsed-width)' : 'var(--sidebar-width)',
        backgroundColor: 'var(--color-sidebar)',
        borderRight: '1px solid var(--color-border)',
      }}
    >
      {/* Logo */}
      <div
        className="flex items-center justify-between px-4 shrink-0"
        style={{
          height: 'var(--topbar-height)',
          borderBottom: '1px solid var(--color-border)',
        }}
      >
        {!collapsed && (
          <div className="flex items-center gap-2.5 min-w-0">
            <div
              className="w-6 h-6 rounded flex items-center justify-center shrink-0 text-xs font-bold"
              style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-text-inverse)' }}
            >
              F
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold truncate" style={{ color: 'var(--color-text-primary)' }}>
                FinSight
              </p>
              <p className="text-2xs truncate" style={{ color: 'var(--color-text-muted)' }}>
                {user?.organizationName}
              </p>
            </div>
          </div>
        )}
        {collapsed && (
          <div
            className="w-6 h-6 rounded flex items-center justify-center mx-auto text-xs font-bold"
            style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-text-inverse)' }}
          >
            F
          </div>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1 rounded transition-colors duration-fast shrink-0"
          style={{ color: 'var(--color-text-muted)' }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-elevated)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
          }}
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto px-2 py-3 space-y-3">
        {navGroups.map((group) => (
          <SidebarGroup key={group.id} group={group} collapsed={collapsed} />
        ))}
      </nav>

      {/* User */}
      <div
        className="px-3 py-3 shrink-0"
        style={{ borderTop: '1px solid var(--color-border)' }}
      >
        <div className={`flex items-center gap-2.5 ${collapsed ? 'justify-center' : ''}`}>
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold shrink-0"
            style={{ backgroundColor: 'var(--color-accent-subtle)', color: 'var(--color-accent)' }}
          >
            {user?.name.charAt(0) ?? 'U'}
          </div>
          {!collapsed && (
            <div className="min-w-0">
              <p className="text-xs font-medium truncate" style={{ color: 'var(--color-text-primary)' }}>
                {user?.name}
              </p>
              <p className="text-2xs truncate" style={{ color: 'var(--color-text-muted)' }}>
                {user ? ROLE_LABELS[user.role] : ''}
              </p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
