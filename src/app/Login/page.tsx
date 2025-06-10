'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import Button from '../components/Button';

export default function Page() {
  return (
    <div className="flex font-poppins flex-col min-h-screen bg-[#fffdff]">
      <Navbar />
      <div className="flex flex-1 items-center justify-center px-4">
        <div className="w-full max-w-md bg-white text-black rounded-2xl shadow-xl p-8 border border-gray-200">
          <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
          
          <form className="flex flex-col gap-4">
            <input
             type="email"
              placeholder="Email"
              required
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-300"
            />
            <input
              type="password"
              placeholder="Senha"
              required
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-300"
            />
            <Button type="submit" className="bg-base-400  hover:bg-brand-300 hover:text-black text-white font-medium py-2 rounded-lg">
              Entrar
            </Button>
          </form>

          <p className="text-center text-sm mt-6">
            Ainda não tem uma conta?{' '}
            <Link href="/Cadastro" className="text-base-300 hover:underline">
              Faça agora
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}