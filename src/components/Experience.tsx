import { Card } from "@/components/ui/card";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Empley (a SaaS startup)",
      location: "Gothenburg, Sweden",
      role: "Full-stack Developer",
      period: "Apr 2025 - Oct 2025",
      responsibilities: [
        "Developed a full-stack (JAVA+Vue) website for human resource and workforce planning with PostgreSQL.",
        "Implemented JWT-based authentication and managed database versioning and migrations through Liquibase.",
        "Deployed the system to Microsoft Azure through automated CI/CD pipelines using GitHub Actions.",
        "Configured domain and DNS management via Netim for reliable routing and SSL-enabled access.",
        "Collaborated in cross-functional teams, contributing to agile sprint planning and continuous improvement.",
      ],
    },
    {
      company: "Volvo Cars",
      location: "Gothenburg, Sweden",
      role: "Data Scientist Intern",
      period: "Feb 2025 - Apr 2025",
      responsibilities: [
        "Processed and structured large-scale vehicle telemetry datasets for product insight teams.",
        "Designed and deployed an AI-powered chatbot using Python and LLM frameworks (LangChain, OpenAI API) to automate customer interaction and internal knowledge retrieval.",
        "Supported A/B testing and model evaluation to ensure reliability and measurable business impact.",
        "Communicated insights effectively through data visualizations and clear, concise reports to stakeholders.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-in fade-in duration-700">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Professional journey and key achievements</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-border">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{exp.company}</h3>
                  <p className="text-lg text-primary font-medium mb-2">{exp.role}</p>
                </div>
                <div className="flex flex-col gap-2 text-muted-foreground text-sm md:text-right">
                  <div className="flex items-center gap-2 md:justify-end">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2 md:justify-end">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-2">
                {exp.responsibilities.map((responsibility, idx) => (
                  <li key={idx} className="flex gap-3 text-muted-foreground">
                    <Briefcase className="w-4 h-4 mt-1 flex-shrink-0 text-primary" />
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
