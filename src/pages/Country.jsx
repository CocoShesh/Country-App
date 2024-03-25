import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Data from "/public/data.json";
import { useTheme } from "../Context/ThemeContext";
const Country = () => {
  const { name } = useParams();
  const { toggleTheme } = useTheme();

  const selectedCountry = Data.filter((item) => item?.name === name);

  const getCountryName = (alpha3code) => {
    const country = Data.find((c) => c.alpha3code === alpha3code);
    return country ? country.name : alpha3code;
  };
  return (
    <>
      <div
        className={`flex min-h-screen w-full flex-col   gap-5 ${toggleTheme ? "bg-[#202d36] text-white" : "bg-[#fafafa] "} pt-14  max-lg:px-10 lg:px-20`}
      >
        <Link to="/">
          <button className="custom-shadow h-10 w-28  text-xl">
            &#8592; Back
          </button>
        </Link>
        {selectedCountry.map((item, index) => (
          <div
            key={index}
            className=" mt-10 flex w-full items-center justify-center  gap-20 text-sm max-lg:flex-col  max-lg:pb-20 "
          >
            <img
              src={item?.flag}
              alt={item?.name}
              className="h-[300px] rounded-2xl  bg-[#fafafa] 2xl:w-[700px]"
            />
            <section className="mt-5 flex  flex-col gap-5 2xl:w-[700px] 2xl:text-xl">
              <h1 className="text-4xl font-bold">{item?.name}</h1>
              <section className="flex items-center gap-10">
                <section className="flex flex-col gap-2">
                  <span>
                    <b> Native Name:</b> {item?.nativeName}
                  </span>
                  <span>
                    <b>Population: </b> {item?.population}
                  </span>
                  <span>
                    <b> Region:</b> {item?.region}
                  </span>
                  <span>
                    <b> Sub Region:</b> {item?.subregion}
                  </span>
                  <span>
                    <b> Capital: </b>
                    {item?.capital}
                  </span>
                </section>
                <section className="mb-16 flex flex-col gap-2">
                  <span>
                    <b> Top Level Domain: </b>
                    {item?.topLevelDomain}
                  </span>
                  <span>
                    <b>Currencies: </b>
                    {item?.currencies?.map((currency, index) => (
                      <span key={index}>{currency?.name},</span>
                    ))}
                  </span>
                  <span>
                    <b> Languages: </b>
                    {item?.languages?.map((language, index) => (
                      <span key={index}>{language?.name}</span>
                    ))}
                  </span>
                </section>
              </section>
              <span>
                {" "}
                <b>Borders: </b>
                {item?.borders?.map((border, index) => (
                  <span key={index}>{border}, </span>
                ))}
              </span>
            </section>
          </div>
        ))}
      </div>
    </>
  );
};

export default Country;
