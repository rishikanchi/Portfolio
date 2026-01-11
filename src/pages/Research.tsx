import { motion } from 'framer-motion';
import PageLayout from '@/components/PageLayout';
import { FileText, ExternalLink } from 'lucide-react';

const publications = [
  {
    title: 'Bridging Cognitive Models and Neural Networks: A Unified Framework',
    venue: 'CogSci 2024',
    authors: ['R. Kanchi', 'J. Smith', 'M. Johnson'],
    abstract: 'We present a novel framework that bridges traditional cognitive models with modern neural network architectures, enabling researchers to leverage insights from both paradigms.',
    links: {
      paper: 'https://arxiv.org/paper1',
      code: 'https://github.com/rishikanchi/cognitive-nn',
    },
  },
  {
    title: 'Attention Mechanisms in Human Decision Making',
    venue: 'NeurIPS 2023 Workshop',
    authors: ['R. Kanchi', 'A. Chen'],
    abstract: 'An investigation into how attention mechanisms in transformer models parallel selective attention in human cognition, with implications for AI alignment.',
    links: {
      paper: 'https://arxiv.org/paper2',
    },
  },
  {
    title: 'Interpretable AI for Cognitive Science Research',
    venue: 'ICLR 2023',
    authors: ['R. Kanchi', 'L. Williams', 'P. Davis'],
    abstract: 'We develop interpretable AI methods specifically designed for cognitive science applications, enabling researchers to gain insights into both model and human behavior.',
    links: {
      paper: 'https://arxiv.org/paper3',
      code: 'https://github.com/rishikanchi/interp-cogsci',
    },
  },
];

const researchInterests = [
  {
    area: 'Computational Cognitive Science',
    description: 'Developing computational models that capture human cognitive processes, from perception to decision-making.',
  },
  {
    area: 'AI Alignment & Safety',
    description: 'Exploring methods to ensure AI systems behave in accordance with human values and intentions.',
  },
  {
    area: 'Neural Network Interpretability',
    description: 'Creating tools and techniques to understand how neural networks process information and make decisions.',
  },
  {
    area: 'Human-AI Interaction',
    description: 'Designing AI systems that effectively collaborate with humans, enhancing rather than replacing human capabilities.',
  },
];

const Research = () => {
  return (
    <PageLayout title="Research">
      {/* Research Interests */}
      <section className="mb-20">
        <h2 className="font-serif text-2xl font-medium mb-8 text-foreground">
          Research Interests
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {researchInterests.map((interest, index) => (
            <motion.div
              key={interest.area}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.08, duration: 0.5 }}
              className="p-6 border border-border rounded-lg hover:border-accent transition-colors duration-300"
            >
              <h3 className="font-serif text-lg font-medium text-foreground mb-2">
                {interest.area}
              </h3>
              <p className="body-text">
                {interest.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Publications */}
      <section>
        <h2 className="font-serif text-2xl font-medium mb-8 text-foreground">
          Publications
        </h2>
        <div className="space-y-10">
          {publications.map((pub, index) => (
            <motion.article
              key={pub.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-medium text-accent uppercase tracking-widest mb-2">
                    {pub.venue}
                  </p>
                  <h3 className="font-serif text-xl font-medium text-foreground mb-2">
                    {pub.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {pub.authors.join(', ')}
                  </p>
                  <p className="body-text mb-4 max-w-3xl">
                    {pub.abstract}
                  </p>
                  <div className="flex items-center gap-4">
                    {pub.links.paper && (
                      <a
                        href={pub.links.paper}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-accent hover:text-foreground transition-colors duration-300"
                      >
                        <FileText size={16} strokeWidth={1.5} />
                        Paper
                      </a>
                    )}
                    {pub.links.code && (
                      <a
                        href={pub.links.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-accent hover:text-foreground transition-colors duration-300"
                      >
                        <ExternalLink size={16} strokeWidth={1.5} />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default Research;
