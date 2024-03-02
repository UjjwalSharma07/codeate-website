import Image from "next/image";
import React from "react";

const Achivement = () => {
  return (
    <div className="border-cyan-400 shadow-2xl hover:shadow-lg hover:shadow-cyan-200 duration-300 shadow-cyan-100 border-4 relative rounded-2xl p-10 text-center mx-auto w-[50rem] my-32">
      <div className="absolute w-32 h-32 z-30">
        <img src="/images/reward.png" />
      </div>
      <h1 className="text-cyan-400 text-3xl font-semibold">
        Kuddos to your first step !
      </h1>

      <div className="bg-red-300 rounded-3xl max-w-lg p-5 mx-auto mt-10 pb-10">
        <p className="text-xl font-medium ">Share Your Achivement</p>
        <p>Showcase your project with your peers. lorem ipsum</p>
      </div>

      <div className="max-w-xl -mt-5 mx-auto">
        <textarea
          name="text"
          className="bg-white border shadow-md rounded-md h-56 p-3 w-full"
        ></textarea>
      </div>

      <button className="bg-blue-500 mt-3 hover:bg-blue-600 duration-300 rounded-md text-white px-5 py-2">
        Share On Linkedin
      </button>
    </div>
  );
};

export default Achivement;
