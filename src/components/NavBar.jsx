import { Link } from "react-router-dom";
import { useState } from "react";
import icons from "../constants/icons";
import { Menu, X } from "lucide-react";
import ToggleSwitch from "./ToggleSwitch";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" bg-amber-100 dark:bg-gray-800 shadow-lg sticky top-0">
      <div className="mx[3%] md:mx-[4%] flex items-center justify-center sm:justify-between px-4 py-3 font-lato">
        <div className="flex items-center gap-4">
          <button
            className="xl:hidden text-black dark:text-amber-100 hover:cursor-pointer hover:scale-110"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
          <Link to="/" className="flex items-center gap-2">
            <img src={icons.mainLogo} alt="logo" className="w-10 h-10" />
            <span className=" font-lilita text-4xl dark:text-amber-100">
              Next
              <span className="text-blue-900 dark:text-blue-300">Role</span>
            </span>
          </Link>

          <div className="hidden xl:flex items-center gap-8 text-black dark:text-amber-100">
            <Link to="/" className="text-2xl hover:text-blue-600">
              Dashboard
            </Link>
            <Link to="/applications" className="text-2xl  hover:text-blue-600">
              Applications
            </Link>
            <Link to="/analytics" className="text-2xl hover:text-blue-600">
              Analytics
            </Link>
            <Link to="/wishlist" className="text-2xl hover:text-blue-600">
              Wishlist
            </Link>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-2 md:gap-5">
          <div className="border-1 border-black sm:px-3 sm:py-2 rounded-lg bg-blue-300 text-xl hover:scale-105 hover:cursor-pointer dark:bg-amber-100 text-black text-center">
            + New Application
          </div>
          <Link to="/profile" className="text-2xl hover:text-blue-600 hover:scale-105">
            <img src={icons.lightProfile} alt="profile" className="w-9 h-9 dark:hidden" />
            <img src={icons.darkProfile} alt="profile" className="w-9 h-9 hidden dark:block" />
          </Link>
          <div className="w-px h-8 bg-black" />
          <div className="flex items-center gap-2">
            <img src={icons.sun} alt="sun" className="w-5 h-5" />
            <ToggleSwitch />
            <img src={icons.moon} alt="moon" className="w-5 h-5" />
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="items-center sm:items-start xl:hidden flex flex-col mx-[4%] gap-4 px-6 py-4 text-black dark:text-amber-100">
          <Link to="/" className="text-xl hover:text-blue-600" onClick={() => setIsOpen(false)}>
            Dashboard
          </Link>
          <Link
            to="/applications"
            className="text-xl hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Applications
          </Link>
          <Link
            to="/analytics"
            className="text-xl hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Analytics
          </Link>
          <Link
            to="/wishlist"
            className="text-xl hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Wishlist
          </Link>
          <div className="sm:hidden flex items-center gap-5 md:gap-5">
            <div className="border-1 border-black px-3 py-2 rounded-lg bg-blue-300 text-xl hover:scale-105 hover:cursor-pointer dark:bg-amber-100 text-black text-center">
              + New Application
            </div>
            <Link to="/profile" className="text-2xl hover:text-blue-600 hover:scale-105">
              <img src={icons.lightProfile} alt="profile" className="w-9 h-9 dark:hidden" />
              <img src={icons.darkProfile} alt="profile" className="w-9 h-9 hidden dark:block" />
            </Link>
            <div className="w-px h-8 bg-black" />
            <div className="flex items-center gap-2">
              <img src={icons.sun} alt="sun" className="w-5 h-5" />
              <ToggleSwitch />
              <img src={icons.moon} alt="moon" className="w-5 h-5" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
