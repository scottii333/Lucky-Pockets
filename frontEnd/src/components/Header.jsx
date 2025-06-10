import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [Hamburger, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!Hamburger);
  };

  return (
    <div className=" bg-[#FEFAE0] min-h-[4rem] m-[1rem] rounded-full flex justify-around items-center sticky top-2 z-50">
      <Link
        to="/"
        className="text-[#BC6C25] text-2xl font-bold text-outline-283618"
      >
        Lucky Pockets
      </Link>

      <nav className="hidden md:flex gap-[2rem] ">
        <Link
          className="text-[#BC6C25] text-[1.2rem] hover:text-[#283618] transition-transform duration-300 ease-in-out hover:scale-110 "
          to="/"
        >
          How to Play{" "}
        </Link>
        <Link
          className="text-[#BC6C25] text-[1.2rem] hover:text-[#283618] transition-transform duration-300 ease-in-out hover:scale-110"
          to="/about"
        >
          About
        </Link>
        <Link
          className="text-[#BC6C25] text-[1.2rem] hover:text-[#283618] transition-transform duration-300 ease-in-out hover:scale-110"
          to="/contact"
        >
          Contact Us
        </Link>
      </nav>

      {/* Hamburger Icon*/}
      <button
        className="md:hidden text-[#BC6C25] text-2xl relative w-8 h-8 cursor-pointer"
        onClick={toggleHamburger}
      >
        <div
          className="absolute inset-0 transition-transform duration-300 ease-in-out transform"
          style={{
            transform: Hamburger ? "rotate(180deg)" : "rotate(0deg)",
            opacity: Hamburger ? 0 : 1,
          }}
        >
          <Menu size={32} />
        </div>
        <div
          className="absolute inset-0 transition-transform duration-300 ease-in-out transform"
          style={{
            transform: Hamburger ? "rotate(0deg)" : "rotate(-180deg)",
            opacity: Hamburger ? 1 : 0,
          }}
        >
          <X size={32} />
        </div>
      </button>

      {/* Hamburger Menu */}
      {Hamburger && (
        <div className="absolute top-[4.2rem] right-0 bg-[#FEFAE0] rounded-lg shadow-lg p-4 md:hidden">
          <nav className="flex flex-col gap-2">
            <Link
              className="text-[#BC6C25] text-[1.2rem] hover:text-[#283618] transition-transform duration-300 ease-in-out hover:scale-110"
              to="/"
            >
              How to Play
            </Link>
            <Link
              className="text-[#BC6C25] text-[1.2rem] hover:text-[#283618] transition-transform duration-300 ease-in-out hover:scale-110 "
              to="/about"
            >
              About
            </Link>
            <Link
              className="text-[#BC6C25] text-[1.2rem] hover:text-[#283618] transition-transform duration-300 ease-in-out hover:scale-110"
              to="/contact"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};
