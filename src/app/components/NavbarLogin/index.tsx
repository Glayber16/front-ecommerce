import { Truck, User } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useCartStore } from "@/stores/useCartStore";

function NavbarLogin() {
  const [nome, setNome] = useState<string>("Usuário");
  const { items } = useCartStore();

  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const nomeStorage = sessionStorage.getItem("usuario");
    if (nomeStorage) {
      try {
        const usuario = JSON.parse(nomeStorage);
        setNome(usuario.nome);
      } catch (e) {
        console.error("Erro ao ler dados do usuário:", e);
      }
    }
  }, []);

  return (
    <div>
      <nav className="bg-base-400 border-b fixed w-full z-10 text-md">
        <div className="flex flex-row justify-around items-center py-5 text-base-50 gap-2">
          <Link className="hover:text-brand-300 duration-300" href="/Admin">
            Início
          </Link>
          <Link className="hover:text-brand-300 duration-300" href="/">
            Carros
          </Link>
          <h1 className="hover:text-brand-300 duration-300">{nome}</h1>
          <Link
            className="hover:text-brand-300 duration-300"
            href="/EditarDados"
          >
            <User />
          </Link>
          <Link className="hover:text-brand-300 duration-300 relative" href="/Carrinho">
            <Truck />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default NavbarLogin;
