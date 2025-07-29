import { Truck, User } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function NavbarLogin() {
  const [nome, setNome] = useState<string>("Usuário");

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
          <Link className="hover:text-brand-300 duration-300" href="/EditarDados">
            <User />
          </Link>
          <Link className="hover:text-brand-300 duration-300" href="/Login">
            <Truck />
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default NavbarLogin;
