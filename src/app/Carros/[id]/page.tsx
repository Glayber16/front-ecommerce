import Image from 'next/image';
import { formatCurrency } from '@/lib/formatter';

import carData from '@/data/cars.json';

interface Car {
  id: string;
  name: string;
  type: string;
  image: string;
  price: number;
}

interface CarDetailsPageProps {
  params: {
    id: string;
  };
}

export default function CarDetailsPage({ params }: CarDetailsPageProps) {
  const carId = params.id;

  const findCarById = (id: string): Car | undefined => {
    const allCars: Car[] = [
      ...(carData.featured as Car[]),
      ...(carData.popular as Car[]),
      ...(carData.new as Car[]),
    ];
    return allCars.find(car => car.id === id);
  };

  const car = findCarById(carId);

  if (!car) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <h1 className="text-3xl font-bold">Carro não encontrado!</h1>
        <p className="text-lg mt-2">Verifique o ID do veículo.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-8">
      <div className="bg-brand-400 rounded-3xl shadow-xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row p-8 gap-8">
        <div className="md:w-1/2 flex items-center justify-center p-4">
          <Image
            src={car.image}
            alt={car.name}
            width={500}
            height={300}
            layout="responsive"
            objectFit="contain"
            className="rounded-lg"
          />
        </div>

        <div className="md:w-1/2 flex flex-col justify-center p-4 text-center md:text-left">
          <h1 className="text-5xl font-extrabold text-base-50 mb-4">{car.name}</h1>
          <p className="text-2xl text-gray-300 mb-2">Tipo: <span className="font-semibold">{car.type}</span></p>
          <p className="text-4xl font-bold text-brand-100 mb-6">
            Preço: {formatCurrency(car.price)}
          </p>
          <div className="mt-8">
            <button className="bg-base-50 text-base-300 px-8 py-4 rounded-full text-xl font-bold hover:bg-base-300 hover:text-base-50 transition duration-300 shadow-lg">
              Comprar Agora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}