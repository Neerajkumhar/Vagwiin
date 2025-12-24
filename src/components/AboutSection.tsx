import { Shield, Award, Users, Clock, CheckCircle, Zap, Briefcase, Clock as ClockIcon } from "lucide-react";

const stats = [
  { 
    icon: Users, 
    title: "Skilled & Verified Workforce",
    description: "Trained electricians, plumbers, security staff, and IT technicians with proper verification."
  },
  { 
    icon: Award, 
    title: "Quality-First Approach",
    description: "Every project handled with safety standards, proper tools, and professional execution."
  },
  { 
    icon: Briefcase, 
    title: "Multi-Service Expertise",
    description: "Electrical, plumbing, security, IT hardware, and tender execution — all under one roof."
  },
  { 
    icon: ClockIcon, 
    title: "24/7 Service Readiness",
    description: "Always prepared to respond quickly for maintenance and operational requirements."
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 section-gradient">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-primary font-medium mb-4 text-sm tracking-wider uppercase">
              About Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Your Trusted Partner for{" "}
              <span className="text-gradient">Complete Solutions</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              SS Solutions is a multi-service professional company delivering reliable 
              maintenance, security, and IT infrastructure solutions. We specialize in 
              electrical and plumbing maintenance, security services, IT hardware deployment, 
              and complete work order and tender fulfillment for government and private sectors.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our focus is quality, safety, and long-term performance. With a team of 
              certified professionals and a commitment to excellence, we ensure every 
              project meets the highest standards of quality and compliance.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.title}
                className="glass-card p-6 hover:border-primary/50 transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <stat.icon className="w-10 h-10 text-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <div className="font-display text-xl font-bold text-foreground mb-2">
                      {stat.title}
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{stat.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
