import { CreditCard } from 'lucide-react';
import { PlaceholderPage } from '@/components/common/PlaceholderPage';

export function PaymentProvidersPage() {
  return (
    <PlaceholderPage
      title="Payment Providers"
      description="Configure and manage payment provider integrations."
      icon={CreditCard}
      stats={[
        { label: 'Connected', value: '—' },
        { label: 'Active', value: '—' },
        { label: 'Inactive', value: '—' },
        { label: 'Errors', value: '—' },
      ]}
    />
  );
}
