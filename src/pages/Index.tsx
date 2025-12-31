import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ParticleBackground } from "@/components/ParticleBackground";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Aaditya Sharma | Data Analyst & Developer Portfolio</title>
        <meta
          name="description"
          content="Results-driven Data Analyst with expertise in Python, SQL, Data Visualization, and Web Development. Explore my portfolio showcasing fraud analysis, CRM strategies, and data-driven solutions."
        />
        <meta
          name="keywords"
          content="Aaditya Sharma, Data Analyst, Python Developer, SQL, Data Visualization, Jaipur, India, Portfolio, Web Developer"
        />
        <meta name="author" content="Aaditya Sharma" />
        <meta property="og:title" content="Aaditya Sharma | Data Analyst & Developer" />
        <meta
          property="og:description"
          content="Results-driven Data Analyst transforming raw data into actionable insights. View my projects and experience."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://aaditya-sharma.dev" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Aaditya Sharma",
            jobTitle: "Data Analyst",
            email: "shrmaaditya325@gmail.com",
            telephone: "+91 9559401159",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Jaipur",
              addressRegion: "Rajasthan",
              addressCountry: "India",
            },
            url: "https://aaditya-sharma.dev",
            sameAs: [
              "https://linkedin.com/in/aaditya-sharma-0b1852246",
              "https://github.com/Aaditya1605",
            ],
            alumniOf: {
              "@type": "EducationalOrganization",
              name: "Jaipur National University",
            },
            knowsAbout: [
              "Data Analysis",
              "Python Programming",
              "SQL",
              "Data Visualization",
              "Web Development",
              "Fraud Analysis",
            ],
          })}
        </script>
      </Helmet>

      <div className="relative min-h-screen bg-background overflow-x-hidden">
        <ParticleBackground />
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
