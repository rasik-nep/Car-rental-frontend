"use client";

import { FaRegClock } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";
import { IoCashOutline } from "react-icons/io5";
import { TbSteeringWheel } from "react-icons/tb";
import { motion } from "framer-motion";
import { FEATURES_DATA } from "@/constant";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.3,
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

const featureCardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.5,
    },
  }),
  hover: {
    y: -10,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10,
    },
  },
};

const iconVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
    rotate: -180,
  },
  visible: (index: number) => ({
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      delay: index * 0.5 + 0.3, // Slightly delayed after the card appears
      type: "spring",
      stiffness: 200,
      damping: 10,
    },
  }),
};

export default function Features() {
  const getIcon = (id: number) => {
    switch (id) {
      case 1:
        return <FaRegClock />;
      case 2:
        return <BiSupport />;
      case 3:
        return <IoCashOutline />;
      case 4:
        return <TbSteeringWheel />;
      default:
        return <TbSteeringWheel />;
    }
  };

  const getIconBgColor = (id: number) => {
    switch (id) {
      case 1:
        return "bg-grey-100";
      case 2:
        return "bg-yellow-100";
      case 3:
        return "bg-green-100";
      case 4:
        return "bg-purple-100";
      default:
        return "bg-yellow-100";
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="min-h-screen md:min-h-screen py-5 md:py-0"
    >
      <motion.div
        variants={itemVariants}
        className="flex flex-col py-6 md:py-35 max-w-[90vw] mx-auto px-4 lg:px-8"
      >
        <motion.h3
          variants={itemVariants}
          className="text-xl md:text-2xl font-light text-text-300 py-2 md:py-3 uppercase"
        >
          Taking care of every client
        </motion.h3>
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-7xl font-bold text-text-500 py-2 md:py-3"
        >
          Key Features
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-text-500 py-2 md:py-3"
        >
          We have the best cars available in Nepal <br />
          and we provide the best cars and
          <br /> services to you.
        </motion.p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        className="flex flex-col max-w-[90vw] mx-auto px-4 lg:px-8"
      >
        <motion.div
          variants={containerVariants}
          className="flex flex-col md:flex-row gap-8 w-full justify-between"
        >
          {FEATURES_DATA.map((feature, index) => (
            <motion.div
              key={feature.id}
              variants={featureCardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              custom={index}
              className="flex flex-col items-start h-[10rem] md:h-[15rem] lg:h-[20rem] p-6 rounded-lg w-full md:w-[17rem] border-1 border-text-300/40"
            >
              <motion.div
                variants={iconVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                className={`w-12 h-12 rounded-full ${getIconBgColor(
                  feature.id
                )} flex items-center justify-center`}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl text-text-500"
                >
                  {getIcon(feature.id)}
                </motion.div>
              </motion.div>
              <motion.div variants={itemVariants} className="mt-auto">
                <motion.h3
                  variants={itemVariants}
                  className="text-lg font-medium text-text-500"
                >
                  {feature.title}
                </motion.h3>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
