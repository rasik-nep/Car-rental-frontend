"use client";
import { CAR_LOGO_SLIDE_DATA } from "@/constant";
import Image from "next/image";
import CarLogoSlide from "../CarLogoSlide";
import { motion, useScroll, useTransform } from "motion/react";
import { useImageLoad } from "@/hooks/useImageLoad";
import Loading from "../Loading";
import { TEXT } from "@/constant/text";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, -200]);

  // Track image loading state
  const { isLoaded: isCarImageLoaded } = useImageLoad("/neta-car.png");

  // Duplicate the logos multiple times to ensure smooth infinite scroll
  const duplicatedLogos = [...CAR_LOGO_SLIDE_DATA, ...CAR_LOGO_SLIDE_DATA];

  // Show loading while image is loading
  if (!isCarImageLoaded) {
    return (
      <div className="bg-background relative overflow-hidden h-[90vh] flex flex-col">
        <Loading />
      </div>
    );
  }

  return (
    <div className="bg-background relative overflow-hidden h-[90vh] flex flex-col">
      {/* Absolutely positioned image for large screens */}
      <motion.div
        className="block absolute top-[300px] md:top-[220px] lg:top-[1vh] left-0 md:left-50 lg:left-220 h-[50rem] w-[50rem] lg:h-[60vh] lg:w-[95rem] z-0"
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
          alt="Premium car for rental"
          width={93.75}
          height={50}
          priority
          quality={85}
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 80vw, 95vw"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "auto",
          }}
        />
      </motion.div>

      <main className="relative z-10 max-w-[70vw] px-4 py-5 sm:px-6 lg:px-8 flex-grow">
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1 }}
        >
          <div className="flex flex-col lg:flex-row items-start pl-[4vw]">
            <div className="w-full lg:w-[50%]">
              <div className="w-full">
                <motion.h1
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.01 }}
                  className="text-[3.75rem] lg:text-[11vh] font-extrabold text-text-500 leading-none"
                >
                  {TEXT.hero.title}
                </motion.h1>
                <motion.h4
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                  className="text-[1.25rem] sm:text-[1.875rem] lg:text-[4.5vh] text-text-500 py-5 leading-tight"
                >
                  {TEXT.hero.subtitle}
                </motion.h4>
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      <div className="relative overflow-hidden py-10 mt-auto">
        <div className="flex items-center infinite-scroll">
          {duplicatedLogos.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="mx-8 md:mx-12 lg:mx-16 flex-shrink-0"
            >
              <CarLogoSlide item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
