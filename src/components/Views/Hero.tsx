"use client";
import { CAR_LOGO_SLIDE_DATA } from "@/constant";
import Image from "next/image";
import CarLogoSlide from "../CarLogoSlide";
import { motion, useScroll, useTransform } from "motion/react";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -200]);

  // Duplicate the logos multiple times to ensure smooth infinite scroll
  const duplicatedLogos = [
    ...CAR_LOGO_SLIDE_DATA,
    ...CAR_LOGO_SLIDE_DATA,
    ...CAR_LOGO_SLIDE_DATA,
    ...CAR_LOGO_SLIDE_DATA,
  ];

  return (
    <div className="bg-background relative overflow-hidden h-screen flex flex-col">
      {/* Absolutely positioned image for large screens */}
      <motion.div
        className="block absolute top-[350px] md:top-[250px] lg:top-[120px] left-0 md:left-50 lg:left-220 h-[50rem] w-[50rem] lg:h-[95rem] lg:w-[95rem] z-0 py-10"
        initial={{ x: "100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          x: {
            type: "spring",
            stiffness: 50,
            damping: 30,
            mass: 1,
            duration: 1,
          },
          opacity: {
            duration: 1.5,
          },
        }}
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

      <main className="relative z-10 max-w-[90vw] mx-auto px-4 py-5 sm:px-6 lg:px-8 flex-grow">
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1 }}
        >
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-[50%]">
              <div className="w-full lg:w-[80%] mt-20 lg:mt-30">
                <motion.h1
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.01 }}
                  className="text-5xl sm:text-6xl lg:text-9xl font-extrabold text-text-500 leading-none"
                >
                  Premium Car Rental in Nepal
                </motion.h1>
                <motion.h4
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
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

      <div className="relative overflow-hidden py-10 mt-auto">
        <motion.div
          className="flex items-center"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 10,
              ease: "linear",
              repeatDelay: 0,
            },
          }}
        >
          {duplicatedLogos.map((item, index) => (
            <motion.div
              key={`${item.id}-${index}`}
              className="mx-8 md:mx-12 lg:mx-16"
            >
              <CarLogoSlide item={item} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
