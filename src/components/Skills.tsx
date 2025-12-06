import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Globe, Users, Award, Lightbulb, Clock } from "lucide-react";
import { title } from "process";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Business Strategy",
      icon: Target,
      skills: ["Market planner", "Growth-focused", "Risk-aware", "Competitive edge", "Opportunity seeker"],
    },
    {
      title: "Problem Solving",
      icon: Globe,
      skills: ["Analytical", "Solution-driven", "Resourceful", "Practical", "Decisive"],
    },
    {
      title: "Time Management",
      icon: Clock,
      skills: ["Priority-based", "Deadline-focused", "Organized", "Task-efficient", "Goal-oriented"],
    },
    {
      title: "Management & Expertise",
      icon: Users,
      skills: ["Cross-cultural manager", "Project organizer", "Strategic leader", "Development-focused", "Stakeholder-aware"],
    },
    {
      title: "Leadership",
      icon: Award,
      skills: ["Vision setter", "Team motivator", "Decision maker", "Creative innovator", "Mentor mindset"],
    },
    {
      title: "Strategic Thinking",
      icon: Lightbulb,
      skills: ["Long-term thinker", "Critical analyzer", "Scenario planner", "Market forecaster", "Goal optimizer"],
    },
  ];

  return (
    <section id="skills" className="py-32">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
        >
          <h2 className="font-playfair text-5xl md:text-6xl font-bold mb-16 text-center text-foreground">
            Skills & Expertise
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto [&>*:nth-child(n+4)]:md:col-span-1 md:[&>*:nth-child(4)]:col-start-1 md:[&>*:nth-child(4)]:ml-auto md:[&>*:nth-child(5)]:mr-auto">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: categoryIndex * 0.2, duration: 1 }}
                className="bg-primary p-8 rounded-xl"
              >
                <div className="flex items-center gap-3 mb-6">
                  <category.icon className="text-primary-foreground" size={28} />
                  <h3 className="font-playfair text-2xl font-bold text-primary-foreground">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.05, duration: 0.5 }}
                      className="bg-card text-card-foreground px-4 py-2 rounded-lg text-sm font-inter font-medium"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
