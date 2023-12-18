// import React from "react";
// import Lottie from "lottie-react";
// import AnimationHeader from "@/assets/anim.json";
// import { Button } from "@/components/button";
// import Image from "next/image";
// const App = () => {
//   return (
//     <>
//       <div className="mt-44 flex flex-col text-center space-y- justify-center items-center text-[#273037]">
//         <h1 className="text-8xl  font-semibold md:text-sm sm:text-sm">
//           Significalty <br /> Improve self
//         </h1>
//         <p className="text-lg md:text-sm sm:text-sm">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
//         </p>
//         <div className="flex space-x-3">
//           <Button.black /> <Button.white />
//         </div>
//         <Image
//           height={10000}
//           width={10000}
//           className="mt-32"
//           alt="Helloo"
//           src={
//             "https://res.cloudinary.com/dfnxmrqmt/image/upload/v1702508444/djub7secqkeebyqzbvvo.png"
//           }
//         />
//       </div>
//     </>
//   );
// };

// export default App;

"use client";
import styles from "./page.module.scss";
import { projects } from "../data";
import Card from "../components/Card";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

export default function Home() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <main ref={container} className={`${styles.main}`}>
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05;
        return (
          <Card
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </main>
  );
}
