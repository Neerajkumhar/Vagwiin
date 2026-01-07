import { Wifi, Server, ShieldCheck, Cable, Monitor, Zap, Anchor } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <span className="font-display text-xl font-bold text-gradient">
              Vagwiin
            </span>
            <p className="text-muted-foreground text-sm mt-2">
              © {new Date().getFullYear()} Vagwiin. All Rights Reserved.
            </p>
          </div>

          {/* Services Icons */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Wifi className="w-4 h-4" />
              <span className="text-sm hidden sm:inline">Networking</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Server className="w-4 h-4" />
              <span className="text-sm hidden sm:inline">Servers</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-sm hidden sm:inline">CCTV Systems</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Cable className="w-4 h-4" />
              <span className="text-sm hidden sm:inline">Cabling</span>
            </div>
          </div>

          {/* Tagline */}
          <p className="text-muted-foreground text-sm">
            Professional IT Hardware Solutions & Infrastructure Services
          </p>
        </div>


      </div>
    </footer>
  );
};
