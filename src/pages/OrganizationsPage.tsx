import { Building2 } from 'lucide-react';
import { PlaceholderPage } from '@/components/common/PlaceholderPage';

export function OrganizationsPage() {
  return (
    <PlaceholderPage
      title="Organizations"
      description="Manage organizations and their configurations."
      icon={Building2}
      stats={[
        { label: 'Total', value: '—' },
        { label: 'Active', value: '—' },
        { label: 'Suspended', value: '—' },
        { label: 'Pending', value: '—' },
      ]}
    />
  );
}
