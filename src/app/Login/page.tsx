'use client';
<<<<<<< HEAD

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import Button from '../components/Button';
import { useRouter } from 'next/navigation';
import api from '../services/api'; // axios configurado

export default function Page() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await api.post('/login', { email, senha });

      const user = response.data.user;

      // Armazenar dados no localStorage
      localStorage.setItem('user', JSON.stringify(user));

      // Redirecionar com base no tipo de usuário
      if (user.isAdmin) {
        router.push('/admin');
      } else {
        router.push('/');
      }
    } catch (err: any) {
      alert('Erro no login: ' + (err.response?.data?.message || 'verifique suas credenciais'));
      console.error(err);
    }
  };

=======

import React from 'react';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import Button from '../components/Button';

export default function Page() {
>>>>>>> 520bf66d637a99407df8cb2dddfad41ff6a085d4
  return (
    <div className="flex font-poppins flex-col min-h-screen bg-[#fffdff]">
      <Navbar />
      <div className="flex flex-1 items-center justify-center px-4">
        <div className="w-full max-w-md bg-white text-black rounded-2xl shadow-xl p-8 border border-gray-200">
          <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
          
<<<<<<< HEAD
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
=======
          <form className="flex flex-col gap-4">
            <input
             type="email"
              placeholder="Email"
              required
>>>>>>> 520bf66d637a99407df8cb2dddfad41ff6a085d4
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-300"
            />
            <input
              type="password"
              placeholder="Senha"
              required
<<<<<<< HEAD
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-300"
            />
            <Button type="submit" className="bg-base-400 hover:bg-brand-300 hover:text-black text-white font-medium py-2 rounded-lg">
=======
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-300"
            />
            <Button type="submit" className="bg-base-400  hover:bg-brand-300 hover:text-black text-white font-medium py-2 rounded-lg">
>>>>>>> 520bf66d637a99407df8cb2dddfad41ff6a085d4
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
