interface SkeletonProps {
  className?: string;
  width?: string;
  height?: string;
}

export function Skeleton({ className = '', width, height }: SkeletonProps) {
  return (
    <div
      className={`animate-pulse rounded-md ${className}`}
      style={{
        backgroundColor: 'var(--color-elevated)',
        width,
        height: height ?? '1rem',
      }}
    />
  );
}

export function SkeletonCard() {
  return (
    <div className="card space-y-3">
      <Skeleton width="40%" height="0.75rem" />
      <Skeleton width="60%" height="1.5rem" />
      <Skeleton width="30%" height="0.75rem" />
    </div>
  );
}
