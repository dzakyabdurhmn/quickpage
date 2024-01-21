import React from "react";
import { motion } from "framer-motion";

interface Icon {
  children: React.ReactNode;
}

function scaleIcon(props: Icon) {
  return (
    <div>
      <motion.div
        className="box"
        animate={{
          scale: [0.1, 0.5, 0.7, 1, 1],
          rotate: [0, 25, -25, 25, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
        }}
      >
        {props.children}
      </motion.div>
    </div>
  );
}

export default scaleIcon;
