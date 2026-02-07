import { motion } from "framer-motion";
import { fadeUp } from "../utils/variants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      className="border-t-2 border-rule dark:border-rule-dark mt-8"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8">
          {/* Col 1: Brand */}
          <div>
            <h3 className="font-serif text-lg font-bold masthead-text text-ink dark:text-ink-dark mb-2">
              The Haitam Chronicle
            </h3>
            <p className="text-xs text-ink-muted dark:text-ink-muted-dark leading-relaxed">
              A portfolio presented in the tradition of fine print journalism.
              Every project is a story worth telling.
            </p>
          </div>

          {/* Col 2: Quick links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-accent dark:text-accent-dark mb-2">
              Quick Links
            </h4>
            <ul className="space-y-1 text-xs text-ink-muted dark:text-ink-muted-dark">
              {[
                ["#lead-story", "Lead Story"],
                ["#columns", "Columns"],
                ["#featured", "Featured"],
                ["#classifieds", "Classifieds"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="hover:text-accent dark:hover:text-accent-dark transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Connect */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-accent dark:text-accent-dark mb-2">
              Connect
            </h4>
            <ul className="space-y-1 text-xs text-ink-muted dark:text-ink-muted-dark">
              <li>
                <a
                  href="mailto:elatifi.haitam01@gmail.com"
                  className="hover:text-accent dark:hover:text-accent-dark transition-colors"
                >
                  elatifi.haitam01@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Elatifi01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent dark:hover:text-accent-dark transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/haitam-el-atifi-9089b2324/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent dark:hover:text-accent-dark transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="rule-double mb-4" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-[10px] font-mono text-ink-muted dark:text-ink-muted-dark tracking-wider uppercase">
          <span>© {year} Haitam El Atifi. All rights reserved.</span>
          {/* <span>
            Printed by{" "}
            <strong className="text-ink dark:text-ink-dark">React</strong> ·
            Typeset with{" "}
            <strong className="text-ink dark:text-ink-dark">
              Tailwind CSS
            </strong>{" "}
            · Animated by{" "}
            <strong className="text-ink dark:text-ink-dark">
              Framer Motion
            </strong>
          </span> */}
          <span>Casablanca, Morocco — {new Date().getFullYear()} Edition</span>
        </div>
      </div>
    </motion.footer>
  );
}
