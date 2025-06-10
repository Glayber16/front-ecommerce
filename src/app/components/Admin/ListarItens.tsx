'use client';

import { useEffect, useState } from 'react';
import { listarItens } from '@/lib/fakeAPI';

export default function ListarItens() {
  const [itens, setItens] = useState<string[]>([]);

  useEffect(() => {
    const resultado = listarItens();
    setItens(resultado);
  }, []);

  const handleDelete = (nome: string) => {
    setItens(prev => prev.filter(item => item !== nome));
  };

  return (
    <div className="overflow-x-auto rounded-lg shadow-lg bg-white">
      <h1 className="text-2xl font-bold mb-4">Lista de Itens</h1>
      <table className="min-w-full table-auto text-sm text-left text-gray-600">
        <thead className="bg-orange-500 text-white uppercase">
          <tr>
            <th className="px-6 py-3">Nome</th>
            <th className="px-6 py-3 text-center">Ação</th>
            <th className="px-6 py-3">Nome</th>
            <th className="px-6 py-3 text-center">Ação</th>
            <th className="px-6 py-3">Nome</th>
          </tr>
        </thead>
        <tbody>
          {itens.map((item, index) => (
            <tr
              key={index}
              className="border-b hover:bg-orange-50 transition-colors"
            >
              <td className="px-6 py-4 font-medium text-gray-800">{item}</td>
              <td className="px-6 py-4 text-center">
                <button
                  onClick={() => handleDelete(item)}
                  className="bg-red-100 text-red-700 hover:bg-red-200 px-3 py-1 rounded font-bold"
                >
                  X
                </button>
              </td>
            </tr>
          ))}
          {itens.length === 0 && (
            <tr>
              <td
                colSpan={2}
                className="px-6 py-4 text-center text-gray-400 italic"
              >
                Nenhum item encontrado
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

