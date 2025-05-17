import {Truck, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div>
        <nav className="bg-[#fffbff] border-b ">
        <div className="flex flex-row justify-around items-center py-5 text-black gap-2">
          <Link href=""> Inicio </Link>
          <Link href=""> Carros </Link>
          <Link href=""> <User></User> </Link>
          <Link href=""> <Truck></Truck></Link>
          
        </div>
      </nav>
    </div>
  )
}

export default Navbar