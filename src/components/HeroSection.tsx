import { Button } from "@/components/ui/button";
import { ArrowRight, Server, ShieldCheck, Wifi, Wrench, Activity } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center bg-zinc-950 overflow-hidden selection:bg-cyan-500/30">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[100px] mix-blend-screen" />
        {/* Tech Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]" />
      </div>

      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT COLUMN: Content */}
          <div className="text-left space-y-8">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-zinc-400 uppercase tracking-wider">
                System Online
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight">
              Build Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500">
                Digital Backbone
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg text-zinc-400 max-w-xl leading-relaxed border-l-2 border-zinc-800 pl-6">
              From enterprise server racks to precision hardware repair. We engineer the infrastructure that powers your world with military-grade reliability.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="xl" 
                className="bg-white text-black hover:bg-cyan-50 transition-all font-semibold h-14 px-8 text-lg"
                onClick={() => navigate("/consultation")}
              >
                Start Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="xl" 
                className="border-zinc-700 text-zinc-300 hover:text-white hover:bg-zinc-900 h-14 px-8 text-lg backdrop-blur-sm bg-zinc-950/50"
                onClick={() => {
                   if (window.location.pathname === "/") {
                     window.location.hash = "services";
                   } else {
                     navigate("/#services");
                   }
                }}
              >
                Explore Services
              </Button>
            </div>

            {/* Trust Metrics */}
            <div className="pt-8 grid grid-cols-3 gap-6 border-t border-zinc-800/50 mt-8">
                <div>
                    <h4 className="text-2xl font-bold text-white">500+</h4>
                    <p className="text-sm text-zinc-500">Projects Done</p>
                </div>
                <div>
                    <h4 className="text-2xl font-bold text-white">24/7</h4>
                    <p className="text-sm text-zinc-500">On-Site Support</p>
                </div>
                <div>
                    <h4 className="text-2xl font-bold text-white">100%</h4>
                    <p className="text-sm text-zinc-500">Compliance</p>
                </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Visual Elements */}
          <div className="relative hidden lg:block">
            {/* Abstract Card Layout */}
            <div className="relative z-10 grid grid-cols-2 gap-4 animate-fade-up">
                {/* Card 1 */}
                <div className="bg-zinc-900/80 backdrop-blur-md border border-zinc-800 p-6 rounded-2xl translate-y-8">
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4 text-cyan-400">
                        <Wifi size={24} />
                    </div>
                    <h3 className="text-white font-semibold text-lg">Networking</h3>
                    <p className="text-zinc-500 text-sm mt-2">Enterprise grade switching & routing architecture.</p>
                </div>

                 {/* Card 2 */}
                 <div className="bg-zinc-900/80 backdrop-blur-md border border-zinc-800 p-6 rounded-2xl">
                    <div className="w-12 h-12 bg-violet-500/20 rounded-lg flex items-center justify-center mb-4 text-violet-400">
                        <Server size={24} />
                    </div>
                    <h3 className="text-white font-semibold text-lg">Server Ops</h3>
                    <p className="text-zinc-500 text-sm mt-2">Data center management and optimization.</p>
                </div>

                 {/* Card 3 */}
                 <div className="bg-zinc-900/80 backdrop-blur-md border border-zinc-800 p-6 rounded-2xl translate-y-8">
                    <div className="w-12 h-12 bg-rose-500/20 rounded-lg flex items-center justify-center mb-4 text-rose-400">
                        <ShieldCheck size={24} />
                    </div>
                    <h3 className="text-white font-semibold text-lg">Security</h3>
                    <p className="text-zinc-500 text-sm mt-2">CCTV integration and access control systems.</p>
                </div>

                 {/* Card 4 */}
                 <div className="bg-zinc-900/80 backdrop-blur-md border border-zinc-800 p-6 rounded-2xl">
                    <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center mb-4 text-amber-400">
                        <Wrench size={24} />
                    </div>
                    <h3 className="text-white font-semibold text-lg">Maintenance</h3>
                    <p className="text-zinc-500 text-sm mt-2">Hardware repairs and workstation upgrades.</p>
                </div>
            </div>
            
            {/* Glowing Ring behind cards */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-zinc-800 rounded-full z-0 opacity-50" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] border border-dashed border-zinc-800 rounded-full z-0 opacity-30 animate-spin-slow" />
          </div>

        </div>
      </div>
    </section>
  );
};