import { Zap, Droplets, ShieldCheck, Server, Anchor } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <span className="font-display text-xl font-bold text-gradient">
              SS Solutions
            </span>
            <p className="text-muted-foreground text-sm mt-2">
              © {new Date().getFullYear()} SS Solutions. All Rights Reserved.
            </p>
          </div>

          {/* Services Icons */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Zap className="w-4 h-4" />
              <span className="text-sm hidden sm:inline">Electrical</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Droplets className="w-4 h-4" />
              <span className="text-sm hidden sm:inline">Plumbing</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-sm hidden sm:inline">Security</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Server className="w-4 h-4" />
              <span className="text-sm hidden sm:inline">IT Solutions</span>
            </div>
          </div>

          {/* Tagline */}
          <p className="text-muted-foreground text-sm">
            Professional Electrical, Plumbing, Security & IT Services
          </p>
        </div>

        {/* Attribution Section */}
        <div className="border-t border-border pt-8 mt-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-center sm:text-left">
            <div className="text-sm text-muted-foreground">
              Made by{" "}
              <a
                href="https://neeraj-portfolio-ruddy.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-accent transition-colors font-medium"
              >
                Neeraj Kumhar
              </a>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-muted-foreground">
              <Anchor className="w-4 h-4 text-primary rotate-45" />
            </div>
            <div className="text-sm text-muted-foreground">
              Powered By{" "}
              <a
                href="https://www.visuark.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-accent transition-colors font-medium"
              >
                Visuark
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
