import { formatCurrency } from "@/lib/formatter";
import Button from "../Button";
type CardFeaturedCarsProps = {
  name: string;
  type: string;
  image: string;
  price: number;
  onClick?: () => void;
  className?: string;
};

export default function CardFeaturedCars({
  name,
  type,
  image,
  price,
  onClick,
  className = "",
}: CardFeaturedCarsProps) {
  return (
    <div
      className={`bg-brand-400 rounded-2xl w-10/12 sm:w-[500px] h-[350px] p-5 flex flex-col justify-between ${className}`}
    >
      <img
        src={image}
        alt={name}
        className=" duration-300  sm:h-[200px] w-auto object-contain mx-auto"
      />
      <div className="flex justify-around items-center w-full">
        <div>
          <h3 className="text-base-50 text-xl font-bold">{name}</h3>
          <p className="text-base-50">{type}</p>
          <p className="text-base-50 font-semibold">{formatCurrency(price)}</p>
        </div>
        <Button className="text-base-300 px-4 py-2 rounded-lg  hover:bg-base-300 hover:text-base-50 bg-base-50">
          Ver Detalhes
        </Button>
      </div>
    </div>
  );
}
