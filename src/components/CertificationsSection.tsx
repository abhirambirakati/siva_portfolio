import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certs = [
  {
    title: "NPTEL Certification",
    issuer: "NPTEL",
    date: "2024",
    file: "/nptel.jpg",
  },
  {
    title: "Infosys Certification",
    issuer: "Infosys",
    date: "2024",
    file: "/infosys.jpg",
  },
  {
    title: "Infosys Certificate (PDF)",
    issuer: "Infosys",
    date: "2024",
    file: "/infosys.pdf",
  },
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
              className="bg-card rounded-xl border border-border p-6 flex flex-col gap-4"
            >
              <div className="flex gap-4 items-start">
                <div className="p-2.5 rounded-lg bg-accent/10 text-accent shrink-0">
                  <Award size={20} />
                </div>

                <div>
                  <h3 className="font-heading font-semibold text-foreground">
                    {c.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {c.issuer}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {c.date}
                  </p>
                </div>
              </div>

              {/* ✅ View Button */}
              <a
                href={c.file}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-center bg-accent text-white py-2 rounded-lg hover:opacity-90 transition"
              >
                View Certificate
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;