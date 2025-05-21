import Image from "next/image";
import { User, Truck} from "lucide-react"
import Link from "next/link"
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className=" min-h-screen font-poppins font-normal bg-base-400 ">
      <Navbar/>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className=" bg-cover bg-center justify-center items-center flex flex-col rounded border w-full ">
          <img src="/bannerBG.png" alt="" />
          <h1>Encontre o seu tão sonhado automovel</h1>
          <img src="corollaImage.png" alt="" />
        </div>

        <div className="bg-[#e9e4e9] flex flex-col items-center justify-center text-black w-full rounded p-5">
          <h1>Aqui temos as principais marcas do mercado:</h1>
          <div className="flex justify-around w-full">
            <img src="/volksIcon.png" alt="Volks logo" className="h-12 w-12"/>
            <img src="/fiatIcon.png" alt="Fiat logo" className="h-12 w-12"/>
            <img src="/nissanIcon.png" alt="Nissan logo" className="h-12 w-12"/>
            <img src="/chevroletIcon.png" alt="Chevrolet logo" className="h-12 w-12"/>
            <img src="/hyundaiIcon.png" alt="Hyundai logo" className="h-12 w-12"/>
            <img src="/toyotaIcon.png" alt="Toyota logo" className="h-12 w-12"/>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
       
      </footer>
    </div>
  );
}
