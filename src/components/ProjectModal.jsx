import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TagPill from "./TagPill";

export default function ProjectModal({ project, onClose }) {
  const overlayRef = useRef(null);
  const closeBtn = useRef(null);
  const [imgIdx, setImgIdx] = useState(0);

  const nextImg = useCallback(() => {
    if (project) setImgIdx((i) => (i + 1) % project.images.length);
  }, [project]);

  const prevImg = useCallback(() => {
    if (project)
      setImgIdx((i) => (i - 1 + project.images.length) % project.images.length);
  }, [project]);

  // Trap focus & escape
  useEffect(() => {
    if (!project) return;
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") nextImg();
      if (e.key === "ArrowLeft") prevImg();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    closeBtn.current?.focus();

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose, nextImg, prevImg]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          ref={overlayRef}
          className="modal-backdrop fixed inset-0 z-[55] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => {
            if (e.target === overlayRef.current) onClose();
          }}
          role="dialog"
          aria-modal="true"
          aria-label={`Project details: ${project.title}`}
        >
          <motion.div
            className="bg-paper dark:bg-paper-dark border border-rule dark:border-rule-dark
                       max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 relative"
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Close button */}
            <button
              ref={closeBtn}
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center
                         text-ink-muted dark:text-ink-muted-dark hover:text-ink dark:hover:text-ink-dark
                         transition-colors text-xl leading-none cursor-pointer"
              aria-label="Close modal"
            >
              ×
            </button>

            {/* Category & date */}
            <div className="flex items-center gap-3 text-[11px] font-mono text-ink-muted dark:text-ink-muted-dark mb-2">
              <span className="uppercase tracking-widest">
                {project.category}
              </span>
              <span>•</span>
              <span>{project.date}</span>
            </div>

            {/* Title */}
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink dark:text-ink-dark mb-1 leading-tight">
              {project.title}
            </h2>
            <p className="text-sm italic text-ink-muted dark:text-ink-muted-dark mb-4">
              {project.subtitle}
            </p>

            <hr className="rule-double mb-5" />

            {/* Image carousel */}
            {project.images.length > 0 && (
              <div className="relative mb-5 aspect-[16/10] bg-rule/30 dark:bg-rule-dark/30 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={imgIdx}
                    src={project.images[imgIdx]}
                    alt={`${project.title} screenshot ${imgIdx + 1}`}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.3 }}
                    loading="lazy"
                  />
                </AnimatePresence>

                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImg}
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 
                                 bg-paper/80 dark:bg-paper-dark/80 border border-rule dark:border-rule-dark
                                 flex items-center justify-center text-sm cursor-pointer
                                 hover:bg-paper dark:hover:bg-paper-dark transition-colors"
                      aria-label="Previous image"
                    >
                      ‹
                    </button>
                    <button
                      onClick={nextImg}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 
                                 bg-paper/80 dark:bg-paper-dark/80 border border-rule dark:border-rule-dark
                                 flex items-center justify-center text-sm cursor-pointer
                                 hover:bg-paper dark:hover:bg-paper-dark transition-colors"
                      aria-label="Next image"
                    >
                      ›
                    </button>
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                      {project.images.map((_, i) => (
                        <span
                          key={i}
                          className={`w-1.5 h-1.5 rounded-full transition-colors ${
                            i === imgIdx
                              ? "bg-accent dark:bg-accent-dark"
                              : "bg-rule dark:bg-rule-dark"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}

            {/* Description */}
            <p className="text-sm leading-relaxed text-ink dark:text-ink-dark mb-5">
              {project.description}
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.stack.map((tech) => (
                <TagPill key={tech} label={tech} />
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4">
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-accent dark:text-accent-dark ink-underline
                             hover:opacity-80 transition-opacity"
                >
                  Live Demo ↗
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-accent dark:text-accent-dark ink-underline
                             hover:opacity-80 transition-opacity"
                >
                  Source Code ↗
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
