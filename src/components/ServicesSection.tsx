import { Zap, Droplets, ShieldCheck, Server, FileText, Hammer, Sparkles } from "lucide-react";

const services = [
  {
    icon: Zap,
    name: "Electrical Maintenance Services",
    description:
      "Residential, commercial and industrial electrical installation, repair and preventive maintenance by certified electricians.",
    color: "primary",
  },
  {
    icon: Droplets,
    name: "Plumbing Services",
    description:
      "Complete plumbing solutions including installation, leakage repair, drainage systems and maintenance contracts.",
    color: "primary",
  },
  {
    icon: ShieldCheck,
    name: "Security Services",
    description:
      "Trained security personnel, surveillance support and site safety management for offices, industries and residential complexes.",
    color: "accent",
  },
  {
    icon: Server,
    name: "IT Hardware Solutions",
    description:
      "Supply, installation and maintenance of IT hardware including networking equipment, servers, CCTV and structured cabling.",
    color: "accent",
  },
  {
    icon: FileText,
    name: "Work Order & Tender Execution",
    description:
      "End-to-end execution of government and private tenders including manpower, materials, compliance and reporting.",
    color: "primary",
  },
  {
    icon: Hammer,
    name: "Carpentry Services",
    description:
      "Professional carpentry work including installations, repairs, custom furniture and structural modifications for residential and commercial spaces.",
    color: "primary",
  },
  {
    icon: Sparkles,
    name: "HouseKeeping Services",
    description:
      "Comprehensive housekeeping and cleaning services including daily maintenance, deep cleaning and facility management.",
    color: "accent",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-medium mb-4 text-sm tracking-wider uppercase">
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Comprehensive <span className="text-gradient">Solutions</span> for Every Need
          </h2>
          <p className="text-muted-foreground text-lg">
            From electrical maintenance to IT infrastructure, we provide end-to-end 
            solutions tailored to your specific requirements.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.name}
              className={`glass-card p-8 group hover:border-${service.color}/50 transition-all duration-300 hover:-translate-y-2 ${
                index === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div
                className={`w-14 h-14 rounded-xl bg-${service.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon
                  className={`w-7 h-7 text-${service.color}`}
                />
              </div>
              <h3 className="font-display text-xl font-semibold mb-4 text-foreground">
                {service.name}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
