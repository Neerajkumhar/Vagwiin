import { Navbar } from "@/components/Navbar";
import { ConsultationForm } from "@/components/ConsultationForm";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Consultation = () => {
  return (
    <>
      <Helmet>
        <title>Free Consultation | SS Solutions</title>
        <meta
          name="description"
          content="Request a free consultation from SS Solutions. Tell us about your electrical, plumbing, security, or IT service requirements."
        />
        <meta
          name="keywords"
          content="consultation, free consultation, inquiry, electrical services, plumbing services, security services"
        />
        <link rel="canonical" href="https://sssolutions.com/consultation" />
      </Helmet>
      <Navbar />
      <ConsultationForm />
      <Footer />
    </>
  );
};

export default Consultation;
