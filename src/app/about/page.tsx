"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { useImageLoad } from "@/hooks/useImageLoad";
import Loading from "@/components/Loading";
import { TEXT } from "@/constant/text";

export default function AboutUs() {
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Track image loading state
  const { isLoaded: isBackgroundImageLoaded } = useImageLoad(
    "/electric-car-img.jpg"
  );

  const yTitle = useTransform(scrollYProgress, [0, 0.2], ["50%", "0%"]);
  const scaleTitle = useTransform(scrollYProgress, [0, 0.2], [1.2, 1]);
  const contentY = useTransform(scrollYProgress, [0.15, 0.4], ["100%", "0%"]);
  const bgOpacity = useTransform(scrollYProgress, [0.2, 0.4], [1, 0.2]);
  const titleOpacity = useTransform(scrollYProgress, [0.3, 0.4], [1, 0]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Show loading while image is loading or component is not mounted
  if (!isMounted || !isBackgroundImageLoaded) {
    return (
      <div className="relative h-[100vh] bg-white">
        <Loading />
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative h-[100vh]">
      {/* Background Image */}
      <motion.div
        style={{ opacity: bgOpacity }}
        className="fixed top-0 left-0 w-full h-screen z-[-1]"
      >
        <Image
          src="/electric-car-img.jpg"
          alt="electric-car"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-white/30" />
      </motion.div>

      {/* Hero Section Title */}
      <motion.h1
        style={{ y: yTitle, scale: scaleTitle, opacity: titleOpacity }}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 text-text-700 text-7xl font-extrabold z-[1] text-center"
      >
        {TEXT.about.title}
      </motion.h1>

      {/* Sliding Content Panel */}
      <motion.div
        style={{ y: contentY }}
        className="absolute top-0 left-0 w-full bg-white z-[2] rounded-t-3xl pt-24 pb-32 px-6 md:px-12"
      >
        <div className="space-y-6 text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
          <p>{TEXT.about.welcome}</p>
          <p>{TEXT.about.fleet}</p>

          <h2 className="text-2xl font-semibold mt-10 mb-2">
            {TEXT.about.commitment.title}
          </h2>
          <p>{TEXT.about.commitment.text}</p>

          <h2 className="text-2xl font-semibold mt-10 mb-2">
            {TEXT.about.whyChooseUs.title}
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            {TEXT.about.whyChooseUs.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
