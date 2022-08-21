import React from "react";
export default function Brands({ brands }) {
  return (
    <div className="lg:col-span-1 col-span-2 mb-4  flex justify-center items-center">
      <picture>
        <img className="w-36 h-8" src={brands.logoUrl} alt="" />
      </picture>
    </div>
  );
}
