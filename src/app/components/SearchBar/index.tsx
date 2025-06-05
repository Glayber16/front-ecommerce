import React from 'react'

export default function SearchBar() {
  return (
     <div className="w-full max-w-xl mx-auto px-4">
      <div className="flex items-center border border-gray-300 rounded-full shadow-sm px-4 py-2 bg-white">
        <input
          type="text"
          placeholder="Buscar carro por modelo, marca ou ano..."
          className="flex-grow focus:outline-none text-sm text-gray-700 placeholder-gray-400 bg-transparent"
        />
        <button
          className="ml-2 text-white bg-base-400 hover:bg-brand-300 px-4 py-1.5 rounded-full text-sm font-medium transition"
        >
          Buscar
        </button>
      </div>
    </div>
  )
}
