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
    <section id="why-us" className="py-24 bg-zinc-900 border-b border-zinc-800 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Visual Side (Left in code, ordered 2 or 1 based on original logic) */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Main Card */}
              <div className="bg-zinc-950 border border-zinc-800 p-8 md:p-12 relative z-10 rounded-2xl shadow-2xl">
                <div className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Professional <br/>
                  <span className="text-zinc-500">Commitment</span>
                </div>
                <div className="text-lg md:text-xl font-medium text-cyan-400 mb-6">
                  Built on skilled manpower, strong processes, and modern service standards
                </div>
                <p className="text-zinc-400 leading-relaxed border-t border-zinc-800 pt-6">
                  Vagwiin delivers cutting-edge IT hardware solutions with a focus on reliability, scalability, and expert infrastructure deployment.
                </p>
              </div>
              
              {/* Decorative Elements */}
              {/* Top Right Border Box */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-cyan-500/30 rounded-tr-xl z-0" />
              {/* Bottom Left Glow */}
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-violet-500/20 rounded-full blur-2xl z-0" />
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <span className="inline-block text-cyan-500 font-mono text-xs tracking-widest uppercase mb-4">
              // Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">Vagwiin</span> Advantage
            </h2>

            <div className="space-y-4">
              {points.map((point, index) => (
                <div
                  key={point}
                  className="flex items-start gap-4 group p-3 rounded-lg hover:bg-zinc-800/50 transition-colors duration-300"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors duration-300 border border-cyan-500/20">
                    <Check className="w-5 h-5 text-cyan-400" />
                  </div>
                  <p className="text-lg text-zinc-300 group-hover:text-white pt-0.5 transition-colors">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};