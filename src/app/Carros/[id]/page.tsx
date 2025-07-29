import Image from 'next/image';
import { formatCurrency } from '@/lib/formatter';
import carData from '@/data/cars.json';
import Navbar from '@/app/components/Navbar';

interface Car {
  id: string;
  name: string;
  type: string;
  image: string;
  price: number;
  oldPrice?: number;
  rating?: number;
  reviews?: number;
  description?: string;
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
   
    
    <div className="min-h-screen bg-white text-black py-12 px-6 md:px-24 mt-30">
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#2D2E5F] text-white py-4 shadow-md">
      {<Navbar/>}
    </nav>

      
      <div className="flex flex-col md:flex-row gap-10 max-w-6xl mx-auto">
        
        
          

        
        <div className="md:w-1/2 flex justify-center items-center">
          <Image
            src={car.image}
            alt={car.name}
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Informações */}
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-4xl font-bold">{car.name}</h1>

          <div className="flex items-center gap-2">
            <div className="text-yellow-500 text-xl">★★★★★</div>
            <p className="text-sm text-gray-600">{car.reviews || 1683} avaliações!</p>
          </div>

          <p className="text-sm text-red-600 font-semibold">
            {Math.floor(Math.random() * 3000 + 1000)} pessoas estão vendo esse produto agora
          </p>

          <div className="text-2xl font-semibold text-gray-700 line-through">
            {car.oldPrice ? formatCurrency(car.oldPrice) : formatCurrency(car.price * 1.5)}
          </div>

          <div className="text-4xl font-bold text-green-700">
            {formatCurrency(car.price)}{' '}
            <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-lg ml-2">
              -{Math.round(100 - (car.price / (car.oldPrice || car.price * 1.5)) * 100)}%
            </span>
          </div>

          <p className="text-lg text-gray-600">
            Tipo: <span className="font-semibold">{car.type}</span>
          </p>

          <button className="bg-black text-white py-3 px-6 rounded-lg font-bold hover:bg-gray-800 transition-all">
            Adicionar ao Carrinho
          </button>

          <details className="mt-6">
            <summary className="cursor-pointer text-blue-600 underline text-lg font-medium">
              Benefícios e Modo de Uso
            </summary>
              <p className="mt-2 text-gray-700">
                {car.description}
              </p>
          </details>
        </div>
      </div>
    </div>
  );
}
