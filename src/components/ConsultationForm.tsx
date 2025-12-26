import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Send, Radio, Terminal, ShieldCheck, Activity } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const ConsultationForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const serviceOptions = [
    "Networking Solutions",
    "Server Infrastructure",
    "CCTV Systems",
    "Structured Cabling",
    "Workstations & Peripherals",
    "Hardware Maintenance",
    "Not Sure",
  ];

  const clientTypeOptions = [
    "Individual / Home Owner",
    "Business / Office",
    "Industry / Factory",
    "Government / Tender Authority",
  ];

  const urgencyOptions = [
    "Immediate (Critical)",
    "Today",
    "Tomorrow",
    "Within 3 Days",
  ];

  const handleServiceToggle = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      fullName: formData.get("fullName"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      clientType: formData.get("clientType"),
      location: formData.get("location"),
      details: formData.get("details"),
      urgency: formData.get("urgency"),
      consent: formData.get("consent") === "on",
    };

    // Validate required fields
    if (!data.fullName || !data.phone || !data.clientType || selectedServices.length === 0 || !data.location || !data.consent) {
      toast({
        title: "Input Validation Failed",
        description: "Protocol requires all mandatory fields to be populated.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Create WhatsApp message
    const whatsappMessage = `*Free Consultation Request*

*Full Name:* ${data.fullName}
*Phone:* ${data.phone}
*Email:* ${data.email || "Not provided"}
*Client Type:* ${data.clientType}
*Services:* ${selectedServices.join(", ")}
*Location:* ${data.location}
*Details:* ${data.details || "Not provided"}
*Urgency:* ${data.urgency || "Not specified"}`;

    // Simulate a brief "processing" delay for effect
    await new Promise(resolve => setTimeout(resolve, 800));

    const whatsappUrl = `https://wa.me/919461991604?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Transmission Initiated",
      description: "Redirecting to secure messaging channel...",
    });
    
    (e.target as HTMLFormElement).reset();
    setSelectedServices([]);
    setIsSubmitting(false);
  };

  return (
    <section className="min-h-screen bg-zinc-950 pt-24 pb-12 relative overflow-hidden">
      
      {/* Background Tech Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-3xl relative z-10">
        {/* Header */}
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-6 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Return to Dashboard
          </Button>
          
          <div className="flex items-center gap-2 mb-2">
            <Radio className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">
              System Interface
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Initialize <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">Consultation</span>
          </h1>
          <p className="text-zinc-400 text-lg border-l-2 border-zinc-800 pl-4">
            Configure your request parameters below. Our engineering team will analyze your requirements and establish a connection.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-zinc-900/80 backdrop-blur-md border border-zinc-800 p-8 rounded-2xl shadow-2xl relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-violet-500 opacity-50 rounded-t-2xl" />
            
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* --- SECTION 1: IDENTITY --- */}
            <div className="space-y-4">
                <div className="flex items-center gap-2 text-white border-b border-zinc-800 pb-2 mb-4">
                    <Terminal size={18} className="text-violet-400" />
                    <h3 className="font-mono text-sm uppercase tracking-wider">Identity Verification</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                    <Label htmlFor="fullName" className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2 block">
                        Full Name <span className="text-rose-500">*</span>
                    </Label>
                    <Input
                        id="fullName"
                        name="fullName"
                        type="text"
                        placeholder="OPERATOR NAME"
                        required
                        className="bg-zinc-950 border-zinc-800 text-white h-12 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-zinc-700"
                    />
                    </div>

                    <div>
                    <Label htmlFor="phone" className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2 block">
                        Comms Link (Phone) <span className="text-rose-500">*</span>
                    </Label>
                    <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+91..."
                        required
                        className="bg-zinc-950 border-zinc-800 text-white h-12 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-zinc-700"
                    />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <Label htmlFor="email" className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2 block">
                            Electronic Mail
                        </Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="user@domain.com"
                            className="bg-zinc-950 border-zinc-800 text-white h-12 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-zinc-700"
                        />
                    </div>
                     <div>
                        <Label htmlFor="clientType" className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2 block">
                            Entity Type <span className="text-rose-500">*</span>
                        </Label>
                        <Select name="clientType" required>
                            <SelectTrigger className="bg-zinc-950 border-zinc-800 text-zinc-300 h-12 focus:ring-cyan-500">
                            <SelectValue placeholder="SELECT CLASSIFICATION" />
                            </SelectTrigger>
                            <SelectContent className="bg-zinc-900 border-zinc-800 text-white">
                            {clientTypeOptions.map((option) => (
                                <SelectItem key={option} value={option}>
                                {option}
                                </SelectItem>
                            ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>

            {/* --- SECTION 2: REQUIREMENTS --- */}
            <div className="space-y-4">
                <div className="flex items-center gap-2 text-white border-b border-zinc-800 pb-2 mb-4 pt-4">
                    <Activity size={18} className="text-cyan-400" />
                    <h3 className="font-mono text-sm uppercase tracking-wider">Operational Scope</h3>
                </div>

                <div>
                    <Label className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-4 block">
                        Service Matrix Selection <span className="text-rose-500">*</span>
                    </Label>
                    <div className="grid md:grid-cols-2 gap-3 bg-zinc-950/50 p-4 rounded-lg border border-zinc-800">
                        {serviceOptions.map((service) => (
                        <div key={service} className="flex items-center gap-3 hover:bg-zinc-900 p-2 rounded transition-colors group">
                            <Checkbox
                            id={service}
                            checked={selectedServices.includes(service)}
                            onCheckedChange={() => handleServiceToggle(service)}
                            className="w-5 h-5 border-zinc-600 data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500"
                            />
                            <label
                            htmlFor={service}
                            className="text-sm font-medium text-zinc-400 group-hover:text-white cursor-pointer flex-1 transition-colors"
                            >
                            {service}
                            </label>
                        </div>
                        ))}
                    </div>
                </div>

                 <div className="grid md:grid-cols-2 gap-6 mt-4">
                    <div>
                        <Label htmlFor="location" className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2 block">
                            Deployment Coordinates (Location) <span className="text-rose-500">*</span>
                        </Label>
                        <Input
                            id="location"
                            name="location"
                            type="text"
                            placeholder="City, State, Site ID"
                            required
                            className="bg-zinc-950 border-zinc-800 text-white h-12 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-zinc-700"
                        />
                    </div>
                     <div>
                        <Label htmlFor="urgency" className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2 block">
                            Priority Level
                        </Label>
                        <Select name="urgency">
                            <SelectTrigger className="bg-zinc-950 border-zinc-800 text-zinc-300 h-12 focus:ring-cyan-500">
                            <SelectValue placeholder="SELECT PRIORITY" />
                            </SelectTrigger>
                            <SelectContent className="bg-zinc-900 border-zinc-800 text-white">
                            {urgencyOptions.map((option) => (
                                <SelectItem key={option} value={option}>
                                {option}
                                </SelectItem>
                            ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div>
                    <Label htmlFor="details" className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2 block">
                        Technical Specifics
                    </Label>
                    <Textarea
                        id="details"
                        name="details"
                        placeholder="Describe tender scope, hardware specs, or maintenance issues..."
                        className="bg-zinc-950 border-zinc-800 text-white min-h-[120px] resize-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-zinc-700"
                    />
                </div>
            </div>

            {/* --- SECTION 3: CONSENT & SUBMIT --- */}
            <div className="pt-4 border-t border-zinc-800">
                <div className="flex items-start gap-3 bg-cyan-500/5 p-4 rounded-lg border border-cyan-500/20 mb-6">
                <Checkbox
                    id="consent"
                    name="consent"
                    required
                    className="w-5 h-5 mt-1 border-cyan-500/50 data-[state=checked]:bg-cyan-500"
                />
                <label htmlFor="consent" className="text-sm text-zinc-400 cursor-pointer">
                    I authorize <span className="text-white font-semibold">Vagwiin</span> to process this data and contact me via the provided communication channels.
                    <span className="text-rose-500"> *</span>
                </label>
                </div>

                <Button
                type="submit"
                size="lg"
                className="w-full bg-white text-black hover:bg-cyan-50 font-bold h-14 text-lg transition-all"
                disabled={isSubmitting}
                >
                {isSubmitting ? (
                    "Processing Request..."
                ) : (
                    <>
                    Transmit via Secure Channel
                    <Send className="ml-2 h-4 w-4" />
                    </>
                )}
                </Button>

                <div className="flex items-center justify-center gap-2 mt-4 text-xs text-zinc-600 font-mono">
                    <ShieldCheck size={12} />
                    <span>Encrypted Transmission to +91 94619 91604 (WhatsApp)</span>
                </div>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
};

export default ConsultationForm;