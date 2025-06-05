"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function AboutUs() {
  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-background py-20"
    >
      <div className="max-w-[90vw] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={itemVariants} className="max-w-4xl mx-auto mt-[5rem]">
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold text-text-700 mb-8"
          >
            About Shan Car Rental
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="space-y-6 text-text-500"
          >
            <p className="text-lg leading-relaxed">
              Welcome to Shan Car Rental, your premier destination for luxury
              and reliable car rental services in Nepal. Since our
              establishment, we have been committed to providing exceptional
              vehicle rental experiences that combine comfort, safety, and
              convenience.
            </p>

            <p className="text-lg leading-relaxed">
              Our extensive fleet features a carefully curated selection of
              vehicles, from compact city cars perfect for urban exploration to
              spacious SUVs ideal for family adventures. Each vehicle in our
              collection is meticulously maintained and regularly serviced to
              ensure the highest standards of safety and performance.
            </p>

            <h2 className="text-2xl md:text-3xl font-semibold text-text-700 mt-8 mb-4">
              Our Commitment
            </h2>

            <p className="text-lg leading-relaxed">
              At Shan Car Rental, we understand that every journey is unique.
              That&apos;s why we go beyond just providing vehicles – we offer a
              comprehensive service that includes 24/7 customer support,
              flexible rental terms, and transparent pricing. Our team of
              experienced professionals is dedicated to ensuring that your
              rental experience is seamless and enjoyable from start to finish.
            </p>

            <h2 className="text-2xl md:text-3xl font-semibold text-text-700 mt-8 mb-4">
              Why Choose Us
            </h2>

            <ul className="list-disc list-inside space-y-3 text-lg leading-relaxed">
              <li>Extensive fleet of well-maintained vehicles</li>
              <li>Competitive and transparent pricing</li>
              <li>24/7 customer support and roadside assistance</li>
              <li>Flexible rental terms and conditions</li>
              <li>Convenient pickup and drop-off locations</li>
              <li>Comprehensive insurance coverage</li>
              <li>Experienced and professional staff</li>
            </ul>

            <p className="text-lg leading-relaxed mt-8">
              Whether you&apos;re a business traveler in need of reliable
              transportation, a family planning a vacation, or a local resident
              requiring a temporary vehicle, Shan Car Rental is here to meet
              your needs. We take pride in being more than just a car rental
              service – we&apos;re your trusted partner in mobility.
            </p>

            <p className="text-lg leading-relaxed">
              Join the thousands of satisfied customers who have chosen Shan Car
              Rental for their transportation needs. Experience the difference
              of working with a company that truly cares about your journey.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.main>
  );
}
