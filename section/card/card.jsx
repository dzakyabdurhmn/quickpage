"use client";
import Image from "next/image";
import styles from "./style.module.scss";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";
import TextAnimation from "@/components/textanimation";

const Card = ({
  i,
  title,
  description,
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
            <img
              src="https://res.cloudinary.com/dfnxmrqmt/image/upload/v1702757994/jz1n8tar2diyuijxpky5.webp"
              alt="text text"
              width={300}
              className="hidden sm:block"
            />
            <div className="justify-center items-center sm:mx-auto md:mx-auto">
              <TextAnimation text="sssssssss" />
              <div className="mt-10">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                  autem ab exercitationem laborum commodi molestias magnam vero
                  id ipsum debitis?
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
