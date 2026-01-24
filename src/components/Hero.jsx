import React, { useEffect } from "react";
import profilePic from "../assets/images/Rukmanghan.png";
import { HERO_CONTENT } from "../constants/index";
import resume from '../assets/PDF/S.Rukmanghan_Resume.pdf';
import { motion } from "framer-motion";

const imageVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease: "easeInOut", delay: 0.1 },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeInOut", delay: 0.1 },
  },
};

export default function Hero() {
  // ✅ Simplified Preload logic (Safari-safe)
  useEffect(() => {
    const preloadImage = () => {
      const img = new Image();
      img.src = profilePic;
    };

    // Use simple timeout to trigger preload after initial render
    const preloadTimeout = setTimeout(preloadImage, 100);

    return () => clearTimeout(preloadTimeout);
  }, []);

  return (
    <div className="pb-4 mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap lg:flex-row-reverse">

        {/* Profile Image */}
        <div className="w-full lg:w-1/2">
          <div className="flex sm:justify-center mr-0 lg:mr-28 lg:p-8">
            <motion.img
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              src={profilePic}
              alt="Rukmanghan"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="rounded-3xl w-[250px] h-[420px] md:w-[250px] md:h-[450px] lg:h-[550px] lg:w-[350px] hover:shadow-slate-400 hover:shadow-xl transition-all delay-150 object-cover"
            />
          </div>
        </div>

        {/* Text Content */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex flex-col items-center md:justify-center lg:items-start mt-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
              className="text-4xl pb-2 md:text-5xl lg:text-7xl tracking-tighter"
            >
              Rukmanghan.S
            </motion.h2>

            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.05 }}
              className="text-3xl bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text md:text-5xl tracking-tight text-transparent"
            >
              Software Engineer
            </motion.span>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-sm my-2 max-w-lg py-6 md:text-2xl text-justify leading-relaxed tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}