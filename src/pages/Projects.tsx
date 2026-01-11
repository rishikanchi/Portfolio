import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Arxiv Research Explorer",
    category: "AI / Data Visualization",
    description:
      "A full-stack web application that visualizes 100,000+ academic papers in a 2D interactive scatter plot using AI-powered clustering. Uses ALBERT transformer for embeddings and UMAP for dimensionality reduction.",
    technologies: [
      "Python (Flask, PyTorch, Pandas)",
      "Node.js (Express)",
      "MongoDB Atlas",
      "LightningChart JS",
      "Tailwind CSS",
    ],
    links: {
      github: "https://github.com/rishikanchi/ArxivApp",
    },
  },
  {
    title: "Chesslytics",
    category: "AI / Mobile App",
    description:
      "A React Native mobile app that revolutionizes chess analysis using Stockfish for engine evaluation and Cerebras AI for natural language move explanations. Combines raw engine calculation with LLM explanations.",
    technologies: [
      "React Native (Expo)",
      "TypeScript",
      "Zustand",
      "Supabase",
      "Cerebras AI",
      "Stockfish Engine",
    ],
    links: {
      github: "https://github.com/rishikanchi/Chesslytics",
    },
  },
  {
    title: "Callo",
    category: "AI / Productivity",
    description:
      'An intelligent Android productivity app that combines task management with a natural language AI assistant. Uses Cerebras AI to process queries like "What should I prioritize today?" or "Schedule a workout".',
    technologies: [
      "Kotlin",
      "Jetpack Compose",
      "Material Design 3",
      "Cerebras AI",
      "Supabase",
      "Retrofit",
    ],
    links: {
      github: "https://github.com/rishikanchi/Callo",
    },
  },
  {
    title: "B.A.R.C.E.L.O.N.A.",
    category: "Data Science / Urban Planning",
    description:
      "A data science project for Uber Global Hackathon proposing hotel partnerships to increase market share in Barcelona. Used geospatial analysis to identify optimal locations and calculated travel coefficients.",
    technologies: ["Python", "Folium", "Geopy", "Pandas", "Data Analysis"],
    links: {
      github: "https://github.com/rishikanchi/FremdUGH",
    },
  },
  {
    title: "Hogwarts 3D Model",
    category: "Computational Graphics",
    description:
      "A detailed, programmatically generated 3D model of Hogwarts Castle rendered entirely in Mathematica using parametric geometry. Features multiple towers, interconnected buildings, and mathematical coordinate transformations.",
    technologies: [
      "Mathematica 13.3",
      "Wolfram Language",
      "Parametric Geometry",
    ],
    links: {
      github: "https://github.com/rishikanchi/ArxivApp",
    },
  },
  {
    title: "Portfolio",
    category: "Web Development",
    description:
      'A sophisticated personal portfolio website. Features a modern "old money" design aesthetic with smooth animations, responsive layouts, and comprehensive content showcasing academic research, projects, and professional experience.',
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Vite",
      "shadcn/ui",
      "React Router",
    ],
    links: {
      github: "https://github.com/rishikanchi/portfolio",
      live: window.location.origin,
    },
  },
];

const Projects = () => {
  return (
    <PageLayout title="Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + index * 0.08, duration: 0.5 }}
            className="group p-6 -mx-6 rounded-lg hover:bg-card transition-colors duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-xs font-medium text-accent uppercase tracking-widest mb-2">
                  {project.category}
                </p>
                <h2 className="font-serif text-2xl font-medium text-foreground">
                  {project.title}
                </h2>
              </div>
              <div className="flex items-center gap-3">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                    aria-label="View on GitHub"
                  >
                    <Github size={18} strokeWidth={1.5} />
                  </a>
                )}
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                    aria-label="View live site"
                  >
                    <ExternalLink size={18} strokeWidth={1.5} />
                  </a>
                )}
              </div>
            </div>

            <p className="body-text mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </PageLayout>
  );
};

export default Projects;
