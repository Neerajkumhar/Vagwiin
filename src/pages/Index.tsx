import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TrustedBrandsSection } from "@/components/TrustedBrandsSection";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { IndustriesSection } from "@/components/IndustriesSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Vagwiin | IT Hardware Solutions & Infrastructure Services</title>
        <meta
          name="description"
          content="Vagwiin provides professional electrician, plumber, security services, IT hardware solutions and government & private tender work execution."
        />
        <meta
          name="keywords"
          content="electrician services, plumber services, security services, IT hardware solutions, maintenance services, tender work execution, facility management company, Vagwiin"
        />
        <link rel="canonical" href="https://sssolutions.com" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Vagwiin",
            description:
              "Professional IT hardware solutions company delivering networking, servers, CCTV systems, cabling, and infrastructure solutions.",
            url: "https://sssolutions.com",
            telephone: "+91-98765-43210",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Mumbai",
              addressCountry: "IN",
            },
            sameAs: [],
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <TrustedBrandsSection />
          <WhyChooseUsSection />
          <IndustriesSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
