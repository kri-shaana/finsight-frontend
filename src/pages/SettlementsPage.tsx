import { FileText } from 'lucide-react';
import { PlaceholderPage } from '@/components/common/PlaceholderPage';

export function SettlementsPage() {
  return (
    <PlaceholderPage
      title="Settlements"
      description="Manage payment provider settlement files and reconciliation status."
      icon={FileText}
      stats={[
        { label: 'Total Files', value: '—' },
        { label: 'Processed', value: '—' },
        { label: 'In Progress', value: '—' },
        { label: 'Failed', value: '—' },
      ]}
    />
  );
}
