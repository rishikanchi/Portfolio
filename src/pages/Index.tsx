import { motion, Variants } from "framer-motion";
import { Github } from "lucide-react";
import Header from "@/components/Header";
import ViewMoreLink from "@/components/ViewMoreLink";

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 + i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const Index = () => {
  const upToItems = [
    {
      title: "Columbia University",
      subtitle: "Computer Science & Cognitive Science",
      description: (
        <>
          4.0 GPA — Expected 2028.
          <br />
          Researching computational approaches for accelerating ALS treatment
          discovery.
        </>
      ),
      link: "/research",
      linkText: "View all research",
    },
    {
      title: "Paraxis",
      subtitle: "Technical Co-Founder",
      description:
        "Building AI-powered extremely early detection of cognitive decline. Co-founded with Professor Winshel at Columbia.",
      link: "/work",
      linkText: "View all work experiences",
    },
    {
      title: "Arxiv Research Explorer",
      subtitle: "AI Visualization Project",
      description:
        "A full-stack web application that visualizes 100,000+ academic papers in a 2D interactive scatter plot using AI-powered clustering.",
      link: "/projects",
      linkText: "View all projects",
    },
  ];

  const inspirationCategories = [
    {
      title: "Readings",
      items: [
        {
          text: "Flow: The Psychology of Optimal Experience, Mihaly Csikszentmihalyi",
          link: "https://www.amazon.com/Flow-Psychology-Optimal-Experience-Perennial/dp/0061339202",
        },
        {
          text: "Fascinated to Presume: In Defense of Fiction, Zadie Smith",
          link: "https://www.amazon.com/Fascinated-Presume-Defense-Fiction/dp/B08L9Q7Z8K",
        },
        {
          text: "Inner Engineering, Sadhguru",
          link: "https://www.amazon.com/Inner-Engineering-Sadhguru/dp/1683640275",
        },
      ],
    },
    {
      title: "Audio",
      items: [
        {
          text: "Naval Ravikant on Modern Wisdom",
          link: "https://open.spotify.com/show/5qSUyJZ5M4vnxF7xnljvhZ",
        },
        {
          text: "Aquemini by Outkast",
          link: "https://open.spotify.com/album/5ceB3rxgXqFFP8sNp6e15t",
        },
        {
          text: "Tristan Harris on The Diary of a CEO",
          link: "https://open.spotify.com/episode/4Y3Z3Z3Z3Z3Z3Z3Z3Z3Z3",
        },
      ],
    },
    {
      title: "Quotes",
      items: [
        '"Study hard what interests you the most in the most undisciplined, irreverent and original manner possible" — Richard Feynman',
        '"How many things are there which I do not want." — Socrates',
      ],
    },
    {
      title: "Companies",
      items: [
        { text: "Cerebras", link: "https://cerebras.net/" },
        { text: "Linear", link: "https://linear.app/" },
        { text: "NOTHING", link: "https://nothing.tech/" },
        { text: "Gemini", link: "https://gemini.google.com/" },
      ],
    },
  ];

  return (
    <div className="min-h-screen lg:h-screen lg:overflow-hidden bg-background flex flex-col">
      <Header />

      {/* Main Content */}
      <main className="h-screen flex flex-col justify-center px-8 md:px-12 lg:px-16 pt-32 pb-8">
        {/* Phantom spacing (pt-32 pb-8) to center content between fixed header (~120px) and footer (~32px) */}
        <div className="max-w-7xl mx-auto w-full">
          {/* What I'm Up To Section */}
          <motion.section
            initial="hidden"
            animate="visible"
            className="mb-24 lg:mb-38"
          >
            <motion.h2
              variants={fadeUpVariant}
              custom={0}
              className="section-title mb-8 lg:mb-10"
            >
              What I'm Up To
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {upToItems.map((item, index) => (
                <motion.article
                  key={item.title}
                  variants={fadeUpVariant}
                  custom={index + 1}
                  className={`group ${
                    item.title === "Paraxis" ||
                    item.title === "Arxiv Research Explorer"
                      ? "cursor-pointer"
                      : ""
                  }`}
                  onClick={
                    item.title === "Paraxis"
                      ? () => window.open("https://paraxis.ai", "_blank")
                      : item.title === "Arxiv Research Explorer"
                      ? () =>
                          window.open(
                            "https://github.com/rishikanchi/ArxivApp",
                            "_blank"
                          )
                      : undefined
                  }
                >
                  <div className="mb-4">
                    <h3
                      className={`card-title text-foreground mb-1 ${
                        item.title === "Paraxis" ||
                        item.title === "Arxiv Research Explorer"
                          ? "group-hover:text-accent transition-colors duration-300"
                          : ""
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p className="text-base font-medium text-muted-foreground mb-3">
                      {item.subtitle}
                    </p>
                    <p className="body-text mb-4 line-clamp-3">
                      {item.description}
                    </p>
                    <ViewMoreLink to={item.link}>{item.linkText}</ViewMoreLink>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.section>

          {/* What Inspires Me Section */}
          <motion.section initial="hidden" animate="visible">
            <motion.h2
              variants={fadeUpVariant}
              custom={4}
              className="section-title mb-8 lg:mb-10"
            >
              What Inspires Me
            </motion.h2>

            <motion.div
              variants={fadeUpVariant}
              custom={5}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-8"
            >
              {inspirationCategories.map((category) => (
                <div key={category.title} className="text-center">
                  <h3 className="card-title text-foreground mb-4">
                    {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="text-base text-muted-foreground">
                        {typeof item === "object" && item.link ? (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-accent transition-colors duration-300"
                          >
                            {item.text}
                          </a>
                        ) : (
                          item
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUpVariant}
              custom={6}
              className="flex justify-center"
            >
              <ViewMoreLink to="/inspiration">
                View all inspiration
              </ViewMoreLink>
            </motion.div>
          </motion.section>
        </div>
      </main>

      {/* Footer - Commented out for minimalist design */}
      {/*
      <footer className="fixed bottom-0 left-0 right-0 px-8 md:px-12 lg:px-16 py-4 text-center">
        <p className="text-xs text-muted-foreground">
          Designed loosely in <span className="text-accent">Figma</span> and
          coded in <span className="text-accent">Cursor</span> by yours truly.
        </p>
      </footer>
      */}
    </div>
  );
};

export default Index;
