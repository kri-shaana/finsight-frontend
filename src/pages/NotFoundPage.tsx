import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-surface-muted flex items-center justify-center p-4">
      <div className="text-center">
        <p className="text-6xl font-bold text-brand-600">404</p>
        <h2 className="mt-4 text-slate-800">Page not found</h2>
        <p className="text-slate-500 mt-2 text-sm">
          The page you're looking for doesn't exist.
        </p>
        <Link to="/dashboard" className="btn-primary mt-6 inline-flex">
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
