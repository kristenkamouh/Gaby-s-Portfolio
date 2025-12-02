import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import professionalPortrait from "@/assets/professional-portrait.jpg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative">
      {/* Transition from Hero section */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-t from-transparent to-background pointer-events-none -mt-32" />
      
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
        >
          <h2 className="font-playfair text-5xl md:text-6xl font-bold mb-12 text-center text-foreground">
            About Me
          </h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-stretch">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 1 }}
                className="relative"
              >
                <div className="overflow-hidden rounded-3xl h-full">
                  <img 
                    src={professionalPortrait} 
                    alt="Professional portrait" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ delay: 0.2, duration: 1 }}
                className="bg-primary p-12 rounded-2xl"
              >
                <p className="text-lg md:text-xl text-primary-foreground leading-relaxed mb-6 font-inter">
                  My name is Gaby Al Halaby, and I am a 22 -year-old undergraduate student at Notre Dame University – Louaize in Lebanon, studying International Business Management. I see this major as more than a degree, it represents global awareness, strategic thinking, and adaptability in fast-changing markets. I developed leadership and team coordination by serving twice as President of the NDU Music Club and founding the instrumental fusion band “Auditorios,” where I manage planning, branding, and teamwork.
                </p>
                <p className="text-lg md:text-xl text-primary-foreground leading-relaxed font-inter">
                  I am analytical, composed under pressure, and quick to adapt when solving complex challenges. My goal is to build projects that connect Lebanese identity with international business success. More details about my core skills, strengths, and experience are highlighted in the next section.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
