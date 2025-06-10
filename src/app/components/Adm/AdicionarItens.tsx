'use client'

import { useEffect, useState } from 'react'
import { adicionarItem, listarItens } from '@/lib/fakeAPI'

export default function AdicionarItens() {
  const [novoItem, setNovoItem] = useState('')
  const [itens, setItens] = useState<string[]>([])
  const [imagem, setImagem] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [dragAtivo, setDragAtivo] = useState(false)

  useEffect(() => {
    setItens(listarItens())
  }, [])

  const adicionar = () => {
    if (!novoItem.trim()) return
    console.log('Imagem selecionada:', imagem)
    adicionarItem(novoItem.trim())
    setItens(listarItens())
    setNovoItem('')
    setImagem(null)
    setPreview(null)
  }

  const handleImagemChange = (file: File | null) => {
    if (file) {
      setImagem(file)
      setPreview(URL.createObjectURL(file))
    }
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDragAtivo(false)

    const file = e.dataTransfer.files[0]
    if (file && file.type.startsWith('image/')) {
      handleImagemChange(file)
    }
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDragAtivo(true)
  }

  const handleDragLeave = () => {
    setDragAtivo(false)
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && file.type.startsWith('image/')) {
      handleImagemChange(file)
    }
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Adicionar Itens</h2>

      {/* Área de Drag and Drop */}
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={() => document.getElementById('upload')?.click()}
        className={`border-2 border-dashed p-6 text-center rounded cursor-pointer mb-4 transition ${
          dragAtivo ? 'border-blue-600 bg-blue-50' : 'border-gray-400'
        }`}
      >
        {preview ? (
          <img
            src={preview}
            alt="Preview"
            className="mx-auto w-32 h-32 object-cover rounded"
          />
        ) : (
          <p className="text-gray-600">Arraste uma imagem aqui ou clique para selecionar</p>
        )}
        <input
          type="file"
          id="upload"
          accept="image/*"
          className="hidden"
          onChange={handleFileSelect}
        />
      </div>

      <input
        type="text"
        placeholder="Nome do novo item"
        value={novoItem}
        onChange={(e) => setNovoItem(e.target.value)}
        className="border p-2 rounded w-full mb-3"
      />
      <button
        onClick={adicionar}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Adicionar
      </button>

      {itens.length > 0 && (
        <div className="mt-4">
          <h3 className="font-semibold">Itens adicionados:</h3>
          <ul className="list-disc pl-6">
            {itens.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
