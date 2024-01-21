"use client";
import Image from "next/image";
import styles from "./style.module.scss";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";
import TextAnimation from "@/components/textanimation";
import Lottie from "lottie-react";
import anm from "../../assets/animation/p-clk.json";
const Card = ({
  i,
  title,
  description,
  lottie,
  src,
  url,
  color,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className={styles.cardContainer}>
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={styles.card}
      >
        <div className={styles.body}>
          {/* <p>{description}</p> */}
          <div className="flex">
            <Lottie
              className="ml-24 hidden sm:block md:block lg:block"
              animationData={lottie}
              loop={true}
              style={{ height: 300 }}
            />
            <div className="justify-center text-white items-center sm:mx-auto md:mx-auto">
              <TextAnimation text={title} />
              <div className="mt-10">
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
