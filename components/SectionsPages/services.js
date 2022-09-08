import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import { GrNext, GrPrevious } from "react-icons/gr";
import useFetch from "../Hooks/useFetch";
import { motion } from "framer-motion";
import Image from "next/image";
import ImgBlurLazy from "../Tools/ImgBlurLazy";
export default function Services() {
  const {
    data: businessCategories,
    loading,
    error,
    refetch,
  } = useFetch(
    "https://api.dev.boka.co/business-management/lookups/business-categories"
  );
  if (error) console.log(error);

  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 8,
    slidesToScroll: 8,
    initialSlide: 0,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 8,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };
  return (
    <section className="services my-14 relative">
      <div className=" container">
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          className=" z-50 absolute lg:left-28 left-2 top-10 cursor-pointer"
          onClick={() => sliderRef.current.slickPrev()}
        >
          <GrPrevious className=" text-3xl" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          className=" absolute lg:right-28 z-50 right-2 top-10 cursor-pointer"
          onClick={() => sliderRef.current.slickNext()}
        >
          <GrNext className=" text-3xl" />
        </motion.div>
        <Slider {...settings} ref={sliderRef}>
          {businessCategories?.data.map(({ id, nameEn, iconUrl }) => (
            <div className="px-3" key={id}>
              <div className=" overflow-hidden rounded-full flex justify-center">
                <ImgBlurLazy src={iconUrl} width={86} height={86} />
              </div>
              <p className=" text-center mt-3">{nameEn}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
