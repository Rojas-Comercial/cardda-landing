import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { BoxIcon } from 'lucide-react';
interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: BoxIcon;
  children: React.ReactNode;
}
export function Button({
  variant = 'primary',
  size = 'md',
  icon: Icon,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-lg';
  const variants = {
    primary: 'bg-[#fa7210] text-white hover:bg-[#e86609] focus:ring-[#fa7210] shadow-lg shadow-[#fa7210]/20',
    secondary: 'bg-white text-[#151515] hover:bg-[#f9fafc] focus:ring-[#fa7210] shadow-md border border-gray-200',
    outline: 'border-2 border-[#38424e] text-[#38424e] hover:bg-[#38424e]/5 focus:ring-[#fa7210]',
    ghost: 'text-[#38424e] hover:bg-[#f9fafc] hover:text-[#151515]'
  };
  const sizes = {
    sm: 'h-9 px-4 text-sm',
    md: 'h-11 px-6 text-base',
    lg: 'h-14 px-8 text-lg'
  };
  return <motion.button whileHover={{
    scale: 1.02
  }} whileTap={{
    scale: 0.98
  }} className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
      {Icon && <Icon className="ml-2 h-5 w-5" />}
    </motion.button>;
}