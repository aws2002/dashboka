import Link from "next/link";
import Slider from "react-slick";
import React, { useRef } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import { motion } from "framer-motion";
export default function FeaturedBusinesses({ children }) {

  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
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
      className="bxploring--businesses px-4 my-20"
    >
      <div className=" container">
        <div className=" grid grid-cols-12">
          <div className="lg:col-span-10 col-span-full">
            <h2 className="font-bold lg:text-4xl text-2xl">Featured Businesses</h2>
          </div>
          <div className=" lg:col-span-2 lg:mt-0 col-span-full mt-4 text-end">
            <div className=" grid grid-cols-3">
              <div className=" col-span-1">
                <Link href="">
                  <a className=" text-main font-medium transition-all hover:opacity-90">
                    View all
                  </a>
                </Link>
              </div>
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                className=" col-span-1 flex justify-end cursor-pointer"
                onClick={() => sliderRef.current.slickPrev()}
              >
                <GrPrevious className=" text-3xl" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                className=" col-span-1 flex justify-end cursor-pointer"
                onClick={() => sliderRef.current.slickNext()}
              >
                <GrNext className=" text-3xl" />
              </motion.div>
            </div>
          </div>
          <div className=" col-span-full mt-8">
            <Slider {...settings} ref={sliderRef}>
              {children}
            </Slider>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
