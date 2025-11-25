import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Empley",
      description: "A full-stack website for HR and workforce planning",
      tech: ["JAVA(Spring Boot)", "Vue.js", "PostgreSQL"],
      live: "https://www.empley.com/",
    },
    {
      title: "AI ChatBot on Twitter",
      description: "Developed an AI-driven chatbot on Twitter for real-time interaction using generative AI modelsHave a project in mind?",
      tech: ["Python", "LLM", "AWS"],
      live: "https://x.com/IsItAccurate",
    },
    {
      title: "Modeling and Evaluating Treatment Strategies for Rheumatoid Arthritis",
      description: "Master's Thesis in healthcare field, applying interpretable ML models",
      tech: ["Real-world Evidence", "ETL pipelines", "Statistical Analysis"],
      live: "https://odr.chalmers.se/items/02be67c1-c54d-466c-86a4-2748491d8f17",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-in fade-in duration-700">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Some of my recent work that I'm proud of</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-border group">
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="text-xs px-2 py-1 bg-secondary rounded-md text-secondary-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {/* <Button variant="outline" size="sm" className="gap-2" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" /> Code
                    </a>
                  </Button> */}
                  <Button size="sm" className="gap-2" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" /> Link
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
