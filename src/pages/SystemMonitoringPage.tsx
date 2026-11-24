import { Monitor } from 'lucide-react';
import { PlaceholderPage } from '@/components/common/PlaceholderPage';

export function SystemMonitoringPage() {
  return (
    <PlaceholderPage
      title="System Monitoring"
      description="Monitor API health, database performance and infrastructure status."
      icon={Monitor}
      stats={[
        { label: 'Uptime', value: '—' },
        { label: 'API Latency', value: '—' },
        { label: 'Error Rate', value: '—' },
        { label: 'Active Jobs', value: '—' },
      ]}
    />
  );
}
