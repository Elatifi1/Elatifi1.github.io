import { motion } from "framer-motion";
import TagPill from "./TagPill";
import { fadeUp, imperfectRotation } from "../utils/variants";

export default function ProjectCard({ project, index, onReadMore }) {
  return (
    <motion.article
      variants={fadeUp}
      className="group border border-rule dark:border-rule-dark p-5 bg-card/50 dark:bg-card-dark/50
                 hover:bg-card dark:hover:bg-card-dark transition-colors duration-300 cursor-pointer
                 flex flex-col"
      style={{ transform: imperfectRotation(index) }}
      whileHover={{ y: -4, transition: { duration: 0.25, ease: "easeOut" } }}
      onClick={() => onReadMore(project)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onReadMore(project);
        }
      }}
      aria-label={`Read more about ${project.title}`}
    >
      {/* Category & date */}
      <div className="flex items-center justify-between text-[11px] text-ink-muted dark:text-ink-muted-dark font-mono mb-2">
        <span className="uppercase tracking-widest">{project.category}</span>
        <span>{project.date}</span>
      </div>

      <hr className="rule-thin mb-3" />

      {/* Image */}
      <div className="overflow-hidden mb-3 aspect-[16/10] bg-rule/30 dark:bg-rule-dark/30">
        <motion.img
          src={project.images[0]}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0
                     transition-all duration-500 group-hover:scale-105"
        />
      </div>

      {/* Headline */}
      <h3
        className="font-serif text-xl font-bold leading-snug mb-1 text-ink dark:text-ink-dark
                     group-hover:text-accent dark:group-hover:text-accent-dark transition-colors"
      >
        {project.title}
      </h3>

      {/* Subtitle */}
      <p className="text-sm text-ink-muted dark:text-ink-muted-dark italic mb-3 leading-relaxed">
        {project.excerpt}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mt-auto">
        {project.stack.slice(0, 4).map((tech) => (
          <TagPill key={tech} label={tech} />
        ))}
        {project.stack.length > 4 && (
          <TagPill label={`+${project.stack.length - 4}`} />
        )}
      </div>

      {/* Read more */}
      <span
        className="inline-block mt-3 text-xs font-semibold tracking-wide uppercase
                       text-accent dark:text-accent-dark ink-underline"
      >
        Read More →
      </span>
    </motion.article>
  );
}
