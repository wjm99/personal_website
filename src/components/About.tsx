import { Card } from "@/components/ui/card";
import { Code, Palette, Rocket } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-in fade-in duration-700">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about creating exceptional digital experiences that make a difference
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="p-6 hover:shadow-lg transition-shadow border-border">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Code className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Clean Code</h3>
            <p className="text-muted-foreground">Writing maintainable, scalable code with best practices and modern technologies</p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow border-border">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Palette className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Beautiful Design</h3>
            <p className="text-muted-foreground">Creating intuitive, user-friendly interfaces with attention to every detail</p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow border-border">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Rocket className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Fast Delivery</h3>
            <p className="text-muted-foreground">Efficient workflow and rapid iteration to bring ideas to life quickly</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
