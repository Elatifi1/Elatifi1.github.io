import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader({ onComplete }) {
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setShouldReduceMotion(mediaQuery.matches);

    const handleChange = () => setShouldReduceMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const duration = shouldReduceMotion ? 0.3 : 1.2;

  const panelVariants = {
    initial: { x: "0%" },
    exit: (direction) => ({
      x: direction === "left" ? "-100%" : "100%",
      transition: {
        duration,
        ease: [0.645, 0.045, 0.355, 1.0],
      },
    }),
  };

  const containerVariants = {
    initial: { opacity: 1 },
    exit: {
      opacity: 0,
      transition: {
        delay: shouldReduceMotion ? 0.2 : 0.9,
        duration: shouldReduceMotion ? 0.1 : 0.3,
      },
    },
  };

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="initial"
      exit="exit"
      onAnimationComplete={() => onComplete && onComplete()}
      className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
    >
      {/* Paper texture overlay */}
      <div className="absolute inset-0 opacity-[0.15] mix-blend-multiply pointer-events-none">
        <svg className="w-full h-full">
          <filter id="noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.9"
              numOctaves="4"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      {/* Center content */}
      <motion.div
        variants={textVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="absolute z-10 text-center pointer-events-none"
      >
        {/* <h1 className="font-serif text-2xl md:text-3xl font-bold text-black tracking-tight">
          Loading
        </h1> */}
        <div className="mt-2 flex items-center justify-center gap-1">
          <motion.span
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-1 bg-black rounded-full"
          />
          <motion.span
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.2,
            }}
            className="w-1 h-1 bg-black rounded-full"
          />
          <motion.span
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.4,
            }}
            className="w-1 h-1 bg-black rounded-full"
          />
        </div>
      </motion.div>

      {/* Left panel */}
      <motion.div
        custom="left"
        variants={panelVariants}
        initial="initial"
        exit="exit"
        className="absolute left-0 top-0 h-full w-1/2 bg-[#f8f5f0] origin-right"
        style={{
          boxShadow: "2px 0 8px rgba(0, 0, 0, 0.1)",
        }}
      />

      {/* Right panel */}
      <motion.div
        custom="right"
        variants={panelVariants}
        initial="initial"
        exit="exit"
        className="absolute right-0 top-0 h-full w-1/2 bg-[#f8f5f0] origin-left"
        style={{
          boxShadow: "-2px 0 8px rgba(0, 0, 0, 0.1)",
        }}
      />

      {/* Center fold shadow */}
      <motion.div
        initial={{ opacity: 0.3 }}
        exit={{
          opacity: 0,
          transition: {
            duration: duration * 0.7,
          },
        }}
        className="absolute left-1/2 top-0 h-full w-px bg-linear-to-r from-transparent via-black/20 to-transparent transform -translate-x-1/2"
      />
    </motion.div>
  );
}
