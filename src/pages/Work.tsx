import { motion } from 'framer-motion';
import PageLayout from '@/components/PageLayout';

const workExperiences = [
  {
    company: 'Paraxis',
    role: 'Co-Founder & CTO',
    period: '2024 — Present',
    description: 'Building the future of enterprise data infrastructure. Leading a team of engineers to develop a unified data platform that simplifies complex data operations for Fortune 500 companies.',
    highlights: [
      'Raised $2.5M seed round from top-tier VCs',
      'Built and scaled engineering team from 2 to 12',
      'Designed core architecture handling 10M+ events/day',
    ],
  },
  {
    company: 'Stripe',
    role: 'Software Engineering Intern',
    period: 'Summer 2024',
    description: 'Worked on the Payments team to improve transaction processing reliability. Implemented features that reduced payment failures by 15% for high-volume merchants.',
    highlights: [
      'Developed real-time monitoring dashboard',
      'Optimized database queries reducing latency by 40%',
      'Collaborated with 3 cross-functional teams',
    ],
  },
  {
    company: 'OpenAI',
    role: 'Research Intern',
    period: 'Summer 2023',
    description: 'Contributed to research on language model alignment and safety. Explored novel approaches to making AI systems more interpretable and controllable.',
    highlights: [
      'Published findings at NeurIPS 2023',
      'Developed evaluation framework for model safety',
      'Mentored by senior research scientists',
    ],
  },
  {
    company: 'Columbia AI Lab',
    role: 'Undergraduate Researcher',
    period: '2022 — Present',
    description: 'Conducting research on computational neuroscience and cognitive modeling. Developing neural network architectures that mirror human cognitive processes.',
    highlights: [
      'First-author paper accepted at CogSci 2024',
      'Received undergraduate research grant',
      'Presented at 3 academic conferences',
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
