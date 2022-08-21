import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
export default function Companies({ children }) {
  return (
    <div>
      <motion.section className=" relative bg-[#E3ECEE] lg:py-[70px] py-[40px] overflow-hidden my-20">
        <div className=" absolute top-0">
          <Image width={280} height={200} src="/assets/Union.png" alt="" />
        </div>
        <div className=" container z-50 relative">
          <div className=" grid lg:grid-cols-5 grid-cols-6">{children}</div>
        </div>
      </motion.section>
    </div>
  );
}
