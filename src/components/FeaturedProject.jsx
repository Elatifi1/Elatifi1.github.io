import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, staggerContainer } from "../utils/variants";
import SectionHeader from "./SectionHeader";
import TagPill from "./TagPill";
import projects from "../data/projects";

export default function FeaturedProject() {
  const project = projects.find((p) => p.featured) || projects[0];
  const [imgIdx, setImgIdx] = useState(0);

  return (
    <section
      id="featured"
      className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16"
    >
      <SectionHeader
        label="§ Featured Article"
        title="Deep Dive: The Making of a Platform"
      />

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {/* Image carousel */}
        <motion.div variants={fadeUp}>
          <div className="border border-rule dark:border-rule-dark overflow-hidden">
            <div className="aspect-[16/10] bg-rule/30 dark:bg-rule-dark/30 relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={imgIdx}
                  src={project.images[imgIdx]}
                  alt={`${project.title} — image ${imgIdx + 1}`}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  loading="lazy"
                />
              </AnimatePresence>
            </div>

            {/* Thumbnail strip */}
            {project.images.length > 1 && (
              <div className="flex border-t border-rule dark:border-rule-dark">
                {project.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setImgIdx(i)}
                    className={`flex-1 h-16 overflow-hidden cursor-pointer border-r last:border-r-0 border-rule dark:border-rule-dark
                      ${i === imgIdx ? "opacity-100 ring-2 ring-inset ring-accent dark:ring-accent-dark" : "opacity-50 hover:opacity-75"} transition-opacity`}
                    aria-label={`Show image ${i + 1}`}
                  >
                    <img
                      src={img}
                      alt=""
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <p className="text-[11px] font-mono text-ink-muted dark:text-ink-muted-dark mt-2">
            <span className="font-bold uppercase tracking-wider">Fig. 2</span> —{" "}
            {project.title} interface screenshots
          </p>
        </motion.div>

        {/* Content */}
        <motion.div variants={fadeUp} className="flex flex-col justify-center">
          <span className="text-[11px] font-mono uppercase tracking-widest text-ink-muted dark:text-ink-muted-dark mb-1">
            {project.category} · {project.date}
          </span>

          <h3 className="font-serif text-3xl md:text-4xl font-bold text-ink dark:text-ink-dark leading-tight mb-2">
            {project.title}
          </h3>

          <p className="text-sm italic text-ink-muted dark:text-ink-muted-dark mb-4">
            {project.subtitle}
          </p>

          <hr className="rule-thin mb-4" />

          <p className="text-sm leading-relaxed text-ink dark:text-ink-dark mb-6">
            {project.description}
          </p>

          <div className="pull-quote mb-6 text-base">
            "Working on this project highlighted how simple, well-structured
            software can make daily hospital operations more efficient"
          </div>

          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.stack.map((tech) => (
              <TagPill key={tech} label={tech} />
            ))}
          </div>

          <div className="flex gap-4">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-ink dark:bg-ink-dark text-paper dark:text-paper-dark
                           text-sm font-semibold tracking-wider uppercase
                           hover:bg-accent dark:hover:bg-accent-dark transition-colors duration-300"
              >
                Live Demo ↗
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 border-2 border-ink dark:border-ink-dark text-ink dark:text-ink-dark
                           text-sm font-semibold tracking-wider uppercase
                           hover:bg-ink hover:text-paper dark:hover:bg-ink-dark dark:hover:text-paper-dark
                           transition-colors duration-300"
              >
                Source Code ↗
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
