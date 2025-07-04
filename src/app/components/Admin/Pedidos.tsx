'use client'

import { useEffect, useState } from 'react'
import { listarPedidos, marcarPedidoEntregue, Pedido } from '@/lib/fakeAPI'

export default function PedidosPage() {
  const [pedidos, setPedidos] = useState<Pedido[]>([])

  useEffect(() => {
    setPedidos(listarPedidos())
  }, [])

  const handleStatusChange = (id: number, novoStatus: 'pendente' | 'entregue') => {
    if (novoStatus === 'entregue') {
      marcarPedidoEntregue(id)
      setPedidos(listarPedidos())
    }
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Página de Pedidos</h1>
      <div className="space-y-4">
        {pedidos.map((pedido) => (
          <div key={pedido.id} className="border border-orange-200 p-4 rounded-lg flex justify-between items-center">
            <div>
              <p className="font-semibold">Pedido #{pedido.id}</p>
              <p>Cliente: {pedido.cliente}</p>
              <p>Status: {pedido.status}</p>
            </div>
            <select
              value={pedido.status}
              onChange={(e) => handleStatusChange(pedido.id, e.target.value as 'pendente' | 'entregue')}
              className="border rounded px-2 py-1"
            >
              <option value="pendente">Pendente</option>
              <option value="entregue">Entregue</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  )
}