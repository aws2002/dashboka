import React from "react";
import Image from "next/image";
import ImgBlurLazy from "../Tools/ImgBlurLazy";

export default function Brands({ brands }) {
  return (
    <div className="lg:col-span-1 col-span-2 mb-4 px-4  flex justify-center items-center">
      <ImgBlurLazy src={brands.logoUrl} width={120} height={30}/>
    </div>
  );
}
