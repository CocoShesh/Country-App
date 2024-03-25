import React from "react";
import { IoMoonOutline } from "react-icons/io5";
import { useTheme } from "../../Context/ThemeContext";
import { FiSun } from "react-icons/fi";

const Header = () => {
  const { handleToggleTheme, toggleTheme } = useTheme();

  return (
    <nav
      className={` flex h-16 w-full items-center justify-between   ${toggleTheme ? "bg-[#2b3743] text-white " : "custom-shadow bg-white"}  px-10  font-semibold`}
    >
      <h1 className="text-xl"> Where in the world?</h1>
      <section
        className="flex cursor-pointer select-none items-center gap-3 transition-all duration-300 ease-in-out "
        onClick={handleToggleTheme}
      >
        {toggleTheme ? (
          <>
            <FiSun />
            <span> Light Mode</span>
          </>
        ) : (
          <>
            <IoMoonOutline />
            <span> Dark Mode</span>
          </>
        )}
      </section>
    </nav>
  );
};

export default Header;
