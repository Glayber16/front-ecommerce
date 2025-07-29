'use client';

import React, { useEffect, useState } from 'react';
import NavbarLogin from '../components/NavbarLogin';
import FeaturedCars from '../components/FeaturedCars';
import SearchBar from '../components/SearchBar';

export default function Page() {
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
    <div className="min-h-screen bg-[#fffdff] font-poppins">
      <NavbarLogin />

      <div className="flex flex-col items-start sm:items-center py-20 px-4 sm:px-8 max-w-6xl mx-auto gap-10">
        <SearchBar />

        <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">
          👋 Olá, <span className="font-bold">{nome}</span>, confira os destaques de hoje!
        </h1>

        <FeaturedCars />
      </div>
    </div>
  );
}
