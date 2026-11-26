import { createContext, useContext, useState, ReactNode } from 'react';

interface TabsContextValue { active: string; setActive: (id: string) => void; }
const TabsContext = createContext<TabsContextValue>({ active: '', setActive: () => {} });

export function Tabs({ defaultTab, children }: { defaultTab: string; children: ReactNode }) {
  const [active, setActive] = useState(defaultTab);
  return <TabsContext.Provider value={{ active, setActive }}>{children}</TabsContext.Provider>;
}

export function TabList({ children }: { children: ReactNode }) {
  return (
    <div
      className="flex gap-0.5 p-0.5 rounded-md w-fit"
      style={{ backgroundColor: 'var(--color-elevated)', border: '1px solid var(--color-border)' }}
    >
      {children}
    </div>
  );
}

export function Tab({ id, children }: { id: string; children: ReactNode }) {
  const { active, setActive } = useContext(TabsContext);
  const isActive = active === id;
  return (
    <button
      onClick={() => setActive(id)}
      className="px-3 py-1.5 text-xs font-medium rounded transition-all duration-150"
      style={{
        backgroundColor: isActive ? 'var(--color-card)' : 'transparent',
        color: isActive ? 'var(--color-text-primary)' : 'var(--color-text-muted)',
        boxShadow: isActive ? 'var(--shadow-sm)' : 'none',
      }}
    >
      {children}
    </button>
  );
}

export function TabPanel({ id, children }: { id: string; children: ReactNode }) {
  const { active } = useContext(TabsContext);
  if (active !== id) return null;
  return <div>{children}</div>;
}
