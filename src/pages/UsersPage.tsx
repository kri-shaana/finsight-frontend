import { Users } from 'lucide-react';
import { PlaceholderPage } from '@/components/common/PlaceholderPage';

export function UsersPage() {
  return (
    <PlaceholderPage
      title="Users & Roles"
      description="Manage team members, roles, and access permissions."
      icon={Users}
      stats={[
        { label: 'Total Users', value: '—' },
        { label: 'Admins', value: '—' },
        { label: 'Analysts', value: '—' },
        { label: 'Viewers', value: '—' },
      ]}
    />
  );
}
