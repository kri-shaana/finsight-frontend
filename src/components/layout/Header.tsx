import { Bell, User } from 'lucide-react';

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <header className="h-14 border-b border-border bg-surface flex items-center justify-between px-6 shrink-0">
      <h1 className="text-base font-semibold text-slate-800">{title}</h1>
      <div className="flex items-center gap-2">
        <button className="btn-ghost p-2 rounded-md" aria-label="Notifications">
          <Bell size={16} />
        </button>
        <button className="btn-ghost p-2 rounded-md" aria-label="Profile">
          <User size={16} />
        </button>
      </div>
    </header>
  );
}
