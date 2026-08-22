import { cn } from "@/lib/utils";

export function GlassCard({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("glass-card p-6 transition-all duration-300 hover:border-white/20", className)}>
      {children}
    </div>
  );
}
