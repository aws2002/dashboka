import Slider from "react-slick";
import React, { useRef, useState } from "react";
import { TiLocationOutline } from "react-icons/ti";
import { AiOutlineHome } from "react-icons/ai";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { FiEdit3 } from "react-icons/fi";
import ReadMoreReadLess from "../Tools/ReadMoreReadLess";
import { useTranslation } from "react-i18next";
import Rating from "../Tools/Rating";
import Image from "next/image";
import ListBox from "./ListBox";

export default function CardItem({ businesses }) {
  const [t, il18n] = useTranslation();
  const [active, setActive] = useState(1);
  const [selectItem, setSelectItem] = useState(0);
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
          <Image
            src={businesses.businessImages[0].imageUrl}
            objectFit="fill"
            width={300}
            height={150}
            layout="responsive"
            alt=""
          />

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
              <li className=" inline font-medium  text-[#17505C]">
                ({" "}
                <span className=" font-normal">
                  {businesses.reviewsNo} Reviews
                </span>{" "}
                ) {businesses.rating.toString().substr(0, 3)}
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
                <ListBox data={businesses.services} />
              </div>
              <div className=" col-span-full mt-1">
                <div className=" grid grid-cols-6">
                  <div className=" col-span-5">
                    <Slider {...settings} ref={sliderRef}>
                      {[
                        { id: 1, time: "8:00 am" },
                        { id: 2, time: "8:30 am" },
                        { id: 3, time: "8:30 am" },
                        { id: 4, time: "8:30 am" },
                        { id: 5, time: "8:30 am" },
                        { id: 6, time: "8:30 am" },
                      ].map(({ id, time }) => (
                        <div className="" key={id}>
                          <p className="mt-3 bg-slate-100 text-sm hover:text-white font-medium cursor-pointer hover:bg-main  text-[#17505C] rounded-lg transition-all mr-2 p-2">
                            {time}
                          </p>
                        </div>
                      ))}
                    </Slider>
                  </div>
                  <div className=" col-span-1">
                    <div className=" col-span-1">
                      <p
                        onClick={() => sliderRef.current.slickNext()}
                        className="mt-3 bg-slate-100 hover:text-white text-sm font-medium cursor-pointer hover:bg-main  text-[#17505C] rounded-lg transition-all text-center  p-2"
                      >
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
        <div className="border rounded-md overflow-hidden bg-white">
          <Image
            src={businesses.businessImages[0].imageUrl}
            objectFit="fill"
            width={300}
            height={150}
            layout="responsive"
            alt=""
          />
          <div className=" p-3">
            <div className=" grid grid-cols-12">
              <div className=" col-span-10">
                <ReadMoreReadLess
                  className={"font-bold text-xl inline"}
                  max={20}
                >
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
              </div>
              <div className=" col-span-2 my-auto">
                <Image
                  alt=""
                  src={"/assets/Rectangle 9 (7).png"}
                  width={50}
                  height={50}
                />
              </div>
            </div>

            <div className=" grid grid-cols-12 mt-3">
              <div className=" col-span-full  mb-2">
                <div className=" grid grid-cols-2 gap-x-1">
                  {[
                    {
                      id: 1,
                      name: "Home Studio",
                      icon: <AiOutlineHome className="  text-lg" />,
                    },
                    {
                      id: 2,
                      name: "Salon Suite",
                      icon: (
                        <SiHomeassistantcommunitystore className="  text-lg" />
                      ),
                    },
                  ].map(({ id, name, icon }) => (
                    <div
                      key={id}
                      onClick={() => setActive(`${id}`)}
                      className={
                        active == id
                          ? ` col-span-1 bg-white text-main border cursor-pointer border-main rounded-lg p-2 font-medium text-sm`
                          : ` col-span-1 bg-slate-100 rounded-lg p-2 font-medium text-sm cursor-pointer`
                      }
                    >
                      <div className=" grid grid-cols-12 gap-x-6">
                        <div className=" col-span-1">{icon}</div>
                        <div className=" col-span-11">
                          <button>{name}</button>
                        </div>
                      </div>
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
                <ListBox data={businesses.services} />
                <div className=" grid grid-cols-6">
                <div className=" col-span-5">
                    <Slider {...settings} ref={sliderRef}>
                      {[
                        { id: 1, time: "8:00 am" },
                        { id: 2, time: "8:30 am" },
                        { id: 3, time: "8:30 am" },
                        { id: 4, time: "8:30 am" },
                        { id: 5, time: "8:30 am" },
                        { id: 6, time: "8:30 am" },
                      ].map(({ id, time }) => (
                        <div className="" key={id}>
                          <p className="mt-3 bg-slate-100 text-sm hover:text-white font-medium cursor-pointer hover:bg-main  text-[#17505C] rounded-lg transition-all mr-2 p-2">
                            {time}
                          </p>
                        </div>
                      ))}
                    </Slider>
                  </div>
                  <div className=" col-span-1">
                    <div className=" col-span-1">
                      <p
                        onClick={() => sliderRef.current.slickNext()}
                        className="mt-3 bg-slate-100 hover:text-white text-sm font-medium cursor-pointer hover:bg-main  text-[#17505C] rounded-lg transition-all text-center  p-2"
                      >
                        +5
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" grid grid-cols-12 mt-1">
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
