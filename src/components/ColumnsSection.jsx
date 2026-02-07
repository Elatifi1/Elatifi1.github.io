import { useState } from "react";
import { motion } from "framer-motion";
import {
  fadeUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
} from "../utils/variants";
import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import projects from "../data/projects";

const SKILLS = [
  {
    category: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["PHP", "Laravel", , "Java", "MySQL", "Oracle SQL"],
  },
  {
    category: "Tools",
    items: [
      "Git",
      "GitHub",
      "UML",
      "Merise",
      "Gantt",
      "REST API",
      "SEO",
      "Ai integrating",
    ],
  },
];

const TIMELINE = [
  { year: "2025–Present", text: "Bachelor’s in Software Development — IFIAG" },
  { year: "2025", text: "Backend Program — ALX" },
  { year: "2023–2025", text: "Economics Studies — Hassan II University, FDC" },
  { year: "2022", text: "Technician Diploma — EURELEC" },
  { year: "2022", text: "Web Developer Intern — XYLOG" },
  { year: "2021", text: "Web Developer Intern — Leopard" },
];

export default function ColumnsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="columns"
      className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16"
    >
      <SectionHeader
        label="§ The Columns"
        title="Dispatches, Skills & Contacts"
        id="columns-header"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6">
        {/* ── Left Column: About ── */}
        <motion.aside
          className="lg:col-span-3"
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className="font-serif text-xl font-bold mb-3 text-ink dark:text-ink-dark">
            About the Author
          </h3>
          <hr className="rule-thin mb-4" />

          <p className="text-sm leading-relaxed text-ink-muted dark:text-ink-muted-dark mb-4">
            Haitam El Atifi is a software development student based in
            Casablanca, currently building his path toward becoming a full-stack
            web developer. His work focuses on modern, practical technologies
            like React and Laravel, where he combines clean front-end interfaces
            with solid back-end logic.
          </p>

          <p className="text-sm leading-relaxed text-ink-muted dark:text-ink-muted-dark mb-4">
            When not coding, he enjoys playing football, watching movies and
            series, and spending time with friends.
          </p>

          <h4 className="text-xs uppercase tracking-widest font-semibold text-accent dark:text-accent-dark mb-2">
            Quick Facts
          </h4>
          <ul className="text-sm space-y-1.5 text-ink-muted dark:text-ink-muted-dark">
            <li className="flex items-start gap-2">
              <span className="text-accent dark:text-accent-dark mt-0.5">
                ▸
              </span>
              Software development student in Casablanca
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent dark:text-accent-dark mt-0.5">
                ▸
              </span>
              Focused on Tailwind CSS, React, and Laravel
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent dark:text-accent-dark mt-0.5">
                ▸
              </span>
              Built academic and personal web projects
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent dark:text-accent-dark mt-0.5">
                ▸
              </span>
              Currently seeking a 4-6 month internship
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent dark:text-accent-dark mt-0.5">
                ▸
              </span>
              Trilingual: Arabic, French, English
            </li>
          </ul>

          <div className="pull-quote mt-6 text-base">
            "Code is prose; make every line earn its place."
          </div>
        </motion.aside>

        {/* ── Middle Column: Projects ── */}
        <motion.div
          className="lg:col-span-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <h3 className="font-serif text-xl font-bold mb-3 text-ink dark:text-ink-dark">
            Latest Dispatches
          </h3>
          <hr className="rule-thin mb-4" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {projects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onReadMore={setSelectedProject}
              />
            ))}
          </div>
        </motion.div>

        {/* ── Right Column: Skills, Timeline, Contact ── */}
        <motion.aside
          className="lg:col-span-3"
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Skills */}
          <h3 className="font-serif text-xl font-bold mb-3 text-ink dark:text-ink-dark">
            Expertise & Tools
          </h3>
          <hr className="rule-thin mb-4" />

          {SKILLS.map((group) => (
            <div key={group.category} className="mb-4">
              <h4 className="text-[11px] uppercase tracking-widest font-semibold text-accent dark:text-accent-dark mb-1.5">
                {group.category}
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono px-2 py-0.5 bg-card dark:bg-card-dark
                               border border-rule dark:border-rule-dark text-ink-muted dark:text-ink-muted-dark"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Mini Timeline */}
          <h3 className="font-serif text-xl font-bold mb-3 mt-8 text-ink dark:text-ink-dark">
            Timeline
          </h3>
          <hr className="rule-thin mb-4" />

          <div className="space-y-3">
            {TIMELINE.map((item) => (
              <div key={item.year} className="flex gap-3">
                <span className="font-mono text-xs font-bold text-accent dark:text-accent-dark whitespace-nowrap mt-0.5">
                  {item.year}
                </span>
                <p className="text-sm text-ink-muted dark:text-ink-muted-dark">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Contact box */}
          <div className="mt-8 border border-rule dark:border-rule-dark p-4 bg-card/50 dark:bg-card-dark/50">
            <h3 className="font-serif text-lg font-bold mb-2 text-ink dark:text-ink-dark">
              Letters to the Editor
            </h3>
            <hr className="rule-thin mb-3" />
            <p className="text-sm text-ink-muted dark:text-ink-muted-dark mb-3">
              Have an opportunity, an idea, or just want to talk tech? My inbox
              is always open.
            </p>
            <a
              href="mailto:elatifi.haitam01@gmail.com"
              className="text-sm font-semibold text-accent dark:text-accent-dark ink-underline
                         hover:opacity-80 transition-opacity"
            >
              elatifi.haitam01@gmail.com ↗
            </a>
            <div className="flex gap-4 mt-3">
              <a
                href="https://github.com/Elatifi01"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-ink-muted dark:text-ink-muted-dark hover:text-accent dark:hover:text-accent-dark transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/haitam-el-atifi-9089b2324/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-ink-muted dark:text-ink-muted-dark hover:text-accent dark:hover:text-accent-dark transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </motion.aside>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
