// import React from "react";
// import "./style.css";
// import { Button } from "@/components/button";
// function footer() {
//   return (
//     <div className="px-10 roundedNoneAdam">
//       <div className="bg-purple-500 rounded-t-3xl roundedNone  max-w-[1500px] mt-20 justify-center mx-auto">
//         <div className="max-w-screen-xl py-10 px-4 sm:px-6  text-gray-800 flex  justify-between mx-auto">
//           {/* <div className="p-5 sm:w-4/12">
//             <div>
//               Stay informed on feature releases, product roadmap, and community
//               events!
//             </div>
//           </div>
//           <div className="ClassName">
//             <div className="grid grid-cols-2">wswswsws</div>
//           </div> */}
//           <div>
//             <Button variant="purple" className="w-full justify-between flex">
//               lorem
//             </Button>
//           </div>
//         </div>
//         {/* /// */}
//         <div className="flex py-5 m-auto text-gray-800 text-sm flex-col items-center  max-w-screen-xl">
//           <div>ssss</div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default footer;
"use client";
import { Button } from "@/components/button";
// import { Form } from "@/components/";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import React from "react";

function index() {
  return (
    <div className="px-10 roundedNoneAdam -mb-12">
      <div className="bg-[#EDFAE4] rounded-t-3xl roundedNone  max-w-[1500px] mt-20 justify-center mx-auto flex flex-col">
        <div className="flow-root p-10">
          <p className="float-left flex items-center justify-center mt-20  mx-auto max-w-[700px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam rem
            consequuntur eum nobis id obcaecati tempora, beatae nesciunt dolor
            quia.
          </p>
          <div className="float-right justify-center flex">
            <>
              <div className="flex items-center justify-center mt-20  mx-auto max-w-[700px]">
                <div className="flex flex-col  justify-center  space-y-8">
                  <div className="flex-row xl:gap-4 xl:flex">
                    <div className="flex flex-col space-y-4 border-[3px] rounded-xl px-7 border-gray-950 max-w- py-7">
                      <div className="flex gap-y-12 flex-col">
                        <span className="font-semibold max-w-[152px]">
                          Join our global cumonitty
                        </span>

                        <div className="flex gap-x-8 max-w-[253px]">
                          <div>
                            Billions of predictions per day 3000+ community
                            members Use by 1000+ organizations
                          </div>
                          <Button
                            size={"box"}
                            className="-ml bottom-0 right-0"
                            variant={"purple"}
                          >
                            <ChevronRightIcon className="text-red-600 text-5xl" />
                          </Button>
                        </div>
                      </div>
                    </div>
                    <p className=" border-[3px] space-y-7 mt-5 xl:mt-0 rounded-xl flex flex-col border-black px-7  py-7">
                      <div className="flex gap-y-12 flex-col">
                        <span className="font-semibold">
                          Start a free trial
                        </span>

                        <div className="flex gap-x-8">
                          <Button
                            size={"box"}
                            className="-ml"
                            variant={"purple"}
                          >
                            <ChevronRightIcon className="text-red-600 text-5xl" />
                          </Button>
                        </div>
                      </div>
                    </p>
                  </div>
                  {/*  */}
                  <div className="flex-row xl:flex gap-5">
                    <p className=" border-[3px] space-y-7 mt-5 xl:mt-0 rounded-xl flex flex-col border-black px-7 mb-10 py-7">
                      <div className="flex gap-y-12 flex-col">
                        <span className="font-semibold">
                          Start a free trial
                        </span>

                        <div className="flex gap-x-8">
                          <Button
                            size={"box"}
                            className="-ml"
                            variant={"purple"}
                          >
                            <ChevronRightIcon className="text-red-600 text-5xl" />
                          </Button>
                        </div>
                      </div>
                    </p>
                    <div className="flex flex-col space-y-4 border-[3px] rounded-xl px-7 border-gray-950 mb-10 py-7">
                      <div className="flex gap-y-12 flex-col">
                        <span className="font-semibold max-w-[152px]">
                          Join our global cumonitty
                        </span>

                        <div className="flex flex-col gap-y-8 max-w-[253px]">
                          <div>
                            Billions of predictions per day 3000+ community
                            members Use by 1000+ organizations
                          </div>
                          <Button
                            size={"default"}
                            className="-ml"
                            variant={"purple"}
                          >
                            <ChevronRightIcon className="text-red-600 text-5xl" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="flex space-x-4">
                    <p className=" flex flex-col space-y-4 border-[3px] rounded-xl px-7 border-gray-950 max-w- py-7">
                      <span>
                        “Koo started to adopt BentoML more than a year ago as a
                        platform of choice for model deployments and monitoring.
                        From our early experience it was clear that deploying ML
                        models, a statistic that most companies struggle with,
                        was a solved problem for Koo. The BentoML team works
                        closely with their community of users like I've never
                        seen before. Their AMAs, the advocacy on Slack and
                        getting on calls with their customers, are much
                        appreciated by early-adopters and seasoned users”
                      </span>
                      <span className="font-semibold">
                        Harsh Singhal, Head of Machine Learning,{" "}
                        <span className="font-bold">Koo</span>
                      </span>
                    </p>
                  </div> */}
                </div>
              </div>
            </>
          </div>
        </div>
        {/* <div className="p-10">
          <div className="flex md:flex-col gap-10 justify-between">
            <div className="flex flex-col">
              <h1 className="font-bold text-2xl">
                Judullll
                <li>Lorem, ipsum.</li>
                <li>Lorem, ipsum.</li>
                <li>Lorem, ipsum.</li>
                <li>Lorem, ipsum.</li>
                <li>Lorem, ipsum.</li>
                <li>Lorem, ipsum.</li>
                <li>Lorem, ipsum.</li>
                <li>Lorem, ipsum.</li>
                <li>Lorem, ipsum.</li>
              </h1>
            </div>
            <div>llormmm</div>
            <div>llormmm</div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default index;
