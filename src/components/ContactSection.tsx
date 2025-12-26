import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, MessageSquare, Signal } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Transmission Received",
      description: "Our support team will respond within 24 hours.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 bg-zinc-950 relative overflow-hidden">
      
      {/* Background Tech Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] pointer-events-none" />
      
      {/* Glowing Orb Effects */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-20 left-[-100px] w-[300px] h-[300px] bg-violet-500/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Contact Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
              </span>
              <span className="text-cyan-500 font-mono text-xs tracking-widest uppercase">
                // Communication Link
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Initialize <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">
                Connection
              </span>
            </h2>
            
            <p className="text-zinc-400 text-lg mb-12 max-w-md border-l-2 border-zinc-800 pl-6">
              Need immediate infrastructure support or a quote for a new project? Our digital channels are open 24/7.
            </p>

            <div className="space-y-8">
              {/* Phone */}
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-cyan-500/50 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all duration-300">
                  <Phone className="w-6 h-6 text-zinc-400 group-hover:text-cyan-400 transition-colors" />
                </div>
                <div>
                  <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-1">Voice Line</p>
                  <p className="font-bold text-xl text-white">+91 94619 91604</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-violet-500/50 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.15)] transition-all duration-300">
                  <Mail className="w-6 h-6 text-zinc-400 group-hover:text-violet-400 transition-colors" />
                </div>
                <div>
                  <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-1">Digital Mail</p>
                  <p className="font-bold text-xl text-white break-all">contact@vagwiin.com</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-emerald-500/50 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.15)] transition-all duration-300">
                  <MapPin className="w-6 h-6 text-zinc-400 group-hover:text-emerald-400 transition-colors" />
                </div>
                <div>
                  <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-1">Base of Operations</p>
                  <p className="font-bold text-xl text-white">Rajasthan, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="relative">
            {/* Form Container */}
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 p-8 md:p-10 rounded-2xl shadow-2xl relative z-10">
              <div className="flex items-center justify-between mb-8 border-b border-zinc-800 pb-4">
                <h3 className="font-bold text-xl text-white flex items-center gap-2">
                  <MessageSquare size={20} className="text-cyan-500" />
                  Send Enquiry
                </h3>
                <Signal size={18} className="text-emerald-500 animate-pulse" />
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs text-zinc-500 font-mono uppercase">Full Name</label>
                    <Input
                      placeholder="John Doe"
                      required
                      className="bg-zinc-950 border-zinc-800 text-white placeholder:text-zinc-700 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-zinc-500 font-mono uppercase">Contact Number</label>
                    <Input
                      type="tel"
                      placeholder="+91..."
                      required
                      className="bg-zinc-950 border-zinc-800 text-white placeholder:text-zinc-700 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all h-12"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                   <label className="text-xs text-zinc-500 font-mono uppercase">Email Address</label>
                   <Input
                    type="email"
                    placeholder="name@company.com"
                    required
                    className="bg-zinc-950 border-zinc-800 text-white placeholder:text-zinc-700 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-zinc-500 font-mono uppercase">Service Required</label>
                  <Input
                    placeholder="e.g. Server Maintenance, CCTV Installation..."
                    required
                    className="bg-zinc-950 border-zinc-800 text-white placeholder:text-zinc-700 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-zinc-500 font-mono uppercase">Message Details</label>
                  <Textarea
                    placeholder="Describe your project requirements..."
                    rows={4}
                    required
                    className="bg-zinc-950 border-zinc-800 text-white placeholder:text-zinc-700 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-white text-black hover:bg-cyan-50 font-bold h-14 mt-4 text-lg transition-all"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Transmitting..."
                  ) : (
                    <>
                      Transmit Request
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>
            
            {/* Decorative Border behind form */}
            <div className="absolute top-4 left-4 w-full h-full border border-zinc-800 rounded-2xl -z-0 opacity-50" />
          </div>

        </div>
      </div>
    </section>
  );
};