import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';

type Button = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
   type?: 'button' | 'submit' | 'reset';
};

export default function Button({
  children,
  href,
  onClick,
  className = '',
}: Button) {
  const baseClasses = clsx(
    'cursor-pointer transition-all inline-block', 
    className
  );

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {children}
    </button>
  );
}
