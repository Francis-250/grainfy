import heroImg from "../assets/images/hero-img.jpg";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400 rounded">
      {/* left */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base">OUR BEST SELLER</p>
          </div>
          <h1 className="text-3xl sm:py-3 lg:text-5xl leading-relaxed">
            Latest Arrival
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm md:text-base">SHOP Now</p>
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
          </div>
        </div>
      </div>
      {/* right */}
      <div className="flex justify-between items-center w-full sm:w-1/2">
        <span></span>
        <img
          src={heroImg}
          className="sm:h-[20em] h-[12em] object-cover w-full border-l-red-400 ima"
        />
      </div>
    </div>
  );
};

export default Hero;
