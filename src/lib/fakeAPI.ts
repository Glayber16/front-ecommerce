// lib/fakeApi.ts

let itens: string[] = ['Item A', 'Item B', 'Item C']
let pedidos: Pedido[] = [
  { id: 1, cliente: 'João', status: 'pendente' },
  { id: 2, cliente: 'Maria', status: 'pendente' },
]

export function adicionarItem(nome: string) {
  itens.push(nome)
}

export function listarItens() {
  return itens
}

export function listarPedidos(): Pedido[]{
    return pedidos
}

export function marcarPedidoEntregue(id: number) {
  pedidos = pedidos.map((p) =>
    p.id === id ? { ...p, status: 'entregue' } : p
  )
}

export type Pedido = {
  id: number
  cliente: string
  status: 'pendente' | 'entregue'
}
