// import React from "react";
// import "./style.css";
// import Text from "@/components/text";
// function abisHero() {
//   return (
//     <main className="justify-center items-center flex flex-col space-y-12 -mt-[250px]">
//       <div>
//         <div className="text-center uppercase text-lg">
//           <h1 className="text-lg text-blue-700">for humanity</h1>
//           <h1 className="mt-7 text-3xl  font-semibold leading-normal text-[#0E0B3D] flex flex-col items-center">
//             <span>
//               MEETING ALL STUDENT <br /> NEEDS IN ONE GRASP.
//             </span>
//           </h1>

//           <p className="mt-6 text-[#0E0B3D]">
//             One-stop platform for all student learning resources, empowering
//             them to thrive in school.
//           </p>
//         </div>
//       </div>
//       <div className="stage">
//         <img
//           className="box bounce-1"
//           src="https://res.cloudinary.com/dfnxmrqmt/image/upload/v1702753952/iyffpzktqq2dencmjg4w.svg"
//           alt="wswsw"
//         />
//       </div>
//     </main>
//   );
// }

// export default abisHero;

// // https://www.youtube.com/watch?v=am0ZueQmpzg

// /* <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">
//               Hello, world!
//             </span> */

// src/components/ReloadButton.tsx
// "use client";
// import React from "react";

// const ReloadButton: React.FC = () => {
//   const handleReload = () => {
//     window.location.reload();
//   };

//   return <button onClick={handleReload}>Reload Page</button>;
// };

// export default ReloadButton;
import React from "react";
import localFont from "next/font/local";
import Link from "next/link";
import Text from "@/components/textanimation";
const FBlack = localFont({ src: "../public/fonts/Friends-BlackItalic.otf" });
const FNormal = localFont({ src: "../public/fonts/Friends-Normal.otf" });
const FsemiBold = localFont({ src: "../public/fonts/Friends-SemiBold.otf" });

function hero({ Component, pageProps }: any) {
  return (
    <div>
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
          <div>
            <h1
              className={`"block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight -mt-10" ${FBlack.className}`}
            >
              MEETING ALL STUDENT NEEDS IN ONE GRASP.
              {/* <Text /> */}
            </h1>
            <p
              className={`mt-3 text-lg text-gray-800 dark:text-gray-400 ${FNormal.className}`}
            >
              One-stop platform for all student learning resources, empowering
              them to thrive in school.
            </p>
            <div className="mt-7 grid gap-3 w-full sm:inline-flex">
              <Link
                className={`py-3 px-10 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 ${FsemiBold.className}`}
                href="#"
              >
                Register sekarang
              </Link>
            </div>
          </div>
          <div className="relative ms-4">
            {/* <img
              className="w-full rounded-md"
              src="https://images.unsplash.com/photo-1665686377065-08ba896d16fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&h=800&q=80"
              alt="Image Description"
            /> */}
            <img
              className="w-full rounded-md"
              src="https://res.cloudinary.com/dfnxmrqmt/image/upload/v1702753952/iyffpzktqq2dencmjg4w.svg"
              alt="wswsw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default hero;
