import api from "@/lib/api";

export interface VendaCarro {
  id?: number;
  vendaId: number;
  carroId: number;
  quantidade: number;
  preco: number;
}
export interface Venda {
  id?: number;
  date: Date;
  usuarioId: number;
  itens: VendaCarro[];
}

export const listarVendas = async (): Promise<Venda[]> => {
  const response = await api.get("/Venda");
  return response.data;
};

export const cadastrarVenda = async (venda: Venda) => {
  const response = await api.post("/Venda", venda);
  return response.data;
};

export const buscarVendas = async (id: number) => {
  const response = await api.get('/Venda/${id}');
  return response.data;
};

