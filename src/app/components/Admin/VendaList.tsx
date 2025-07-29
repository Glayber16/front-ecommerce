'use client'

import { useEffect, useState } from 'react'
import { listarVendas, Venda} from '@/services/VendaServices' 

interface Props {
    vendas: Venda[];
  onAtualizarLista: () => void
}

interface Props {
  vendas: Venda[];
  onAtualizarLista: () => void;
}

export default function VendaList({ vendas, onAtualizarLista }: Props) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Lista de Vendas</h2>
      {vendas.length === 0 ? (
        <p>Nenhuma venda registrada.</p>
      ) : (
        <ul className="list-disc pl-6">
          {vendas.map((venda) => (
            <li key={venda.id} className="mb-4 border p-3 rounded">
              <div>
                <strong>Venda #{venda.id}</strong> - Data: {venda.data?.substring(0, 10)} - Usuário: {venda.usuario?.nome || venda.usuarioId}
              </div>
              <div className="mt-2">
                <strong>Itens:</strong>
                <ul className="pl-4 list-decimal">
                  {venda.itens.map((item, index) => (
                    <li key={index}>
                      Carro ID: {item.carroId} - Quantidade: {item.quantidade} - Preço: R$ {item.preco.toFixed(2)}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}