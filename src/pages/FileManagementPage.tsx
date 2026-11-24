import { FolderOpen } from 'lucide-react';
import { PlaceholderPage } from '@/components/common/PlaceholderPage';

export function FileManagementPage() {
  return (
    <PlaceholderPage
      title="File Management"
      description="Upload, manage and track settlement CSV files from payment providers."
      icon={FolderOpen}
      stats={[
        { label: 'Uploaded', value: '—' },
        { label: 'Processing', value: '—' },
        { label: 'Completed', value: '—' },
        { label: 'Errors', value: '—' },
      ]}
    />
  );
}
