import { Building2, Factory, Landmark, Briefcase, Home, HardHat } from "lucide-react";

const industries = [
  { icon: Home, name: "Residential" },
  { icon: Building2, name: "Commercial" },
  { icon: Factory, name: "Industrial" },
  { icon: Landmark, name: "Government" },
  { icon: Briefcase, name: "Corporate" },
  { icon: HardHat, name: "Infrastructure" },
];

export const IndustriesSection = () => {
  return (
    <section id="industries" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-medium mb-4 text-sm tracking-wider uppercase">
            Industries
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Industries <span className="text-gradient">We Serve</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Trusted by diverse sectors for reliable and professional services
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((industry, index) => (
            <div
              key={industry.name}
              className="glass-card p-6 text-center group hover:border-primary/50 transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <industry.icon className="w-10 h-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <p className="font-medium text-foreground">{industry.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
