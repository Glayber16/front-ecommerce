'use client';

import React, { useState } from 'react';
import { listarVendasPorUsuario, Venda } from "@/services/VendaServices";

interface Props {
  onBuscar: (vendas: Venda[]) => void;
}

export default function BuscarForm({ onBuscar }: Props) {
  const [usuarioId, setUsuarioId] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const id = parseInt(usuarioId);
    if (isNaN(id)) {
      alert('Digite um ID de usuário válido.');
      return;
    }

    try {
      const vendas = await listarVendasPorUsuario(id);
      onBuscar(vendas);
    } catch (error: any) {
      alert("Erro ao buscar vendas: " + (error.response?.data || error.message));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4 mb-8">
      <input
        type="number"
        placeholder="ID do usuário"
        value={usuarioId}
        onChange={(e) => setUsuarioId(e.target.value)}
        required
        className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-300"
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
      >
        Buscar
      </button>
    </form>
  );
}
