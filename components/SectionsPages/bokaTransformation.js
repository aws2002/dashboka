import Image from "next/image";
import useFetch from "../Hooks/useFetch";
import { motion, useAnimation } from "framer-motion";
import { useState, useRef } from "react";
import { TbArrowsHorizontal } from "react-icons/tb";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
export default function BokaTransformation() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        transition: { type: "spring", duration: 1, bounce: 0.3 },
      });
    } else {
      animation.start({
        y: 200,
      });
    }
  });
  const [t, il18n] = useTranslation();
  const {
    data: caseStudies,
    loading,
    error,
    refetch,
  } = useFetch("https://api.dev.boka.co/content-management/case-studies");

  if (error) console.log(error);

  const [imageRevealFraq, setImageRevealFraq] = useState(0.5);
  const imageContainer = useRef(undefined);

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
  return (
    <motion.section
      ref={ref}
      animate={animation}
      className="boka--transformation mb-24 bg-[#FFFAF8] py-20 px-4"
    >
      <div className=" container">
        <div className=" grid grid-cols-12 gap-4">
          <div className=" col-span-6">
            <h3 className=" font-bold text-4xl">Boka Transformation</h3>
          </div>
          <div className=" col-span-6 text-end">
            <button className=" text-main font-semibold border border-main px-4 py-2 rounded-lg hover:bg-main transition-all hover:text-white">
              Book Now
            </button>
          </div>
          <div className=" lg:col-span-8 col-span-full mt-8">
            <div className="px-4 overflow-hidden">
              <div
                ref={imageContainer}
                className="max-w-3xl relative select-none group"
              >
                <div className=" grid grid-cols-2">
                  {[
                    {
                      id: 1,
                      img: caseStudies?.data[0].imageBeforeUrl,
                      textColor: "text-white",
                      titel: "Before",
                      className: "absolute lg:bottom-7 bottom-4 left-4",
                    },
                    {
                      id: 2,
                      img: caseStudies?.data[0].imageAfterUrl,
                      textColor: "text-black",
                      titel: "After",
                      className: "absolute lg:top-7 top-2 right-4",
                    },
                  ].map(({ id, img, titel, className, textColor }) => (
                    <div className=" col-span-1 relative ml-1" key={id}>
                      <Image
                        src={img}
                        alt=""
                        objectFit="cover"
                        width={442}
                        height={417}
                        className="pointer-events-none"
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
                          className={`${textColor} lg:text-4xl text-3xl font-extrabold`}
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
              ”
              {il18n.language === "en"
                ? caseStudies?.data[0].descEn
                : il18n.language === "es"
                ? "Estoy muy feliz con mis resultados, Joe realmente transformó mi cabello. Solía ​​sentirse tan aburrido y sin vida, y después de ver a Joe, mi cabello ha recuperado su brillo y vida. He recibido muchos elogios y recomendaría a cualquiera que conozca que vaya a ver a Joe."
                : ""}
              ”
            </p>
            <div className=" grid-cols-12 grid mt-4">
              <div className="col-span-3">
                <Image
                  width={60}
                  height={60}
                  src="/assets/Rectangle 9.png"
                  alt=""
                />
              </div>
              <div className=" col-span-9 my-auto">
                <h4 className=" font-extrabold">Shoukri Kattan</h4>
                <span className=" text-slate-400 text-xs">Hair Specialist @boka</span>
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
