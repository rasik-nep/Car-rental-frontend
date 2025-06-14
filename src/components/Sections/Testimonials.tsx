"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { TESTIMONIALS_DATA } from "@/constant";
import { useEffect, useState } from "react";
import { TEXT } from "@/constant/text";

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

const CountUpNumber = ({
  value,
  duration = 2,
}: {
  value: number;
  duration?: number;
}) => {
  const [isInView, setIsInView] = useState(false);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: duration,
        ease: "easeOut",
      });
      return () => controls.stop();
    }
  }, [isInView, count, value, duration]);

  return (
    <motion.span
      onViewportEnter={() => setIsInView(true)}
      viewport={{ once: true, amount: 0.1 }}
    >
      {rounded}
    </motion.span>
  );
};

export default function Testimonials() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1, margin: "-100px" }}
      variants={containerVariants}
      className="min-h-screen py-12 bg-background relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-[90vw] mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <motion.h3
            variants={itemVariants}
            className="text-xl md:text-2xl font-light text-text-300 py-2 md:py-3 uppercase"
          >
            {TEXT.testimonials.subtitle}
          </motion.h3>
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-7xl font-bold text-text-500 py-2 md:py-3"
          >
            {TEXT.testimonials.title}
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-text-500 py-2 md:py-3 max-w-2xl mx-auto"
          >
            {TEXT.testimonials.description}
          </motion.p>
        </motion.div>

        {/* Testimonial Cards */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {TESTIMONIALS_DATA.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative"
            >
              {/* Decorative Quote Mark */}
              <div className="absolute top-4 right-6 text-text-700/10 text-6xl font-serif">
                &ldquo;
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <FaStar key={index} className="text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-text-500 mb-6 italic relative z-10">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* User Info */}
              <div className="flex items-center gap-4">
                <div>
                  <h4 className="font-semibold text-text-700">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-text-500">{testimonial.role}</p>
                </div>
              </div>

              {/* Decorative Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-text-700/20 via-text-700/40 to-text-700/20 rounded-b-2xl" />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
        >
          {[
            { number: 500, label: TEXT.testimonials.stats.happyCustomers },
            { number: 1000, label: TEXT.testimonials.stats.carsRented },
            { number: 50, label: TEXT.testimonials.stats.carModels },
            { number: 24, label: TEXT.testimonials.stats.support },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true, amount: 0.1, margin: "-50px" }}
              className="bg-white/50 backdrop-blur-sm rounded-xl p-4 text-center"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-text-700">
                <CountUpNumber value={stat.number} />
                {stat.label === "Support" ? "/7" : "+"}
              </h3>
              <p className="text-sm text-text-500 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
