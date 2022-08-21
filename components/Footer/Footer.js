import Image from "next/image";
import Link from "next/link";
import data from "../Data";
import { motion } from "framer-motion";
export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-color_3">
      <div className=" container">
        <div className=" grid grid-cols-12 lg:gap-x-12 gap-x-6">
          <div className="lg:col-span-3 col-span-full mb-7">
            <a href="#">
              <Image
                src={"/assets/logoscv.svg"}
                width={200}
                alt=""
                height={50}
              />
            </a>
            <p className="mt-2 text-[#6B7C80]">
              Lorem ipsum dolor sit amet, cons ectetur adipiscing elit, sed do
              eius mod tempor incididunt.
            </p>
          </div>
          <div className="lg:col-span-2 col-span-6 pt-5">
            <ul>
              <li className=" font-semibold text-lg">Discover</li>
              {data.footerLinks.discover.map(({ id, name, href }) => (
                <li
                  className="mt-4 text-[#6B7C80] transition-all hover:text-main"
                  key={id}
                >
                  <Link href={href}>
                    <a>{name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className=" lg:col-span-2 col-span-6">
            <div className=" grid grid-cols-1">
              <div className=" col-span-full pt-5">
                <ul>
                  <li className=" font-semibold text-lg">Opentable</li>
                  {data.footerLinks.opentable.map(({ id, name, href }) => (
                    <li
                      className="mt-4 text-[#6B7C80] transition-all hover:text-main "
                      key={id}
                    >
                      <Link href={href}>
                        <a>{name}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className=" col-span-full pt-5">
                <ul>
                  <li className=" font-semibold text-lg">More</li>
                  {data.footerLinks.more.map(({ id, name, href }) => (
                    <li
                      className="mt-4 text-[#6B7C80] transition-all hover:text-main"
                      key={id}
                    >
                      <Link href={href}>
                        <a>{name}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 col-span-6 pt-5">
            <ul>
              <li className=" font-semibold text-lg">Our Sites</li>
              {data.footerLinks.ourSites.map(({ id, name, href }) => (
                <li
                  className="mt-4 text-[#6B7C80] transition-all hover:text-main"
                  key={id}
                >
                  <Link href={href}>
                    <a>{name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className=" lg:col-span-2 col-span-6">
            <div className=" grid-cols-1 grid">
              <div className=" col-span-full pt-5">
                <ul>
                  <li className=" font-semibold text-lg">More</li>
                  {data.footerLinks.businesses.map(({ id, name, href }) => (
                    <li
                      className="mt-4 text-[#6B7C80] transition-all hover:text-main"
                      key={id}
                    >
                      <Link href={href}>
                        <a>{name}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className=" col-span-full pt-5">
                <ul>
                  <li className=" font-semibold text-lg">Join Us On</li>

                  <div className=" grid grid-cols-4 gap-4">
                    {data.footerLinks.social.map(({ id, icon, href }) => (
                      <Link href={href} key={id}>
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.8 }}
                          className=" col-span-1 bg-white w-10 h-10 rounded-full text-[#A4C1C8] cursor-pointer transition-all hover:text-main"
                        >
                          <div className=" flex justify-center items-center mt-3 ">
                            {icon}
                          </div>
                        </motion.div>
                      </Link>
                    ))}
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <div className=" lg:col-span-8 col-span-full mt-8">
            <ul>
              {data.footerLinks.links_2.map(({ id, name, href }) => (
                <li
                  className="mt-4 inline text-[#6B7C80] mr-10 transition-all hover:text-main"
                  key={id}
                >
                  <Link href={href}>
                    <a>{name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className=" lg:col-span-4 col-span-full lg:justify-end justify-center flex mt-8">
            <p className="text-[#6B7C80]">
              Copyright © 2022 Boka, Inc. All rights reserved.
            </p>
          </div>
          <div className=" lg:col-span-4 col-span-full mt-5">
            <p className="text-[#6B7C80]">
              OpenTable is part of Booking Holdings, the world leader in online
              travel and related services.
            </p>
          </div>
          <div className="lg:col-span-8 col-span-full lg:justify-end justify-center flex mt-5">
            <Image src={"/assets/paymet.png"} width={222} height={34} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
}
