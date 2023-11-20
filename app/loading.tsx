import { SunIcon } from "@heroicons/react/20/solid";
import React from "react";

const Loading = () => {
  return (
    <div className=" p-2 flex justify-center  items-center flex-col  h-screen fixed  w-screen inset-0 ">
      <SunIcon className=" h-24 w-24 text-yellow-300 animate-bounce" />
      <div className="text-4xl max-md:text-xl text-center font-bold text-white animate-pulse">
        Loading Your Weather page
      </div>
    </div>
  );
};

export default Loading;
