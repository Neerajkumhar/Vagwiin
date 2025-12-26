import { Building2, Factory, Landmark, Briefcase, Home, HardHat, Globe } from "lucide-react";

const industries = [
  { icon: Home, name: "Residential", code: "RES-01" },
  { icon: Building2, name: "Commercial", code: "COM-02" },
  { icon: Factory, name: "Industrial", code: "IND-03" },
  { icon: Landmark, name: "Government", code: "GOV-04" },
  { icon: Briefcase, name: "Corporate", code: "COR-05" },
  { icon: HardHat, name: "Infrastructure", code: "INF-06" },
];

export const IndustriesSection = () => {
  return (
    <section id="industries" className="py-24 bg-zinc-900 border-y border-zinc-800 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-20" />
      <div className="absolute -left-20 top-20 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <Globe size={16} className="text-cyan-500" />
              <span className="text-cyan-500 font-mono text-xs tracking-widest uppercase">
                Global Operations
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Sectors We <span className="text-zinc-500">Power</span>
            </h2>
            <p className="text-zinc-400">
              Deploying compliant infrastructure solutions across diverse operational environments.
            </p>
          </div>
          
          {/* Decorative Lines */}
          <div className="hidden md:flex gap-1 items-end h-full opacity-30">
             {[...Array(5)].map((_, i) => (
                <div key={i} className={`w-1 bg-cyan-500 rounded-t-sm`} style={{ height: `${(i + 1) * 8}px` }} />
             ))}
          </div>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((industry, index) => (
            <div
              key={industry.name}
              className="group relative bg-zinc-950 border border-zinc-800 p-6 flex flex-col items-center text-center rounded-lg hover:border-cyan-500/50 hover:bg-zinc-900 transition-all duration-300 cursor-default"
            >
              {/* Tech ID Code */}
              <span className="absolute top-3 right-3 text-[10px] font-mono text-zinc-700 group-hover:text-cyan-500/70 transition-colors">
                {industry.code}
              </span>

              {/* Icon */}
              <div className="mb-4 p-3 bg-zinc-900 rounded-full text-zinc-400 group-hover:text-cyan-400 group-hover:bg-cyan-500/10 transition-all duration-300 ring-1 ring-inset ring-zinc-800 group-hover:ring-cyan-500/30">
                <industry.icon className="w-6 h-6" />
              </div>

              {/* Name */}
              <h3 className="font-semibold text-zinc-300 group-hover:text-white text-sm tracking-wide">
                {industry.name}
              </h3>
              
              {/* Active Indicator Dot */}
              <div className="mt-3 w-1.5 h-1.5 rounded-full bg-zinc-800 group-hover:bg-cyan-400 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};