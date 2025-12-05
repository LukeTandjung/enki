import type { ReactNode } from 'react';

interface SectionCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  children: ReactNode;
  className?: string;
}

export default function SectionCard({
  icon,
  title,
  description,
  children,
  className = ''
}: SectionCardProps) {
  return (
    <div className={`bg-background-alt flex flex-col gap-2 p-3 rounded-sm w-full ${className}`}>
      <div className="flex flex-col gap-1">
        <div className="flex gap-1 items-center font-medium text-sm leading-5 text-text">
          {icon}
          {title}
        </div>
        <div className="flex w-full font-light text-xxs text-text-alt">
          {description}
        </div>
      </div>

      {children}
    </div>
  );
}
