
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
}

const Button = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        'relative overflow-hidden font-medium transition-all duration-300 ease-in-out rounded-full inline-flex items-center justify-center',
        'before:content-[""] before:absolute before:inset-0 before:scale-x-0 before:origin-right before:transition-transform before:duration-300',
        'hover:before:scale-x-100 hover:before:origin-left',
        {
          'text-white bg-wellness-moss before:bg-wellness-leaf': variant === 'primary',
          'text-wellness-moss bg-wellness-sage/20 before:bg-wellness-sage/40': variant === 'secondary',
          'text-wellness-moss bg-transparent border border-wellness-moss before:bg-wellness-sage/30': variant === 'outline',
          'text-wellness-moss bg-transparent hover:text-wellness-leaf hover:bg-wellness-sage/10 before:bg-transparent': variant === 'ghost',
          'px-4 py-2 text-sm': size === 'sm',
          'px-6 py-3': size === 'md',
          'px-8 py-4 text-lg': size === 'lg',
        },
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default Button;
