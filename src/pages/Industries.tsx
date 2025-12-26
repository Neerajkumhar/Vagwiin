import { Building2, Factory, Landmark, Briefcase, Home, HardHat, Globe, ArrowRight, Users, CheckCircle } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

const industries = [
  {
    icon: Home,
    name: "Residential",
    code: "RES-01",
    description: "Smart home networking, security systems, and infrastructure upgrades for modern living spaces.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10"
  },
  {
    icon: Building2,
    name: "Commercial",
    code: "COM-02",
    description: "Office infrastructure, meeting room technology, and enterprise connectivity solutions.",
    color: "text-violet-400",
    bg: "bg-violet-500/10"
  },
  {
    icon: Factory,
    name: "Industrial",
    code: "IND-03",
    description: "Manufacturing facility networks, IoT integration, and production floor infrastructure.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10"
  },
  {
    icon: Landmark,
    name: "Government",
    code: "GOV-04",
    description: "Secure government infrastructure, compliance-focused deployments, and public sector solutions.",
    color: "text-amber-400",
    bg: "bg-amber-500/10"
  },
  {
    icon: Briefcase,
    name: "Corporate",
    code: "COR-05",
    description: "Enterprise data centers, multi-site connectivity, and scalable corporate infrastructure.",
    color: "text-rose-400",
    bg: "bg-rose-500/10"
  },
  {
    icon: HardHat,
    name: "Infrastructure",
    code: "INF-06",
    description: "Critical infrastructure projects, redundancy systems, and disaster recovery solutions.",
    color: "text-blue-400",
    bg: "bg-blue-500/10"
  },
];

const caseStudies = [
  {
    title: "Enterprise Networking",
    category: "Corporate",
    challenge: "Multi-site connectivity for 5000+ employees",
    solution: "Deployed secure SD-WAN infrastructure",
    result: "40% reduction in network costs"
  },
  {
    title: "Industrial IoT Integration",
    category: "Industrial",
    challenge: "Factory floor equipment integration",
    solution: "Structured cabling + IoT device deployment",
    result: "Real-time production monitoring enabled"
  },
  {
    title: "Government Data Center",
    category: "Government",
    challenge: "Secure, compliance-ready infrastructure",
    solution: "ISO-certified deployment with redundancy",
    result: "Zero downtime, 99.99% uptime SLA"
  },
  {
    title: "Commercial Office",
    category: "Commercial",
    challenge: "Modern smart office setup",
    solution: "Integrated Wi-Fi, security, and conferencing",
    result: "Enhanced employee productivity"
  }
];

const IndustriesPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Industries | Vagwiin - IT Hardware Solutions</title>
        <meta
          name="description"
          content="Vagwiin serves diverse industries with tailored IT infrastructure solutions: residential, commercial, industrial, government, corporate, and critical infrastructure."
        />
        <meta name="keywords" content="industries, commercial IT, industrial solutions, government infrastructure, corporate IT" />
      </Helmet>

      <div className="min-h-screen bg-zinc-950 text-white selection:bg-cyan-500/30">
        <Navbar />

        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden border-b border-zinc-800 pt-20">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] opacity-50" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px]" />

          <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/50 border border-zinc-700 backdrop-blur-sm mb-8">
              <Globe size={16} className="text-cyan-400" />
              <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">Global Operations</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
              Sectors We <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500">
                Power
              </span>
            </h1>

            <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              From residential upgrades to critical government infrastructure, Vagwiin deploys compliant, scalable solutions across every industry.
            </p>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-24 relative">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-cyan-500 font-mono text-xs tracking-widest uppercase mb-4 block">
                // Coverage Matrix
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white">Industry-Specific Solutions</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
              {industries.map((industry) => (
                <div
                  key={industry.name}
                  className="group relative bg-zinc-900 border border-zinc-800 p-6 flex flex-col items-center text-center rounded-lg hover:border-cyan-500/50 hover:bg-zinc-950 transition-all duration-300"
                >
                  <span className="absolute top-3 right-3 text-[10px] font-mono text-zinc-700 group-hover:text-cyan-500/70 transition-colors">
                    {industry.code}
                  </span>

                  <div className={`mb-4 p-3 ${industry.bg} rounded-full ${industry.color} group-hover:scale-110 transition-all duration-300 ring-1 ring-inset ring-zinc-800 group-hover:ring-cyan-500/30`}>
                    <industry.icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-semibold text-zinc-300 group-hover:text-white text-sm tracking-wide">
                    {industry.name}
                  </h3>

                  <div className="mt-3 w-1.5 h-1.5 rounded-full bg-zinc-800 group-hover:bg-cyan-400 transition-colors" />
                </div>
              ))}
            </div>

            {/* Detailed Industry Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry) => (
                <div
                  key={industry.name}
                  className={`group bg-zinc-900 border border-zinc-800 p-8 rounded-xl hover:-translate-y-2 transition-all duration-300 hover:border-zinc-700`}
                >
                  <div className={`w-14 h-14 rounded-lg ${industry.bg} flex items-center justify-center mb-6 ${industry.color} group-hover:scale-110 transition-transform`}>
                    <industry.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{industry.name}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Different Industries Need Different Solutions */}
        <section className="py-24 bg-zinc-900/50 border-y border-zinc-800">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-cyan-500 font-mono text-xs tracking-widest uppercase mb-4 block">
                // Expertise
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Industry Expertise Matters
              </h2>
              <p className="text-zinc-400">
                Every industry has unique requirements. We understand them all.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white mb-1">Regulatory Compliance</h4>
                  <p className="text-zinc-400 text-sm">
                    Government, healthcare, and finance sectors have strict requirements. We navigate them seamlessly.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white mb-1">Performance Demands</h4>
                  <p className="text-zinc-400 text-sm">
                    Manufacturing plants need real-time data. We design for zero-latency performance.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white mb-1">Scalability</h4>
                  <p className="text-zinc-400 text-sm">
                    From small offices to enterprise campuses, we build infrastructure that grows with you.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white mb-1">Industry Best Practices</h4>
                  <p className="text-zinc-400 text-sm">
                    Our experience across sectors means proven solutions adapted to your specific needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Highlight */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-cyan-500 font-mono text-xs tracking-widest uppercase mb-4 block">
                // Proven Results
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white">Real-World Success Stories</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {caseStudies.map((study, index) => (
                <div
                  key={index}
                  className="bg-zinc-900 border border-zinc-800 p-8 rounded-xl hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <div className="text-xs font-mono text-cyan-400 mb-3 uppercase tracking-wider">
                    {study.category}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-4">{study.title}</h3>

                  <div className="space-y-4">
                    <div>
                      <div className="text-xs font-mono text-zinc-500 uppercase mb-1">Challenge</div>
                      <p className="text-zinc-400 text-sm">{study.challenge}</p>
                    </div>
                    <div className="border-t border-zinc-800 pt-4">
                      <div className="text-xs font-mono text-zinc-500 uppercase mb-1">Solution</div>
                      <p className="text-zinc-400 text-sm">{study.solution}</p>
                    </div>
                    <div className="border-t border-zinc-800 pt-4">
                      <div className="text-xs font-mono text-cyan-400 uppercase mb-1">Result</div>
                      <p className="text-cyan-300 text-sm font-medium">{study.result}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden border-t border-zinc-800">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 to-violet-900/20 opacity-30" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Let's Build Your Industry Solution
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-10">
              Whether you're residential, commercial, industrial, or government, we have the expertise to deliver.
            </p>
            <Button
              size="xl"
              className="bg-white text-black hover:bg-cyan-50 h-14 px-8 text-lg font-bold"
              onClick={() => navigate("/consultation")}
            >
              Get Industry-Specific Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default IndustriesPage;
