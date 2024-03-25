import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "react-dropdown/style.css";
import { IoSearchOutline } from "react-icons/io5";
import { useTheme } from "../../Context/ThemeContext";
import Dropdown from "../Dropdown/Dropdown";
import Data from "/public/data.json";

const MainContent = () => {
  const { toggleTheme } = useTheme();
  const [search, setSearch] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     await fetch("http://localhost:5173/public/data.json")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setCountries(data);
  //       });
  //   };
  //   fetchData();
  // }, []);

  const filteredData = Data.filter((item) => {
    const filterByName = item?.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const filterByRegion =
      selectedRegion === "" ||
      item?.region?.toLowerCase() === selectedRegion.toLowerCase();
    return filterByName && filterByRegion;
  }).sort((a, b) => a.region.localeCompare(b.region));

  const handleDropdownChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    setSelectedRegion(selectedOption);
  };
  return (
    <>
      <section
        className={`relative flex items-center justify-between p-10 max-sm:flex-col max-sm:gap-5 lg:px-20 ${toggleTheme && "bg-[#202d36]"}`}
      >
        <section className="relative">
          <input
            type="search"
            className={`h-14 w-[350px] rounded-lg   ${toggleTheme ? "bg-[#2b3743] text-white" : "bg-white"} pl-10 shadow-md outline-none `}
            placeholder=" Search for a country..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <IoSearchOutline
            className={`absolute left-3 top-4 text-xl ${toggleTheme && "text-white"}`}
          />
        </section>
        <Dropdown onChange={handleDropdownChange} />
      </section>
      <div
        className={`grid min-h-screen place-content-center  gap-12 max-lg:px-10 sm:grid-cols-1 lg:px-20 ${toggleTheme && "bg-[#202d36]"}  md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5`}
      >
        {filteredData.length === 0 ? (
          <div className="absolute inset-0 flex h-screen items-center justify-center">
            <p className="text-center text-3xl font-semibold text-red-500">
              Country not found
            </p>
          </div>
        ) : (
          filteredData?.map((item, index) => {
            return (
              <Link to={`/country/${item?.name}`} key={index}>
                <div
                  key={item?.id}
                  className={`h-[350px]  rounded-2xl shadow-md ${toggleTheme ? "bg-[#2b3743] text-white" : "bg-white text-[#191b1d]"} `}
                >
                  <img
                    src={item?.flags?.png}
                    alt={item?.name}
                    className="h-[150px] w-full rounded-t-2xl"
                  />
                  <section className="p-5">
                    <h2 className=" mb-5 text-xl font-bold">{item?.name}</h2>
                    <p>
                      <b> Population: </b>
                      <span> {item?.population.toLocaleString()} </span>
                    </p>
                    <p>
                      <b> Region: </b> {item?.region}
                    </p>
                    <p>
                      <b> Capital: </b> {item?.capital}
                    </p>
                  </section>
                </div>
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default MainContent;
