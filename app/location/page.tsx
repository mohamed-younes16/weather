/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect, useState } from "react";
import Picker from "../components/picker";

import StatCard from "../components/StatCard";
import { BsWind } from "react-icons/bs";
import { FaTemperatureHigh } from "react-icons/fa";
import Image from "next/image";
import { iconsmapping } from "@/lib/iconsmapping";
import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";
import Charts from "../components/Charts";

const Page = ({ searchParams }) => {
  const [data, setData] = useState<any>();

  const params = searchParams;

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${params.latitude}&lon=${params.longitude}&appid=26b5c0062eb190c902a24b0d1b8baed6`,
        { next: { revalidate: 20 } }
      );

      setData(await res.json());
    })();
  }, []);

  return (
    <div suppressHydrationWarning className=" flex max-md:flex-col   ">
      {data && (
        <>
          <div className=" p-8 text-white min-w-[20rem] max-lg:min-w-[17rem] ">
            <div className=" mb-10 ">
              <div className="font-bold text-4xl mb-8">{data?.name}</div>

              <div className="flex flex-col items-center text-slate-300">
                <p>cordinates :</p>
                <p>
                  {data.coord?.lat} / {data.coord?.lon}{" "}
                </p>
                <p>lat / lon </p>
              </div>
            </div>

            <div className="text-black">
              <Picker />
            </div>

            <hr className=" my-8" />

            <div className="flex justify-between">
              <div>
                {new Date(data.dt * 1000).toLocaleDateString("en-US", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                  weekday: "long",
                })}
                <p className="mt-10">
                  Your TimeZone :{" "}
                  <span className=" font-bold">
                    {Intl.DateTimeFormat().resolvedOptions().timeZone}
                  </span>
                </p>
              </div>
              <div>
                {new Date().toLocaleTimeString("en-GB", {
                  hour: "numeric",
                  hour12: true,
                  minute: "numeric",
                })}
              </div>
            </div>

            <hr className=" my-8" />
            <div className="flex flex-wrap gap-3 justify-between">
              <Image
                alt="weather image"
                height={80}
                width={80}
                src={`https://www.weatherbit.io/static/img/icons/${
                  iconsmapping[data.weather[0].id]
                }.png`}
              />

              <div className="flex  gap-4 items-center">
                <div className="font-bold text-3xl"> {data.main.temp}°C</div>
                <div className="text-gray-400">{data.weather[0].main} </div>
              </div>
            </div>

            <div
              className="bg-white  backdrop-blur-md border items-center  flex justify-between
                    shadow-md transition   hover:scale-110 bg-opacity-10  border-white my-2 p-3 rounded-xl"
            >
              <div className="  items-center text-gray-400 gap-2  flex">
                <SunIcon className=" h-10 w-10 " />
                <span> Sunrise</span>
              </div>
              <div>
                {new Date(data.sys.sunrise * 1000).toLocaleTimeString("en-GB", {
                  hour: "numeric",
                  hour12: true,
                  minute: "numeric",
                })}
              </div>
            </div>
            <div
              className="bg-white flex justify-between  items-center bg-opacity-10 backdrop-blur-md shadow-md
                    transition hover:scale-110 border border-white my-2 p-3 rounded-xl"
            >
              <div className=" items-center text-gray-400 gap-2 flex">
                <MoonIcon className=" h-10 w-10 " />
                <span> Sunset</span>
              </div>
              <div>
                {" "}
                {new Date(data.sys.sunset * 1000).toLocaleTimeString("en-GB", {
                  hour: "numeric",
                  hour12: true,
                  minute: "numeric",
                })}{" "}
              </div>
            </div>
          </div>

          <div className="min-h-screen w-screen p-8 shadow-black dark:!bg-slate-600 dark:!shadow-blue-200 shadow-inner bg-slate-100">
            <p className="font-bold text-2xl">Today Overview</p>
            <h2 className=" text-lg dark:text-gray-200 my-8">
              Last Update for{" "}
              <span className="font-bold text-blue-900">{data.name} </span>
              on :{" "}
              {new Date(data?.dt * 1000).toLocaleTimeString("en-GB", {
                weekday: "long",
                month: "long",
                day: "2-digit",
              })}
            </h2>
            <div className=" grid grid-cols-3 max-xl:grid-cols-2 max-lg:grid-cols-1 mt-8 gap-9 ">
              <div className="text-3xl col-span-full font-bold flex gap-6">
                Temprature :{" "}
                <span className=" block animate-bounce">
                  <FaTemperatureHigh />
                </span>{" "}
              </div>
              <StatCard
                color="orange"
                title=" Tempurature"
                value={`${data.main.temp}°`}
              />
              <StatCard
                color="green"
                title="Min Tempurature"
                value={`${data.main.temp_min}°`}
              />
              <StatCard
                color="rose"
                title="Max  Tempurature"
                value={`${data.main.temp_max}°`}
              />
              <div className="text-3xl  col-span-full font-bold  flex gap-6">
                Wind :{" "}
                <span className=" block  animate-bounce">
                  <BsWind />
                </span>{" "}
              </div>
              <StatCard
                color="cyan"
                title="Wind Speed"
                value={`${data.wind.speed}M/S`}
              />
              <StatCard
                color="indigo"
                title="Wind degree "
                value={`${data.wind.deg}°`}
              />
              <StatCard
                color="blue"
                title="Wind Gust "
                value={`${
                  data.wind.gust ? data.wind.gust + "°" : "not found :("
                }`}
              />
            </div>

            <Charts params={searchParams} />
          </div>
        </>
      )}
    </div>
  );
};

export default Page;
