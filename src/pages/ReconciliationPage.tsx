import { GitCompare } from 'lucide-react';
import { PlaceholderPage } from '@/components/common/PlaceholderPage';

export function ReconciliationPage() {
  return (
    <PlaceholderPage
      title="Reconciliation"
      description="Run and review reconciliation between settlements and internal records."
      icon={GitCompare}
      stats={[
        { label: 'Total Runs', value: '—' },
        { label: 'Matched', value: '—' },
        { label: 'Unmatched', value: '—' },
        { label: 'Accuracy', value: '—' },
      ]}
    />
  );
}
