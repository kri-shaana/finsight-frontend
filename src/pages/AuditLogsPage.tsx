import { ScrollText } from 'lucide-react';
import { PlaceholderPage } from '@/components/common/PlaceholderPage';

export function AuditLogsPage() {
  return (
    <PlaceholderPage
      title="Audit Logs"
      description="Track all system actions and changes for compliance and security."
      icon={ScrollText}
      stats={[
        { label: 'Total Events', value: '—' },
        { label: 'Today', value: '—' },
        { label: 'Warnings', value: '—' },
        { label: 'Critical', value: '—' },
      ]}
    />
  );
}
