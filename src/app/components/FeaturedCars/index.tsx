"use client";
import { useState } from "react";
import cars from "@/data/cars.json";
import CardFeaturedCars from "../CardFeaturedCars";

function FeaturedCars() {
  const [carsType, setCarsType] = useState<"featured" | "popular" | "new">(
    "featured"
  );

  return (
    <section className="flex flex-col w-full text-center gap-6">
      <div>
        <h2 className="text-3xl text-base-600 font-bold">Carros em Destaque</h2>
        <span className="text-base-300">
          Esses são os veículos mais desejados do mercado
        </span>
      </div>

      <div className="flex justify-center gap-4 text-xl mb-4">
        <div
          onClick={() => setCarsType("featured")}
          className={`cursor-pointer px-4 py-2 rounded-md transition-colors ${
            carsType === "featured"
              ? "bg-brand-500 text-base-50"
              : "bg-base-50 text-base-600"
          }`}
        >
          Novos
        </div>
        <div
          onClick={() => setCarsType("popular")}
          className={`cursor-pointer px-4 py-2 rounded-md transition-colors ${
            carsType === "popular"
              ? "bg-brand-500 text-base-50"
              : "bg-base-50 text-base-600"
          }`}
        >
          Mais Populares
        </div>
        <div
          onClick={() => setCarsType("new")}
          className={`cursor-pointer px-4 py-2 rounded-md transition-colors ${
            carsType === "new"
              ? "bg-brand-500 text-base-50"
              : "bg-base-50 text-base-600"
          }`}
        >
          Ofertas Especiais
        </div>
      </div>

      <div className="flex flex-wrap gap-6 w-full justify-center">
        {cars[carsType].map((car) => (
          <CardFeaturedCars
            key={car.name}
            name={car.name}
            type={car.type}
            image={car.image}
            price={car.price}
          />
        ))}
      </div>
    </section>
  );
}

export default FeaturedCars;
