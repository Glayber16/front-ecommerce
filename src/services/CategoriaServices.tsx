import api from "@/lib/api";

export interface Categoria {
  id?: number;
  descricao: string;
}

export const listarCategorias = async (): Promise<Categoria[]> => {
  const response = await api.get("/Categoria");
  return response.data;
};

export const buscarCategoria = async (descricao: string): Promise<Categoria[]> => {
  const response = await api.get(`/Categoria/buscar?descricao=${descricao}`);
  return response.data;
};

export const cadastrarCategoria = async (categoria: Categoria) => {
  const response = await api.post("/Categoria", categoria);
  return response.data;
};

export const atualizarCategoria = async (categoria: Categoria) => {
  if (!categoria.id) throw new Error("ID da categoria é obrigatório para atualização");

  const response = await api.put(`/Categoria/${categoria.id}`, categoria);
  return response.data;
};

export const deletarCategoria = async (id: number) => {
  const response = await api.delete(`/Categoria/${id}`);
  return response.data;
};
