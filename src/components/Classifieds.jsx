import { motion } from "framer-motion";
import { fadeUp, staggerContainer, imperfectRotation } from "../utils/variants";
import SectionHeader from "./SectionHeader";

const CLASSIFIEDS = [
  {
    heading: "Open to Internship Opportunities",
    body: "Currently seeking a 4-month internship as a web developer. Interested in full-stack or frontend roles, either remote or based in Casablanca.",
    icon: "✦",
  },
  {
    heading: "What I Can Do",
    body: "Web application development · CRUD systems · REST API integration · Database design · Responsive UI implementation",
    icon: "◆",
  },
  {
    heading: "Collaboration Welcome",
    body: "Open to working with startups, small teams, or fellow developers on learning projects and real-world applications.",
    icon: "●",
  },
  {
    heading: "Preferred Tools",
    body: "VS Code · Git · GitHub · React · Laravel  · MySQL · Tailwind CSS",
    icon: "■",
  },
  {
    heading: "Learning & Growth",
    body: "Actively improving skills in full-stack development, modern JavaScript, and backend architecture through hands-on projects.",
    icon: "▲",
  },
  {
    heading: "Response Time",
    body: "Usually replies within 24 hours for internship or collaboration opportunities.",
    icon: "◎",
  },
];

export default function Classifieds() {
  return (
    <section
      id="classifieds"
      className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16"
    >
      <SectionHeader
        label="§ Classifieds"
        title="Services, Availability & Opportunities"
      />

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {CLASSIFIEDS.map((item, i) => (
          <motion.div
            key={item.heading}
            variants={fadeUp}
            className="border border-rule dark:border-rule-dark p-4
                       bg-card/40 dark:bg-card-dark/40 hover:bg-card dark:hover:bg-card-dark
                       transition-colors duration-300"
            style={{ transform: imperfectRotation(i + 10) }}
            whileHover={{ y: -2, transition: { duration: 0.2 } }}
          >
            <div className="flex items-start gap-3">
              <span className="text-accent dark:text-accent-dark text-lg leading-none mt-0.5">
                {item.icon}
              </span>
              <div>
                <h3 className="font-serif text-base font-bold text-ink dark:text-ink-dark mb-1.5">
                  {item.heading}
                </h3>
                <p className="text-xs leading-relaxed text-ink-muted dark:text-ink-muted-dark">
                  {item.body}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
