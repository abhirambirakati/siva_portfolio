import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Mental Health Simulator",
    description: "A Java-based mental health simulation system that models user emotions and stress levels using rule-based logic and interactive scenarios.",
    tags: ["Java", "OOP", "MySQL", "GitHub"],
    features: [
      "Dynamic decision-driven pathways",
      "Intuitive GUI for interaction",
      "Progress tracking & feedback",
      "Personalized wellbeing insights",
    ],
    date: "Nov 2023",
  },
  {
    title: "Chat Bot – Cricket Score Predictor",
    description: "AI-based cricket score prediction chatbot using ML models trained on historical match data to forecast innings scores accurately.",
    tags: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
    features: [
      "ML-based score prediction",
      "Data preprocessing & feature engineering",
      "Run-rate trends analysis",
      "Conversational AI interface",
    ],
    link: "https://github.com/sivabevara45",
    date: "Aug 2025",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm text-accent font-medium mb-2">Portfolio</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Showcasing my work in Software Development, Machine Learning, and Full Stack Projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-xl border border-border p-6 hover:border-accent/30 transition-colors group"
            >
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {p.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">{p.description}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mb-5">
                <p className="text-xs font-medium text-foreground mb-2">Key Features</p>
                <ul className="space-y-1">
                  {p.features.map((f) => (
                    <li key={f} className="text-xs text-muted-foreground flex items-start gap-2">
                      <span className="text-accent mt-0.5">•</span> {f}
                    </li>
                  ))}
                </ul>
              </div>

              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-accent hover:underline"
                >
                  GitHub <ExternalLink size={14} />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
