import { Heart, Zap, Users, Shield, Target, Handshake } from "lucide-react";

const Values = () => {
  const values = [
    { icon: Heart, title: "Empathy First", color: "from-pink-500 to-rose-500" },
    { icon: Zap, title: "Innovation for Good", color: "from-yellow-500 to-orange-500" },
    { icon: Users, title: "Inclusivity", color: "from-blue-500 to-cyan-500" },
    { icon: Shield, title: "Integrity", color: "from-purple-500 to-indigo-500" },
    { icon: Target, title: "Excellence with Impact", color: "from-green-500 to-emerald-500" },
    { icon: Handshake, title: "Collaboration", color: "from-teal-500 to-cyan-500" }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our Core Values
          </h2>
          <p className="text-lg text-muted-foreground">
            Principles that guide everything we do
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div 
                key={index}
                className="flex flex-col items-center text-center space-y-4 p-6 rounded-xl hover:bg-accent/50 transition-colors duration-300"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${value.color} flex items-center justify-center shadow-md`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Values;
