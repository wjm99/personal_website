import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js"],
    },
    {
      title: "Backend",
      skills: ["JAVA", "Python", "Node.js", "PostgreSQL", "MongoDB", "REST APIs"],
    },
    {
      title: "Tools & More",
      skills: ["Git", "Docker", "AWS", "Azure", "CI/CD"],
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-in fade-in duration-700">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">A diverse toolkit for building modern web applications</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <div key={index} className="text-center">
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
