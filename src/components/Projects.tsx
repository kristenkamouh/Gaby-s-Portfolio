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
      title: "The big 5 Test",
      description: "baaden",
      category: "Strategy",
      image: big5Image,
      type: "image",
    },
    {
      title: "Visual learning",
      description: "",
      category: "Operations",
      image: visualLearningImage,
      type: "image",
    },
    {
      title: "communication skills (souad)",
      description: "",
      category: "Leadership",
      image: communicationImage,
      type: "image",
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
                <button
                  onClick={() => setSelectedProject(index)}
                  className="flex items-center gap-2 text-primary font-inter font-medium hover:gap-3 transition-all"
                >
                  View Project <ExternalLink size={16} />
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-3xl">
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
                      <p className="text-foreground font-inter text-lg leading-relaxed whitespace-pre-line">
                        {projects[selectedProject].detailedContent}
                      </p>
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
