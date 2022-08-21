import Image from "next/image";
import { GrLinkNext } from "react-icons/gr";
import { motion } from "framer-motion";
export default function PopularCategory() {
  return (
    <motion.section
      className="popularCategory px-5"
    >
      <div className=" container">
        <div className=" grid grid-cols-2">
          <div className=" col-span-1">
            <h3 className=" font-bold text-4xl">Popular Category</h3>
          </div>
          <div className=" col-span-1 text-end">
            <button className=" text-main font-semibold ">
              View all Category
            </button>
          </div>
          <motion.div
            whileHover={{ scale: 0.95 }}
            whileTap={{ scale: 0.9 }}
            className="lg:col-span-1 col-span-full mt-10 -ml-5 relative opacity-90 hover:opacity-100 transition-all"
          >
            <Image
              src={"/assets/Rectangle 14.png"}
              width={680}
              height={440}
              alt=""
            />
            <div className=" absolute bottom-14 left-12">
              <p className=" text-white font-bold text-2xl">Manicure</p>
              <span className=" text-white">243+ Business</span>
            </div>
            <div className=" absolute bottom-14 right-12 bg-main p-4 rounded-full cursor-pointer">
              <a className="text-white" href="">
                <GrLinkNext className=" text-white" />
              </a>
            </div>
          </motion.div>
          <div className="lg:col-span-1 col-span-full mt-12">
            <div className=" grid grid-cols-2 gap-y-3 lg:gap-x-0 gap-x-3">
              {[
                { id: 1, img: "/assets/Rectangle 15.png", name: "Pedicure" },
                { id: 2, img: "/assets/Rectangle 17.png", name: "Haircut" },
                { id: 3, img: "/assets/Rectangle 16.png", name: "IV therap" },
                { id: 4, img: "/assets/Rectangle 18.png", name: "Trimming" },
              ].map(({ id, img, name }) => (
                <motion.div
                  whileHover={{ scale: 0.95 }}
                  whileTap={{ scale: 0.9 }}
                  className=" col-span-1 relative opacity-90 hover:opacity-100 transition-all cursor-pointer"
                  key={id}
                >
                  <Image src={img} width={300} height={185} alt="" />
                  <div className=" absolute bottom-8 left-5">
                    <p className=" text-white font-bold text-2xl">{name}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
