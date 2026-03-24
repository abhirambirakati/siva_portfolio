import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certs = [
  { title: "Python Training", issuer: "MindLuster", date: "Dec 2023" },
  { title: "C++ Programming", issuer: "iamneo", date: "Dec 2024" },
  { title: "Responsive Web Design", issuer: "freeCodeCamp", date: "Sep 2024" },
  { title: "Web Design For Beginners", issuer: "MindLuster", date: "Feb 2024" },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm text-accent font-medium mb-2">Credentials</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12">
            CERTIFICATIONS
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {certs.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-card rounded-xl border border-border p-6 flex gap-4 items-start"
            >
              <div className="p-2.5 rounded-lg bg-accent/10 text-accent shrink-0">
                <Award size={20} />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground">{c.title}</h3>
                <p className="text-sm text-muted-foreground">{c.issuer}</p>
                <p className="text-xs text-muted-foreground mt-1">{c.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
