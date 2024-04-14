import React, { useState } from "react";
import { IoMoonOutline } from "react-icons/io5";
import { FiSun } from "react-icons/fi";

const Header = () => {
  const [toggleTheme, setToggleTheme] = useState(false);

  const handleToggleTheme = () => {
    setToggleTheme(document.documentElement.classList.toggle("dark"));
  };

  return (
    <nav className="flex items-center justify-center">
      <section className="custom-shadow  flex h-16 w-full items-center justify-between bg-white px-10  font-semibold max-sm:px-3 2xl:w-[1700px] dark:bg-[#2b3743]  dark:text-white">
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
      </section>
    </nav>
  );
};

export default Header;
