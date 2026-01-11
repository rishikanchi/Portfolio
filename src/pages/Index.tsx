import { motion, Variants } from 'framer-motion';
import Header from '@/components/Header';
import ViewMoreLink from '@/components/ViewMoreLink';

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 + i * 0.1,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

const Index = () => {
  const upToItems = [
    {
      title: 'Columbia University',
      subtitle: 'Computer & Cognitive Science',
      description: '4.0 GPA; Expected May 2028. Researching computational models of human cognition and developing novel approaches to understanding intelligence.',
      link: '/research',
      linkText: 'View all research',
    },
    {
      title: 'Paraxis',
      subtitle: 'Co-Founder',
      description: 'Building the future of data infrastructure. Leading product development and engineering for our enterprise data platform.',
      link: '/work',
      linkText: 'View all work experiences',
    },
    {
      title: 'Neural Canvas',
      subtitle: 'Co-Founder',
      description: 'Developing AI-powered creative tools that enhance human creativity through intelligent assistance and generative capabilities.',
      link: '/projects',
      linkText: 'View all projects',
    },
  ];

  const inspirationCategories = [
    {
      title: 'Readings',
      items: ['Sapiens, Yuval Harari', 'Zero to One, Peter Thiel', 'The Almanack, Naval'],
    },
    {
      title: 'Audio',
      items: ['Lex Fridman Podcast', 'Acquired', 'My First Million'],
    },
    {
      title: 'Quotes',
      items: ['"Move fast, break things"', '"Stay hungry, stay foolish"', '"Think different"'],
    },
    {
      title: 'Companies',
      items: ['OpenAI', 'Stripe', 'Linear'],
    },
  ];

  return (
    <div className="min-h-screen lg:h-screen lg:overflow-hidden bg-background flex flex-col">
      <Header />

      {/* Main Content */}
      <main className="flex-1 flex flex-col justify-center px-8 md:px-12 lg:px-16 pt-28 lg:pt-0 pb-8">
        <div className="max-w-7xl mx-auto w-full">
          {/* What I'm Up To Section */}
          <motion.section
            initial="hidden"
            animate="visible"
            className="mb-12 lg:mb-16"
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
                  className="group"
                >
                  <h3 className="card-title text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium text-muted-foreground mb-3">
                    {item.subtitle}
                  </p>
                  <p className="body-text mb-4 line-clamp-3">
                    {item.description}
                  </p>
                  <ViewMoreLink to={item.link}>{item.linkText}</ViewMoreLink>
                </motion.article>
              ))}
            </div>
          </motion.section>

          {/* What Inspires Me Section */}
          <motion.section
            initial="hidden"
            animate="visible"
          >
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
                      <li
                        key={idx}
                        className="text-sm text-muted-foreground"
                      >
                        {item}
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
              <ViewMoreLink to="/inspiration">View All</ViewMoreLink>
            </motion.div>
          </motion.section>
        </div>
      </main>
    </div>
  );
};

export default Index;
