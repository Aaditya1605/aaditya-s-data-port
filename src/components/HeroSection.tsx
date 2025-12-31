import { ArrowDown, Download, Send, FileText } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.jpg";

export const HeroSection = () => {
  const handleScrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Aaditya_Sharma_Resume.docx";
    link.download = "Aaditya_Sharma_Resume.docx";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-mono text-primary text-sm md:text-base mb-4"
            >
              Hi, my name is
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
            >
              <span className="text-foreground">Aaditya</span>{" "}
              <span className="gradient-text">Sharma</span>
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl md:text-4xl lg:text-5xl font-bold text-muted-foreground mb-6"
            >
              Data Analyst & Developer
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-8 leading-relaxed"
            >
              Results-driven IT enthusiast with expertise in{" "}
              <span className="text-primary">data visualization</span>,{" "}
              <span className="text-primary">fraud analysis</span>, and{" "}
              <span className="text-primary">web development</span>. Transforming raw data into actionable insights.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <Button
                variant="hero"
                size="lg"
                onClick={handleScrollToContact}
                className="w-full sm:w-auto"
              >
                <Send className="w-5 h-5" />
                Get In Touch
              </Button>
              <Button
                variant="heroOutline"
                size="lg"
                onClick={handleDownloadResume}
                className="w-full sm:w-auto"
              >
                <FileText className="w-5 h-5" />
                Download Resume
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-8 mt-12 justify-center lg:justify-start"
            >
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold gradient-text">1+</p>
                <p className="text-sm text-muted-foreground font-mono">Years Experience</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold gradient-text">3+</p>
                <p className="text-sm text-muted-foreground font-mono">Certifications</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold gradient-text">1.4K+</p>
                <p className="text-sm text-muted-foreground font-mono">LinkedIn Followers</p>
              </div>
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Glowing ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-primary animate-spin-slow opacity-50 blur-sm" />
              <div className="absolute inset-2 rounded-full bg-background" />
              
              {/* Image container */}
              <div className="absolute inset-4 rounded-full overflow-hidden border-2 border-primary/30">
                <img
                  src={profilePhoto}
                  alt="Aaditya Sharma - Data Analyst"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-20 h-20 glass-card flex items-center justify-center"
              >
                <span className="text-3xl">📊</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 w-16 h-16 glass-card flex items-center justify-center"
              >
                <span className="text-2xl">💻</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute top-1/2 -right-8 w-14 h-14 glass-card flex items-center justify-center"
              >
                <span className="text-xl">🐍</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs font-mono text-muted-foreground">Scroll Down</span>
          <motion.button
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            onClick={handleScrollToAbout}
            className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
