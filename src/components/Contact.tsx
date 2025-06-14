"use client";

import { OpenWhatsappProfile } from "@/services/Whatsapp";
import { motion } from "framer-motion";
import { TEXT } from "@/constant/text";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
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

export default function Contact() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="relative flex flex-col items-center justify-center gap-4 bg-text-700 py-10 h-[50vh] w-[85vw] mx-auto rounded-4xl mt-10 overflow-hidden"
    >
      {/* Wavy Lines Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 100 200"
        >
          {[...Array(20)].map((_, index) => (
            <path
              key={index}
              d={`M0,${index * 10} Q25,${index * 10 - 5} 50,${
                index * 10
              } T100,${index * 10}`}
              stroke="grey"
              strokeWidth="0.5"
              fill="none"
            />
          ))}
        </svg>
      </div>

      <motion.h1
        variants={itemVariants}
        className="text-3xl md:text-5xl lg:text-7xl text-white text-center relative z-10"
      >
        {TEXT.contact.title}
      </motion.h1>
      <motion.h4
        variants={itemVariants}
        className="text-base lg:text-2xl text-white text-center py-5 relative z-10"
      >
        {TEXT.contact.subtitle}
      </motion.h4>
      <motion.button
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-white text-text-500 block px-10 py-2 rounded-4xl text-base font-bold hover:bg-primary/90 transition-colors mt-4 cursor-pointer relative z-10"
        onClick={() => OpenWhatsappProfile()}
      >
        Contact Us
      </motion.button>
    </motion.div>
  );
}
