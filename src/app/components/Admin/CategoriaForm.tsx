'use client';

import React, { useState } from 'react';
import { cadastrarCategoria } from "@/services/CategoriaServices";

interface Props {
  onSuccess: () => void;
}

export default function CategoriaForm({ onSuccess }: Props) {
  const [descricao, setDescricao] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await cadastrarCategoria({ descricao });
      alert("Categoria cadastrada!");
      setDescricao('');
      onSuccess(); 
    } catch (error: any) {
      alert("Erro ao cadastrar: " + (error.response?.data || error.message));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4 mb-8">
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
  );
}
