import { BsCalendar3 } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiTime } from "react-icons/bi";
import { motion } from "framer-motion";
import { BsSearch } from "react-icons/bs";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { useState } from "react";
export default function HeroSections() {
  const [val, setVal] = useState("Now");
  return (
    <section className="img-hero">
      <motion.div
        className=" container"
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        layout
      >
        <div className="flex justify-center items-center lg:pt-0 pt-10 lg:h-[80vh] lg:px-36 px-5">
          <div>
            <p className=" text-white text-center font-medium  mb-5 letter-spacing-1">
              Your style booking specialist
            </p>
            <h1 className="text-white text--animate font-extrabold line-height-1 lg:px-24 lg:text-5xl text-4xl text-center">
              Clothes mean nothing until someone lives in them.
            </h1>
            <form className="mt-10 grid grid-cols-12 gap-4">
              <div className=" lg:col-span-7 col-span-full bg-white px-3 py-2 rounded-lg">
                <div className=" grid grid-cols-4">
                  <div className="col-span-1">
                    {[
                      {
                        id: "remember-me",
                        name: "remember-me",
                        titel: "At home",
                      },
                      {
                        id: "remember-me2",
                        name: "remember-me2",
                        titel: "Business",
                      },
                    ].map(({ id, name, titel }) => (
                      <div className="flex items-center mt-1" key={id}>
                        <input
                          id={id}
                          name={name}
                          type="checkbox"
                          className="h-4 w-4 border-gray-300 rounded"
                        />
                        <label
                          htmlFor={id}
                          className="ml-2 text-sm font-medium"
                        >
                          {titel}
                        </label>
                      </div>
                    ))}
                  </div>
                  {[
                    {
                      id: 1,
                      input: "Today",
                      icon: (
                        <BsCalendar3 className="text-2xl -mt-1 inline mr-1" />
                      ),
                    },
                    {
                      id: 2,
                      input: (
                        <div className="text-right inline w-full">
                          <Menu
                            as="div"
                            className="relative inline-block text-left"
                          >
                            <div>
                              <Menu.Button className="w-full rounded-md transition-all hover:text-main py-2 text-sm hover:bg-opacity-90 ">
                                <span className="">{val}</span>
                              </Menu.Button>
                            </div>
                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-100"
                              enterFrom="transform opacity-0 scale-95"
                              enterTo="transform opacity-100 scale-100"
                              leave="transition ease-in duration-75"
                              leaveFrom="transform opacity-100 scale-100"
                              leaveTo="transform opacity-0 scale-95"
                            >
                              <Menu.Items className="origin-top-right absolute px-1 -right-14 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1">
                                  <Menu.Item>
                                    <div
                                      className={
                                        "group cursor-pointer flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-color_10 font-semibold"
                                      }
                                    >
                                      8:00 AM
                                    </div>
                                  </Menu.Item>
                                </div>
                              </Menu.Items>
                            </Transition>
                          </Menu>
                        </div>
                      ),
                      icon: <BiTime className="text-2xl -mt-1 inline mr-1" />,
                    },
                    {
                      id: 3,
                      input: "Los Angeles",
                      icon: (
                        <HiOutlineLocationMarker className="text-2xl -mt-1 inline mr-1" />
                      ),
                    },
                  ].map(({ id, input, icon }) => (
                    <div
                      className=" col-span-1 flex items-center pl-1 border-l-2"
                      key={id}
                    >
                      <span className="font-medium text-sm">
                        {icon}
                        {input}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className=" lg:col-span-5 col-span-full">
                <div className=" grid grid-cols-12 gap-4">
                  <div className="col-span-8 rounded-lg">
                    <div className="relative">
                      <BsSearch className=" absolute top-4 left-3 text-3xl text-color_1" />
                      <input
                        type={"text"}
                        placeholder="Search"
                        className="font-medium w-full py-5 pl-11 focus:ring-4  rounded-lg focus:outline-none focus:border-main focus:ring-main"
                      />
                    </div>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className=" bg-main col-span-4 flex justify-center rounded-lg text-white font-semibold"
                  >
                    <button>Search</button>
                  </motion.div>
                </div>
              </div>
            </form>
            <div className=" col-span-full mt-4">
              <p className=" text-center underline underline-offset-4 text-white text-sm letter-spacing-2">
                It looks like you&apos;re in Dhaka Division. Not correct?
              </p>{" "}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
