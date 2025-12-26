import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare, Signal, Clock, Globe, CheckCircle } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Helmet } from "react-helmet-async";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
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

  const contactMethods = [
    {
      icon: Phone,
      label: "Voice Line",
      value: "+91 94619 91604",
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "group-hover:border-cyan-500/50"
    },
    {
      icon: Mail,
      label: "Digital Mail",
      value: "contact@vagwiin.com",
      color: "text-violet-400",
      bg: "bg-violet-500/10",
      border: "group-hover:border-violet-500/50"
    },
    {
      icon: MapPin,
      label: "Base of Operations",
      value: "Rajasthan, India",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "group-hover:border-emerald-500/50"
    }
  ];

  const responseMetrics = [
    { label: "24 Hour Response", value: "Guaranteed" },
    { label: "Support Availability", value: "24/7" },
    { label: "Coverage", value: "12+ Cities" },
    { label: "Service Guarantee", value: "SLA Backed" }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Vagwiin | IT Hardware Solutions</title>
        <meta
          name="description"
          content="Get in touch with Vagwiin for IT hardware solutions, infrastructure services, and support. 24/7 availability across 12+ cities in India."
        />
        <meta name="keywords" content="contact, support, IT hardware, infrastructure, consultation" />
      </Helmet>

      <div className="min-h-screen bg-zinc-950 text-white selection:bg-cyan-500/30">
        <Navbar />

        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden border-b border-zinc-800 pt-20">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] opacity-50" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px]" />

          <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/50 border border-zinc-700 backdrop-blur-sm mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">Communication Link</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
              Initialize <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500">
                Connection
              </span>
            </h1>

            <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Need infrastructure support, a project quote, or technical guidance? Our teams are ready 24/7 across multiple channels.
            </p>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute top-20 left-[-100px] w-[300px] h-[300px] bg-violet-500/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              
              {/* Contact Info */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
                  Reach Out <span className="text-zinc-500">Directly</span>
                </h2>

                <div className="space-y-8 mb-16">
                  {contactMethods.map((method, index) => (
                    <div key={index} className="flex items-center gap-6 group">
                      <div className={`w-14 h-14 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center ${method.border} group-hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all duration-300`}>
                        <method.icon className={`w-6 h-6 text-zinc-400 group-hover:${method.color} transition-colors`} />
                      </div>
                      <div>
                        <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-1">{method.label}</p>
                        <p className="font-bold text-xl text-white break-all">{method.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Response Metrics */}
                <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-xl">
                  <h3 className="text-lg font-bold text-white mb-6">Service Commitment</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {responseMetrics.map((metric, index) => (
                      <div key={index}>
                        <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-1">{metric.label}</p>
                        <p className="font-bold text-cyan-400">{metric.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="relative">
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

                <div className="absolute top-4 left-4 w-full h-full border border-zinc-800 rounded-2xl -z-0 opacity-50" />
              </div>

            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-zinc-900/50 border-y border-zinc-800">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-cyan-500 font-mono text-xs tracking-widest uppercase mb-4 block">
                // Common Questions
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white">Quick Responses</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-zinc-950 border border-zinc-800 p-8 rounded-xl">
                <div className="flex items-start gap-4 mb-4">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-white mb-2">What's your response time?</h3>
                    <p className="text-zinc-400 text-sm">
                      We guarantee a response within 24 hours to all inquiries. Urgent support is available 24/7.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-950 border border-zinc-800 p-8 rounded-xl">
                <div className="flex items-start gap-4 mb-4">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-white mb-2">Do you offer site visits?</h3>
                    <p className="text-zinc-400 text-sm">
                      Yes, we conduct free site assessments for all major projects across our 12+ city coverage area.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-950 border border-zinc-800 p-8 rounded-xl">
                <div className="flex items-start gap-4 mb-4">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-white mb-2">What regions do you serve?</h3>
                    <p className="text-zinc-400 text-sm">
                      Our primary operations are in Rajasthan and major metro areas. We also handle remote consultations nationwide.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-950 border border-zinc-800 p-8 rounded-xl">
                <div className="flex items-start gap-4 mb-4">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-white mb-2">Do you provide emergency support?</h3>
                    <p className="text-zinc-400 text-sm">
                      Absolutely. All premium clients have access to our emergency support hotline for critical infrastructure issues.
                    </p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Still Have Questions?</h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-10">
              Our experienced team is ready to discuss your project, answer technical questions, and provide detailed quotes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="xl"
                className="bg-cyan-500 text-black hover:bg-cyan-600 h-14 px-8 text-lg font-bold"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Now
              </Button>
              <Button
                size="xl"
                variant="outline"
                className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 h-14 px-8 text-lg font-bold"
              >
                <Mail className="mr-2 w-5 h-5" />
                Email Us
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
