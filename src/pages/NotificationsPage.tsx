import { Bell } from 'lucide-react';
import { PlaceholderPage } from '@/components/common/PlaceholderPage';

export function NotificationsPage() {
  return (
    <PlaceholderPage
      title="Notifications"
      description="Manage system alerts, notification preferences and delivery channels."
      icon={Bell}
      stats={[
        { label: 'Unread', value: '—' },
        { label: 'Today', value: '—' },
        { label: 'Alerts', value: '—' },
        { label: 'Muted', value: '—' },
      ]}
    />
  );
}
