import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.4)',
        }}
      />
      
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="animate-in fade-in duration-1000">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground">
            Hi, I'm <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Your Name</span>
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-primary-foreground/90">
            Full Stack Developer & Designer
          </p>
          <p className="text-lg mb-8 text-primary-foreground/75 max-w-2xl mx-auto">
            I craft beautiful, functional web experiences that solve real problems
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap mb-8">
            <Button 
              size="lg" 
              className="gap-2 bg-primary hover:bg-primary/90"
              onClick={scrollToContact}
            >
              Get In Touch <ArrowRight className="w-4 h-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="gap-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
            >
              View Projects
            </Button>
          </div>
          
          <div className="flex gap-6 justify-center">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-primary transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:your.email@example.com" className="text-primary-foreground/70 hover:text-primary transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
