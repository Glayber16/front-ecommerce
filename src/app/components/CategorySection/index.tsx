import Button from "../Button";

function CategorySection() {
  return (
    <section className="flex flex-col w-full text-center">
      <div>
        <h2 className="text-3xl text-base-600 font-bold">
          Encontre por Categoria
        </h2>
        <span className="text-base-300">
          Conheça o nosso catálogo por tipo de veículo e escolha aqueles que
          melhor encaixa pra você
        </span>
      </div>
      <div className="flex sm:flex-row sm:flex-wrap flex-col w-full justify-center items-center gap-6 my-6 ">
        <div className="bg-brand-400 rounded-2xl flex flex-col justify-around w-10/12 sm:flex sm:flex-col sm:justify-around sm:w-[500px] h-[350px] p-5">
          <img src="/carImages/yarisHatch.png" alt="Yaris Hatch" className="hover:scale-x-[-1] trasition-all duration-300  sm:h-[200px] w-auto object-contain mx-auto " />
          <div className="flex justify-around content-center items-center  w-full">
            <span className="text-base-50 text-xl">HATCH</span>
            <Button className="text-base-300 px-4 py-2 rounded-lg  hover:bg-base-300 hover:text-base-50 bg-base-50">
              Veja Ofertas
            </Button>
          </div>
        </div>
        <div className="bg-brand-400 rounded-2xl w-10/12 flex flex-col justify-around sm:flex sm:flex-col sm:justify-around sm:w-[500px] h-[350px] p-5">
          <img src="/carImages/civic.png" alt="Civic" className=" hover:scale-x-[-1] trasition-all duration-300  sm:h-[200px] w-auto object-contain mx-auto " />
          <div className="flex justify-around content-center items-center  w-full">
            <span className="text-base-50 text-xl">SEDAN</span>
            <Button className="text-base-300 px-4 py-2 rounded-lg  hover:bg-base-300 hover:text-base-50 bg-base-50">
              Veja Ofertas
            </Button>
          </div>
        </div>
        <div className="bg-brand-400 rounded-2xl w-10/12 flex flex-col justify-around sm:flex sm:flex-col sm:justify-around sm:w-[500px] h-[350px] p-5">
          <img
            src="/carImages/palisade.png"
            className="scale-x-[-1] hover:scale-x-[1] trasition-all duration-300  sm:h-[200px] w-auto object-contain mx-auto"
            alt="Palisade"
          />
          <div className="flex justify-around content-center items-center  w-full">
            <span className="text-base-50 text-xl">SUV</span>
            <Button className="text-base-300 px-4 py-2 rounded-lg  hover:bg-base-300 hover:text-base-50 bg-base-50">
              Veja Ofertas
            </Button>
          </div>
        </div>
        <div className="bg-brand-400 rounded-2xl w-10/12 flex flex-col justify-around sm:flex sm:flex-col sm:justify-around sm:w-[500px] h-[350px] p-5">
          <img
            src="/carImages/ranger.png"
            className="scale-x-[-1] hover:scale-x-[1] trasition-all duration-300  sm:h-[200px] w-auto object-contain mx-auto "
            alt="Ranger"
          />
          <div className="flex justify-around content-center items-center   w-full">
            <span className="text-base-50 text-xl" >PICAPE</span>
            <Button className="text-base-300 px-4 py-2 rounded-lg  hover:bg-base-300 hover:text-base-50 bg-base-50">
              Veja Ofertas
            </Button>
          </div>
        </div>
        <div className="bg-brand-400 rounded-2xl w-10/12 flex flex-col justify-around sm:flex sm:flex-col sm:justify-around sm:w-[500px] h-[350px] p-5">
          <img src="/carImages/seal.png" alt="Seal" className=" hover:scale-x-[-1] trasition-all duration-300  sm:h-[200px] w-auto object-contain mx-auto" />
          <div className="flex justify-around content-center items-center  w-full">
            <span className="text-base-50 text-xl">ELÉTRICO</span>
            <Button className="text-base-300 px-4 py-2 rounded-lg  hover:bg-base-300 hover:text-base-50 bg-base-50">
              Veja Ofertas
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CategorySection;
