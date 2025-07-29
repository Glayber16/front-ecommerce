import api from "@/lib/api";

export interface Usuario {
  id: number;
  nome: string;
  email?: string;
  login?: string;
  senha?: string;
  endereco?: string;
  adm?: boolean;
}

export interface VendaCarro {
  id?: number;
  vendaId?: number;
  carroId: number;
  quantidade: number;
  preco: number;
}

export interface Venda {
  id?: number;
  data?: string; 
  usuarioId: number;
  usuario?: Usuario;
  itens: VendaCarro[];
}


export const criarVenda = async (venda: Venda) => {
  const response = await api.post("/venda", venda);
  return response.data;
};


export const listarVendas = async (): Promise<Venda[]> => {
  const response = await api.get("/venda");
  return response.data;
};


export const listarVendasPorUsuario = async (usuarioId: number): Promise<Venda[]> => {
  const response = await api.get(`/Venda/usuario/${usuarioId}`);
  return response.data;
};

