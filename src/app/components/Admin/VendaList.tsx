'use client'

import { useEffect, useState } from 'react'
import { listarVendas, Venda} from '@/services/VendaServices' // ajusta o caminho conforme seu projeto

interface Props {
    vendas: Venda[];
  onAtualizarLista: () => void
}

export default function VendaList({ onAtualizarLista }: Props) {
  const [vendas, setVendas] = useState<Venda[]>([])

  const carregarVendas = async () => {
    try {
      const lista = await listarVendas()
      setVendas(lista)
    } catch {
      alert('Erro ao carregar vendas.')
    }
  }

  useEffect(() => {
    carregarVendas()
  }, [])

  

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
