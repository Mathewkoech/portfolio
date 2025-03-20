
import React, { useEffect, useRef, useState } from 'react';
import { cn } from "@/lib/utils";

interface AnimatedElementProps {
  children: React.ReactNode;
  animation?: 'fade-in' | 'fade-in-up' | 'scale-in';
  delay?: number;
  className?: string;
  threshold?: number;
}

const AnimatedElement = ({ 
  children, 
  animation = 'fade-in-up', 
  delay = 0, 
  className = '',
  threshold = 0.1
}: AnimatedElementProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const animationClass = {
    'fade-in': 'animate-fade-in',
    'fade-in-up': 'animate-fade-in-up',
    'scale-in': 'animate-scale-in',
  }[animation];

  return (
    <div 
      ref={ref}
      className={cn(
        isVisible ? animationClass : 'opacity-0',
        className
      )}
      style={{ 
        animationDelay: `${delay}ms`,
        animationFillMode: 'forwards' 
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedElement;
