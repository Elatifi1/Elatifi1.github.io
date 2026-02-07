import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../utils/variants";

export default function HeroLeadStory() {
  return (
    <motion.section
      id="lead-story"
      className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Section label */}
      <motion.span
        variants={fadeUp}
        className="small-caps text-xs font-semibold tracking-widest text-accent dark:text-accent-dark uppercase block mb-2"
      >
        § Lead Story
      </motion.span>

      <hr className="rule-double mb-6" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Main headline area */}
        <motion.div
          variants={fadeUp}
          className="lg:col-span-7 flex flex-col justify-center"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-black leading-[1.08] text-ink dark:text-ink-dark mb-4">
            Crafting Digital Experiences That{" "}
            <span className="italic text-accent dark:text-accent-dark">
              Tell Stories
            </span>
          </h2>

          <p className="text-base md:text-lg leading-relaxed text-ink-muted dark:text-ink-muted-dark mb-6 max-w-xl">
            {/* I'm{" "} */}
            <strong className="text-ink dark:text-ink-dark">
              Haitam El Atifi
            </strong>{" "}
            - is a software development student in Casablanca, building modern
            web applications with React, Laravel, and Django. Focused on
            practical projects and continuous learning, he is currently seeking
            a 4-month internship to grow into a full-stack developer.
          </p>

          <div className="pull-quote">
            "Good software, like good journalism, serves the reader first."
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 mt-6">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() =>
                document
                  .getElementById("columns")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 py-3 bg-ink dark:bg-ink-dark text-paper dark:text-paper-dark
                         font-semibold text-sm tracking-wider uppercase
                         hover:bg-accent dark:hover:bg-accent-dark transition-colors duration-300 cursor-pointer"
            >
              View Projects
            </motion.button>

            <motion.a
              href="/files/Haitam_El_Atifi.pdf"
              download="Haitam_El_Atifi.pdf"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 border-2 border-ink dark:border-ink-dark
                         text-ink dark:text-ink-dark font-semibold text-sm tracking-wider uppercase
                         hover:bg-ink hover:text-paper dark:hover:bg-ink-dark dark:hover:text-paper-dark
                         transition-colors duration-300 inline-block text-center"
            >
              Download CV
            </motion.a>
          </div>
        </motion.div>

        {/* Featured image */}
        <motion.div variants={fadeUp} className="lg:col-span-5">
          <figure className="border border-rule dark:border-rule-dark overflow-hidden">
            <div className="aspect-[4/5] bg-rule/30 dark:bg-rule-dark/30 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&q=80"
                alt="Developer workspace with laptop and code"
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                loading="lazy"
              />
            </div>
            <figcaption className="px-4 py-3 text-[11px] font-mono text-ink-muted dark:text-ink-muted-dark border-t border-rule dark:border-rule-dark">
              <span className="font-bold uppercase tracking-wider">Fig. 1</span>{" "}
              — The workshop where ideas become production-ready code.
              Casablanca, 2025.
            </figcaption>
          </figure>
        </motion.div>
      </div>
    </motion.section>
  );
}
