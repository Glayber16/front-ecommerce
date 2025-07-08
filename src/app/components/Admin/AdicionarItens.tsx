'use client'

import { useState } from 'react'
import { cadastrarCarro, Carro } from '@/services/CarroServices'


interface Props {
  onCarroAdicionado: () => void
}

export default function AdicionarCarro({ onCarroAdicionado }: Props) {
  const [modelo, setModelo] = useState('')
  const [marca, setMarca] = useState('')
  const [preco, setPreco] = useState('')
  const [quantidade, setQuantidade] = useState('')
  const [foto, setFoto] = useState('')

  const limparFormulario = () => {
    setModelo('')
    setMarca('')
    setPreco('')
    setQuantidade('')
    setFoto('')
  }

  const adicionar = async () => {
    if (!modelo || !marca || !preco || !quantidade || !foto) {
      alert('Preencha todos os campos.')
      return
    }

    const novoCarro: Carro = {
      modelo,
      marca,
      preco: Number(preco),
      quantidade: Number(quantidade),
      foto,
      categoria: { id: 1, descricao: "Categoria padrão" }
    }

    try {
      await cadastrarCarro(novoCarro)
      alert('Carro adicionado com sucesso!')
      limparFormulario()
      onCarroAdicionado()
    } catch {
      alert('Erro ao adicionar carro.')
    }
  }

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-4">Adicionar Carro</h2>

      <input
        type="text"
        placeholder="Modelo"
        value={modelo}
        onChange={(e) => setModelo(e.target.value)}
        className="border p-2 rounded w-full mb-3"
      />
      <input
        type="text"
        placeholder="Marca"
        value={marca}
        onChange={(e) => setMarca(e.target.value)}
        className="border p-2 rounded w-full mb-3"
      />
      <input
        type="number"
        placeholder="Preço"
        value={preco}
        onChange={(e) => setPreco(e.target.value)}
        className="border p-2 rounded w-full mb-3"
        min="0"
        step="0.01"
      />
      <input
        type="number"
        placeholder="Quantidade"
        value={quantidade}
        onChange={(e) => setQuantidade(e.target.value)}
        className="border p-2 rounded w-full mb-3"
        min="0"
      />
      <input
        type="text"
        placeholder="URL da foto"
        value={foto}
        onChange={(e) => setFoto(e.target.value)}
        className="border p-2 rounded w-full mb-3"
      />

      <button
        onClick={adicionar}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Adicionar Carro
      </button>
    </div>
  )
}
