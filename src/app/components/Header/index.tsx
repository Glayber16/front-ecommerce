import React, { Children } from "react";
import Button from "../Button";

export default function Header() {
  return (
    <header className="min-h-screen  w-full sm:flex sm:flex-row flex justify-center items-center flex-col ">
      <div className="flex flex-col  items-center text-center  sm:h-full sm:w-1/2 gap-8 fade-in-up">
        <h1 className="text-4xl sm:text-8xl ">
          Qualquer carro a um toque de distância
          <span className="text-7xl sm:text-9xl text-brand-600 ml-2 ">.</span>
        </h1>

        <span className="text-2xl">
          Adquira carros de todas as marcas da nossa loja
        </span>
        <Button className="sm:text-xl rounded-3xl font-medium bg-brand-500 text-base-50 px-8 py-4  hover:bg-brand-600 ">
          SAIBA MAIS
        </Button>
        <button></button>
      </div>
      <img
        src="/bannerImg.jpg"
        alt="Velocímetro"
        className=" hidden sm:block sm:w-1/2 sm:min-h-screen object-cover object-[100%_center]"
      />
    </header>
  );
}
