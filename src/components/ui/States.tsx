import { LucideIcon, Inbox, Loader2, AlertTriangle } from 'lucide-react';
import { Button } from './Button';

interface EmptyStateProps {
  title: string;
  description?: string;
  icon?: LucideIcon;
  action?: { label: string; onClick: () => void };
}

export function EmptyState({ title, description, icon: Icon = Inbox, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
        style={{ backgroundColor: 'var(--color-elevated)' }}
      >
        <Icon size={20} style={{ color: 'var(--color-text-muted)' }} />
      </div>
      <p className="text-sm font-medium" style={{ color: 'var(--color-text-primary)' }}>
        {title}
      </p>
      {description && (
        <p className="text-xs mt-1 max-w-xs" style={{ color: 'var(--color-text-muted)' }}>
          {description}
        </p>
      )}
      {action && (
        <Button variant="secondary" size="sm" className="mt-4" onClick={action.onClick}>
          {action.label}
        </Button>
      )}
    </div>
  );
}

export function LoadingState({ message = 'Loading...' }: { message?: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 gap-3">
      <Loader2 size={20} className="animate-spin" style={{ color: 'var(--color-accent)' }} />
      <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
        {message}
      </p>
    </div>
  );
}

export function ErrorState({
  message = 'Something went wrong.',
  onRetry,
}: {
  message?: string;
  onRetry?: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center py-16 gap-3">
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center"
        style={{ backgroundColor: 'var(--color-danger-subtle)' }}
      >
        <AlertTriangle size={20} style={{ color: 'var(--color-danger)' }} />
      </div>
      <p className="text-sm font-medium" style={{ color: 'var(--color-text-primary)' }}>
        {message}
      </p>
      {onRetry && (
        <Button variant="secondary" size="sm" onClick={onRetry}>
          Try again
        </Button>
      )}
    </div>
  );
}
