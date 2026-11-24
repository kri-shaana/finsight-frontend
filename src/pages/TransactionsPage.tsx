import { ArrowLeftRight } from 'lucide-react';
import { PlaceholderPage } from '@/components/common/PlaceholderPage';

export function TransactionsPage() {
  return (
    <PlaceholderPage
      title="Transactions"
      description="View and manage all financial transactions across payment providers."
      icon={ArrowLeftRight}
      stats={[
        { label: 'Total', value: '—' },
        { label: 'Completed', value: '—' },
        { label: 'Pending', value: '—' },
        { label: 'Failed', value: '—' },
      ]}
    />
  );
}
