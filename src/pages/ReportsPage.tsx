import { BarChart3 } from 'lucide-react';
import { PlaceholderPage } from '@/components/common/PlaceholderPage';

export function ReportsPage() {
  return (
    <PlaceholderPage
      title="Reports"
      description="Generate and export financial reconciliation reports."
      icon={BarChart3}
      stats={[
        { label: 'Generated', value: '—' },
        { label: 'Scheduled', value: '—' },
        { label: 'Exported', value: '—' },
        { label: 'Shared', value: '—' },
      ]}
    />
  );
}
