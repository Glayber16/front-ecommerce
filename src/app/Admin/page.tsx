'use client';

import React, { useEffect, useState } from 'react';
import NavbarLogin from '../components/NavbarLogin';
import { listarCategorias, Categoria } from "@/services/CategoriaServices";
import CategoriaForm from '../components/Admin/CategoriaForm';
import CategoriaList from '../components/Admin/CategoriaList';

import AdicionarCarro from '../components/Admin/AdicionarItens';
import ListaCarros from '../components/Admin/ListarItens';

export default function AdminPage() {
  const [abaSelecionada, setAbaSelecionada] = useState<'categoria' | 'carro'>('categoria');

  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const carregarCategorias = async () => {
    try {
      const lista = await listarCategorias();
      setCategorias(lista);
    } catch (error) {
      console.error("Erro ao carregar categorias:", error);
      alert("Erro ao carregar categorias. Por favor, tente novamente.");
    }
  };

  useEffect(() => {
    if (abaSelecionada === 'categoria') {
      carregarCategorias();
    }
  }, [abaSelecionada]);


  return (
    <div className="min-h-screen bg-[#fffdff] font-poppins flex flex-col">
      <NavbarLogin />

      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <div className="w-full max-w-3xl">
          <h2 className="text-2xl font-semibold mb-6 text-center">Gerenciar</h2>

          
          <div className="flex justify-center mb-6 space-x-4">
            <button
              onClick={() => setAbaSelecionada('categoria')}
              className={`px-4 py-2 rounded ${
                abaSelecionada === 'categoria' ? 'bg-blue-600 text-white' : 'bg-gray-200'
              }`}
            >
              Categorias
            </button>
            <button
              onClick={() => setAbaSelecionada('carro')}
              className={`px-4 py-2 rounded ${
                abaSelecionada === 'carro' ? 'bg-blue-600 text-white' : 'bg-gray-200'
              }`}
            >
              Carros
            </button>
          </div>

          
          {abaSelecionada === 'categoria' && (
            <>
              <CategoriaForm onSuccess={carregarCategorias} />
              <CategoriaList categorias={categorias} onDelete={carregarCategorias} />
            </>
          )}

          {abaSelecionada === 'carro' && (
            <>
              <AdicionarCarro onCarroAdicionado={() => {}} />
              <ListaCarros onAtualizarLista={() => {}} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
