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

export interface CarroFormData {
  modelo: string;
  marca: string;
  preco: number;
  quantidade: number;
  categoriaId: number;
  fotoArquivo: File;
}

export const listarCarros = async (): Promise<Carro[]> => {
  const response = await api.get("/Carro");
  return response.data;
};

export const buscarCarros = async (termo: string): Promise<Carro[]> => {
  const response = await api.get(`/Carro/buscar?termo=${termo}`);
  return response.data;
};

export const cadastrarCarro = async (carro: CarroFormData) => {
  const formData = new FormData();

  formData.append("modelo", carro.modelo);
  formData.append("marca", carro.marca);
  formData.append("preco", carro.preco.toString());
  formData.append("quantidade", carro.quantidade.toString());
  formData.append("categoriaId", carro.categoriaId.toString());
  formData.append("fotoArquivo", carro.fotoArquivo);

  const response = await api.post("/Carro", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

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
