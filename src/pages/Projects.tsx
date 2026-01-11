import { motion } from 'framer-motion';
import PageLayout from '@/components/PageLayout';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Neural Canvas',
    category: 'AI / Creative Tools',
    description: 'An AI-powered design tool that helps creators generate, iterate, and refine visual concepts. Built with cutting-edge generative models and an intuitive interface.',
    technologies: ['React', 'Python', 'PyTorch', 'Stable Diffusion'],
    links: {
      live: 'https://neuralcanvas.io',
      github: 'https://github.com/rishikanchi/neural-canvas',
    },
  },
  {
    title: 'Cognition',
    category: 'Research / Open Source',
    description: 'A framework for building and evaluating cognitive models. Provides tools for simulating human decision-making and comparing with neural network predictions.',
    technologies: ['Python', 'JAX', 'NumPy', 'Jupyter'],
    links: {
      github: 'https://github.com/rishikanchi/cognition',
    },
  },
  {
    title: 'DataFlow',
    category: 'Developer Tools',
    description: 'A visual programming environment for data transformation pipelines. Enables non-technical users to build complex data workflows without writing code.',
    technologies: ['TypeScript', 'React Flow', 'Node.js', 'PostgreSQL'],
    links: {
      live: 'https://dataflow.dev',
      github: 'https://github.com/rishikanchi/dataflow',
    },
  },
  {
    title: 'Mindful',
    category: 'Mobile App',
    description: 'A meditation and mindfulness app that uses biometric data to personalize guided sessions. Tracks progress and adapts to your mental state.',
    technologies: ['React Native', 'Swift', 'TensorFlow Lite', 'HealthKit'],
    links: {
      live: 'https://apps.apple.com/mindful',
    },
  },
  {
    title: 'Syntax',
    category: 'Education',
    description: 'An interactive platform for learning programming through visual debugging. Watch your code execute step-by-step and understand complex concepts intuitively.',
    technologies: ['Next.js', 'WebAssembly', 'Monaco Editor', 'D3.js'],
    links: {
      live: 'https://syntax.learning',
      github: 'https://github.com/rishikanchi/syntax',
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

            <p className="body-text mb-4">
              {project.description}
            </p>

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
