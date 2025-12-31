import { GraduationCap, MapPin, Languages, Trophy } from "lucide-react";

export const AboutSection = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "MCA in Progress",
      description: "Jaipur National University",
    },
    {
      icon: MapPin,
      title: "Based in Jaipur",
      description: "Rajasthan, India",
    },
    {
      icon: Languages,
      title: "Bilingual",
      description: "English & Hindi",
    },
    {
      icon: Trophy,
      title: "1.4K+ Network",
      description: "LinkedIn Community",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="section-heading">Get to know me</p>
            <h2 className="section-title">About Me</h2>
          </div>

          {/* Main Content */}
          <div className="glass-card p-8 md:p-12 mb-12">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              I'm a <span className="text-foreground font-medium">results-driven IT enthusiast</span> and{" "}
              <span className="text-primary font-medium">Beginner Data Analyst</span> with a proactive mindset 
              and entrepreneurial approach to problem-solving. I'm driven by the desire to exceed expectations 
              in every project, diving deep into data to uncover actionable insights that drive business growth.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              With a strong background in <span className="text-foreground font-medium">customer service</span> and{" "}
              <span className="text-foreground font-medium">data analysis</span>, I bring expertise in fraud detection, 
              client relationship management, and data visualization. My experience at companies like{" "}
              <span className="text-primary font-medium">Startek</span> and{" "}
              <span className="text-primary font-medium">MattsenKumar</span> has honed my ability to identify patterns, 
              prevent fraudulent activities, and deliver data-driven solutions.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Currently pursuing my <span className="text-foreground font-medium">Master of Computer Applications</span> at 
              Jaipur National University, I'm actively seeking roles in{" "}
              <span className="text-primary font-medium">Data Analysis</span>,{" "}
              <span className="text-primary font-medium">IT Analysis</span>, or{" "}
              <span className="text-primary font-medium">Software Engineering</span> to leverage my analytical skills 
              and contribute to organizational success.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="glass-card p-6 text-center hover:border-primary/50 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Education Timeline */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-10">Education Journey</h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent md:-translate-x-px" />

              {/* MCA */}
              <div className="relative flex flex-col md:flex-row items-start mb-12 ml-12 md:ml-0">
                <div className="md:w-1/2 md:pr-12 md:text-right">
                  <div className="glass-card p-6 inline-block md:ml-auto">
                    <span className="font-mono text-sm text-primary">2024 - 2026</span>
                    <h4 className="text-xl font-bold text-foreground mt-2">Master of Computer Applications</h4>
                    <p className="text-muted-foreground">Jaipur National University</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Advanced Computing • Data Science • Software Engineering • Business Analytics
                    </p>
                    <span className="inline-block mt-3 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono">
                      In Progress
                    </span>
                  </div>
                </div>
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center -translate-x-4 md:-translate-x-1/2 pulse-glow">
                  <GraduationCap className="w-4 h-4 text-primary-foreground" />
                </div>
              </div>

              {/* BCA */}
              <div className="relative flex flex-col md:flex-row items-start ml-12 md:ml-0">
                <div className="md:w-1/2 md:ml-auto md:pl-12">
                  <div className="glass-card p-6">
                    <span className="font-mono text-sm text-primary">2019 - 2022</span>
                    <h4 className="text-xl font-bold text-foreground mt-2">Bachelor's in Computer Science</h4>
                    <p className="text-muted-foreground">Axis Colleges</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Programming Fundamentals • Database Management • Software Development
                    </p>
                    <span className="inline-block mt-3 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-mono">
                      Completed
                    </span>
                  </div>
                </div>
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-accent flex items-center justify-center -translate-x-4 md:-translate-x-1/2">
                  <GraduationCap className="w-4 h-4 text-accent-foreground" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
