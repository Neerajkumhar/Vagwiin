import { Target, Flag, Award, Users, Zap, Shield, ChevronRight, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const values = [
  {
    icon: Award,
    title: "Precision Engineering",
    desc: "We don't just fix problems; we engineer solutions. Every cable laid and server racked meets strict ISO tolerances.",
    color: "text-cyan-400",
    border: "group-hover:border-cyan-500/50",
    bg: "bg-cyan-500/10"
  },
  {
    icon: Shield,
    title: "Uncompromising Security",
    desc: "Data integrity and physical safety are paramount. Our security protocols are designed for zero-breach environments.",
    color: "text-emerald-400",
    border: "group-hover:border-emerald-500/50",
    bg: "bg-emerald-500/10"
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    desc: "Time is infrastructure. Our rapid response teams ensure minimal downtime for your critical operations.",
    color: "text-amber-400",
    border: "group-hover:border-amber-500/50",
    bg: "bg-amber-500/10"
  },
  {
    icon: Users,
    title: "Client-Centric Core",
    desc: "We function as an extension of your team. Transparent communication and dedicated account management are standard.",
    color: "text-violet-400",
    border: "group-hover:border-violet-500/50",
    bg: "bg-violet-500/10"
  }
];

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-cyan-500/30">
      <Navbar />
      
      {/* --- PAGE HERO --- */}
      <section className="relative py-20 md:py-32 overflow-hidden border-b border-zinc-800 pt-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] opacity-50" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px]" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/50 border border-zinc-700 backdrop-blur-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
              <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">
                Company Profile
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
              Architects of <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500">
                Modern Stability
              </span>
            </h1>
            
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Vagwiin is a premier infrastructure solutions provider bridging the gap between physical maintenance and digital reliability. We empower businesses with military-grade hardware support and facility management.
            </p>
        </div>
      </section>

      {/* --- MISSION & VISION --- */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
                
                {/* Vision Card */}
                <div className="group relative bg-zinc-900 border border-zinc-800 p-10 rounded-2xl overflow-hidden hover:border-violet-500/50 transition-all duration-500">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                         <Target size={120} />
                    </div>
                    <div className="relative z-10">
                        <div className="w-12 h-12 bg-violet-500/10 rounded-lg flex items-center justify-center mb-6 text-violet-400">
                            <Target size={24} />
                        </div>
                        <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                        <p className="text-zinc-400 leading-relaxed text-lg">
                            To be the singular backbone for enterprise operations, creating a world where infrastructure downtime is an obsolete concept. We aim to set the industry standard for integrated facility and IT management.
                        </p>
                    </div>
                </div>

                {/* Mission Card */}
                <div className="group relative bg-zinc-900 border border-zinc-800 p-10 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                         <Flag size={120} />
                    </div>
                    <div className="relative z-10">
                        <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-6 text-cyan-400">
                            <Flag size={24} />
                        </div>
                        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                        <p className="text-zinc-400 leading-relaxed text-lg">
                            To deliver comprehensive, compliant, and cost-effective solutions for Government and Private sectors. We are dedicated to executing work orders with precision, safety, and speed.
                        </p>
                    </div>
                </div>

            </div>
        </div>
      </section>

      {/* --- CORE VALUES --- */}
      <section className="py-24 bg-zinc-900/50 border-y border-zinc-800 relative">
        <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-cyan-500 font-mono text-xs tracking-widest uppercase block mb-4">
                    // Operating Protocols
                </span>
                <h2 className="text-4xl font-bold text-white mb-4">Core Values</h2>
                <p className="text-zinc-400">The fundamental principles that govern every project we undertake.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((val, index) => (
                    <div key={index} className={`group bg-zinc-950 border border-zinc-800 p-6 rounded-xl hover:-translate-y-2 transition-all duration-300 ${val.border}`}>
                        <div className={`w-12 h-12 rounded-lg ${val.bg} flex items-center justify-center mb-6 ${val.color} group-hover:scale-110 transition-transform`}>
                            <val.icon size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">{val.title}</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            {val.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* --- STATS STRIP --- */}
      <section className="py-20 bg-zinc-950 border-b border-zinc-800">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-zinc-800">
                <div className="p-4">
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">500+</div>
                    <div className="text-zinc-500 font-mono text-sm uppercase">Projects Live</div>
                </div>
                <div className="p-4">
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">50+</div>
                    <div className="text-zinc-500 font-mono text-sm uppercase">Expert Staff</div>
                </div>
                <div className="p-4">
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">12+</div>
                    <div className="text-zinc-500 font-mono text-sm uppercase">Cities Covered</div>
                </div>
                <div className="p-4">
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">24/7</div>
                    <div className="text-zinc-500 font-mono text-sm uppercase">Support Ops</div>
                </div>
            </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 to-violet-900/20 opacity-30" />
        <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Upgrade Your Infrastructure?</h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-10">
                Partner with Vagwiin for a seamless, secure, and scalable future. Let's build something durable together.
            </p>
            <Button 
                size="xl" 
                className="bg-white text-black hover:bg-cyan-50 h-14 px-8 text-lg font-bold"
                onClick={() => navigate("/contact")}
            >
                Start a Conversation
                <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutPage;