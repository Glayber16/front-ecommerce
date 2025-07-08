'use client'

import { useEffect, useState } from 'react'
import { listarCarros, deletarCarro, Carro } from '@/services/CarroServices'

interface Props {
  onAtualizarLista: () => void
}

export default function ListaCarros({ onAtualizarLista }: Props) {
  const [carros, setCarros] = useState<Carro[]>([])

  const carregarCarros = async () => {
    try {
      const lista = await listarCarros()
      setCarros(lista)
    } catch {
      alert('Erro ao carregar carros.')
    }
  }

  useEffect(() => {
    carregarCarros()
  }, [])

  const deletar = async (id?: number) => {
    if (!id) return
    if (!confirm('Deseja realmente deletar este carro?')) return

    try {
      await deletarCarro(id)
      alert('Carro deletado com sucesso!')
      carregarCarros()
      onAtualizarLista()
    } catch {
      alert('Erro ao deletar carro.')
    }
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Lista de Carros</h2>
      {carros.length === 0 ? (
        <p>Nenhum carro cadastrado.</p>
      ) : (
        <ul className="list-disc pl-6">
          {carros.map((carro) => (
            <li key={carro.id} className="mb-3">
              <div>
                <strong>{carro.modelo}</strong> - {carro.marca} - R$ {carro.preco.toFixed(2)} - Quantidade: {carro.quantidade}
              </div>
              <img src={carro.foto} alt={carro.modelo} className="w-32 h-20 object-cover rounded mt-1 mb-1" />
              <button
                onClick={() => deletar(carro.id)}
                className="bg-red-600 text-white px-3 py-1 rounded"
              >
                Deletar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
