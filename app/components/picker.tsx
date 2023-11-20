"use client";

import { City, Country } from "country-state-city";

import {useState } from "react";
import { SearchSelect, SearchSelectItem } from "@tremor/react";
import { GlobeAsiaAustraliaIcon } from "@heroicons/react/20/solid";

type option = {
  value: {
    longitude: string;
    latitude: string;
    isoCode: string;
  };
  label: string;
} | null;
type city = {
  value: {
    name: string;
    countryCode: string;
    stateCode: string;
    latitude: string;
    longitude: string;
  };
  label: string;
} | null;

const Picker = () => {
  const [country, setcountry] = useState<option>(null);
  const [city, setcity] = useState<city>(null);

  const [Loading, setLoading] = useState(false);

  const countriesoptions: any = Country.getAllCountries().map((e) => ({
    value: {
      latitude: e.latitude,
      longitude: e.longitude,
      isoCode: e.isoCode,
    },
    label: e.name,
  }));



  function handlecountry(e: option) {
    setcountry(e);

    setcity(null);
  }

  function handlecity(e: any) {
    setLoading(!location.pathname.toString().match(/\/\w+/g));

    setcity(e);
  
    const params = new URLSearchParams(e);
console.log(`/location?${params}`)

location.assign(`/location?${params}`);

  }


  return (
    <>
      <div className="mb-5">
        <SearchSelect
          placeholder={country?.label || "select country"}
          onValueChange={(e: any) => handlecountry(e)}
          className=" dark:!bg-slate-800 !cursor-pointer "
        >
          {countriesoptions.map((e) => (
            <SearchSelectItem key={e} value={e}>
              {e.label}
            </SearchSelectItem>
          ))}
        </SearchSelect>
      </div>

      {country && (
        <div className="">
          <div className="flex gap-4 text-white  items-center mb-4 ">
            <GlobeAsiaAustraliaIcon height={30} />
            <p>City </p>
          </div>
          <SearchSelect
            placeholder={city?.label || "select city"}
            className="!cursor-pointer"
            onValueChange={(e: any) => handlecity(e)}
          >
            {City.getCitiesOfCountry(country.value.isoCode)?.map((e: any) => (
              <SearchSelectItem key={e.name} value={e}>
                {e.name}
              </SearchSelectItem>
            ))}
          </SearchSelect>

          {!location.pathname.toString().match(/\/\w+/g) && Loading && (
            <div className="mx-auto h-20 w-20 animate-spin rounded-full border-8 border-white border-l-transparent mt-10   " />
          )}
        </div>
      )}
    </>
  );
};

export default Picker;
