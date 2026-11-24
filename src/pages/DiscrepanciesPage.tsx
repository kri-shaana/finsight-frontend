import { AlertTriangle } from 'lucide-react';
import { PlaceholderPage } from '@/components/common/PlaceholderPage';

export function DiscrepanciesPage() {
  return (
    <PlaceholderPage
      title="Discrepancies"
      description="Review and resolve mismatches found during reconciliation runs."
      icon={AlertTriangle}
      stats={[
        { label: 'Open', value: '—' },
        { label: 'Under Review', value: '—' },
        { label: 'Resolved', value: '—' },
        { label: 'Escalated', value: '—' },
      ]}
    />
  );
}
