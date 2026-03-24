import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm text-accent font-medium mb-2">Reach Out</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground mb-12">
            Feel free to connect with me for collaboration, project discussions, or opportunities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid sm:grid-cols-2 gap-6"
        >
          <a
            href="mailto:bevarasiva450@gmail.com"
            className="bg-card rounded-xl border border-border p-6 flex items-center gap-4 hover:border-accent/30 transition-colors"
          >
            <div className="p-2.5 rounded-lg bg-accent/10 text-accent">
              <Mail size={20} />
            </div>
            <div className="text-left">
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="text-foreground text-sm">bevarasiva450@gmail.com</p>
            </div>
          </a>
          <a
            href="tel:+917995582169"
            className="bg-card rounded-xl border border-border p-6 flex items-center gap-4 hover:border-accent/30 transition-colors"
          >
            <div className="p-2.5 rounded-lg bg-accent/10 text-accent">
              <Phone size={20} />
            </div>
            <div className="text-left">
              <p className="text-sm text-muted-foreground">Phone</p>
              <p className="text-foreground text-sm">+91 7995582169</p>
            </div>
          </a>
        </motion.div>

        <div className="flex justify-center gap-4 mt-10">
          <a href="https://github.com/sivabevara45" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-border text-muted-foreground hover:text-foreground transition-colors">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/siva45" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-border text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin size={20} />
          </a>
        </div>

        <p className="text-xs text-muted-foreground mt-16">
          © 2025 Bevara Siva Kama Raju. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
