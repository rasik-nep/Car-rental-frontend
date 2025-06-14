"use client";

import { VEHICLE_FLEET_DATA } from "@/constant";
import Image from "next/image";
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

export default function Cars() {
  const [activeCategory, setActiveCategory] = useState<string>("Car");
  const [selectedVehicleId, setSelectedVehicleId] = useState<number | null>(
    null
  );

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setSelectedVehicleId(null); // Reset selected vehicle when changing category
  };

  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-background py-10"
    >
      <div className="max-w-[90vw] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={itemVariants}
          className="max-w-4xl mx-auto mt-[2rem]"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold text-text-700 mb-8 text-center"
          >
            Our Vehicle Fleet
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg text-text-500 text-center mb-2"
          >
            Explore our extensive collection of vehicles, from luxury cars to
            practical SUVs. Each vehicle is maintained to the highest standards
            for your comfort and safety.
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="text-lg text-text-300 text-center mb-12"
          >
            Prices may vary. Please contact us for more details.
          </motion.p>
          {/* Category Selection */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-3 md:gap-4 justify-center mb-12"
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

          {/* Vehicle Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {VEHICLE_FLEET_DATA[
                activeCategory as keyof typeof VEHICLE_FLEET_DATA
              ].map((item, index) => (
                <motion.div
                  key={`${activeCategory}-${item.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative overflow-hidden rounded-lg w-full cursor-pointer group"
                    onClick={() =>
                      setSelectedVehicleId(
                        selectedVehicleId === item.id ? null : item.id
                      )
                    }
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={item.image || ""}
                        alt={item.name || "Vehicle image"}
                        width={700}
                        height={400}
                        className="w-full h-[250px] object-cover"
                        priority={index < 3}
                      />
                      <div
                        className={`absolute inset-0 bg-black/30 bg-opacity-50 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center ${
                          selectedVehicleId === item.id
                            ? "opacity-100"
                            : "opacity-0 md:opacity-0"
                        }`}
                      >
                        <span className="text-white text-xl font-semibold">
                          {item.price}
                        </span>
                      </div>
                    </motion.div>
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="mt-4 text-xl font-medium text-text-700"
                  >
                    {item.name}
                  </motion.h3>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.main>
  );
}
