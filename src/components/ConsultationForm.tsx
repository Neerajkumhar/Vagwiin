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
import { ArrowLeft, Send } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const ConsultationForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const serviceOptions = [
    "Electrical Services",
    "Plumbing Services",
    "Security Services",
    "IT Hardware / Networking",
    "Work Order / Tender Execution",
    "Carpentry Services",
    "HouseKeeping Services",
    "Not Sure",
  ];

  const clientTypeOptions = [
    "Individual / Home Owner",
    "Business / Office",
    "Industry / Factory",
    "Government / Tender Authority",
  ];

  const urgencyOptions = [
    "Immediate",
    "Today",
    "Tomorrow",
    "3 Days",
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
      services: selectedServices,
      location: formData.get("location"),
      details: formData.get("details"),
      urgency: formData.get("urgency"),
      consent: formData.get("consent") === "on",
    };

    // Validate required fields
    if (!data.fullName || !data.phone || !data.clientType || selectedServices.length === 0 || !data.location || !data.consent) {
      toast({
        title: "Missing Required Fields",
        description: "Please fill in all required fields",
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

    const whatsappUrl = `https://wa.me/919024491622?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Consultation Submitted!",
      description:
        "WhatsApp will open with your consultation request. Please send the message.",
    });
    
    (e.target as HTMLFormElement).reset();
    setSelectedServices([]);
    setIsSubmitting(false);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 pt-32 pb-12">
      <div className="container mx-auto px-4 max-w-2xl">
        {/* Header */}
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-6 hover:bg-primary/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Request a <span className="text-gradient">Free Consultation</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Tell us about your requirement and our team will get in touch with you.
          </p>
        </div>

        {/* Form */}
        <div className="glass-card p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <Label htmlFor="fullName" className="text-base font-medium mb-2 block">
                Full Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Enter your full name"
                required
                className="bg-secondary/50 border-border focus:border-primary h-10"
              />
            </div>

            {/* Phone Number */}
            <div>
              <Label htmlFor="phone" className="text-base font-medium mb-2 block">
                Phone Number <span className="text-red-500">*</span>
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
                required
                className="bg-secondary/50 border-border focus:border-primary h-10"
              />
            </div>

            {/* Email Address */}
            <div>
              <Label htmlFor="email" className="text-base font-medium mb-2 block">
                Email Address
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
                className="bg-secondary/50 border-border focus:border-primary h-10"
              />
            </div>

            {/* Client Type */}
            <div>
              <Label htmlFor="clientType" className="text-base font-medium mb-2 block">
                Client Type <span className="text-red-500">*</span>
              </Label>
              <Select name="clientType" required>
                <SelectTrigger className="bg-secondary/50 border-border focus:border-primary h-10">
                  <SelectValue placeholder="Select client type" />
                </SelectTrigger>
                <SelectContent>
                  {clientTypeOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Service Requirement */}
            <div>
              <Label className="text-base font-medium mb-4 block">
                Service Requirement <span className="text-red-500">*</span>
              </Label>
              <div className="space-y-3 bg-secondary/30 p-4 rounded-lg border border-border">
                {serviceOptions.map((service) => (
                  <div key={service} className="flex items-center gap-3">
                    <Checkbox
                      id={service}
                      checked={selectedServices.includes(service)}
                      onCheckedChange={() => handleServiceToggle(service)}
                      className="w-5 h-5"
                    />
                    <label
                      htmlFor={service}
                      className="text-sm font-medium cursor-pointer flex-1"
                    >
                      {service}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Location */}
            <div>
              <Label htmlFor="location" className="text-base font-medium mb-2 block">
                Service Location <span className="text-red-500">*</span>
              </Label>
              <Input
                id="location"
                name="location"
                type="text"
                placeholder="Enter service location"
                required
                className="bg-secondary/50 border-border focus:border-primary h-10"
              />
            </div>

            {/* Requirement Details */}
            <div>
              <Label htmlFor="details" className="text-base font-medium mb-2 block">
                Requirement Details
              </Label>
              <Textarea
                id="details"
                name="details"
                placeholder="Describe your project, maintenance work, or tender scope"
                className="bg-secondary/50 border-border focus:border-primary min-h-[120px] resize-none"
              />
            </div>

            {/* Urgency Level */}
            <div>
              <Label htmlFor="urgency" className="text-base font-medium mb-2 block">
                Urgency Level
              </Label>
              <Select name="urgency">
                <SelectTrigger className="bg-secondary/50 border-border focus:border-primary h-10">
                  <SelectValue placeholder="Select urgency level" />
                </SelectTrigger>
                <SelectContent>
                  {urgencyOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Consent Checkbox */}
            <div className="flex items-start gap-3 bg-primary/5 p-4 rounded-lg border border-primary/20">
              <Checkbox
                id="consent"
                name="consent"
                required
                className="w-5 h-5 mt-1"
              />
              <label htmlFor="consent" className="text-sm font-medium cursor-pointer">
                I agree to be contacted by SS Solutions regarding my enquiry
                <span className="text-red-500"> *</span>
              </label>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              size="lg"
              className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-semibold h-11"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Request Free Consultation"}
              <Send className="ml-2 h-4 w-4" />
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              Form will be submitted via WhatsApp to +91 9024491622
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ConsultationForm;
