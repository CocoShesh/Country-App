import React, { useState, useEffect, useRef } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
const Dropdown = ({ onChange }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const categories = ["Americas", "Asia", "Europe", "Oceania"];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    onChange(category);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="relative" ref={dropdownRef}>
        <div
          className={`h-10   w-[170px]   select-none border border-t border-gray-200 bg-white pl-5 pt-2 text-sm text-black outline-none  dark:border-[#2b3743] dark:bg-[#2b3743] dark:text-white ${
            isDropdownOpen ? "" : "rounded"
          } relative  cursor-pointer`}
          onClick={toggleDropdown}
        >
          {selectedCategory || "Select Category"}
          {isDropdownOpen ? (
            <IoIosArrowUp className="absolute right-4 top-1/2 -translate-y-1/2 transform text-lg" />
          ) : (
            <IoIosArrowDown className="absolute right-4 top-1/2 -translate-y-1/2 transform text-lg" />
          )}
        </div>
        {isDropdownOpen && (
          <div className="absolute left-0 top-full w-full rounded-b  border  border-t border-gray-200 bg-white text-black  dark:border-t dark:border-[#ffffed69] dark:bg-[#2b3743] dark:text-white">
            {categories.map((item, index) => (
              <div
                key={index}
                className="cursor-pointer p-2 text-sm  font-bold  hover:bg-[#202d36] hover:text-white"
                onClick={() => {
                  handleCategoryChange(item);
                  closeDropdown(); // Close dropdown after item selection
                }}
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Dropdown;
