
import api from "@/lib/api";

export interface Usuario {
  id?: number;
  nome: string;
  endereco: string;
  email: string;
  login: string;
  senha: string;
  adm: boolean;
}

export interface LoginUsuario {
  login: string;
  senha: string;
}

export const cadastrarUsuario = async (usuario: Usuario) => {
  const response = await api.post("/Usuario/cadastrar", usuario);
  return response.data;
};

export const loginUsuario = async (usuario: LoginUsuario) => {
  const response = await api.post("/Usuario/login", usuario);
  return response.data
}
