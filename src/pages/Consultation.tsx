import { Navbar } from "@/components/Navbar";
import { ConsultationForm } from "@/components/ConsultationForm";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Consultation = () => {
  return (
    <div className="min-h-screen bg-zinc-950 selection:bg-cyan-500/30 flex flex-col">
      <Helmet>
        <title>Project Initialization | Vagwiin</title>
        <meta
          name="description"
          content="Request a free consultation from Vagwiin. Tell us about your IT hardware, networking, server, CCTV, or infrastructure service requirements."
        />
        <link rel="canonical" href="https://sssolutions.com/consultation" />
      </Helmet>
      
      <Navbar />
      
      {/* Main Content Area */}
      <main className="flex-grow pt-20">
        <ConsultationForm />
      </main>
      
      <Footer />
    </div>
  );
};

export default Consultation;