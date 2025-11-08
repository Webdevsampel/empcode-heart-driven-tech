import { Card } from "@/components/ui/card";
import { Target, Rocket } from "lucide-react";

const Vision = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-accent/30 via-background to-accent/20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Vision & Mission
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-border hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
                <Target className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become the world's leading catalyst for human-centered innovation — merging 
                technology, compassion, and creativity to empower individuals, transform communities, 
                and shape a connected, caring digital world.
              </p>
            </Card>
            
            <Card className="p-8 border-border hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
                <Rocket className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                At EMPCODE, we educate, empower, and engage people through accessible technology 
                programs and interactive care initiatives that stimulate the mind, inspire innovation, 
                and nurture emotional connection.
              </p>
            </Card>
          </div>
          
          <Card className="mt-8 p-8 bg-gradient-to-r from-secondary/10 to-primary/10 border-primary/20">
            <h3 className="text-2xl font-bold mb-4 text-foreground">2030 Goal</h3>
            <p className="text-muted-foreground leading-relaxed">
              To establish <strong className="text-foreground">EMPCODE Centers</strong> — hybrid 
              digital hubs where education, innovation, and care intersect. Each center will serve 
              as a space for digital skill development, emotional wellness programs, startup incubation, 
              and community engagement. By 2030, EMPCODE aims to impact one million lives globally, 
              fostering a new generation of compassionate innovators who build with both code and care.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Vision;
