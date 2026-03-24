import { motion } from "framer-motion";

interface SkillCategory {
  title: string;
  skills: { name: string; level: string }[];
}

const categories: SkillCategory[] = [
  {
    title: "Programming & Scripting",
    skills: [
      { name: "C++", level: "Advanced" },
      { name: "Python", level: "Advanced" },
      { name: "C", level: "Intermediate" },
      { name: "DBMS", level: "Intermediate" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git & GitHub", level: "Advanced" },
      { name: "OpenCV", level: "Intermediate" },
      { name: "TensorFlow", level: "Intermediate" },
    ],
  },
  {
    title: "Core Strengths",
    skills: [
      { name: "Problem Solving", level: "Advanced" },
      { name: "Team Collaboration", level: "Advanced" },
      { name: "Time Management", level: "Advanced" },
      { name: "Continuous Learning", level: "Advanced" },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-card/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm text-accent font-medium mb-2">Capabilities</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12">
            TECH STACK
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-xl border border-border p-6"
            >
              <p className="text-xs text-muted-foreground mb-1">Expertise</p>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-5">
                {cat.title}
              </h3>
              <div className="space-y-4">
                {cat.skills.map((s) => (
                  <div key={s.name} className="flex items-center justify-between">
                    <span className="text-foreground text-sm">{s.name}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      s.level === "Advanced"
                        ? "bg-accent/15 text-accent"
                        : "bg-secondary text-muted-foreground"
                    }`}>
                      {s.level}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
