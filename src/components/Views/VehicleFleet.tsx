"use client";

import { VEHICLE_FLEET_DATA } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
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

export default function VehicleFleet() {
  const [activeCategory, setActiveCategory] = useState<string>(
    Object.keys(VEHICLE_FLEET_DATA)[0]
  );

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    const element = document.getElementById("vehicle-fleet");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.section
      id="vehicle-fleet"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="md:min-h-screen flex flex-col"
    >
      <motion.div
        variants={itemVariants}
        className="flex flex-col items-center justify-center py-6 md:py-10"
      >
        <motion.h3
          variants={itemVariants}
          className="text-xl md:text-2xl font-light text-text-300 py-2 md:py-3"
        >
          ONLY THE BEST CARS
        </motion.h3>
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-7xl font-bold text-text-500 py-2 md:py-3"
        >
          Our Vehicle Fleet
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-text-500 py-2 md:py-3 text-center"
        >
          We have the best cars available <br className="hidden md:block" /> in
          Nepal and we provide the best cars and{" "}
          <br className="hidden md:block" />
          services to you.
        </motion.p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        className="flex flex-col gap-6 md:gap-8 w-full max-w-7xl px-4 mx-auto flex-grow"
      >
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-3 md:gap-4 justify-center relative"
        >
          {Object.keys(VEHICLE_FLEET_DATA).map((key) => (
            <motion.button
              key={key}
              onClick={() => handleCategoryChange(key)}
              className={`px-4 md:px-7 py-1 rounded-4xl text-base md:text-xl relative cursor-pointer ${
                activeCategory === key ? "text-text-700" : "text-text-500"
              }`}
              initial={false}
              animate={{
                backgroundColor:
                  activeCategory === key ? "transparent" : "transparent",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {key}
              {activeCategory === key && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-text-700"
                  layoutId="underline"
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                  }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        <div className="flex flex-col gap-6 md:gap-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center"
            >
              {VEHICLE_FLEET_DATA[
                activeCategory as keyof typeof VEHICLE_FLEET_DATA
              ]
                .slice(0, 3)
                .map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col items-center"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="relative overflow-hidden rounded-lg"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Image
                          src={item.image || ""}
                          alt={item.name || "Vehicle image"}
                          width={700}
                          height={200}
                          className="w-full h-[180px] md:h-[230px] object-cover"
                        />
                      </motion.div>
                    </motion.div>
                    <motion.h3
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="mt-2 text-base md:text-lg font-medium"
                    >
                      {item.name}
                    </motion.h3>
                  </motion.div>
                ))}
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`desktop-${activeCategory}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="hidden md:flex flex-row gap-4 items-center justify-center"
            >
              {VEHICLE_FLEET_DATA[
                activeCategory as keyof typeof VEHICLE_FLEET_DATA
              ]
                .slice(3, 7)
                .map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col items-center"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="relative overflow-hidden rounded-lg"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Image
                          src={item.image || ""}
                          alt={item.name || "Vehicle image"}
                          width={150}
                          height={100}
                          className="w-full h-[150px] object-cover"
                        />
                      </motion.div>
                    </motion.div>
                    <motion.h3
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="mt-2 text-sm font-medium"
                    >
                      {item.name}
                    </motion.h3>
                  </motion.div>
                ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="flex justify-center items-center py-4 md:py-8 mt-0 md:mt-auto"
      >
        <Link href="/cars">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-text-700 px-6 md:px-10 py-2 text-lg md:text-xl text-center font-bold cursor-pointer hover:text-text-900"
          >
            Show all
          </motion.button>
        </Link>
      </motion.div>
    </motion.section>
  );
}
