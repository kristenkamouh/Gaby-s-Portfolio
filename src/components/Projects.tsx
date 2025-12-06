import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";


import big5Image from "@/assets/gaby-big5.jpeg";
import visualLearningImage from "@/assets/gaby-visual-learning.jpeg";
import communicationImage from "@/assets/gaby-communcation.png";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "The Big 5 Test",
      description: "A personality assessment project analyzing the five major dimensions of human personality to understand behavioral patterns and individual differences.",
      category: "Strategy",
      image: big5Image,
      type: "image",
    },
    {
      title: "Visual Learning",
      description: "An educational project exploring visual learning techniques and their impact on knowledge retention and comprehension.",
      category: "Operations",
      image: visualLearningImage,
      type: "image",
    },
    {
      title: "Communication Skills",
      description: "A comprehensive study on effective communication strategies and interpersonal skills development in professional settings.",
      category: "Leadership",
      image: communicationImage,
      type: "image",
    },
    {
      title: "Goals",
      description: "Strategic goal-setting framework and achievement planning methodology.",
      category: "Development",
      type: "text",
      detailedContent: `Long Term Goal: Attain a high-level management role in an international company while continuing to establish myself as a recognized entrepreneur in the music industry. As the founder of "AUDITORIOS", a live performance band, I plan to expand into launching my own music-related ventures, such as music school, production company, and a professional studio. My ultimate aim is to combine business leadership with creative entrepreneurship positioning myself as standout figure in both international business and music.

Short Term Goal 1: Gain Leadership and Experience
- Steps:
  1) Secure internships in international companies to gain management experience.
  2) Take part-time or project-based roles in business operations project management
  3) Strengthen leadership through my current role as founder of Auditorios and the visionary behind the band goals, managing both artistic direction and business operation
- Resources Needed: internships/job abroad, professional network, LinkedIn
- By when: End of my final Academic year

Short Term Goal 2: Strengthen Business and Management Skills
- Steps:
  1) Complete certifications in Project Management, Business Project Strategy, and International Business.
  2) Improve technical skills in: Excel, data analysis...
  3) Enhance leadership, communication, and negotiation skills through mentorship and practice
- By When: Within the next 6-9 months
- Resources Needed: Online learning platforms (coursera), workshops.

Short Term Goal 3: Expand my Network and Entrepreneurial Ventures (ongoing)
- Steps:
  1) Continue developing Auditorios by performing at more venues, collaborating with other artists, and building industry recognition
  2) Write a professional business plan for a music school production company and studio
  3) Use my soon to be 18 years of piano and stage experience to establish credibility in the music industry.
  4) Network with International Business leaders and music professional through conferences, events, and social platforms (ongoing)
  5) Leverage Auditorios Instagram to grow visibility, create connections, and position myself a recognized figure (ongoing)
- By When: First business plan draft completed by graduation, networking and brand development are ongoing
- Resources Needed: Investors, Business plans, social platforms, Creative collaborators, International Known Events Exposure`,
    },
    {
      title: "Professional Email",
      description: "Mastering professional email communication is essential in today's business environment. This comprehensive guide covers email etiquette, structure, tone, and best practices for various business scenarios. Learn how to craft clear, concise, and effective emails that convey professionalism and achieve your communication objectives. From formal business correspondence to internal team communication, this resource provides frameworks and examples for writing emails that get results while maintaining appropriate professional standards.",
      category: "Communication",
      type: "none",
    },
    {
      title: "Import Export Management",
      description: "In Import-Export Management, we studied global trade and foreign market links. My project analyzed how migration affects trade and demand. It shows my ability to use trade concepts in real cases.",
      category: "Trade",
      type: "text",
      detailedContent: "In Import-Export Management, we studied global trade, market regulations, and cross-border consumer demand. For my project, I analyzed how migration can shape international trade by influencing product demand and improving connections between markets. To complete this study, I used market reports, trade data, economic articles, and case comparisons to understand patterns in imports, exports, pricing, and cultural market needs. This project shows my ability to apply research, real trade concepts, and global thinking to practical business cases.",
    },
    {
      title: "International Business",
      description: "In International Business, we learned how companies go global. My project built a market entry and growth plan. It reflects structured global strategy thinking.",
      category: "Strategy",
      type: "download",
      downloadUrl: "/IB.pptx",
      downloadName: "International-Business.pptx",
    },
    {
      title: "Micro & Macro Economics",
      description: "Economics focused on elasticity and pricing. My project explained price changes and market reactions. It shows analytical decision skills.",
      category: "Economics",
      type: "text",
      detailedContent: "In Micro & Macro Economics, I studied elasticity and market reactions. In my Microeconomics project, I used real product price comparisons, demand percentages, and elasticity equations (like price elasticity of demand) to measure how consumers react when prices change. In my Macroeconomics project, I used inflation trends, currency effects, and market-wide supply and demand behavior to understand how national and global economic changes affect pricing and purchasing power. This shows my ability to use both small-market calculations and big-economy insights in business decisions.",
    },
  ];

  return (
    <section id="projects" className="py-32 bg-muted">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
        >
          <h2 className="font-playfair text-5xl md:text-6xl font-bold mb-16 text-center text-foreground">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: index * 0.1, duration: 1 }}
                className="bg-card p-8 rounded-xl hover:scale-105 transition-transform duration-300 cursor-pointer group"
              >
                <div className="mb-4">
                  <span className="text-sm font-inter font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="font-playfair text-2xl font-bold mb-4 text-card-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-card-foreground/80 font-inter leading-relaxed mb-4">
                  {project.description}
                </p>
                {project.type !== "none" && (
                  <button
                    onClick={() => setSelectedProject(index)}
                    className="flex items-center gap-2 text-primary font-inter font-medium hover:gap-3 transition-all"
                  >
                    View Project <ExternalLink size={16} />
                  </button>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedProject !== null && (
              <>
                <DialogHeader>
                  <DialogTitle className="font-playfair text-3xl">
                    {projects[selectedProject].title}
                  </DialogTitle>
                </DialogHeader>
                <div className="mt-4">
                  {projects[selectedProject].type === "image" && projects[selectedProject].image && (
                    <img
                      src={projects[selectedProject].image}
                      alt={projects[selectedProject].title}
                      className="w-full h-auto rounded-lg object-cover"
                    />
                  )}
                  {projects[selectedProject].type === "text" && (
                    <div className="prose prose-lg max-w-none">
                      <div className="text-foreground font-inter leading-relaxed whitespace-pre-line space-y-4">
                        {projects[selectedProject].detailedContent}
                      </div>
                    </div>
                  )}
                  {projects[selectedProject].type === "download" && (
                    <div className="text-center py-8">
                      <a
                        href={projects[selectedProject].downloadUrl}
                        download={projects[selectedProject].downloadName}
                        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-inter font-medium hover:bg-primary/90 transition-colors"
                      >
                        Download Presentation <ExternalLink size={18} />
                      </a>
                    </div>
                  )}
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Projects;
