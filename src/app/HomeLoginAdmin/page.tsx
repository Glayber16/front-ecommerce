'use client';

import React, { useEffect, useState } from 'react';
import NavbarLogin from '../components/NavbarLogin';
import { listarCategorias, cadastrarCategoria, deletarCategoria } from '@/services/CategoriaServices';
import { Categoria } from '@/services/CategoriaServices';

export default function CategoriasPage() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [descricao, setDescricao] = useState('');


  useEffect(() => {
    carregarCategorias();
  }, []);

  const carregarCategorias = async () => {
    try {
      const lista = await listarCategorias();
      setCategorias(lista);
    } catch (error) {
      alert("Erro ao carregar categorias.");
    }
  };

  const handleCadastrar = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await cadastrarCategoria({ descricao });
      alert("Categoria cadastrada!");
      setDescricao('');
      carregarCategorias();
    } catch (error: any) {
      alert("Erro ao cadastrar: " + (error.response?.data || error.message));
    }
  };

  const handleDeletar = async (id: number) => {
    if (confirm("Tem certeza que deseja excluir esta categoria?")) {
      try {
        await deletarCategoria(id);
        alert("Categoria removida.");
        carregarCategorias();
      } catch (error: any) {
        alert("Erro ao excluir: " + (error.response?.data || error.message));
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#fffdff] font-poppins flex flex-col"> 
      <NavbarLogin />

     
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8"> 
     
        <div className="max-w-2xl mx-auto w-full"> 
          <h2 className="text-2xl font-semibold mb-6 text-center">Gerenciar Categorias</h2> 
          
          <form onSubmit={handleCadastrar} className="flex gap-4 mb-8">
            <input
              type="text"
              placeholder="Nova categoria"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              required
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-300"
            />
            <button
              type="submit"
              className="bg-base-400 hover:bg-brand-300 hover:text-black text-white px-4 py-2 rounded-lg"
            >
              Adicionar
            </button>
          </form>

          <ul className="space-y-4">
            {categorias.map((cat) => (
              <li key={cat.id} className="flex justify-between items-center border p-4 rounded-lg">
                <span>{cat.descricao}</span>
                <button
                  onClick={() => handleDeletar(cat.id!)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm"
                >
                  Excluir
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}