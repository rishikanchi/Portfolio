import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { FileText } from "lucide-react";

const publications = [
  {
    title:
      "Computational Modeling of Astrocytic GLT-1 Downregulation in ALS: Evaluating Riluzole vs. FP802 Efficacy",
    venue:
      "Cold Spring Harbor Laboratory Neurodegenerative Diseases Conference 2024",
    authors: ["R. Kanchi", "B. Narang", "A. Gitler"],
    abstract:
      "Presented research on ODE models of tripartite synapses simulating astrocytic GLT-1 downregulation in ALS. Demonstrated that while FP802 reduced neuronal calcium more effectively than Riluzole, neither treatment fully restored equilibrium.",
    documentLink:
      "https://docs.google.com/document/d/1D7JNcalIYb209USsIwjNkjQ_P3l-OaIqMKYmYTde71U/edit?usp=sharing",
  },
  {
    title:
      "Comparative Analysis of Riluzole vs. Ceftriaxone in ALS Treatment Using C. elegans Models",
    venue: "ISEF Qualifying Fair 2025",
    authors: ["R. Kanchi", "B. Nguyen"],
    abstract:
      "Investigating the difference between inhibiting glutamate release (Riluzole) vs. enhancing GLT-1 transporter function (Ceftriaxone) using CRISPR/Cas9 engineered C. elegans expressing SOD1 G85R mutation.",
    documentLink:
      "https://docs.google.com/document/d/1O9hXOlHiv6816QVgK04WjLJLgad_D3Yqywj0MA3h0dE/edit?usp=sharing",
  },
];

const Research = () => {
  return (
    <PageLayout title="Research">
      <div className="space-y-10">
        {publications.map((pub, index) => (
          <motion.article
            key={pub.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
            className={`group relative pb-10 ${
              index < publications.length - 1 ? "border-b border-border" : ""
            }`}
          >
            {pub.documentLink && (
              <button
                onClick={() => window.open(pub.documentLink, "_blank")}
                className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-accent transition-colors duration-300 rounded-md hover:bg-accent/10"
                aria-label="View document"
              >
                <FileText size={20} strokeWidth={1.5} />
              </button>
            )}
            <div>
              <p className="text-xs font-medium text-accent uppercase tracking-widest mb-2">
                {pub.venue}
              </p>
              <h3 className="font-serif text-2xl font-medium text-foreground mb-3 pr-16">
                {pub.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {pub.authors.join(", ")}
              </p>
              <p className="body-text pr-16">{pub.abstract}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </PageLayout>
  );
};

export default Research;
