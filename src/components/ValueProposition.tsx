import { Sparkles, HeartHandshake, Zap, Shield } from "lucide-react";

const ValueProposition = () => {
  const values = [
    {
      icon: HeartHandshake,
      title: "Human-Centered Technology",
      description: "We build solutions that put people first, merging cutting-edge technology with genuine empathy and care"
    },
    {
      icon: Zap,
      title: "Innovation with Purpose",
      description: "Every solution is designed to create real impact, transforming lives and empowering communities"
    },
    {
      icon: Sparkles,
      title: "Accessible Excellence",
      description: "World-class digital education and solutions made accessible to everyone, regardless of background"
    },
    {
      icon: Shield,
      title: "Trusted Partnership",
      description: "We operate with integrity, transparency, and a deep commitment to your success and well-being"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-accent/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            The <span className="text-primary">EmpCode</span> Difference
          </h2>
          <p className="text-lg text-muted-foreground">
            What sets us apart in the intersection of technology, education, and human connection
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div 
                key={index}
                className="group p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
