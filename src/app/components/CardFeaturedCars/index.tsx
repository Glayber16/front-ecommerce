import Link from 'next/link'; // Importe o componente Link
import { formatCurrency } from "@/lib/formatter";
import Button from "../Button";

type CardFeaturedCarsProps = {
  id: string;
  name: string;
  type: string;
  image: string;
  price: number;
  className?: string;
};

export default function CardFeaturedCars({
  id, 
  name,
  type,
  image,
  price,
  className = "",
}: CardFeaturedCarsProps) {
  return (
    <div
      className={`bg-brand-400 rounded-2xl w-10/12 sm:w-[500px] h-[350px] p-5 flex flex-col justify-between ${className}`}
    >
      <img
        src={image}
        alt={name}
        className=" duration-300 max-h-[200px] w-auto object-contain mx-auto"
      />
      <div className="flex justify-around items-center w-full">
        <div>
          <h3 className="text-base-50 text-xl font-bold">{name}</h3>
          <p className="text-base-50">{type}</p>
          <p className="text-base-50 font-semibold">{formatCurrency(price)}</p>
        </div>
        {}
      <Link href={`/Carros/${id}`} passHref>
          <Button className="text-base-300 px-4 py-2 rounded-lg hover:bg-base-300 hover:text-base-50 bg-base-50">
            Ver Detalhes
          </Button>
        </Link>
      </div>
    </div>
  );
}