import { useEffect, useRef, useState } from "react";
import { Code2, Database, BarChart3, Globe, Wrench, Brain } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";
import { motion } from "framer-motion";

interface Skill {
  name: string;
  level: number;
  icon?: string;
}

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  color: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    icon: Code2,
    color: "from-primary to-cyan-400",
    skills: [
      { name: "Python", level: 85 },
      { name: "JavaScript", level: 75 },
      { name: "SQL", level: 80 },
      { name: "HTML/CSS", level: 90 },
    ],
  },
  {
    title: "Data & Analytics",
    icon: BarChart3,
    color: "from-accent to-pink-400",
    skills: [
      { name: "Data Visualization", level: 85 },
      { name: "Data Cleaning", level: 80 },
      { name: "Data Modeling", level: 75 },
      { name: "Trend Analysis", level: 80 },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    color: "from-emerald-400 to-teal-500",
    skills: [
      { name: "Microsoft Excel", level: 90 },
      { name: "Salesforce CRM", level: 75 },
      { name: "GitHub", level: 80 },
      { name: "VS Code", level: 85 },
    ],
  },
  {
    title: "Web Development",
    icon: Globe,
    color: "from-orange-400 to-amber-500",
    skills: [
      { name: "Responsive Design", level: 85 },
      { name: "WebGL", level: 70 },
      { name: "Figma", level: 75 },
      { name: "CSS Animations", level: 80 },
    ],
  },
  {
    title: "Database",
    icon: Database,
    color: "from-blue-400 to-indigo-500",
    skills: [
      { name: "SQL Fundamentals", level: 80 },
      { name: "Database Management", level: 75 },
      { name: "Data Queries", level: 80 },
      { name: "AWS Cloud", level: 65 },
    ],
  },
  {
    title: "Soft Skills",
    icon: Brain,
    color: "from-violet-400 to-purple-500",
    skills: [
      { name: "Problem Solving", level: 90 },
      { name: "Communication", level: 85 },
      { name: "Critical Thinking", level: 85 },
      { name: "Team Collaboration", level: 90 },
    ],
  },
];

const SkillBar = ({ skill, isVisible }: { skill: Skill; isVisible: boolean }) => {
  return (
    <div className="mb-4 last:mb-0">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-foreground">{skill.name}</span>
        <span className="text-sm font-mono text-primary">{skill.level}%</span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={{ width: isVisible ? `${skill.level}%` : 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 md:py-32 relative bg-secondary/20" ref={sectionRef}>
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.2)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.2)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <p className="section-heading">What I work with</p>
          <h2 className="section-title">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning data analysis, programming, and web development,
            complemented by strong analytical and communication abilities.
          </p>
        </ScrollReveal>

        {/* Skills Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category) => (
            <StaggerItem key={category.title}>
              <div className="glass-card p-6 hover:border-primary/30 transition-all duration-500 group h-full">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}
                  >
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground">{category.title}</h3>
                </div>

                {/* Skills */}
                <div>
                  {category.skills.map((skill) => (
                    <SkillBar key={skill.name} skill={skill} isVisible={isVisible} />
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Core Competencies Tags */}
        <ScrollReveal delay={0.3} className="mt-16 text-center">
          <h3 className="text-xl font-bold mb-6">Core Competencies</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "Data-Driven Decision Making",
              "Fraud Detection & Analysis",
              "Business Analytics",
              "Lead Generation",
              "Project Management",
              "Technical Support",
              "Customer Relationship Management",
              "Visual Storytelling",
            ].map((competency, index) => (
              <motion.span
                key={competency}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-4 py-2 rounded-full bg-secondary border border-border text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors cursor-default"
              >
                {competency}
              </motion.span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
