// components/ui/GlassCard.tsx
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <div className={`glass-card rounded-[2rem] relative group overflow-hidden transition-all duration-300 hover:scale-[1.01] ${className}`}>
      {children}
    </div>
  );
}