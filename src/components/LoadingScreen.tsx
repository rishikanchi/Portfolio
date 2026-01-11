import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50 overflow-hidden">
      <div className="text-center relative">
        {/* Clip-path Mask Reveal */}
        <motion.h1
          className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground tracking-tight"
          initial={{
            opacity: 0,
            clipPath: "inset(0 100% 0 0)",
          }}
          animate={{
            opacity: 1,
            clipPath: "inset(0 0% 0 0)",
          }}
          transition={{
            duration: 1.4,
            delay: 0.2,
            ease: "easeOut",
          }}
        >
          Rishi Kanchi
        </motion.h1>

        {/* Elegant Underline */}
        <motion.div
          className="mt-6 h-px bg-accent/40 mx-auto"
          style={{ width: "120px" }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 1,
            delay: 1.8,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
