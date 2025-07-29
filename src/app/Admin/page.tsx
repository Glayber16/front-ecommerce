'use client';

import React, { useEffect, useState } from 'react';
import NavbarLogin from '../components/NavbarLogin';
import { listarCategorias, Categoria } from "@/services/CategoriaServices";
import CategoriaForm from '../components/Admin/CategoriaForm';
import CategoriaList from '../components/Admin/CategoriaList';

import AdicionarCarro from '../components/Admin/AdicionarItens';
import ListaCarros from '../components/Admin/ListarItens';
import BuscarForm from '../components/Admin/BuscarForm';
import VendaList from '../components/Admin/VendaList'; 
import { listarVendas, Venda } from '@/services/VendaServices';

export default function AdminPage() {
  const [abaSelecionada, setAbaSelecionada] = useState<'categoria' | 'carro' | 'venda' | 'busca'>('categoria');
  const [vendasBuscadas, setVendasBuscadas] = useState<Venda[]>([]);

  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [vendas, setVendas] = useState<Venda[]>([]);

  const carregarCategorias = async () => {
    try {
      const lista = await listarCategorias();
      setCategorias(lista);
    } catch (error) {
      console.error("Erro ao carregar categorias:", error);
      alert("Erro ao carregar categorias. Por favor, tente novamente.");
    }
  };

  const carregarVendas = async () => {
    try {
      const lista = await listarVendas();
      setVendas(lista);
    } catch (error) {
      console.error("Erro ao carregar vendas:", error);
      alert("Erro ao carregar vendas. Por favor, tente novamente.");
    }
  };

  useEffect(() => {
    if (abaSelecionada === 'categoria') {
      carregarCategorias();
    } else if (abaSelecionada === 'venda') {
      carregarVendas();
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
              className={`px-4 py-2 rounded ${abaSelecionada === 'categoria' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            >
              Categorias
            </button>
            <button
              onClick={() => setAbaSelecionada('carro')}
              className={`px-4 py-2 rounded ${abaSelecionada === 'carro' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            >
              Carros
            </button>
            <button
              onClick={() => setAbaSelecionada('venda')}
              className={`px-4 py-2 rounded ${abaSelecionada === 'venda' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            >
              Vendas
            </button>
            <button
              onClick={() => setAbaSelecionada('busca')}
              className={`px-4 py-2 rounded ${abaSelecionada === 'busca' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            >
              Buscar
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

          {abaSelecionada === 'venda' && (
            <VendaList vendas={vendas} onAtualizarLista={carregarVendas} />
          )}

          {abaSelecionada === 'busca' && (
            <>
              <BuscarForm onBuscar={(vendasEncontradas) => setVendasBuscadas(vendasEncontradas)} />
              {vendasBuscadas.length > 0 && (
                <VendaList vendas={vendasBuscadas} onAtualizarLista={() => {}} />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}