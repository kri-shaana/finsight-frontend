import { CheckSquare } from 'lucide-react';
import { PlaceholderPage } from '@/components/common/PlaceholderPage';

export function ApprovalsPage() {
  return (
    <PlaceholderPage
      title="Approvals"
      description="Review and approve pending reconciliation actions and adjustments."
      icon={CheckSquare}
      stats={[
        { label: 'Pending', value: '—' },
        { label: 'Approved', value: '—' },
        { label: 'Rejected', value: '—' },
        { label: 'Escalated', value: '—' },
      ]}
    />
  );
}
