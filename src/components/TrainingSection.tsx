import { motion } from "framer-motion";

const TrainingSection = () => {
  return (
    <section id="training" className="section-padding bg-card/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm text-accent font-medium mb-2">Experience</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12">
            Specialized Training
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card rounded-xl border border-border p-8"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
            <div>
              <h3 className="font-heading text-xl font-semibold text-foreground">
                Object-Oriented Programming System using C++
              </h3>
              <p className="text-muted-foreground text-sm mt-1">Lovely Professional University</p>
            </div>
            <p className="text-sm text-muted-foreground mt-2 md:mt-0">Jun 2025 – Jul 2025</p>
          </div>

          <ul className="space-y-2 mb-6">
            <li className="text-sm text-muted-foreground flex items-start gap-2">
              <span className="text-accent mt-0.5">•</span>
              Developed a console-based library management system implementing OOP principles.
            </li>
            <li className="text-sm text-muted-foreground flex items-start gap-2">
              <span className="text-accent mt-0.5">•</span>
              Implemented classes, inheritance, polymorphism, abstraction and encapsulation.
            </li>
            <li className="text-sm text-muted-foreground flex items-start gap-2">
              <span className="text-accent mt-0.5">•</span>
              Added features like book management, user roles, issue/return system, and fine calculation.
            </li>
          </ul>

          <div className="flex flex-wrap gap-2">
            {["C++", "OOP", "Data Structures"].map((t) => (
              <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground">
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrainingSection;
