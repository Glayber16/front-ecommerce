
function Brands() {
  return (
    <section className="bg-brand-200 flex flex-col items-center justify-center text-black w-full rounded p-5 mb-6" data-aos='fade-up'>
      <div className="flex justify-around w-full">
        <img
          src="carIcons/volksIcon.png"
          alt="Volks logo"
          className="h-6 w-6 sm:h-12 sm:w-12 rounded-4xl"
        />
 
        <img
          src="carIcons/fiatIcon.png"
          alt="Fiat logo"
          className="h-6 w-6 sm:h-12 sm:w-12 "
        />
        <img
          src="carIcons/nissanIcon.png"
          alt="Nissan logo"
          className="h-6 w-6 sm:h-12 sm:w-12 "
        />
        <img
          src="carIcons/chevroletIcon.png"
          alt="Chevrolet logo"
          className="h-6 w-6 sm:h-12 sm:w-12   rounded-4xl"
        />
        <img
          src="carIcons/hyundaiIcon.png"
          alt="Hyundai logo"
          className="h-6 w-6 sm:h-12 sm:w-12 "
        />
        <img
          src="carIcons/toyotaIcon.png"
          alt="Toyota logo"
          className="h-6 w-6 sm:h-12 sm:w-12 "
        />
      </div>
    </section>
  );
}

export default Brands;
