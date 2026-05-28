import { HTMLAttributes, forwardRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { motion, HTMLMotionProps } from 'framer-motion';

export interface CardProps extends Omit<HTMLMotionProps<"div">, "ref" | "children"> {
  hoverEffect?: boolean;
  children?: ReactNode;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hoverEffect = false, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={hoverEffect ? { y: -5, transition: { duration: 0.2 } } : {}}
        className={cn(
          'glass rounded-xl p-6 relative overflow-hidden transition-all duration-300',
          hoverEffect && 'hover:neon-border-cyan hover:shadow-[0_0_15px_rgba(88,182,238,0.2)]',
          className
        )}
        {...props}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
        <div className="relative z-10">{children}</div>
      </motion.div>
    );
  }
);

Card.displayName = 'Card';

export { Card };
