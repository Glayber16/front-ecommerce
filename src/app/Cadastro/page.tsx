'use client';

import React from 'react';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import Button from '../components/Button';
import { cadastrarUsuario, Usuario } from "@/services/UsuarioServices";

export default function Page() {
const [form, setForm] = useState<Usuario>({
    nome: "",
    endereco: "",
    email: "",
    login: "",
    senha: "",
    adm: false,
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      const mensagem = await cadastrarUsuario(form);
      alert(mensagem);
    } catch (error: any) {
      alert(error.message);
    }
  };
  
  return (
    <div className="flex flex-col font-poppins min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex flex-1 items-center justify-center px-4">
        <div className="w-full max-w-md bg-white text-black rounded-2xl shadow-xl p-8 border border-gray-200">
          <h2 className="text-2xl font-semibold text-center mb-6">Cadastro</h2>

          <form className="flex flex-col gap-4 " onSubmit={handleSubmit}>
            <input
              name='nome'
              type="text"
              value={form.nome}
              onChange={handleChange}
              placeholder="Seu nome"
              required
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-300"
            />
            <input
              name='endereco'
              type="text"
              value={form.endereco}
              onChange={handleChange}
              placeholder="Endereco"
              required
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-300"
            />
            <input
              name='email'
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              required
               className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-300"
            />
            <input
              name='login'
              type="text"
              value={form.login}
              onChange={handleChange}
              placeholder="Login"
              required
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-300"
            />
            <input
              name='senha'
              type="password"
              value={form.senha}
              onChange={handleChange}
              placeholder="Senha"
              required
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-300"
            />
            <label className="flex items-center gap-2">
            <input
              name="adm"
              type="checkbox"
              checked={form.adm}
              onChange={handleChange}
              className="accent-brand-300"
            />
            Administrador
          </label>

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
