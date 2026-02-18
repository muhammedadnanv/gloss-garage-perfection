import { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "left" | "right" | "scale";
  delay?: number;
}

const directionStyles = {
  up: { from: "translate-y-12 opacity-0", to: "translate-y-0 opacity-100" },
  left: { from: "-translate-x-12 opacity-0", to: "translate-x-0 opacity-100" },
  right: { from: "translate-x-12 opacity-0", to: "translate-x-0 opacity-100" },
  scale: { from: "scale-90 opacity-0", to: "scale-100 opacity-100" },
};

const ScrollReveal = ({ children, className = "", direction = "up", delay = 0 }: ScrollRevealProps) => {
  const { ref, isVisible } = useScrollAnimation();
  const styles = directionStyles[direction];

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${isVisible ? styles.to : styles.from} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
