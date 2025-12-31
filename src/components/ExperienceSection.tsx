import { Building2, Calendar, MapPin, ChevronRight } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
  type: "full-time" | "internship";
}

const experiences: Experience[] = [
  {
    title: "Customer Service Specialist",
    company: "Startek",
    location: "Lucknow, Uttar Pradesh, India",
    period: "July 2023 - January 2024",
    description: [
      "Served as Customer Service Specialist in the outsourcing unit, specializing in fraud analysis and anomaly detection",
      "Applied CRM strategies to manage customer relationships and enhance service quality",
      "Utilized Microsoft Excel for data analysis, reporting, and performance tracking",
      "Identified patterns and trends in customer data to prevent fraudulent activities",
      "Maintained high customer satisfaction while upholding compliance and security standards",
    ],
    skills: ["Customer Relationship Management", "Microsoft Excel", "Fraud Analysis", "Data Monitoring"],
    type: "full-time",
  },
  {
    title: "Customer Support Specialist",
    company: "MattsenKumar Cyber Services",
    location: "Jaipur, Rajasthan, India",
    period: "February 2023 - June 2023",
    description: [
      "Provided comprehensive end-to-end support to clients, ensuring seamless customer experiences",
      "Managed corporate communications and multi-channel client interactions",
      "Documented and resolved technical and operational issues with efficiency",
      "Contributed to improved customer retention and satisfaction metrics",
      "Collaborated with cross-functional teams to optimize service delivery processes",
    ],
    skills: ["Corporate Communications", "Salesforce", "Customer Support", "Technical Troubleshooting", "Problem Solving"],
    type: "full-time",
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="section-heading">Where I've worked</p>
          <h2 className="section-title">Professional Experience</h2>
        </div>

        {/* Experience Cards */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />

            {experiences.map((exp, index) => (
              <div key={exp.company} className="relative mb-12 last:mb-0 pl-12 md:pl-20">
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 md:left-4 w-8 h-8 rounded-full flex items-center justify-center ${
                    index === 0 ? "bg-primary pulse-glow" : "bg-accent"
                  }`}
                >
                  <Building2 className="w-4 h-4 text-white" />
                </div>

                {/* Card */}
                <div className="glass-card p-6 md:p-8 hover:border-primary/30 transition-all duration-300 group">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-primary font-medium">{exp.company}</p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-mono ${
                        exp.type === "full-time"
                          ? "bg-primary/10 text-primary"
                          : "bg-accent/10 text-accent"
                      }`}
                    >
                      {exp.type === "full-time" ? "Full-time" : "Internship"}
                    </span>
                  </div>

                  {/* Meta info */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                  </div>

                  {/* Description */}
                  <ul className="space-y-3 mb-6">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <ChevronRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full bg-secondary text-xs font-medium text-muted-foreground border border-border"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Experience Note */}
        <div className="mt-16 text-center">
          <div className="inline-block glass-card px-8 py-6">
            <p className="text-muted-foreground">
              <span className="text-primary font-semibold">Open to Work</span> — Actively seeking roles in
              <span className="text-foreground font-medium"> Data Analysis</span>,
              <span className="text-foreground font-medium"> IT Analysis</span>, and
              <span className="text-foreground font-medium"> Software Engineering</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
