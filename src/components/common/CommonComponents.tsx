import { ReactNode, useState } from 'react';
import { Search, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';

/* ── StatusBadge ── */
type Status = 'success' | 'warning' | 'danger' | 'accent' | 'muted';

const STATUS_MAP: Record<string, Status> = {
  active: 'success', completed: 'success', matched: 'success',
  pending: 'warning', processing: 'warning', review: 'warning',
  failed: 'danger', error: 'danger', unmatched: 'danger',
  draft: 'muted', inactive: 'muted',
};

export function StatusBadge({ status }: { status: string }) {
  const variant = STATUS_MAP[status.toLowerCase()] ?? 'muted';
  return <span className={`badge badge-${variant}`}>{status}</span>;
}

/* ── SearchField ── */
interface SearchFieldProps {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}

export function SearchField({ value, onChange, placeholder = 'Search...' }: SearchFieldProps) {
  return (
    <div className="relative">
      <Search
        size={13}
        className="absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none"
        style={{ color: 'var(--color-text-muted)' }}
      />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="input pl-8 pr-8 py-1.5 text-xs w-56"
      />
      {value && (
        <button
          onClick={() => onChange('')}
          className="absolute right-2 top-1/2 -translate-y-1/2"
          style={{ color: 'var(--color-text-muted)' }}
        >
          <X size={12} />
        </button>
      )}
    </div>
  );
}

/* ── FilterBar ── */
interface FilterBarProps {
  left?: ReactNode;
  right?: ReactNode;
}

export function FilterBar({ left, right }: FilterBarProps) {
  return (
    <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
      <div className="flex items-center gap-2 flex-wrap">{left}</div>
      <div className="flex items-center gap-2 flex-wrap">{right}</div>
    </div>
  );
}

/* ── DataTable ── */
interface Column<T> {
  key: string;
  header: string;
  render?: (row: T) => ReactNode;
  width?: string;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  keyField: keyof T;
  emptyMessage?: string;
}

export function DataTable<T>({ columns, data, keyField, emptyMessage = 'No data' }: DataTableProps<T>) {
  return (
    <div
      className="rounded-lg overflow-hidden"
      style={{ border: '1px solid var(--color-border)' }}
    >
      <table className="w-full text-sm">
        <thead>
          <tr style={{ backgroundColor: 'var(--color-elevated)', borderBottom: '1px solid var(--color-border)' }}>
            {columns.map((col) => (
              <th
                key={col.key}
                className="px-4 py-2.5 text-left text-xs font-semibold uppercase tracking-wide"
                style={{ color: 'var(--color-text-muted)', width: col.width }}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className="px-4 py-8 text-center text-xs"
                style={{ color: 'var(--color-text-muted)' }}
              >
                {emptyMessage}
              </td>
            </tr>
          ) : (
            data.map((row) => (
              <tr
                key={String(row[keyField])}
                style={{ borderBottom: '1px solid var(--color-border)' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-elevated)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'; }}
              >
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className="px-4 py-3"
                    style={{ color: 'var(--color-text-primary)' }}
                  >
                    {col.render ? col.render(row) : String((row as Record<string, unknown>)[col.key] ?? '')}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

/* ── ConfirmationDialog ── */
interface ConfirmationDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmLabel?: string;
  danger?: boolean;
  loading?: boolean;
}

export function ConfirmationDialog({
  open, onClose, onConfirm, title, message,
  confirmLabel = 'Confirm', danger = false, loading = false,
}: ConfirmationDialogProps) {
  return (
    <Modal open={open} onClose={onClose} title={title} width="400px">
      <p className="text-sm mb-5" style={{ color: 'var(--color-text-secondary)' }}>{message}</p>
      <div className="flex justify-end gap-2">
        <Button variant="secondary" size="sm" onClick={onClose} disabled={loading}>Cancel</Button>
        <Button variant={danger ? 'danger' : 'primary'} size="sm" onClick={onConfirm} loading={loading}>
          {confirmLabel}
        </Button>
      </div>
    </Modal>
  );
}

/* ── DateRangePicker placeholder ── */
interface DateRangePickerProps {
  value?: { from: string; to: string };
  onChange?: (range: { from: string; to: string }) => void;
}

export function DateRangePicker({ value, onChange }: DateRangePickerProps) {
  return (
    <div className="flex items-center gap-2">
      <input
        type="date"
        value={value?.from ?? ''}
        onChange={(e) => onChange?.({ from: e.target.value, to: value?.to ?? '' })}
        className="input py-1.5 text-xs w-36"
      />
      <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>to</span>
      <input
        type="date"
        value={value?.to ?? ''}
        onChange={(e) => onChange?.({ from: value?.from ?? '', to: e.target.value })}
        className="input py-1.5 text-xs w-36"
      />
    </div>
  );
}

/* suppress unused warning for useState */
void useState;
