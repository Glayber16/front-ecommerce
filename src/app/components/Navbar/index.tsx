import {Truck, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div>
        <nav className="bg-base-400 border-b fixed w-full z-10 text-md">
        <div className="flex flex-row justify-around items-center py-5 text-base-50 gap-2 ">
          <Link className='hover:text-brand-300 duration-300' href="/"> Inicio </Link>
          <Link className='hover:text-brand-300 duration-300' href="/Login"> Carros </Link>
          <Link className='hover:text-brand-300 duration-300' href="/Login"> <User></User> </Link>
          <Link className='hover:text-brand-300 duration-300' href="/Login"> <Truck></Truck></Link>
          
        </div>
      </nav>
    </div>
  )
}

export default Navbar