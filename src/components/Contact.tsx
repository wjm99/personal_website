import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-in fade-in duration-700">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <a href="mailto:jinmingw99@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                jinmingw99@gmail.com
              </a>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">
                +46 760 633 971
              </a>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground">Gothenburg, Sweden</p>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" className="gap-2" asChild>
              <a href="mailto:jinmingw99@gmail.com">
                <Mail className="w-4 h-4" /> Send Message
              </a>
            </Button>
          </div>
        </div>
      </div>

      <footer className="mt-20 pt-8 border-t border-border text-center text-muted-foreground">
        <p>&copy; 2025 Jinming. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default Contact;
