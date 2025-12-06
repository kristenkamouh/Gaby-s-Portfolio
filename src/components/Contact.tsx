import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin } from "lucide-react";
import cvFile from "../assets/Gaby_CV.pdf";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactLinks = [
    { icon: Mail, label: "Email", value: "gabyhalby@gmail.com", href: "mailto:gabyhalby@gmail.com" },
    { icon: Linkedin, label: "LinkedIn", value: "/in/GabyAlHalaby", href: "https://linkedin.com/in/GabyAlHalaby" },
  ];

  return (
    <section id="contact" className="py-32">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
        >
          <h2 className="font-playfair text-5xl md:text-6xl font-bold mb-12 text-center text-foreground">
            Let's Connect
          </h2>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="bg-primary p-12 md:p-16 rounded-2xl max-w-4xl mx-auto"
          >
            <p className="text-xl md:text-2xl text-background text-center mb-12 font-inter leading-relaxed">
              I'm always open to discussing international business opportunities, strategic partnerships, or consulting engagements. 
              Feel free to reach out through any of the channels below.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {contactLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  className="bg-card p-6 rounded-xl hover:scale-105 transition-all duration-300 flex items-center gap-4 group"
                >
                  <div className="bg-primary p-3 rounded-lg group-hover:bg-accent transition-colors">
                    <link.icon className="text-primary-foreground" size={24} />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-card-foreground mb-1">
                      {link.label}
                    </p>
                    <p className="font-inter text-card-foreground/70">
                      {link.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <a
                href={cvFile}
                download="Gaby-Al-Halaby-CV.pdf"
                className="inline-flex items-center gap-2 bg-card text-card-foreground px-6 py-3 rounded-lg font-inter font-medium hover:scale-105 transition-all duration-300"
              >
                Download My CV
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="text-center mt-16"
      >
        <p className="text-muted-foreground font-inter">
          © {new Date().getFullYear()} Gaby Al Halaby. All rights reserved.
        </p>
      </motion.div>
    </section>
  );
};

export default Contact;
