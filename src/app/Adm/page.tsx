'use client'

import { useState } from 'react'
import AdicionarItens from '../components/Adm/AdicionarItens'
import ListarItens from '../components/Adm/ListarItens'
import Pedidos from '../components/Adm/Pedidos'
import Navbar from '../components/Navbar'

import { Plus, ListChecks, PackageCheck } from 'lucide-react'


export default function AdminPage() {
  const [abaAtiva, setAbaAtiva] = useState<'adicionar' | 'listar' | 'pedidos'>('adicionar')

  return (
    <div className="flex h-screen">
      {/* pt-16 = 64px para compensar a navbar fixa */}
      <Navbar/>
       <div className="pt-16 flex h-screen">
      {/* Menu lateral */}
      <div className="w-64 border-r p-4 space-y-4">
        <h1 className="text-2xl font-bold text-red-600">Nome.</h1>
        <p className="text-sm text-gray-500 mb-6">Admin Panel</p>

        <button
          onClick={() => setAbaAtiva('adicionar')}
          className={`flex items-center gap-2 p-2 w-full text-left rounded ${
            abaAtiva === 'adicionar' ? 'bg-orange-100 text-red-600' : ''
          }`}
        >
          <Plus size={18} />
          Add Items
        </button>

        <button
          onClick={() => setAbaAtiva('listar')}
          className={`flex items-center gap-2 p-2 w-full text-left rounded ${
            abaAtiva === 'listar' ? 'bg-orange-100 text-red-600' : ''
          }`}
        >
          <ListChecks size={18} />
          List Items
        </button>

        <button
          onClick={() => setAbaAtiva('pedidos')}
          className={`flex items-center gap-2 p-2 w-full text-left rounded ${
            abaAtiva === 'pedidos' ? 'bg-orange-100 text-red-600' : ''
          }`}
        >
          <PackageCheck size={18} />
          Orders
        </button>
      </div>

      {/* Conteúdo principal */}
      <div className="flex-1 p-8">
        {abaAtiva === 'adicionar' && <AdicionarItens />}
        {abaAtiva === 'listar' && <ListarItens />}
        {abaAtiva === 'pedidos' && <Pedidos />}
      </div>
    </div>
    </div>
  )
}