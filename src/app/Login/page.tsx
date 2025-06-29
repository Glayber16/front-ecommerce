'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import Button from '../components/Button';
import { loginUsuario, LoginUsuario } from "@/services/UsuarioServices";

export default function Page() {

  const [form, setForm] = useState<LoginUsuario>({
    login: "",
    senha: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault(); 

  try {
    const usuario = await loginUsuario(form); 

    sessionStorage.setItem("usuario", JSON.stringify(usuario));

    alert("Login realizado com sucesso!");

  
    if (usuario.adm) {
      window.location.href = "/HomeLoginAdmin"; 
    } else {
      window.location.href = "/HomeLoginCliente"; 
    }

  } catch (error: any) {
    alert(error.response?.data || "Erro ao fazer login.");
  }
};



  return (
    <div className="flex font-poppins flex-col min-h-screen bg-[#fffdff]">
      <Navbar />
      <div className="flex flex-1 items-center justify-center px-4">
        <div className="w-full max-w-md bg-white text-black rounded-2xl shadow-xl p-8 border border-gray-200">
          <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
          
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              name="login"
              value={form.login}
              onChange={handleChange}
              placeholder="Login"
              required
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-300"
            />
            <input
              name='senha'
              value={form.senha}
              onChange={handleChange}
              type="password"
              placeholder="Senha"
              required
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-300"
            />
            <Button type="submit" className="bg-base-400 hover:bg-brand-300 hover:text-black text-white font-medium py-2 rounded-lg">
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
