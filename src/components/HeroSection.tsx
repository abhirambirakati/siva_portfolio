import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react";
import profileImg from "@/assets/profile.jpeg";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center section-padding pt-32">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-muted-foreground text-sm font-medium mb-6">
            SOFTWARE DEVELOPER
          </span>

          <h1 className="font-heading text-5xl md:text-7xl font-bold leading-tight mb-2 text-foreground">
            BEVARA
          </h1>
          <h1 className="font-heading text-5xl md:text-7xl font-bold leading-tight text-muted-foreground mb-6">
            SIVA KAMA RAJU
          </h1>

          <p className="text-lg text-muted-foreground mb-2">Software Developer |</p>
          <p className="text-muted-foreground max-w-lg mb-8">
            I specialize in building <span className="text-foreground font-medium">efficient solutions</span> and{" "}
            <span className="text-foreground font-medium">scalable applications</span>.
          </p>

          <div className="flex items-center gap-3 flex-wrap">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-foreground text-background font-medium text-sm hover:opacity-90 transition-opacity"
            >
              EXPLORE WORK <ChevronDown size={16} />
            </a>
            <a href="https://github.com/sivabevara45" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-border text-muted-foreground hover:text-foreground transition-colors">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/siva45" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-border text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="mailto:bevarasiva450@gmail.com" className="p-3 rounded-full border border-border text-muted-foreground hover:text-foreground transition-colors">
              <Mail size={18} />
            </a>
            <a href="/sivaresume.docx" download className="p-3 rounded-full border border-border text-muted-foreground hover:text-foreground transition-colors">
              <Download size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-full bg-accent/10 blur-3xl" />
            <img
              src={profileImg}
              alt="Siva Kama Raju"
              className="relative w-full h-full rounded-full object-cover border-4 border-border"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
