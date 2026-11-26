interface AvatarProps {
  name: string;
  size?: 'sm' | 'md' | 'lg';
  src?: string;
}

const sizeMap = { sm: 'w-6 h-6 text-2xs', md: 'w-8 h-8 text-xs', lg: 'w-10 h-10 text-sm' };

export function Avatar({ name, size = 'md', src }: AvatarProps) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  if (src) {
    return (
      <img
        src={src}
        alt={name}
        className={`${sizeMap[size]} rounded-full object-cover`}
      />
    );
  }

  return (
    <div
      className={`${sizeMap[size]} rounded-full flex items-center justify-center font-semibold shrink-0`}
      style={{
        backgroundColor: 'var(--color-accent-subtle)',
        color: 'var(--color-accent)',
      }}
    >
      {initials}
    </div>
  );
}
