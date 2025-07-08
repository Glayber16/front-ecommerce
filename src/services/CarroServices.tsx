import api from "@/lib/api";

export interface Categoria {
  id?: number;
  descricao: string;
}

export interface Carro {
  id?: number;
  modelo: string;
  marca: string;
  preco: number;
  foto: string;
  quantidade: number;
  categoria: Categoria;
}


export const listarCarros = async (): Promise<Carro[]> => {
  const response = await api.get("/Carro");
  return response.data;
};

export const buscarCarros = async (termo: string): Promise<Carro[]> => {
  const response = await api.get(`/Carro/buscar?termo=${termo}`);
  return response.data;
};


export const cadastrarCarro = async (carro: Carro) => {
  const response = await api.post("/Carro", carro);
  return response.data;
};


export const atualizarCarro = async (carro: Carro) => {
  if (!carro.id) throw new Error("ID do carro é obrigatório para atualização");

  const response = await api.put(`/Carro/${carro.id}`, carro);
  return response.data;
};


export const deletarCarro = async (id: number) => {
  const response = await api.delete(`/Carro/${id}`);
  return response.data;
};
