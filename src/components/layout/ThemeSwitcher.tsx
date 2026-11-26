import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { ThemeMode } from '@/themes/ThemeProvider';

const MODES: { mode: ThemeMode; icon: React.ElementType; label: string }[] = [
  { mode: 'light',  icon: Sun,     label: 'Light' },
  { mode: 'dark',   icon: Moon,    label: 'Dark' },
  { mode: 'system', icon: Monitor, label: 'System' },
];

export function ThemeSwitcher() {
  const { mode, setMode } = useTheme();

  return (
    <div
      className="flex items-center rounded-md p-0.5 gap-0.5"
      style={{ backgroundColor: 'var(--color-elevated)', border: '1px solid var(--color-border)' }}
    >
      {MODES.map(({ mode: m, icon: Icon, label }) => (
        <button
          key={m}
          onClick={() => setMode(m)}
          title={label}
          className="p-1.5 rounded transition-colors duration-fast"
          style={{
            backgroundColor: mode === m ? 'var(--color-card)' : 'transparent',
            color: mode === m ? 'var(--color-accent)' : 'var(--color-text-muted)',
            boxShadow: mode === m ? 'var(--shadow-sm)' : 'none',
          }}
          aria-label={`Switch to ${label} theme`}
        >
          <Icon size={13} />
        </button>
      ))}
    </div>
  );
}
