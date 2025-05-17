import React from 'react'
import Navbar from '../Navbar/page'
import Link from 'next/link'

function page() {
  return (
    <div className='flex flex-col min-h-screen bg-white'>
        <Navbar/>
        <div className='flex flex-1 flex-col items-center justify-center center w-full'>
            <form  className='bg-[#e9e4e9] text-[#000000] flex flex-col rounded-xl p-5 gap-5 border-2 text-center border-black'>
                <h2 className=''>Cadastro</h2>
                <input type='text' placeholder='Seu Nome' required className='border border-black rounded-xl p-2'/>
                <input type='date' placeholder='Data de Nascimento'required className='border border-black rounded-xl p-2'/>
                <input type='text' placeholder='Telefone' required className='border border-black rounded-xl p-2'/>
                <input type="email" placeholder='Email' required className='border border-black rounded-xl p-2'/>
                <input type="password" placeholder='Senha'required className='border border-black rounded-xl p-2'/>
                <button className='rounded-xl border border-black p-2 bg-[#fa1e0b] text-black hover:bg-[#e9e4e9]' type='submit'>Criar sua Conta!!</button>
            </form>
            <div className='text-black p-5'>
                <h1>Ja possui uma conta ?? <Link href="">Entre agora</Link> </h1>
            </div>
        </div>
    </div>
  )
}

export default page