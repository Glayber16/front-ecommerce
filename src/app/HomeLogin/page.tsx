'use client';

import React from 'react';
import NavbarLogin from '../components/NavbarLogin';
import FeaturedCars from '../components/FeaturedCars';
import SearchBar from '../components/SearchBar';

export default function Page() {
  return (
    <div className="min-h-screen bg-[#fffdff] font-poppins">
      <NavbarLogin />

      <div className="flex flex-col items-start sm:items-center py-20 px-4 sm:px-8 max-w-6xl mx-auto gap-10">
        <SearchBar />

        <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">
          👋 Olá, <span className="font-bold">nome</span>, confira os destaques de hoje!
        </h1>

        <FeaturedCars />
      </div>
    </div>
  );
}
