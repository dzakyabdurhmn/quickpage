import React from "react";

function index() {
  const numbers = [1, 2, 3, 4, 5, 6];

  return (
    <div className="mt-20 flex flex-wrap justify-center gap-6 max-w-[1200px] mx-auto">
      <div className="flex gap-x-8">
        <h1 className="text-xl flex flex-col text-center px-3 py-2 bg-green-500 rounded-2xl">
          Services
        </h1>
        <p className="max-w-[500px]">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>
      <div className="mt-5">
        <div className="flex flex-wrap justify-center gap-6 max-w-[1200px] mx-auto">
          {numbers.map((number, index) => (
            <div key={index + 1}>
              <div className="w-[500px] h-[310px] rounded-[45px] bg-[#B9FF66] shadow-lg">
                <div className="p-6">
                  <div className="px-3 py-2 text-2xl bg-black text-white max-w-[160px] rounded-xl">
                    Search engine optimization
                  </div>
                  {/* <div className="pl-2 text-2xl">Subtitle</div> */}
                </div>
                <div className="h-40">
                  <img
                    src="https://placeimg.com/500/225/hous"
                    className="h-full"
                    alt={`Image ${index + 1}`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default index;
