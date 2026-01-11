import { motion } from 'framer-motion';
import PageLayout from '@/components/PageLayout';

const inspirationData = {
  readings: [
    { title: 'Sapiens', author: 'Yuval Noah Harari' },
    { title: 'Zero to One', author: 'Peter Thiel' },
    { title: 'The Almanack of Naval Ravikant', author: 'Eric Jorgenson' },
    { title: 'Thinking, Fast and Slow', author: 'Daniel Kahneman' },
    { title: 'The Beginning of Infinity', author: 'David Deutsch' },
    { title: 'Meditations', author: 'Marcus Aurelius' },
    { title: 'The Structure of Scientific Revolutions', author: 'Thomas Kuhn' },
    { title: 'Gödel, Escher, Bach', author: 'Douglas Hofstadter' },
  ],
  audio: [
    { title: 'Lex Fridman Podcast', description: 'Deep conversations with brilliant minds' },
    { title: 'Acquired', description: 'The playbook behind great companies' },
    { title: 'My First Million', description: 'Business ideas and entrepreneurship' },
    { title: 'The Knowledge Project', description: 'Mastering the best of what others have figured out' },
    { title: 'Huberman Lab', description: 'Science-based tools for everyday life' },
    { title: 'The Tim Ferriss Show', description: 'Deconstructing world-class performers' },
  ],
  quotes: [
    { text: 'The only way to do great work is to love what you do.', author: 'Steve Jobs' },
    { text: 'Move fast and break things. Unless you are breaking stuff, you are not moving fast enough.', author: 'Mark Zuckerberg' },
    { text: 'Stay hungry. Stay foolish.', author: 'Stewart Brand' },
    { text: 'The best time to plant a tree was 20 years ago. The second best time is now.', author: 'Chinese Proverb' },
    { text: 'Simplicity is the ultimate sophistication.', author: 'Leonardo da Vinci' },
    { text: 'The future belongs to those who believe in the beauty of their dreams.', author: 'Eleanor Roosevelt' },
  ],
  companies: [
    { name: 'OpenAI', reason: 'Pushing the boundaries of artificial intelligence' },
    { name: 'Stripe', reason: 'Obsessive attention to developer experience' },
    { name: 'Linear', reason: 'Beautifully crafted software that respects users' },
    { name: 'Figma', reason: 'Democratizing design with collaborative tools' },
    { name: 'Notion', reason: 'Flexible tools that adapt to how people think' },
    { name: 'Vercel', reason: 'Making deployment delightfully simple' },
  ],
};

const Inspiration = () => {
  return (
    <PageLayout title="What Inspires Me">
      <div className="space-y-20">
        {/* Readings */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <h2 className="font-serif text-2xl font-medium mb-8 text-foreground">
            Readings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {inspirationData.readings.map((book, index) => (
              <motion.div
                key={book.title}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.05, duration: 0.4 }}
                className="flex items-baseline gap-3 py-3 border-b border-border group hover:border-accent transition-colors duration-300"
              >
                <span className="text-base text-foreground font-medium">
                  {book.title}
                </span>
                <span className="text-sm text-muted-foreground">
                  {book.author}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Audio */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h2 className="font-serif text-2xl font-medium mb-8 text-foreground">
            Audio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inspirationData.audio.map((podcast, index) => (
              <motion.div
                key={podcast.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.05, duration: 0.4 }}
                className="p-5 border border-border rounded-lg hover:border-accent transition-colors duration-300"
              >
                <h3 className="font-serif text-base font-medium text-foreground mb-2">
                  {podcast.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {podcast.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Quotes */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <h2 className="font-serif text-2xl font-medium mb-8 text-foreground">
            Quotes
          </h2>
          <div className="space-y-8">
            {inspirationData.quotes.map((quote, index) => (
              <motion.blockquote
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 + index * 0.08, duration: 0.5 }}
                className="border-l-2 border-accent pl-6"
              >
                <p className="font-serif text-lg md:text-xl text-foreground italic mb-2">
                  "{quote.text}"
                </p>
                <cite className="text-sm text-muted-foreground not-italic">
                  — {quote.author}
                </cite>
              </motion.blockquote>
            ))}
          </div>
        </motion.section>

        {/* Companies */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <h2 className="font-serif text-2xl font-medium mb-8 text-foreground">
            Companies I Admire
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inspirationData.companies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.05, duration: 0.4 }}
                className="p-5 bg-card rounded-lg border border-border hover:border-accent transition-colors duration-300"
              >
                <h3 className="font-serif text-lg font-medium text-foreground mb-2">
                  {company.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {company.reason}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </PageLayout>
  );
};

export default Inspiration;
