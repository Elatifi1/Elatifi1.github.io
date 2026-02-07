import { motion } from "framer-motion";
import { useReadingProgress } from "../hooks/useScrollUtils";

export default function ReadingProgress() {
  const progress = useReadingProgress();

  return (
    <motion.div
      className="reading-progress fixed top-0 left-0 z-[60] w-full"
      style={{ scaleX: progress }}
      aria-hidden="true"
    />
  );
}
