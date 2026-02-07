import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "./components/Loader";
import PaperOverlay from "./components/PaperOverlay";
import ReadingProgress from "./components/ReadingProgress";
import Masthead from "./components/Masthead";
import HeroLeadStory from "./components/HeroLeadStory";
import ColumnsSection from "./components/ColumnsSection";
import FeaturedProject from "./components/FeaturedProject";
import Classifieds from "./components/Classifieds";
import Footer from "./components/Footer";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Loader key="loader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <PaperOverlay />
      <ReadingProgress />

      <div className="min-h-screen bg-paper dark:bg-paper-dark text-ink dark:text-ink-dark transition-colors duration-400">
        <Masthead />

        <main>
          <HeroLeadStory />

          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <hr className="rule-double" />
          </div>

          <ColumnsSection />

          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <hr className="rule-double" />
          </div>

          <FeaturedProject />

          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <hr className="rule-double" />
          </div>

          <Classifieds />
        </main>

        <Footer />
      </div>
    </>
  );
}
