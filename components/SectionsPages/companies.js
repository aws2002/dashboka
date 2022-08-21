import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
export default function Companies({children}) {
  const { ref, inView } = useInView({
    triggerOnce:true
  });
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: { type: "spring", duration: 1, bounce: 0.3 },
      });
    } else {
      animation.start({
        x: "-100vw",
      });
    }
  },);
  return (
    <div ref={ref}>
      <motion.section
        animate={animation}
        className=" relative bg-[#E3ECEE] lg:py-[70px] py-[40px] overflow-hidden my-20"
      >
        <div className=" absolute top-0">
          <Image width={280} height={200} src="/assets/Union.png" alt="" />
        </div>
        <div className=" container z-50 relative">
          <div className=" grid lg:grid-cols-5 grid-cols-6">
            {children}
          </div>
        </div>
      </motion.section>
    </div>
  );
}

