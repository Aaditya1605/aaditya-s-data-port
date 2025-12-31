import { ExternalLink, Github, Award, Calendar } from "lucide-react";
import { Button } from "./ui/button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  live?: string;
  image?: string;
  featured?: boolean;
}

interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  description: string;
  type: "certification" | "workshop";
}

const projects: Project[] = [
  {
    title: "3D Portfolio Website",
    description:
      "Developed a responsive 3D portfolio website showcasing professional work and technical capabilities. Demonstrates expertise in modern web technologies and user-centered design principles.",
    technologies: ["WebGL", "JavaScript", "HTML", "CSS", "Responsive Design"],
    github: "https://github.com/Aaditya1605/Portfolio",
    featured: true,
  },
];

const certifications: Certification[] = [
  {
    title: "Tata Group - Data Visualization",
    issuer: "Forage",
    date: "January 2025",
    credentialId: "r8Hh8rWFotk4rbCFF",
    description: "Empowering Business with Effective Insights - Completed practical tasks in business scenario framing, visual selection, and communication of insights",
    type: "certification",
  },
  {
    title: "Accenture North America - Data Analytics",
    issuer: "Forage",
    date: "August 2024",
    credentialId: "7787AaOsyrDJGSK",
    description: "Data Analytics and Visualization Job Simulation - Completed practical tasks in project understanding, data cleaning, modeling, visualization, and client storytelling",
    type: "certification",
  },
  {
    title: "Diploma in Python Programming",
    issuer: "Alison",
    date: "Completed",
    description: "Comprehensive programming certification demonstrating expertise in Python syntax and applications",
    type: "certification",
  },
  {
    title: "Advanced Computing Technologies Workshop",
    issuer: "Jaipur National University",
    date: "October 2024",
    description: "3-day workshop conducted by Dr. S. Suresh Kumar, Ph.D., CSE - Data Science & AI Chief Technical Officer",
    type: "workshop",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-32 relative bg-secondary/20">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.2)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.2)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <p className="section-heading">What I've built</p>
          <h2 className="section-title">Projects & Certifications</h2>
        </ScrollReveal>

        {/* Featured Project */}
        <div className="max-w-4xl mx-auto mb-20">
          <ScrollReveal>
            <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
              <span className="w-8 h-px bg-primary" />
              Featured Project
            </h3>
          </ScrollReveal>

          {projects.filter((p) => p.featured).map((project) => (
            <ScrollReveal key={project.title} delay={0.1}>
              <div className="glass-card p-8 md:p-10 hover:border-primary/30 transition-all duration-500 group relative overflow-hidden">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h4 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <div className="flex items-center gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-primary"
                          aria-label="View on GitHub"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-primary"
                          aria-label="View live site"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Certifications */}
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
              <span className="w-8 h-px bg-accent" />
              Certifications & Achievements
            </h3>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <StaggerItem key={cert.title}>
                <div className="glass-card p-6 hover:border-primary/30 transition-all duration-300 group h-full">
                  {/* Badge */}
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        cert.type === "certification"
                          ? "bg-gradient-to-br from-primary to-cyan-400"
                          : "bg-gradient-to-br from-accent to-pink-400"
                      } shadow-lg`}
                    >
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                        {cert.title}
                      </h4>
                      <p className="text-sm text-primary font-medium">{cert.issuer}</p>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {cert.description}
                  </p>

                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {cert.date}
                    </span>
                    {cert.credentialId && (
                      <span className="font-mono bg-secondary px-2 py-1 rounded">
                        ID: {cert.credentialId.slice(0, 8)}...
                      </span>
                    )}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* View More Button */}
          <ScrollReveal delay={0.3} className="text-center mt-12">
            <Button
              variant="heroOutline"
              size="lg"
              onClick={() => window.open("https://linkedin.com/in/aaditya-sharma-0b1852246", "_blank")}
            >
              View All Certifications
              <ExternalLink className="w-4 h-4" />
            </Button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
