import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    school: "Lovely Professional University",
    location: "Phagwara, Punjab",
    degree: "B.Tech – Computer Science and Engineering",
    period: "Aug 2023 – Present",
    grade: "CGPA: 5.56",
  },
  {
    school: "Tirumala Junior College",
    location: "Srikakulam, AP",
    degree: "Intermediate – PCM",
    period: "Jun 2021 – Mar 2023",
    grade: "Percentage: 75.8%",
  },
  {
    school: "Sri Santosh School",
    location: "Srikakulam, AP",
    degree: "Matriculation",
    period: "Mar 2020 – Apr 2021",
    grade: "Percentage: 97.3%",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding bg-card/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm text-accent font-medium mb-2">Background</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12">
            ACADEMIC JOURNEY
          </h2>
        </motion.div>

        <div className="space-y-6">
          {education.map((e, i) => (
            <motion.div
              key={e.school}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-xl border border-border p-6 flex gap-4"
            >
              <div className="p-2.5 rounded-lg bg-accent/10 text-accent shrink-0 h-fit">
                <GraduationCap size={20} />
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <h3 className="font-heading font-semibold text-foreground">{e.school}</h3>
                  <p className="text-sm text-muted-foreground">{e.period}</p>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{e.degree}</p>
                <p className="text-sm text-accent mt-1">{e.grade}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{e.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
