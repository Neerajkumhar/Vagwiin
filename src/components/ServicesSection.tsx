import { Zap, ShieldCheck, Server, Wifi, Monitor, Cable } from "lucide-react";

const services = [
  {
    icon: Wifi,
    name: "Networking",
    category: "Connectivity",
    id: "01",
    description: "High-speed architecture including LAN, WAN, and Mesh Wi-Fi infrastructure designed for zero-latency operations.",
    style: {
      icon: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "group-hover:border-cyan-500/50",
      glow: "group-hover:shadow-cyan-500/20"
    }
  },
  {
    icon: Server,
    name: "Server Ops",
    category: "Infrastructure",
    id: "02",
    description: "Enterprise rack deployment, virtualization, and thermal management for continuous business continuity.",
    style: {
      icon: "text-violet-400",
      bg: "bg-violet-500/10",
      border: "group-hover:border-violet-500/50",
      glow: "group-hover:shadow-violet-500/20"
    }
  },
  {
    icon: ShieldCheck,
    name: "Surveillance",
    category: "Security",
    id: "03",
    description: "IP-based CCTV ecosystems with NVR integration, remote monitoring, and automated motion analytics.",
    style: {
      icon: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "group-hover:border-emerald-500/50",
      glow: "group-hover:shadow-emerald-500/20"
    }
  },
  {
    icon: Cable,
    name: "Structured Cabling",
    category: "Physical Layer",
    id: "04",
    description: "Certified copper and fiber optic pathways with ISO-compliant patch panel management and labeling.",
    style: {
      icon: "text-amber-400",
      bg: "bg-amber-500/10",
      border: "group-hover:border-amber-500/50",
      glow: "group-hover:shadow-amber-500/20"
    }
  },
  {
    icon: Monitor,
    name: "Workstations",
    category: "End-User",
    id: "05",
    description: "Custom-configured PC deployment, peripheral optimization, and bulk hardware provisioning.",
    style: {
      icon: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "group-hover:border-blue-500/50",
      glow: "group-hover:shadow-blue-500/20"
    }
  },
  {
    icon: Zap,
    name: "Maintenance",
    category: "Support",
    id: "06",
    description: "Proactive AMC contracts, component-level motherboard repair, and emergency hardware troubleshooting.",
    style: {
      icon: "text-rose-400",
      bg: "bg-rose-500/10",
      border: "group-hover:border-rose-500/50",
      glow: "group-hover:shadow-rose-500/20"
    }
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-zinc-900 border-t border-zinc-800 relative overflow-hidden">
      
      {/* Background Decor (Matched to Industries Section) */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-20" />
      <div className="absolute -right-20 top-20 w-64 h-64 bg-violet-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-cyan-500 font-mono text-xs tracking-widest uppercase mb-4 block">
            // Service Matrix
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Infrastructure <br />
            <span className="text-zinc-500">Capabilities</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl border-l-2 border-zinc-800 pl-6">
            We deploy full-stack physical infrastructure. From the cables in the wall to the servers in the rack, we ensure your hardware ecosystem is resilient.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.name}
              className={`group relative bg-zinc-950 border border-zinc-800 hover:bg-zinc-900/80 transition-all duration-300 rounded-xl p-8 hover:-translate-y-1 ${service.style.border} hover:shadow-2xl ${service.style.glow}`}
            >
              {/* Header of Card */}
              <div className="flex justify-between items-start mb-8">
                <div className={`w-14 h-14 rounded-lg ${service.style.bg} flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                  <service.icon className={`w-7 h-7 ${service.style.icon}`} />
                </div>
                <span className="font-mono text-zinc-600 text-sm group-hover:text-white transition-colors">
                  {service.id}
                </span>
              </div>

              {/* Content */}
              <div>
                <span className={`text-xs font-mono uppercase tracking-wider mb-2 block opacity-70 ${service.style.icon}`}>
                  {service.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-50 transition-colors">
                  {service.name}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-300">
                  {service.description}
                </p>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className={`w-2 h-2 rounded-full ${service.style.bg.replace('/10', '')}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};