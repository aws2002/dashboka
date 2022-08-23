import Image from "next/image";
import Slider from "react-slick";
import React, { useRef } from "react";
import Rating from "../Tools/Rating";
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";
import { motion } from "framer-motion";
import useFetch from "../Hooks/useFetch";
import ReadMoreReadLess from "../Tools/ReadMoreReadLess";
export default function CustomersSays() {
  const {
    data: customers,
    loading,
    error,
    refetch,
  } = useFetch(
    "https://api.dev.boka.co/content-management/customers-testimonials"
  );
  const sliderRef = useRef(null);
  if (error) console.log(error);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <motion.section
      className="customers--says my-10 relative px-4"
    >
      <div className=" container">
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          className=" z-50 absolute cursor-pointer top-44 lg:left-24 left-2 transition-all hover:text-main hover:shadow-lg p-3 rounded-full"
          onClick={() => sliderRef.current.slickPrev()}
        >
          <GrFormPreviousLink className=" text-3xl " />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          className="z-50 absolute cursor-pointer top-44 lg:right-24 right-2 transition-all hover:text-main hover:shadow-lg p-3 rounded-full"
          onClick={() => sliderRef.current.slickNext()}
        >
          <GrFormNextLink className=" text-3xl" />
        </motion.div>
        <h2 className=" text-center lg:text-4xl text-3xl font-extrabold">
          Our happy customers say about us
        </h2>
        <Slider {...settings} className=" mt-10" ref={sliderRef}>
          {customers?.data.map(
            ({
              id,
              descEn,
              rating,
              customerNameEn,
              authorNameEn,
              authorJobEn,
              authorImageUrl,
            }) => (
              <div className="px-8" key={id}>
                <ReadMoreReadLess
                  className="text-[#17505C] font-medium inline"
                  max={200}
                >
                  {descEn}
                </ReadMoreReadLess>
                <p className=" text-[#17505C] font-medium"></p>
                <div className=" grid grid-cols-12 mt-4">
                  <div className=" col-span-7 mb-4">
                    <Rating value={rating} />
                  </div>
                  <div className=" col-span-5 flex justify-end">
                    <span className="text-[#17505C] italic">
                      - {customerNameEn}
                    </span>
                  </div>
                  <div className=" col-span-4 ">
                    <picture>
                      <img className="w-16 h-16" src={authorImageUrl} alt="" />
                    </picture>
                  </div>
                  <div className=" col-span-8 my-auto">
                    <h4 className=" font-extrabold text-xl">{authorNameEn}</h4>
                    <span className=" text-slate-400 text-sm">
                      {authorJobEn}
                    </span>
                  </div>
                </div>
              </div>
            )
          )}
        </Slider>
      </div>
    </motion.section>
  );
}
