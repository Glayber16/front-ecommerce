'use client';
import { useEffect, useState } from 'react';
import cars from '@/data/cars.json';
import CardFeaturedCars from '../CardFeaturedCars';

function FeaturedCars() {
  const [carsType, setCarsType] = useState<'featured' | 'popular' | 'new'>('featured');

  return (
    <section className="flex flex-col w-full text-center gap-6 mb-6" data-aos="fade-up">
      <div>
        <h2 className="text-3xl text-base-600 font-bold">Carros em Destaque</h2>
        <span className="text-base-300">
          Esses são os veículos mais desejados do mercado
        </span>
      </div>

      <div className="flex flex-wrap gap-6 w-full justify-center">
        {cars[carsType].map((car) => (
          <CardFeaturedCars

            key={car.id}   
            id={car.id}     

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