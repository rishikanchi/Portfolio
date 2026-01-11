import { motion } from 'framer-motion';
import PageLayout from '@/components/PageLayout';

const workExperiences = [
  {
    company: 'Paraxis',
    role: 'Co-Founder & Head of Engineering',
    period: 'May 2025 — Present',
    description: 'I co-founded this startup with Professor Winshel at Columbia Business School to detect cognitive decline early using AI analysis of speech and typing patterns. We are building a mobile application dedicated to extremely early detection of conditions like Alzheimer\'s via deep learning.',
    highlights: [
      'Tech Stack: Swift (iOS), Python (Backend/AI), GCP, Docker, Terraform, Flask, PostgreSQL, PyTorch, TensorFlow, LLMs/NLP',
      'Website: https://paraxis.ai/',
      'Focus: Proprietary detection algorithms for cognitive decline using speech and typing pattern analysis',
    ],
  },
  {
    company: 'Network Perception (Acquired by Dragos)',
    role: 'Data Science Intern',
    period: 'Jun 2024 — Aug 2024',
    description: 'I architected an end-to-end machine learning platform for network security, engineering neural networks that achieved ~90% accuracy. Integrated automated data processing with feature engineering to streamline security analysis.',
    highlights: [
      'Developed RestAPI solution to extract configuration files, convert to JSON, and isolate key features',
      'Applied variance thresholding and recursive feature elimination (RFE)',
      'Built Gradient Boosting Regression models and Neural Networks using Python, PyTorch, TensorFlow',
    ],
  },
  {
    company: 'Digital Partners Institute',
    role: 'Data Science Intern',
    period: 'Jun 2023 — Aug 2023',
    description: 'I conducted a deep analysis of Startup Unicorn success factors and presented my findings to professionals and professors at UIUC. Analyzed large datasets to generate insights on what makes a startup reach a billion-dollar valuation.',
    highlights: [
      'Used Scikit-learn for regressions and K-means clustering to identify patterns',
      'Visualized data using Matplotlib and presented findings to expert panel',
      'Presentation slides: https://docs.google.com/presentation/d/102t3bTUUjXB4uOhD7HD7Y-tpPMDobQ2dByJNT0VUhh0/edit?usp=sharing',
    ],
  },
];

const Work = () => {
  return (
    <PageLayout title="Work Experience">
      <div className="space-y-16">
        {workExperiences.map((experience, index) => (
          <motion.article
            key={experience.company}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
            className="group border-l-2 border-border pl-8 hover:border-accent transition-colors duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground">
                  {experience.company}
                </h2>
                <p className="text-base text-muted-foreground mt-1">
                  {experience.role}
                </p>
              </div>
              <span className="text-sm text-muted-foreground font-medium tracking-wide">
                {experience.period}
              </span>
            </div>

            <p className="body-text mb-6 max-w-3xl">
              {experience.description}
            </p>

            <ul className="space-y-2">
              {experience.highlights.map((highlight, idx) => (
                <li
                  key={idx}
                  className="text-sm text-muted-foreground flex items-start gap-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  {highlight}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </PageLayout>
  );
};

export default Work;
