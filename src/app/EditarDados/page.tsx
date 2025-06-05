import React from 'react'
import Button from '../components/Button'
export default function page() {
  return (
    <div className="min-h-screen bg-[#fffdff]font-poppins px-4 py-10">
        <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold mb-6 text-center">Editar Perfil</h2>
        
            <form  className="flex flex-col gap-4">
                <div>
                    <label className="block mb-1 text-sm">Nome</label>
                    <input
                    type="text"
                    name="nome"
                    
                    
                    className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block mb-1 text-sm">E-mail</label>
                    <input
                    type="email"
                    name="email"
                
                    
                    className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block mb-1 text-sm">Telefone</label>
                    <input
                    type="text"
                    name="telefone"
                           
                    className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <Button type="submit"  className="mt-4 bg-base-400 hover:bg-brand-300 text-white font-medium py-2 px-4 rounded-lg transition"  >
                    Salvar Alterações
                </Button>
            </form>
        </div>
    </div>

  )
}
