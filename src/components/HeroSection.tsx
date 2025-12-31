import { ArrowDown, Download, Send } from "lucide-react";
import { Button } from "./ui/button";
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
            <p className="font-mono text-primary text-sm md:text-base mb-4 fade-in-up">
              Hi, my name is
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 fade-in-up stagger-1">
              <span className="text-foreground">Aaditya</span>{" "}
              <span className="gradient-text">Sharma</span>
            </h1>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-muted-foreground mb-6 fade-in-up stagger-2">
              Data Analyst & Developer
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-8 leading-relaxed fade-in-up stagger-3">
              Results-driven IT enthusiast with expertise in{" "}
              <span className="text-primary">data visualization</span>,{" "}
              <span className="text-primary">fraud analysis</span>, and{" "}
              <span className="text-primary">web development</span>. Transforming raw data into actionable insights.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start fade-in-up stagger-4">
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
                onClick={() => window.open("https://linkedin.com/in/aaditya-sharma-0b1852246", "_blank")}
                className="w-full sm:w-auto"
              >
                <Download className="w-5 h-5" />
                View Resume
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 mt-12 justify-center lg:justify-start fade-in-up stagger-5">
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
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative fade-in-up stagger-3">
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
              <div className="absolute -top-4 -right-4 w-20 h-20 glass-card flex items-center justify-center floating">
                <span className="text-3xl">📊</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 glass-card flex items-center justify-center floating" style={{ animationDelay: "-2s" }}>
                <span className="text-2xl">💻</span>
              </div>
              <div className="absolute top-1/2 -right-8 w-14 h-14 glass-card flex items-center justify-center floating" style={{ animationDelay: "-4s" }}>
                <span className="text-xl">🐍</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs font-mono text-muted-foreground">Scroll Down</span>
          <button
            onClick={handleScrollToAbout}
            className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
