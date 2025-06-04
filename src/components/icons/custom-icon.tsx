import type { LucideProps, LucideIcon as LucideIconType } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CustomIconProps extends LucideProps {
  IconComponent: LucideIconType;
  isActive?: boolean;
}

export function CustomIcon({ IconComponent, isActive, className, size = 20, ...props }: CustomIconProps) {
  return (
    <div 
      className={cn(
        "relative p-1 rounded-full transition-all duration-300 ease-out flex items-center justify-center",
        // Translucent aura of lavender
        "shadow-[0_0_12px_2px_hsl(var(--accent)/0.2)] hover:shadow-[0_0_18px_3px_hsl(var(--accent)/0.35)]",
        isActive && "shadow-[0_0_20px_4px_hsl(var(--accent)/0.5)] scale-110 bg-accent/10",
        className
      )}
      style={{ width: size + 8, height: size + 8 }} // Ensure div is slightly larger for aura
    >
      <IconComponent
        size={size}
        className={cn(
          "transition-colors duration-300",
          isActive ? "text-primary" : "text-sidebar-foreground/80 group-hover/menu-button:text-primary"
        )}
        strokeWidth={isActive ? 2.5 : 2}
        {...props}
      />
    </div>
  );
}
