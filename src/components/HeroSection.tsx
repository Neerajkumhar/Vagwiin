import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float animation-delay-400" />

      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Many Problems One Solution
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up animation-delay-200">
            Smart Solutions for{" "}
            <span className="text-gradient">Modern Infrastructure</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-up animation-delay-400">
            <span className="text-primary">Electrical</span> •{" "}
            <span className="text-primary">Plumbing</span> •{" "}
            <span className="text-primary">Security</span> •{" "}
            <span className="text-accent">IT Hardware</span> •{" "}
            <span className="text-accent">Carpentry</span> •{" "}
            <span className="text-primary">HouseKeeping</span>
          </p>

          {/* Description */}
          <p className="text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up animation-delay-600">
            Professional multi-service solutions for residential, commercial, and industrial needs. 
            Quality-driven execution with compliance-focused delivery.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animation-delay-600">
            <Button variant="hero" size="xl" onClick={() => navigate("/consultation")}>
              Get a Free Consultation
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button variant="heroOutline" size="xl" onClick={() => {
              if (window.location.pathname === "/") {
                window.location.hash = "services";
              } else {
                navigate("/#services");
              }
            }}>
              View Our Services
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ChevronDown size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};
