import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "President – NDU Music Club",
      company: "Notre Dame University",
      period: "2024 - 2026",
      description: "I was elected twice as President of the NDU Music Club, where I managed members, organized events, led committees, and coordinated tasks across teams. This role strengthened my leadership, planning, and decision skills in a large club environment.",
    },
    {
      title: "Founder – Auditorios",
      company: "Lebanese Fusion-Instrumental Band",
      period: "2023 - Present",
      description: "I founded the Lebanese fusion-instrumental band Auditorios, where I designed the vision, guided creative direction, and structured team roles for growth. It shows my ability to build ideas, lead teams, and manage long-term development.",
    },
    {
      title: "Civil Defence Volunteer",
      company: "Civil Defence",
      period: "2023 - 2024",
      description: "I served with the Civil Defence, working in emergency response, public safety, and field teamwork. It shows discipline, courage, and the ability to stay composed in critical situations.",
    },
    {
      title: "Piano Teacher",
      company: "Private Tutoring",
      period: "2021 - 2022",
      description: "From 2021 to 2022, I taught piano to students, creating lesson plans and simplifying music theory for learning. This period built my communication, patience, and teaching structure skills.",
    },
  ];

  return (
    <section id="experience" className="py-32 bg-muted">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
        >
          <h2 className="font-playfair text-5xl md:text-6xl font-bold mb-16 text-center text-foreground">
            Experience
          </h2>
          
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ delay: index * 0.2, duration: 1 }}
                className="relative pl-12 pb-12 last:pb-0"
              >
                {/* Timeline line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-[15px] top-8 bottom-0 w-0.5 bg-primary/30" />
                )}
                
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <Briefcase size={16} className="text-primary-foreground" />
                </div>
                
                <div className="bg-card p-8 rounded-xl hover:scale-105 transition-transform duration-300">
                  <div className="flex flex-wrap items-center justify-between mb-4 gap-2">
                    <h3 className="font-playfair text-2xl font-bold text-card-foreground">
                      {exp.title}
                    </h3>
                    <span className="text-sm font-inter font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-lg font-inter font-semibold text-primary mb-3">
                    {exp.company}
                  </p>
                  <p className="text-card-foreground/80 font-inter leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
