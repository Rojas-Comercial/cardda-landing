import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
interface CardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  noPadding?: boolean;
}
export function Card({
  children,
  className = '',
  noPadding = false,
  ...props
}: CardProps) {
  return <motion.div className={`bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden ${noPadding ? '' : 'p-6 md:p-8'} ${className}`} initial={{
    opacity: 0,
    y: 20
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true,
    margin: '-50px'
  }} transition={{
    duration: 0.5
  }} {...props}>
      {children}
    </motion.div>;
}