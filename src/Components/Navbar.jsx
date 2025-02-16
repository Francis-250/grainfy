import { useState } from "react";
import { Link } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { HiMenuAlt3 } from "react-icons/hi";
import { HiChevronDown } from "react-icons/hi";
import { menu } from "../assets/Assets";

const Navbar = () => {
  const [mobile, setIsMobile] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <div className="">
        <Link to="/">
          <header className="grainify text-2xl uppercase font-bold">
            grainify
          </header>
        </Link>
      </div>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        {menu.map((menu, i) => (
          <Link
            key={i}
            to={menu.link}
            onClick={() => setActiveMenu(i)}
            className="flex flex-col items-center gap-1"
          >
            <p className="cursor-pointer">{menu.label}</p>
            {activeMenu === i && (
              <hr className="w-2/4 border-none h-[1.5px] bg-gray-700" />
            )}
          </Link>
        ))}
      </ul>
      <div className="flex items-center gap-6">
        <Link to="/cart" className="relative">
          <BsCart className="text-gray-600 text-2xl" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            10
          </p>
        </Link>
        <HiMenuAlt3
          size={30}
          color="black"
          className="cursor-pointer sm:hidden"
          onClick={() => setIsMobile(true)}
        />
      </div>
      {/* mobile */}
      <div
        className={`absolute top-0 bottom-0 overflow-hidden bg-white transition-all duration-1000 ${
          mobile ? "w-full" : "w-0"
        }`}
      >
        <div className="sm:hidden flex flex-col text-gray-600">
          <div
            className="flex items-center gap-4 p-3 cursor-pointer"
            onClick={() => setIsMobile(false)}
          >
            <HiChevronDown color="black" className="h-4 rotate-90 text-2xl" />
            <p className="">Back</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            {menu.map((menu, i) => (
              <Link
                key={i}
                to={menu.link}
                onClick={() => setIsMobile(false)}
                className="flex flex-col items-center gap-1 mb-4"
              >
                <p className="cursor-pointer">{menu.label}</p>
                <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
