'use client';

import React from 'react';
import { Categoria, deletarCategoria } from "@/services/CategoriaServices";

interface Props {
  categorias: Categoria[];
  onDelete: () => void;
}

export default function CategoriaList({ categorias, onDelete }: Props) {
  const handleDeletar = async (id: number) => {
    if (confirm("Tem certeza que deseja excluir esta categoria?")) {
      try {
        await deletarCategoria(id);
        alert("Categoria excluída.");
        onDelete(); 
      } catch (error: any) {
        alert("Erro ao excluir: " + (error.response?.data || error.message));
      }
    }
  };

  return (
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
  );
}
