import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ViewMoreLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

const ViewMoreLink = ({ to, children, className = "" }: ViewMoreLinkProps) => {
  return (
    <Link
      to={to}
      className={`link-underline ${className}`}
      onClick={(e) => e.stopPropagation()}
    >
      <span className="inline-flex items-center gap-2">
        <span className="text-sm text-accent font-medium tracking-wide">
          {children}
        </span>
        <motion.span
          className="text-accent"
          initial={{ x: 0 }}
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2 }}
        >
          <ArrowRight size={16} strokeWidth={1.5} />
        </motion.span>
      </span>
    </Link>
  );
};

export default ViewMoreLink;
