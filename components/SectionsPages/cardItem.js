import Slider from "react-slick";
import React, { useRef, useState, Fragment } from "react";
import { TiLocationOutline } from "react-icons/ti";
import { AiOutlineHome } from "react-icons/ai";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { FiEdit3 } from "react-icons/fi";
import ReadMoreReadLess from "../Tools/ReadMoreReadLess";
import { useTranslation } from "react-i18next";
import Rating from "../Tools/Rating";
import Image from "next/image";
import ListBox from "./ListBox";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/solid";
import { IoIosArrowDown } from "react-icons/io";
export default function CardItem({ businesses }) {
  const [selectedTime, setselectedTime] = useState(null);
  const [t, il18n] = useTranslation();
  const [active, setActive] = useState(1);
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
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
  const [selected, setSelected] = useState(businesses.services[0]);
  const data = businesses.services;
  return (
    <div className="lg:pr-4 card">
      {businesses.type === "BUSINESS" && (
        <div className="border rounded-md overflow-hidden bg-white">
          <Image
            src={businesses.businessImages[0].imageUrl}
            objectFit="fill"
            width={300}
            height={150}
            priority
            layout="responsive"
            alt=""
          />

          <div className=" p-3">
            <ReadMoreReadLess className={"font-bold text-xl inline"} max={20}>
              {businesses.nameEn}
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
                {/* <ListBox data={businesses.services} /> */}
                <Listbox value={selected} onChange={setSelected}>
                  <div className="relative mt-1 z-50">
                    <Listbox.Button className="cursor-pointer relative w-full rounded-lg border border-main bg-[#ffdec9] py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                      <span className="block truncate capitalize font-medium">
                        {selected.nameEn}
                      </span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <IoIosArrowDown
                          aria-hidden="true"
                          className="h-5 w-5"
                        />
                      </span>
                    </Listbox.Button>
                    <Transition
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className=" overflow-y-scroll absolute mt-1 max-h-28 w-full rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {data.map((person, personIdx) => (
                          <Listbox.Option
                            key={personIdx}
                            className={({ active }) =>
                              `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                active
                                  ? "bg-amber-100 text-amber-900"
                                  : "text-gray-900"
                              }`
                            }
                            value={person}
                          >
                            {({ selected }) => (
                              <>
                                <span
                                  className={`block truncate ${
                                    selected ? "font-medium" : "font-normal"
                                  }`}
                                >
                                  {person.nameEn}
                                </span>
                                {selected ? (
                                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                    <CheckIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </Listbox>
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
                        <div
                          className=""
                          key={id}
                          onClick={() => setselectedTime(id)}
                        >
                          <p
                            className={
                              selectedTime == id
                                ? ` mt-3 bg-main text-sm text-white hover:text-white font-medium cursor-pointer hover:bg-main  rounded-lg transition-all mr-2 p-2`
                                : ` mt-3 bg-slate-100 text-sm hover:text-white font-medium cursor-pointer hover:bg-main  text-[#17505C] rounded-lg transition-all mr-2 p-2`
                            }
                          >
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
                    ${selected.price}
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
            priority
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
                  {businesses.nameEn}
                  
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
                  priority
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
                        <div
                          className=""
                          key={id}
                          onClick={() => setselectedTime(id)}
                        >
                          <p
                            className={
                              selectedTime == id
                                ? ` mt-3 bg-main text-sm text-white hover:text-white font-medium cursor-pointer hover:bg-main  rounded-lg transition-all mr-2 p-2`
                                : ` mt-3 bg-slate-100 text-sm hover:text-white font-medium cursor-pointer hover:bg-main  text-[#17505C] rounded-lg transition-all mr-2 p-2`
                            }
                          >
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
