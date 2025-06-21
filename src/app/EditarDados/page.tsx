'use client';

import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import { alterarUsuario, deletarUsuario, Usuario } from '@/services/UsuarioServices';

export default function EditarPerfil() {
  const [form, setForm] = useState<Usuario>({
    id: undefined,
    nome: '',
    endereco: '',
    email: '',
    login: '',
    senha: '',
    adm: false
  });

  useEffect(() => {
    const usuarioSalvo = sessionStorage.getItem("usuario");
    if (usuarioSalvo) {
      setForm(JSON.parse(usuarioSalvo));
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


 const handleDelete = async () => {
  try {
    const usuario = JSON.parse(sessionStorage.getItem("usuario") || "{}");

    await deletarUsuario(usuario.id);
    alert("Conta deletada com sucesso!");

    sessionStorage.removeItem("usuario");
    window.location.href = "/Login";
  } catch (error: any) {
    alert("Erro ao deletar a conta.");
  }
};


const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault(); 

    try {
    
      if (!form.id) {
        alert("Erro: ID do usuário não encontrado para atualização.");
        return;
      }

      await alterarUsuario(form);
      alert("Dados atualizados com sucesso!");

      const updatedUserForSession = { ...form, senha: '' };
      sessionStorage.setItem("usuario", JSON.stringify(updatedUserForSession));

      window.location.href = "/Login"; 
    } catch (error: any) {
      alert("Erro ao atualizar os dados: " + (error.message || "")); 
    }
  };



  return (
    <div className="min-h-screen bg-[#fffdff] font-poppins px-4 py-10">
      <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Editar Perfil</h2>

        <form  onSubmit={handleUpdate} className="flex flex-col gap-4">

            <div>
                <label className="block mb-1 text-sm">Id</label>
                <input
                type="text"
                name="id"
                value={form.id || ''}
                readOnly
                className="w-full border border-gray-300 px-3 py-2 rounded-lg"
                />
            </div>


            <div>
                <label className="block mb-1 text-sm">Nome</label>
                <input
                type="text"
                name="nome"
                value={form.nome}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded-lg"
                />
            </div>

            <div>
                <label className="block mb-1 text-sm">E-mail</label>
                <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded-lg"
                />
            </div>

            <div>
                <label className="block mb-1 text-sm">Login</label>
                <input
                type="text"
                name="login"
                value={form.login}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded-lg"
                />
            </div>

            <div>
                <label className="block mb-1 text-sm">Senha</label>
                <input
                type="password"
                name="senha"
                value={form.senha}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded-lg"
                />
            </div>

            <div>
                <label className="block mb-1 text-sm">Endereço</label>
                <input
                type="text"
                name="endereco"
                value={form.endereco}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded-lg"
                />
            </div>

            <div className="flex justify-between">
                <Button  type="submit"  className="bg-base-400 hover:bg-brand-300 text-white px-4 py-2 rounded-lg">
                Salvar Alterações
                </Button>
                <Button type="button" onClick={handleDelete} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg">
                Deletar Conta
                </Button>
            </div>
        </form>
      </div>
    </div>
  );
}
