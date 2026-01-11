import { motion } from "framer-motion";
import { useState } from "react";
import PageLayout from "@/components/PageLayout";

const inspirationData = {
  quotes: [
    {
      text: '"Study hard what interests you the most in the most undisciplined, irreverent and original manner possible"',
      author: "Richard Feynman",
    },
    {
      text: '"How many things are there which I do not want."',
      author: "Socrates",
    },
    {
      text: '"What you don\'t know you know is more important than what you know you know."',
      author: "Naval Ravikant",
    },
    {
      text: '"Scheduling time to do the thing isn\'t doing the thing. Telling people you\'re going to do the thing isn\'t doing the thing. Hating on yourself for not doing the thing isn\'t doing the thing. Fantasising about all of the adoration you\'ll receive once you do the thing isn\'t doing the thing. Reading about how other people did the thing isn\'t doing the thing. Reading this essay isn\'t doing the thing. The only thing that is doing the thing is doing the thing."',
      author: "Strangest Loop",
    },
    {
      text: '"The intimate meeting between a book and its reader can\'t be predetermined. To put it another way, a book can try to modify your behavior, but it has no way of knowing for sure that it has. In front of a book you are still free. Between reader and book, there is only the continual risk of wrongness, word by word, sentence by sentence. The Internet does not get to decide. Nor does the writer. Only the reader decides. So decide."',
      author: "Zadie Smith",
    },
    {
      text: '"A fit body, a calm mind, a house full of love. These things cannot be bought—they must be earned."',
      author: "Naval Ravikant",
    },
  ],
  music: [
    {
      title: "Da Art of Storytellin' Pt 1",
      artist: "Outkast",
      note: "I admire the complex narrative structure; it reminds me that technical precision needs to be balanced with good storytelling.",
      link: "https://open.spotify.com/track/2vjgepbkQg5jH8ujrKEOin",
    },
    {
      title: "FAMJAM4000",
      artist: "Jordan Ward",
      note: "A great blend of R&B and Hip-hop that feels grounded and connected.",
      link: "https://open.spotify.com/track/08vlprFBmwh9TQnjXUtZDG",
    },
    {
      title: "My Eyes",
      artist: "Travis Scott",
      note: "The engineering quality of the sound design and the beat switch is masterful production.",
      link: "https://open.spotify.com/track/4kjI1gwQZRKNDkw1nI475M",
    },
    {
      title: "Treasure",
      artist: "Bruno Mars",
      note: "Classic funk production. It's impossible not to be in a good mood when this is on.",
      link: "https://open.spotify.com/track/55h7vJchibLdUkxdlX3fK7",
    },
    {
      title: "To Summer, From Cole",
      artist: "J. Cole",
      note: "Deeply reflective storytelling that resonates with my appreciation for narrative.",
      link: "https://open.spotify.com/track/2f86Ae3R4OKAu1lEIqouih",
    },
    {
      title: "Glory",
      artist: "JID",
      note: "The flow patterns and lyricism are incredibly intricate. High-energy focus music.",
      link: "https://open.spotify.com/track/2hplcKUnz9EuePPNiz2FRH",
    },
  ],
  readings: [
    {
      title: "Fascinated to Presume: In Defense of Fiction",
      author: "Zadie Smith",
      note: "A profound essay on empathy and the right to imagine the lives of others—essential for User Experience design.",
      link: "https://www.nybooks.com/articles/2019/10/24/zadie-smith-in-defense-of-fiction/",
    },
    {
      title: "Flow: The Psychology of Optimal Experience",
      author: "Mihaly Csikszentmihalyi",
      note: 'The blueprint for my work habits. It explains the "zone" I try to achieve when coding.',
      link: "https://www.goodreads.com/book/show/66354.Flow",
    },
    {
      title: "Inner Engineering",
      author: "Sadhguru",
      note: "Provides the tools for mental management and clarity, balancing the chaos of startup life.",
      link: "https://www.goodreads.com/en/book/show/29513878-inner-engineering",
    },
  ],
  podcasts: [
    {
      title: "Modern Wisdom (Episodes with Naval)",
      host: "Chris Williamson & Naval Ravikant",
      note: "Naval's thoughts on leverage, specific knowledge, and wealth creation are foundational to my view on being a developer-founder.",
      link: "https://open.spotify.com/episode/2RdJcE1JLvrFk6QxpDpmJK",
    },
    {
      title: "The Diary of a CEO (Episode with Tristan Harris)",
      host: "Steven Bartlett & Tristan Harris",
      note: 'Tristan\'s insights on the "Attention Economy" deeply influence how I think about ethical app development and user retention.',
      link: "https://open.spotify.com/episode/1S8FEbhkaQQ8Yrx4e3f5Vh",
    },
    {
      title: "How to Get Rich (Tweetstorm/Podcast)",
      host: "Naval Ravikant",
      note: 'The definitive guide to the modern age of leverage (Code & Media). "Productize Yourself" is a motto I live by.',
      link: "https://nav.al/rich",
    },
  ],
  companies: [
    {
      name: "Cerebras",
      link: "https://cerebras.net/",
      description:
        "AI hardware company pushing the boundaries of neural processing",
    },
    {
      name: "Linear",
      link: "https://linear.app/",
      description: "Beautifully crafted software that respects users",
    },
    {
      name: "NOTHING",
      link: "https://nothing.tech/",
      description: "Innovative technology company founded by Carl Pei",
    },
    {
      name: "Gemini",
      link: "https://gemini.google.com/",
      description: "Google's AI model advancing conversational AI",
    },
  ],
};

const Inspiration = () => {
  const [activeTab, setActiveTab] = useState<
    "readings" | "audio" | "quotes" | "companies"
  >("readings");

  const tabs = [
    { id: "readings", label: "Readings" },
    { id: "audio", label: "Audio" },
    { id: "quotes", label: "Quotes" },
    { id: "companies", label: "Companies" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "readings":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {inspirationData.readings.map((book, index) => {
              const content = (
                <motion.div
                  key={book.title}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className={`p-5 border border-border rounded-lg hover:border-accent transition-colors duration-300 ${
                    book.link ? "cursor-pointer" : ""
                  }`}
                >
                  <h3 className="font-serif text-base font-medium text-foreground mb-1">
                    {book.title}
                  </h3>
                  <p className="text-sm text-accent mb-2">{book.author}</p>
                  <p className="text-sm text-muted-foreground">{book.note}</p>
                </motion.div>
              );

              return book.link ? (
                <a
                  key={book.title}
                  href={book.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {content}
                </a>
              ) : (
                content
              );
            })}
          </motion.div>
        );

      case "audio":
        const allAudio = [
          ...inspirationData.music.map((song) => ({
            ...song,
            type: "music" as const,
          })),
          ...inspirationData.podcasts.map((podcast) => ({
            ...podcast,
            type: "podcast" as const,
          })),
        ];
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {allAudio.map((item, index) => {
              const content = (
                <motion.div
                  key={`${item.type}-${item.title}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className={`p-5 border border-border rounded-lg hover:border-accent transition-colors duration-300 ${
                    item.link ? "cursor-pointer" : ""
                  }`}
                >
                  <h3 className="font-serif text-base font-medium text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-accent mb-2">
                    {item.type === "music" ? item.artist : item.host}
                  </p>
                  <p className="text-sm text-muted-foreground">{item.note}</p>
                </motion.div>
              );

              return item.link ? (
                <a
                  key={`${item.type}-${item.title}`}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {content}
                </a>
              ) : (
                content
              );
            })}
          </motion.div>
        );

      case "quotes":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {inspirationData.quotes.map((quote, index) => (
              <motion.blockquote
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="border-l-2 border-accent pl-6"
              >
                <p className="font-serif text-lg md:text-xl text-foreground italic mb-2">
                  {quote.text}
                </p>
                <cite className="text-sm text-muted-foreground not-italic">
                  — {quote.author}
                </cite>
              </motion.blockquote>
            ))}
          </motion.div>
        );

      case "companies":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {inspirationData.companies.map((company, index) => {
              const content = (
                <motion.div
                  key={company.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="p-5 border border-border rounded-lg hover:border-accent transition-colors duration-300 cursor-pointer"
                >
                  <h3 className="font-serif text-base font-medium text-foreground mb-1">
                    {company.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {company.description}
                  </p>
                </motion.div>
              );

              return (
                <a
                  key={company.name}
                  href={company.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {content}
                </a>
              );
            })}
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <PageLayout title="What Inspires Me">
      <div className="space-y-12">
        {/* Tab Toggle */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <div className="inline-flex bg-card border border-border rounded-lg p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-6 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-accent text-accent-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {renderContent()}
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default Inspiration;
