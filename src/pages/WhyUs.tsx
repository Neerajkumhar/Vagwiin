import { Check, Award, Users, Zap, Shield, Clock, BarChart3, Target } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

const advantages = [
  {
    icon: Users,
    title: "Experienced Multi-Domain Professionals",
    description: "Our team brings decades of combined expertise across networking, infrastructure, and IT hardware solutions.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10"
  },
  {
    icon: Award,
    title: "Quality-Driven & Compliance Focused",
    description: "Every project meets ISO standards and industry best practices with rigorous quality assurance.",
    color: "text-violet-400",
    bg: "bg-violet-500/10"
  },
  {
    icon: Zap,
    title: "Rapid Deployment & Execution",
    description: "We minimize downtime with efficient installation, configuration, and deployment processes.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10"
  },
  {
    icon: Clock,
    title: "24/7 Support & Monitoring",
    description: "Round-the-clock support ensures your infrastructure operates without interruption.",
    color: "text-amber-400",
    bg: "bg-amber-500/10"
  },
  {
    icon: Shield,
    title: "Security-First Approach",
    description: "Data protection and system integrity are built into every solution we deliver.",
    color: "text-rose-400",
    bg: "bg-rose-500/10"
  },
  {
    icon: BarChart3,
    title: "Cost-Effective & Scalable Solutions",
    description: "We optimize your investment with solutions that grow with your business needs.",
    color: "text-blue-400",
    bg: "bg-blue-500/10"
  }
];

const differentiators = [
  {
    number: "01",
    title: "Single Vendor Model",
    description: "Consolidate all your IT hardware needs under one trusted partner, reducing complexity and improving coordination."
  },
  {
    number: "02",
    title: "Custom Solutions",
    description: "Every engagement is tailored to your specific requirements, not a one-size-fits-all approach."
  },
  {
    number: "03",
    title: "Proven Track Record",
    description: "Hundreds of successful implementations across diverse industries and organizational scales."
  },
  {
    number: "04",
    title: "Future-Ready",
    description: "We stay ahead of technology trends to ensure your infrastructure remains competitive."
  }
];

const WhyUsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Why Vagwiin | IT Hardware Solutions Provider</title>
        <meta
          name="description"
          content="Discover why businesses choose Vagwiin for IT hardware solutions. Expert team, 24/7 support, quality-driven approach, and proven track record."
        />
        <meta name="keywords" content="why choose vagwiin, IT hardware provider, infrastructure solutions, 24/7 support" />
      </Helmet>

      <div className="min-h-screen bg-zinc-950 text-white selection:bg-cyan-500/30">
        <Navbar />

        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden border-b border-zinc-800 pt-20">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] opacity-50" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px]" />

          <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/50 border border-zinc-700 backdrop-blur-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
              <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">Partnership Value</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
              Why Choose <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500">
                Vagwiin
              </span>
            </h1>

            <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              We're not just another IT hardware vendor. We're your strategic partner in building infrastructure that works.
            </p>
          </div>
        </section>

        {/* Advantages Grid */}
        <section className="py-24 relative">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-cyan-500 font-mono text-xs tracking-widest uppercase mb-4 block">
                // Core Advantages
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white">What Sets Us Apart</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advantages.map((advantage, index) => (
                <div
                  key={index}
                  className="group bg-zinc-900 border border-zinc-800 p-8 rounded-xl hover:-translate-y-2 transition-all duration-300 hover:border-zinc-700"
                >
                  <div className={`w-14 h-14 rounded-lg ${advantage.bg} flex items-center justify-center mb-6 ${advantage.color} group-hover:scale-110 transition-transform`}>
                    <advantage.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{advantage.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Differentiators */}
        <section className="py-24 bg-zinc-900/50 border-y border-zinc-800">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-cyan-500 font-mono text-xs tracking-widest uppercase mb-4 block">
                // Strategic Advantages
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Competitive Edge</h2>
              <p className="text-zinc-400">
                Four fundamental principles that define how we work
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {differentiators.map((diff) => (
                <div
                  key={diff.number}
                  className="bg-zinc-950 border border-zinc-800 p-8 rounded-xl hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <div className="text-5xl font-bold text-cyan-400/20 mb-4 group-hover:text-cyan-400/40 transition-colors">
                    {diff.number}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{diff.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{diff.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-cyan-500 font-mono text-xs tracking-widest uppercase mb-4 block">
                // Track Record
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white">Proven Excellence</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">500+</div>
                <div className="text-zinc-400 font-mono text-sm uppercase tracking-wider">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-violet-400 mb-2">50+</div>
                <div className="text-zinc-400 font-mono text-sm uppercase tracking-wider">Expert Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-emerald-400 mb-2">12+</div>
                <div className="text-zinc-400 font-mono text-sm uppercase tracking-wider">Cities Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">24/7</div>
                <div className="text-zinc-400 font-mono text-sm uppercase tracking-wider">Support Operations</div>
              </div>
            </div>

            {/* Trust Points */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <Check className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white mb-1">ISO Certified Processes</h4>
                    <p className="text-zinc-400 text-sm">Our operations follow international standards for quality and safety.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Check className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white mb-1">Industry Partnerships</h4>
                    <p className="text-zinc-400 text-sm">Partnerships with leading manufacturers ensure product quality and support.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Check className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white mb-1">SLA Commitments</h4>
                    <p className="text-zinc-400 text-sm">We guarantee service levels with documented SLAs on all contracts.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Check className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white mb-1">Transparent Pricing</h4>
                    <p className="text-zinc-400 text-sm">No hidden costs—clear, itemized proposals for every project.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden border-t border-zinc-800">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 to-violet-900/20 opacity-30" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Ready to Partner with Vagwiin?
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-10">
              Let's discuss how we can transform your infrastructure and support your growth.
            </p>
            <Button
              size="xl"
              className="bg-white text-black hover:bg-cyan-50 h-14 px-8 text-lg font-bold"
              onClick={() => navigate("/consultation")}
            >
              Schedule Your Consultation
              <Check className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default WhyUsPage;
