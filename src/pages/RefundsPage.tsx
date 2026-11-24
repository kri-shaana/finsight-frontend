import { RotateCcw } from 'lucide-react';
import { PlaceholderPage } from '@/components/common/PlaceholderPage';

export function RefundsPage() {
  return (
    <PlaceholderPage
      title="Refunds"
      description="Track and manage refund records across all payment providers."
      icon={RotateCcw}
      stats={[
        { label: 'Total', value: '—' },
        { label: 'Pending', value: '—' },
        { label: 'Processed', value: '—' },
        { label: 'Total Amount', value: '—' },
      ]}
    />
  );
}
