import { Wifi, Server, ShieldCheck, Cable, Monitor, Zap, ChevronRight, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

const services = [
  {
    icon: Wifi,
    name: "Networking Solutions",
    category: "Connectivity",
    id: "01",
    description: "High-speed architecture including LAN, WAN, and Mesh Wi-Fi infrastructure designed for zero-latency operations.",
    features: ["LAN/WAN Design", "Wi-Fi Infrastructure", "Network Security", "Bandwidth Optimization"],
    style: {
      icon: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "group-hover:border-cyan-500/50",
      glow: "group-hover:shadow-cyan-500/20"
    }
  },
  {
    icon: Server,
    name: "Server Operations",
    category: "Infrastructure",
    id: "02",
    description: "Enterprise rack deployment, virtualization, and thermal management for continuous business continuity.",
    features: ["Server Deployment", "Virtualization", "Thermal Management", "24/7 Monitoring"],
    style: {
      icon: "text-violet-400",
      bg: "bg-violet-500/10",
      border: "group-hover:border-violet-500/50",
      glow: "group-hover:shadow-violet-500/20"
    }
  },
  {
    icon: ShieldCheck,
    name: "Surveillance Systems",
    category: "Security",
    id: "03",
    description: "IP-based CCTV ecosystems with NVR integration, remote monitoring, and automated motion analytics.",
    features: ["CCTV Installation", "NVR Integration", "Remote Monitoring", "Motion Analytics"],
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
    features: ["Copper Cabling", "Fiber Optics", "Patch Management", "ISO Compliance"],
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
    features: ["PC Configuration", "Peripheral Setup", "Bulk Deployment", "Custom Builds"],
    style: {
      icon: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "group-hover:border-blue-500/50",
      glow: "group-hover:shadow-blue-500/20"
    }
  },
  {
    icon: Zap,
    name: "Maintenance & Support",
    category: "Support",
    id: "06",
    description: "Proactive AMC contracts, component-level motherboard repair, and emergency hardware troubleshooting.",
    features: ["AMC Contracts", "Hardware Repair", "Emergency Support", "Preventive Maintenance"],
    style: {
      icon: "text-rose-400",
      bg: "bg-rose-500/10",
      border: "group-hover:border-rose-500/50",
      glow: "group-hover:shadow-rose-500/20"
    }
  },
];

const ServicesPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Services | Vagwiin - IT Hardware Solutions</title>
        <meta
          name="description"
          content="Comprehensive IT hardware and infrastructure services including networking, servers, CCTV, cabling, workstations, and maintenance solutions."
        />
        <meta name="keywords" content="IT services, networking, servers, CCTV, cabling, workstations, maintenance" />
      </Helmet>

      <div className="min-h-screen bg-zinc-950 text-white selection:bg-cyan-500/30">
        <Navbar />

        {/* Page Hero */}
        <section className="relative py-20 md:py-32 overflow-hidden border-b border-zinc-800 pt-20">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] opacity-50" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px]" />

          <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/50 border border-zinc-700 backdrop-blur-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
              <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">Service Matrix</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
              Infrastructure <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500">
                Capabilities
              </span>
            </h1>

            <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              From physical infrastructure to complete system management, we provide end-to-end IT hardware solutions tailored to your business needs.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 relative">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <div
                  key={service.id}
                  className={`group relative bg-zinc-900 border border-zinc-800 p-8 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 ${service.style.border}`}
                >
                  <div className="absolute top-0 right-0 text-zinc-800/20 group-hover:text-zinc-700/30 transition-colors">
                    <service.icon size={80} />
                  </div>

                  <div className="relative z-10">
                    <div className={`w-12 h-12 rounded-lg ${service.style.bg} flex items-center justify-center mb-4 ${service.style.icon}`}>
                      <service.icon size={24} />
                    </div>

                    <div className="mb-4">
                      <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">{service.category}</span>
                      <h3 className="text-2xl font-bold text-white mt-2">{service.name}</h3>
                    </div>

                    <p className="text-zinc-400 text-sm leading-relaxed mb-6">{service.description}</p>

                    <div className="space-y-2">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-zinc-300 text-sm">
                          <ChevronRight className="w-4 h-4 text-cyan-400" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our Services */}
        <section className="py-24 bg-zinc-900/50 border-y border-zinc-800">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mb-16">
              <span className="text-cyan-500 font-mono text-xs tracking-widest uppercase mb-4 block">
                // Quality Assurance
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Choose Vagwiin Services</h2>
              <p className="text-zinc-400 text-lg">
                We combine technical expertise with industry best practices to deliver solutions that truly work.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0 text-cyan-400">
                  <span className="font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Certified Professionals</h3>
                  <p className="text-zinc-400">
                    Our team consists of industry-certified technicians with proven expertise.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-violet-500/10 flex items-center justify-center flex-shrink-0 text-violet-400">
                  <span className="font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">24/7 Support</h3>
                  <p className="text-zinc-400">
                    Round-the-clock support ensures your infrastructure never stops.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0 text-emerald-400">
                  <span className="font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Industry Standards</h3>
                  <p className="text-zinc-400">
                    All solutions comply with ISO certifications and industry best practices.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0 text-amber-400">
                  <span className="font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Custom Solutions</h3>
                  <p className="text-zinc-400">
                    We tailor every service to match your specific business requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 to-violet-900/20 opacity-30" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Ready to Upgrade Your Infrastructure?
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-10">
              Let's discuss which services align with your business goals and transform your operations.
            </p>
            <Button
              size="xl"
              className="bg-white text-black hover:bg-cyan-50 h-14 px-8 text-lg font-bold"
              onClick={() => navigate("/consultation")}
            >
              Request a Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;
