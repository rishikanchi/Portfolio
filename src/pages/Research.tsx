import { motion } from 'framer-motion';
import PageLayout from '@/components/PageLayout';
import { FileText, ExternalLink } from 'lucide-react';

const publications = [
  {
    title: 'Computational Modeling of Astrocytic GLT-1 Downregulation in ALS: Evaluating Riluzole vs. FP802 Efficacy',
    venue: 'Cold Spring Harbor Laboratory Neurodegenerative Diseases Conference 2024',
    authors: ['R. Kanchi'],
    abstract: 'Presented research on ODE models of tripartite synapses simulating astrocytic GLT-1 downregulation in ALS. Demonstrated that while FP802 reduced neuronal calcium more effectively than Riluzole, neither treatment fully restored equilibrium.',
    links: {
      paper: 'https://cshl.edu/conferences/',
    },
  },
  {
    title: 'Comparative Analysis of Riluzole vs. Ceftriaxone in ALS Treatment Using C. elegans Models',
    venue: 'ISEF Qualifying Fair 2025',
    authors: ['R. Kanchi'],
    abstract: 'Investigating the difference between inhibiting glutamate release (Riluzole) vs. enhancing GLT-1 transporter function (Ceftriaxone) using CRISPR/Cas9 engineered C. elegans expressing SOD1 G85R mutation.',
    links: {},
  },
];

const researchInterests = [
  {
    area: 'Computational Neuroscience',
    description: 'Developing ODE models of tripartite synapses to simulate astrocytic GLT-1 downregulation in ALS. Building differential equation models integrating Hodgkin-Huxley neurons and astrocyte dynamics.',
  },
  {
    area: 'ALS Therapeutics Research',
    description: 'Evaluating therapeutic agents like Riluzole vs. FP802 for ALS treatment. Investigating glutamate transporter function and neuronal action potentials in neurodegenerative disease models.',
  },
  {
    area: 'Neurodegenerative Disease Modeling',
    description: 'Using CRISPR/Cas9 engineered C. elegans models to study ALS pathology. Measuring paralysis onset, motor response, and survival rates in genetic disease models.',
  },
  {
    area: 'Biomedical Data Analysis',
    description: 'Applying machine learning and statistical methods to analyze complex biological datasets. Integrating experimental results with computational modeling for drug discovery.',
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
