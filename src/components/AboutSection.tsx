import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm text-accent font-medium mb-2">About Me</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
            BUILDING SOLUTIONS WITH CODE
          </h2>

          <p className="text-muted-foreground leading-relaxed max-w-3xl mb-12">
            I am a Computer Science and Engineering student at Lovely Professional University, passionate about software development and problem-solving. With hands-on experience in C++, Python, and full-stack development, I focus on building efficient, scalable solutions. I continuously explore new technologies to sharpen my skills and create impactful applications.
          </p>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-card rounded-xl p-6 border border-border">
              <p className="text-sm text-muted-foreground mb-1">Projects Built</p>
              <p className="font-heading text-3xl font-bold text-foreground">2+</p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border">
              <p className="text-sm text-muted-foreground mb-1">Core Skills</p>
              <p className="font-heading text-xl font-bold text-foreground">C++ • Python • ML 💻</p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border">
              <p className="text-sm text-muted-foreground mb-1">Focus</p>
              <p className="text-foreground text-sm">Building efficient, real-world applications 🚀</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
