import React from "react";
import "./style.css";
function abisHero() {
  return (
    <main className="mt-[74px] justify-center items-center flex flex-col space-y-12 md:ml-16 md:mr-16">
      <div>
        <div className="text-center uppercase text-lg">
          <h1 className="text-lg text-blue-700">for humanity</h1>
          <h1 className="mt-7 text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-relaxed sm:leading-10 lg:leading-normal text-[#0E0B3D]">
            MEETING ALL{" "}
            <span className="bg-[#AAFF00] px-3 py-2 rounded-2xl">
              STUDENTS'
            </span>{" "}
            <br /> NEEDS IN ONE GRASP.
          </h1>
          <p className="mt-5 md:text-base text-[#0E0B3D]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, cum!
          </p>
        </div>
      </div>
      {/*  */}

      <div className="stage">
        <img
          className="box bounce-1"
          src="https://res.cloudinary.com/dfnxmrqmt/image/upload/v1702753952/iyffpzktqq2dencmjg4w.svg"
          alt="wswsw"
        />
      </div>
    </main>
  );
}

export default abisHero;

// https://www.youtube.com/watch?v=am0ZueQmpzg
