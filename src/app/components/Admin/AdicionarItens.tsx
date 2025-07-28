import React, { useEffect, useState } from "react";
import { Categoria } from "@/services/CategoriaServices";
import { listarCategorias } from "@/services/CategoriaServices";

interface NovoCarro {
  modelo: string;
  marca: string;
  preco: number;
  quantidade: number;
  foto: string;
  categoria: { id: number };
}

interface CadastroCarroProps {
  onCarroAdicionado: (novoCarro: NovoCarro) => void; 
}

export default function CadastroCarro({ onCarroAdicionado }: CadastroCarroProps) {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState<number | "">("");

  const [modelo, setModelo] = useState("");
  const [marca, setMarca] = useState("");
  const [preco, setPreco] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [foto, setFoto] = useState("");

  useEffect(() => {
    async function carregarCategorias() {
      try {
        const lista = await listarCategorias();
        setCategorias(lista);
        if (lista.length > 0) setCategoriaSelecionada(lista[0].id ?? "");
      } catch (error) {
        console.error("Erro ao carregar categorias", error);
      }
    }
    carregarCategorias();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!categoriaSelecionada) {
      alert("Selecione uma categoria");
      return;
    }

    const novoCarro: NovoCarro = {
      modelo: modelo.trim(),
      marca: marca.trim(),
      preco: Number(preco),
      quantidade: Number(quantidade),
      foto: foto.trim(),
      categoria: { id: Number(categoriaSelecionada) }
    };

    
    onCarroAdicionado(novoCarro);

  
    setModelo("");
    setMarca("");
    setPreco("");
    setQuantidade("");
    setFoto("");
    setCategoriaSelecionada(categorias.length > 0 ? categorias[0].id ?? "" : "");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
      <input
        placeholder="Modelo"
        value={modelo}
        onChange={e => setModelo(e.target.value)}
        className="border p-2 mb-2 w-full"
        required
      />

      <input
        placeholder="Marca"
        value={marca}
        onChange={e => setMarca(e.target.value)}
        className="border p-2 mb-2 w-full"
        required
      />

      <input
        type="number"
        placeholder="Preço"
        value={preco}
        onChange={e => setPreco(e.target.value)}
        className="border p-2 mb-2 w-full"
        min="0"
        step="0.01"
        required
      />

      <input
        type="number"
        placeholder="Quantidade"
        value={quantidade}
        onChange={e => setQuantidade(e.target.value)}
        className="border p-2 mb-2 w-full"
        min="0"
        required
      />

      <input
        placeholder="URL da foto"
        value={foto}
        onChange={e => setFoto(e.target.value)}
        className="border p-2 mb-2 w-full"
        required
      />

      <select
        value={categoriaSelecionada}
        onChange={e => setCategoriaSelecionada(e.target.value === "" ? "" : Number(e.target.value))}
        className="border p-2 mb-4 w-full"
        required
      >
        <option value="" disabled>
          Selecione uma categoria
        </option>
        {categorias.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.descricao}
          </option>
        ))}
      </select>

      <button
        type="submit"
        className="bg-blue-600 text-white p-2 rounded w-full hover:bg-blue-700 transition"
      >
        Cadastrar Carro
      </button>
    </form>
  );
}
