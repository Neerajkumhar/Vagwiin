import { Check } from "lucide-react";

const points = [
  "Experienced multi-domain professionals",
  "Single vendor for multiple services",
  "Quality-driven and compliance focused",
  "Timely execution of work orders",
  "Cost-effective and scalable solutions",
];

export const WhyChooseUsSection = () => {
  return (
    <section id="why-us" className="py-20 md:py-32 section-gradient">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Main Card */}
              <div className="glass-card p-8 md:p-12 relative z-10">
                <div className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Professional Service Commitment
                </div>
                <div className="text-lg md:text-xl font-display text-primary mb-4">
                  Built on skilled manpower, strong processes, and modern service standards
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  SS Solutions delivers reliable electrical, plumbing, security, and IT services with a focus on quality, safety, and scalable execution.
                </p>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary/30 rounded-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block text-primary font-medium mb-4 text-sm tracking-wider uppercase">
              Why Choose Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              The <span className="text-gradient">SS Solutions</span> Advantage
            </h2>

            <div className="space-y-4">
              {points.map((point, index) => (
                <div
                  key={point}
                  className="flex items-start gap-4 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                    <Check className="w-5 h-5 text-accent" />
                  </div>
                  <p className="text-lg text-foreground pt-0.5">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
