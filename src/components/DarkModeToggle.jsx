import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

export default function DarkModeToggle() {
  const { dark, toggle } = useTheme();

  return (
    <motion.button
      onClick={toggle}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.08 }}
      className="relative flex items-center justify-center w-9 h-9 rounded-full
                 border border-rule dark:border-rule-dark
                 bg-paper dark:bg-paper-dark
                 text-ink dark:text-ink-dark
                 transition-colors duration-300 cursor-pointer"
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "Light mode" : "Dark mode"}
    >
      {/* Sun */}
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-[18px] h-[18px] absolute"
        initial={false}
        animate={{
          scale: dark ? 0 : 1,
          opacity: dark ? 0 : 1,
          rotate: dark ? -90 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </motion.svg>

      {/* Moon */}
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-[18px] h-[18px] absolute"
        initial={false}
        animate={{
          scale: dark ? 1 : 0,
          opacity: dark ? 1 : 0,
          rotate: dark ? 0 : 90,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </motion.svg>
    </motion.button>
  );
}
