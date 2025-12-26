import { ShieldCheck, Award, Users, Clock, Cpu, Zap, Activity } from "lucide-react";

const stats = [
  { 
    icon: Users, 
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    title: "Field Units",
    subtitle: "Verified Workforce",
    description: "Deployment-ready electricians, plumbers, and IT technicians with full background verification."
  },
  { 
    icon: Award, 
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    title: "Compliance",
    subtitle: "ISO Standards",
    description: "Strict adherence to safety protocols and industrial quality execution standards."
  },
  { 
    icon: Cpu, 
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    title: "Integration",
    subtitle: "Multi-Service",
    description: "End-to-end IT hardware solutions including networking, servers, CCTV systems, structured cabling, and complete infrastructure deployment.",
  },
  { 
    icon: Clock, 
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    title: "Uptime",
    subtitle: "24/7 Readiness",
    description: "Rapid response protocols for critical infrastructure maintenance and emergency repairs."
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-zinc-900 relative overflow-hidden">
      {/* Background Tech Pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-cyan-500/20 to-transparent rounded-full blur-[120px]" />
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_80%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* LEFT: Content Narrative */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800/50 border border-zinc-700 backdrop-blur-sm">
              <Activity size={14} className="text-cyan-400" />
              <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">
                System Architecture
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Engineered for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">
                Operational Excellence
              </span>
            </h2>
            
            <div className="space-y-6 text-lg text-zinc-400">
              <p className="leading-relaxed">
                <span className="text-white font-semibold">Vagwiin</span> isn't just a service provider; we are your infrastructure backbone. We bridge the gap between physical maintenance and digital reliability.
              </p>
              <p className="leading-relaxed border-l-2 border-cyan-500/30 pl-6">
                Specializing in enterprise IT infrastructure, we deliver comprehensive solutions for <span className="text-cyan-400">Networking</span>, <span className="text-cyan-400">Servers</span>, <span className="text-cyan-400">CCTV Systems</span>, and <span className="text-cyan-400">Structured Cabling</span>.
              </p>
            </div>

            <div className="flex items-center gap-4 pt-4">
                <div className="h-px bg-zinc-800 flex-1" />
                <span className="text-zinc-600 text-xs font-mono uppercase tracking-widest">Authorized Service Provider</span>
                <div className="h-px bg-zinc-800 flex-1" />
            </div>
          </div>

          {/* RIGHT: Feature Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div
                key={stat.title}
                className="group relative bg-zinc-950 border border-zinc-800 p-6 rounded-xl hover:border-zinc-600 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/5 overflow-hidden"
              >
                {/* Hover Gradient Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  <div className={`w-12 h-12 ${stat.bg} rounded-lg flex items-center justify-center mb-4 ring-1 ring-inset ring-white/10`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  
                  <div className="mb-2">
                    <h4 className="text-white font-bold text-lg">{stat.title}</h4>
                    <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">{stat.subtitle}</span>
                  </div>
                  
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};