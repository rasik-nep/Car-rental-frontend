"use client";
import { CAR_LOGO_SLIDE_DATA } from "@/constant";
import Image from "next/image";
import CarLogoSlide from "../CarLogoSlide";
import { motion, useScroll, useTransform } from "motion/react";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -200]);

  return (
    <div className="bg-background relative overflow-hidden h-screen">
      {/* Absolutely positioned image for large screens */}
      <motion.div
        className="block absolute top-[330px] md:top-[250px] lg:top-[100px] left-0 md:left-50 lg:left-220 h-[50rem] w-[50rem] lg:h-[95rem] lg:w-[95rem] z-0 py-10"
        style={{ y }}
      >
        <Image
          src="/neta-car.png"
          alt="neta-car"
          width={1700}
          height={1000}
          priority
          style={{
            objectFit: "cover",
          }}
        />
      </motion.div>

      <main className="relative z-10 max-w-[90vw] mx-auto px-4 py-5 sm:px-6 lg:px-8 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-[50%]">
              <div className="w-full lg:w-[80%] mt-25">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-5xl sm:text-6xl lg:text-9xl font-extrabold text-text-500 leading-none"
                >
                  Premium Car Rental in Nepal
                </motion.h1>
                <motion.h4
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-2xl sm:text-3xl lg:text-5xl text-text-500 py-5 leading-tight"
                >
                  With a commitment to excellence and customer satisfaction, we
                  strive to.
                </motion.h4>
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      <div className="block lg:hidden h-[35vh] md:h-[50vh] "></div>
      <div className="flex flex-row items-center justify-center gap-15 md:gap-18 h-[10vh] lg:h-[20vh] overflow-auto">
        {CAR_LOGO_SLIDE_DATA.map((item) => (
          <CarLogoSlide key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
