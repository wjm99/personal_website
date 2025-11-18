import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profilePic from "@/assets/profile-pic.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.4)",
        }}
      />

      <div className="container mx-auto px-4 z-10 text-center">
        <div className="animate-in fade-in duration-1000">
          <div className="flex justify-center mb-6">
            <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary-foreground shadow-lg" style={{ aspectRatio: "1 / 1" }}>
              <img src={profilePic} alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground">
            Hi, I'm <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Jinming Wei</span>
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-primary-foreground/90">Full Stack Developer & Data Scientist</p>
          <p className="text-lg mb-8 text-primary-foreground/75 max-w-2xl mx-auto">
            I moved to Sweden in 2022 to pursue a Master’s degree in Data Science and AI at Chalmers. Through my roles as a Data Scientist Intern at
            Volvo Cars and a Full Stack Developer at Empley, I’ve built solid experience across both areas.
          </p>
          <p className="text-lg mb-8 text-primary-foreground/75 max-w-2xl mx-auto">
            Outside work, I enjoy playing badminton and being part of team communities.🏸️
          </p>

          <div className="flex gap-4 justify-center flex-wrap mb-8">
            <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90" onClick={() => scrollToSection("contact")}>
              Get In Touch <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              onClick={() => scrollToSection("projects")}
            >
              View Projects
            </Button>
          </div>

          <div className="flex gap-6 justify-center">
            <a
              href="https://github.com/wjm99"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/70 hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/jinmingw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/70 hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:jinmingw99@gmail.com" className="text-primary-foreground/70 hover:text-primary transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
