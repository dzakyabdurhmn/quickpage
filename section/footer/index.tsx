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

import { Button } from "@/components/button";
import React from "react";

function index() {
  return (
    <div className="px-10 roundedNoneAdam">
      <div className="bg-[#EDFAE4] rounded-t-3xl roundedNone  max-w-[1500px] mt-20 justify-center mx-auto">
        <div className="max-w-screen-xl py-10 px-4 sm:px-6  text-gray-800 flex  justify-between mx-auto">
          <Button variant="purple" className="w-full h-24">
            <div className="object-left-top">
              <span>Join our global Community</span>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default index;
