import Slider from "react-slick";
import React, { useRef, useState } from "react";
import { TiLocationOutline } from "react-icons/ti";
import { GrNext } from "react-icons/gr";
import { motion } from "framer-motion";
import { FiEdit3 } from "react-icons/fi";
import ReadMoreReadLess from "../Tools/ReadMoreReadLess";
import { useTranslation } from "react-i18next";
import Rating from "../Tools/Rating";
export default function CardItem({ businesses }) {
  const [t, il18n] = useTranslation();
  const [active, setActive] = useState(1);
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
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
    <div className="pr-4">
      {businesses.type === "BUSINESS" && (
        <div className="border rounded-md overflow-hidden bg-white">
          <div className=" h-36 ">
            <picture>
              <img
                src={businesses.businessImages[0].imageUrl}
                className=" w-full h-full"
                alt=""
              />
            </picture>
          </div>
          <div className=" p-3">
            <ReadMoreReadLess className={"font-bold text-xl inline"} max={20}>
              {/* {businesses.nameEn} */}
              {il18n.language === "en"
                ? businesses.nameEn
                : il18n.language === "es"
                ? businesses.nameEs
                : ""}
            </ReadMoreReadLess>
            <ul>
              <li className=" inline mr-2">
                <Rating value={businesses.rating} />
              </li>
              <li className=" inline font-medium text-[#17505C]">
                ({businesses.reviewsNo}){" "}
                {businesses.rating.toString().substr(0, 3)}
              </li>
            </ul>
            <div className=" grid grid-cols-12 mt-3">
              <div className=" col-span-10">
                <p className=" font-medium">
                  {businesses.address[0].formatted}
                </p>
              </div>
              <div className=" col-span-2 flex justify-end items-center">
                <TiLocationOutline className=" text-2xl text-main" />
              </div>
              <div className=" relative col-span-full mt-4">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  onClick={() => sliderRef.current.slickNext()}
                  className=" absolute transition-all hover:bg-main text-main hover:text-white bg-white shadow cursor-pointer  p-3 rounded-full top-3 right-1 z-50"
                >
                  <GrNext />
                </motion.div>
                <Slider {...settings} ref={sliderRef}>
                  {businesses.services.map(({ id, nameEn }) => (
                    <div className="" key={id}>
                      <p className="mt-3 bg-slate-100 hover:text-white font-medium cursor-pointer hover:bg-main  text-[#17505C] rounded-lg transition-all mr-2 p-2">
                        {nameEn}
                      </p>
                    </div>
                  ))}
                </Slider>
              </div>
              <div className=" col-span-full mt-1">
                <div className=" grid grid-cols-6">
                  <div className=" col-span-5">
                    <div className=" grid grid-cols-3">
                      {[
                        { id: 1, time: "8:00 am" },
                        { id: 2, time: "8:30 am" },
                        { id: 3, time: "8:30 am" },
                      ].map(({ id, time }) => (
                        <div className=" col-span-1" key={id}>
                          <p className="mt-3 bg-slate-100 hover:text-white font-medium text-sm cursor-pointer hover:bg-main  text-[#17505C] rounded-lg transition-all mr-2 p-2">
                            {time}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className=" col-span-1">
                    <div className=" col-span-1">
                      <p className="mt-3 bg-slate-100 hover:text-white text-sm font-medium cursor-pointer hover:bg-main  text-[#17505C] rounded-lg transition-all mr-2 p-2">
                        +5
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" grid grid-cols-12 mt-9">
              <div className=" col-span-5 my-auto">
                <p className="text-slate-400 font-medium italic">
                  Booked x today
                </p>
              </div>
              <div className=" col-span-7 ml-auto">
                <span className="text-center block text-xl text-slate-500 line-through">
                  $31.99
                </span>
                <ul className=" mt-1">
                  <li className=" inline mr-2 font-extrabold text-xl">
                    $29.92
                  </li>
                  <li className=" inline text-lg bg-[#EB5757] rounded-lg text-white px-2 py-1">
                    20%
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
      {businesses.type === "FREELANCER" && (
        <div className="border rounded-md overflow-hidden bg-white pb-1">
          <div className=" h-36 ">
            <picture>
              <img
                src={businesses.businessImages[0].imageUrl}
                className=" w-full h-full"
                alt=""
              />
            </picture>
          </div>
          <div className=" p-3">
            <h2 className=" font-bold text-xl">
              Hair X Pression Unisex Hair..
            </h2>
            <ul>
              <li className=" inline mr-2">
                <Rating value={businesses.rating} />
              </li>
              <li className=" inline font-medium text-[#17505C]">
                ({businesses.reviewsNo}){" "}
                {businesses.rating.toString().substr(0, 3)}
              </li>
            </ul>
            <div className=" grid grid-cols-12 mt-3">
              <div className=" col-span-full  mb-2">
                <div className=" grid grid-cols-2 gap-x-1">
                  {[
                    { id: 1, name: "At Home Service" },
                    { id: 2, name: "Provider Studio" },
                  ].map(({ id, name }) => (
                    <div
                      key={id}
                      onClick={() => setActive(`${id}`)}
                      className={
                        active == id
                          ? ` col-span-1 bg-white text-main border cursor-pointer border-main rounded-lg p-2 font-medium text-sm`
                          : ` col-span-1 bg-slate-100 rounded-lg p-2 font-medium text-sm cursor-pointer`
                      }
                    >
                      <button>{name}</button>
                    </div>
                  ))}
                </div>
              </div>
              {active == 1 && (
                <>
                  <div className=" col-span-10">
                    <p className=" font-medium">5 mile away</p>
                    <span className=" font-medium text-sm">
                      400 S 2nd St Louisville, KY 40202{" "}
                    </span>
                  </div>
                  <div className=" col-span-2 flex justify-end items-center">
                    <TiLocationOutline className=" text-2xl text-main" />
                  </div>
                </>
              )}
              {active == 2 && (
                <>
                  <div className=" col-span-10">
                    <p className=" font-medium">Your address</p>
                    <span className=" font-medium text-sm">
                      Please enter your address{" "}
                    </span>
                  </div>
                  <div className=" col-span-2 flex justify-end items-center">
                    <FiEdit3 className=" text-2xl text-main" />
                  </div>
                </>
              )}

              <div className=" col-span-full mt-1">
                <div className=" bg-main text-center py-2 rounded-lg text-white transition-all hover:bg-white hover:text-main border border-main cursor-pointer">
                  <button>Manicure</button>
                </div>
                <div className=" grid grid-cols-6">
                  <div className=" col-span-5">
                    <div className=" grid grid-cols-3">
                      {[
                        { id: 1, time: "8:00 am" },
                        { id: 2, time: "8:30 am" },
                        { id: 3, time: "8:30 am" },
                      ].map(({ id, time }) => (
                        <div className=" col-span-1" key={id}>
                          <p className="mt-3 bg-slate-100 hover:text-white font-medium text-sm cursor-pointer hover:bg-main  text-[#17505C] rounded-lg transition-all mr-2 p-2">
                            {time}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className=" col-span-1">
                    <div className=" col-span-1">
                      <p className="mt-3 bg-slate-100 hover:text-white text-sm font-medium cursor-pointer hover:bg-main  text-[#17505C] rounded-lg transition-all mr-2 p-2">
                        +5
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" grid grid-cols-12 mt-4">
              <div className=" col-span-5 my-auto">
                <p className="text-slate-400 font-medium italic">
                  Booked x today
                </p>
              </div>
              <div className=" col-span-7 ml-auto">
                <span className="text-center block text-xl text-slate-500 line-through">
                  $31.99
                </span>
                <ul className=" mt-1">
                  <li className=" inline mr-2 font-extrabold text-xl">
                    $29.92
                  </li>
                  <li className=" inline text-lg bg-[#EB5757] rounded-lg text-white px-2 py-1">
                    20%
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}