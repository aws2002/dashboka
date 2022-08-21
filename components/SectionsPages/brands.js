import React from "react";
import Image from "next/image";
export default function Brands({ brands }) {
  return (
    <div className="lg:col-span-1 col-span-2 mb-4 px-4  flex justify-center items-center">
      <Image
        width={120}
        height={30}
        objectFit="contain"
        src={brands.logoUrl}
        alt=""
      />
    </div>
  );
}
