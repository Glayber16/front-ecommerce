import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
} & React.ButtonHTMLAttributes<HTMLButtonElement>; 

export default function Button({
  children,
  href,
  onClick,
  className = '',
  variant = 'primary',
  size = 'md',
  ...rest 
}: ButtonProps) {
  
  const baseClasses = 'cursor-pointer transition-all inline-block font-bold rounded-md';
  
  const variantClasses = {
    primary: 'bg-brand-500 text-white hover:bg-brand-600',
    outline: 'bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-100',
  };

  const sizeClasses = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-5 py-2 text-base',
    lg: 'px-8 py-3 text-lg',
  };
  
  const combinedClasses = clsx(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    rest.disabled && 'opacity-50 cursor-not-allowed',
    className
  );

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses} {...rest}>
      {children}
    </button>
  );
}