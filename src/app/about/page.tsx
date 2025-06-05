"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function AboutUs() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yTitle = useTransform(scrollYProgress, [0, 0.2], ["50%", "0%"]);
  const scaleTitle = useTransform(scrollYProgress, [0, 0.2], [1.2, 1]);
  const contentY = useTransform(scrollYProgress, [0.15, 0.4], ["100%", "0%"]);
  const bgOpacity = useTransform(scrollYProgress, [0.2, 0.4], [1, 0.2]);
  const titleOpacity = useTransform(scrollYProgress, [0.3, 0.4], [1, 0]);

  return (
    <div ref={containerRef} className="relative h-[100vh]">
      {/* Background Image */}
      <motion.div
        style={{ opacity: bgOpacity }}
        className="fixed top-0 left-0 w-full h-screen z-0"
      >
        <Image
          src="/electric-car-img.jpg"
          alt="electric-car"
          fill
          className="object-cover"
          priority
          placeholder="blur"
        />
        <div className="absolute inset-0 bg-white/30" />
      </motion.div>

      {/* Hero Section Title */}
      <motion.h1
        style={{ y: yTitle, scale: scaleTitle, opacity: titleOpacity }}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 text-text-700 text-7xl font-extrabold z-10 text-center"
      >
        About Us
      </motion.h1>

      {/* Sliding Content Panel */}
      <motion.div
        style={{ y: contentY }}
        className="absolute top-0 left-0 w-full bg-white z-20 rounded-t-3xl pt-24 pb-32 px-6 md:px-12"
      >
        <div className="space-y-6 text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
          <p>
            Welcome to Shan Car Rental, your premier destination for luxury and
            reliable car rental services in Nepal...
          </p>
          <p>Our extensive fleet features a carefully curated selection...</p>

          <h2 className="text-2xl font-semibold mt-10 mb-2">Our Commitment</h2>
          <p>
            At Shan Car Rental, we understand that every journey is unique...
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-2">Why Choose Us</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Extensive fleet of well-maintained vehicles</li>
            <li>Competitive and transparent pricing</li>
            <li>24/7 customer support and roadside assistance</li>
            <li>Flexible rental terms and conditions</li>
          </ul>

          <p className="mt-8">
            Whether youre a business traveler or planning a vacation...
          </p>
        </div>
      </motion.div>
    </div>
  );
}
