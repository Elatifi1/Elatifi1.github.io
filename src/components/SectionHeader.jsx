import { motion } from "framer-motion";
import { fadeUp } from "../utils/variants";

export default function SectionHeader({ label, title, id }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="mb-8"
      id={id}
    >
      {label && (
        <span className="small-caps text-xs font-semibold tracking-widest text-accent dark:text-accent-dark uppercase block mb-1">
          {label}
        </span>
      )}
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink dark:text-ink-dark leading-tight">
        {title}
      </h2>
      <hr className="rule-double mt-3 w-full" />
    </motion.div>
  );
}
