'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import Button from '../components/Button';

export default function Page() {
  return (
    <div className="flex flex-col font-poppins min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex flex-1 items-center justify-center px-4">
        <div className="w-full max-w-md bg-white text-black rounded-2xl shadow-xl p-8 border border-gray-200">
          <h2 className="text-2xl font-semibold text-center mb-6">Cadastro</h2>

          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Seu nome"
              required
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-300"
            />
            <input
              type="date"
              required
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-300"
            />
            <input
              type="text"
              placeholder="Telefone"
              required
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-300"
            />
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
              Criar sua Conta
            </Button>
          </form>

          <p className="text-center text-sm mt-6">
            Já possui uma conta?{' '}
            <Link href="/Login" className="text-base-300 hover:underline">
              Entre agora
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
