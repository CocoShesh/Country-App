import React, { useState } from "react";
import { Link } from "react-router-dom";
import "react-dropdown/style.css";
import { IoSearchOutline } from "react-icons/io5";
import Dropdown from "../Dropdown/Dropdown";
import Data from "/public/data.json";

const MainContent = () => {
  const [search, setSearch] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);

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
      <section className="flex w-full flex-col items-center justify-center">
        <section className="2xl:w-[1700px]">
          <section className="relative flex w-full select-none items-center justify-between p-10 max-sm:flex-col max-sm:gap-5 lg:px-20 dark:bg-[#202d36]">
            <section className="relative">
              <input
                type="search"
                className="h-14 w-[350px] rounded-lg  bg-white pl-10 shadow-md outline-none dark:bg-[#2b3743] dark:text-white "
                placeholder=" Search for a country..."
                onChange={(e) => setSearch(e.target.value)}
              />
              <IoSearchOutline className="absolute left-3 top-4 text-xl dark:text-white" />
            </section>
            <Dropdown onChange={handleDropdownChange} />
          </section>
          <div className="grid min-h-screen place-content-center  gap-12 max-lg:px-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:px-20  2xl:grid-cols-4  dark:bg-[#202d36]">
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
                      className="h-[350px]  rounded-2xl bg-white text-[#191b1d] shadow-md dark:bg-[#2b3743] dark:text-white"
                    >
                      <img
                        src={item?.flags?.png}
                        alt={item?.name}
                        className="h-[150px] w-full rounded-t-2xl"
                      />
                      <section className="p-5">
                        <h2 className=" mb-5 text-xl font-bold">
                          {item?.name}
                        </h2>
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
        </section>
      </section>
    </>
  );
};

export default MainContent;
