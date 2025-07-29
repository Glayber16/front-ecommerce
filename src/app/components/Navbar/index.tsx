'use client';

import { Truck, User } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { useCartStore } from '@/stores/useCartStore';

function Navbar() {
  const { items } = useCartStore();

  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <nav className="bg-base-400 border-b fixed w-full z-50 text-md">
        <div className="flex flex-row justify-around items-center py-5 text-base-50 gap-2 ">
          <Link className="hover:text-brand-300 duration-300" href="/">
          
            Inicio
          </Link>
          <Link className="hover:text-brand-300 duration-300" href="/Login">
            
            Carros
          </Link>
          <Link className="hover:text-brand-300 duration-300" href="/Login">

            <User></User>
          </Link>

          <Link
            className="relative hover:text-brand-300 duration-300"
            href="/Login"
          >
            <Truck />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;