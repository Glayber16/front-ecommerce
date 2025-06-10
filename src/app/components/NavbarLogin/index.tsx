import {Truck, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function NavbarLogin() {
  return (
    <div>
        <nav className="bg-base-400 border-b fixed w-full z-10 text-md ">
        <div className="flex flex-row justify-around items-center py-5 text-base-50 gap-2 ">
            <Link className='hover:text-brand-300 duration-300' href="/HomeLogin"> Inicio </Link>
            <Link className='hover:text-brand-300 duration-300' href="/"> Carros </Link>           
            <h1 className='hover:text-brand-300 duration-300'>  Nome Pessoa</h1>
<<<<<<< HEAD
            <Link className='hover:text-brand-300 duration-300' href="/Edit"> <User></User> </Link>
=======
            <Link className='hover:text-brand-300 duration-300' href="/EditarDados"> <User></User> </Link>
>>>>>>> 520bf66d637a99407df8cb2dddfad41ff6a085d4
            <Link className='hover:text-brand-300 duration-300' href="/Login"> <Truck></Truck></Link>          
        </div>
      </nav>
    </div>
  )
}

export default NavbarLogin