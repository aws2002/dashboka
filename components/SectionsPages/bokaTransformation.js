import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { TbArrowsHorizontal } from "react-icons/tb";

export default function BokaTransformation({ data }) {
  const [imageRevealFraq, setImageRevealFraq] = useState(0.5);
  const imageContainer = useRef(undefined);

  const [imageRevealFraq2, setImageRevealFraq2] = useState(0.5);
  const imageContainer2 = useRef(undefined);

  const slide = (xPosition) => {
    const containerBoundingRect =
      imageContainer.current.getBoundingClientRect();
    setImageRevealFraq(() => {
      if (xPosition < containerBoundingRect.left) {
        return 0;
      } else if (xPosition > containerBoundingRect.right) {
        return 1;
      } else {
        return (
          (xPosition - containerBoundingRect.left) / containerBoundingRect.width
        );
      }
    });
  };
  const slide2 = (xPosition) => {
    const containerBoundingRect =
      imageContainer2.current.getBoundingClientRect();
    setImageRevealFraq2(() => {
      if (xPosition < containerBoundingRect.left) {
        return 0;
      } else if (xPosition > containerBoundingRect.right) {
        return 1;
      } else {
        return (
          (xPosition - containerBoundingRect.left) / containerBoundingRect.width
        );
      }
    });
  };
  const handleTouchMove = (event) => {
    slide(event.touches.item(0).clientX);
  };

  const handleMouseDown = () => {
    window.onmousemove = handleMouseMove;
    window.onmouseup = handleMouseUp;
  };

  const handleMouseMove = (event) => {
    slide(event.clientX);
  };

  const handleMouseUp = () => {
    window.onmousemove = undefined;
    window.onmouseup = undefined;
  };

  const handleTouchMove2 = (event) => {
    slide2(event.touches.item(0).clientX);
  };

  const handleMouseDown2 = () => {
    window.onmousemove = handleMouseMove2;
    window.onmouseup = handleMouseUp2;
  };

  const handleMouseMove2 = (event) => {
    slide2(event.clientX);
  };

  const handleMouseUp2 = () => {
    window.onmousemove = undefined;
    window.onmouseup = undefined;
  };
  return (
    <motion.section className="boka--transformation mb-24 bg-[#FFFAF8] py-20 px-4">
      <div className=" container">
        <div className=" grid grid-cols-12 gap-4">
          <div className=" col-span-6">
            <h3 className=" font-bold lg:text-4xl text-2xl">
              Boka Transformation
            </h3>
          </div>
          <div className=" col-span-6 text-end">
            <button className=" text-main font-semibold border border-main px-4 py-2 rounded-lg hover:bg-main transition-all hover:text-white">
              Book Now
            </button>
          </div>
          <div className=" lg:hidden block lg:col-span-8 col-span-full mt-8">
            <div className="px-4 overflow-hidden">
              <div
                ref={imageContainer2}
                className="max-w-2xl relative select-none group rounded-[50px] overflow-hidden"
              >
                <div>
                  <Image
                    src={"/assets/Rectangle 40.png"}
                    alt=""
                    priority
                    width={442}
                    height={417}
                    className="pointer-events-none "
                  />

                  {/* <span className={`text-4xl top-5 right-11 absolute font-extrabold`}>
                  After
                  </span> */}
                </div>
                <div>
                  <picture className="absolute inset-0 pointer-events-none w-full h-full">
                    <Image
                      style={{
                        clipPath: `polygon(0 0, ${imageRevealFraq2 * 100}% 0, ${
                          imageRevealFraq2 * 100
                        }% 100%, 0 100%)`,
                      }}
                      src="/assets/Rectangle 41.png"
                      alt=""
                      priority
                      width={442}
                      height={417}
                    />
                  </picture>
                  {/* <span className={`text-4xl bottom-5 left-11  text-white absolute font-extrabold`}>
                  Before
                  </span> */}
                </div>

                <div
                  style={{ left: `${imageRevealFraq2 * 100}%` }}
                  className="absolute inset-y-0 group-hover:opacity-100 sm:opacity-0"
                >
                  <div className="relative h-full opacity-50 hover:opacity-100">
                    <div className="absolute inset-y-0 bg-white w-0.5 -ml-px"></div>
                    <div className="absolute inset-y-0 bg-white w-1 -ml-px"></div>
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                      onMouseDown={handleMouseDown2}
                      onTouchMove={handleTouchMove2}
                      className="h-12 w-12 -ml-6 -mt-6 rounded-full bg-white absolute top-1/2 shadow-xl flex items-center justify-center cursor-pointer"
                    >
                      <TbArrowsHorizontal className="text-2xl text-gray-400 transform" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" lg:block hidden lg:col-span-8 col-span-full mt-8">
            <div className="px-4 overflow-hidden">
              <div
                ref={imageContainer}
                className="max-w-3xl relative select-none group"
              >
                <div className=" grid grid-cols-2">
                  {[
                    {
                      id: 1,
                      img: data.data[0].imageBeforeUrl,
                      textColor: "text-white",
                      titel: "Before",
                      className: "absolute lg:bottom-7 bottom-4 left-3",
                    },
                    {
                      id: 2,
                      img: data.data[0].imageAfterUrl,
                      textColor: "text-black",
                      titel: "After",
                      className: "absolute lg:top-7 top-2 right-3",
                    },
                  ].map(({ id, img, titel, className, textColor }) => (
                    <div className=" col-span-1 relative ml-1" key={id}>
                      <Image
                        src={img}
                        alt=""
                        priority
                        width={442}
                        height={417}
                        className="pointer-events-none "
                      />

                      <div
                        className={className}
                        style={{
                          clipPath: `polygon(0 0, ${
                            imageRevealFraq * 100
                          }% 0, ${imageRevealFraq * 100}% 100%, 0 100%)`,
                        }}
                      >
                        <span
                          className={`${textColor} lg:text-4xl text-2xl font-extrabold`}
                        >
                          {titel}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  style={{ left: `${imageRevealFraq * 100}%` }}
                  className="absolute inset-y-0 "
                >
                  <div className="relative h-full opacity-50 hover:opacity-100">
                    <div className="absolute inset-y-0 bg-white w-1 -ml-px"></div>
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                      onMouseDown={handleMouseDown}
                      onTouchMove={handleTouchMove}
                      className="h-12 w-12 -ml-6 -mt-6 rounded-full bg-white absolute top-1/2 shadow-xl flex items-center justify-center cursor-pointer"
                    >
                      <TbArrowsHorizontal className="text-2xl text-gray-400 transform" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" lg:col-span-4 col-span-full px-6 my-auto">
            <p className=" text-[#17505C] font-medium text-lg">
              ” Estoy muy feliz con mis resultados, Joe realmente transformó mi
              cabello. Solía ​​sentirse tan aburrido y sin vida, y después de
              ver a Joe, mi cabello ha recuperado su brillo y vida. He recibido
              muchos elogios y recomendaría a cualquiera que conozca que vaya a
              ver a Joe ”
            </p>
            <div className=" grid-cols-12 grid mt-4">
              <div className="col-span-3">
                <Image
                  width={60}
                  priority
                  height={60}
                  src="/assets/Rectangle 9.png"
                  alt=""
                />
              </div>
              <div className=" col-span-9 my-auto">
                <h4 className=" font-extrabold">Shoukri Kattan</h4>
                <span className=" text-slate-400 text-xs">
                  Hair Specialist @boka
                </span>
              </div>
              <div className=" col-span-full mt-8">
                <span className=" text-main font-semibold">
                  Book Shoukri for $49
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
