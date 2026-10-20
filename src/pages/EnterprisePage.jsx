import React from "react";
import EnterpriseHero from "../components/enterprise/EnterpriseHero";
import Navbar from "../components/layout/Navbar";
import SectionDivider from "../components/layout/SectionDivider";
import BrandCarousel from "../components/landingPage/BrandCarousel";
import KeyBenefits from "../components/enterprise/KeyBenefits";
import ComplianceSection from "../components/enterprise/ComplianceSection";
import SecurityFeatures from "../components/enterprise/SecurityFeatures";
import Testimonials from "../components/landingPage/Testimonials";
import TeamCoordinationFeatures from "../components/enterprise/TeamCoordinationFeatures";
import UseCasesSection from "../components/enterprise/UseCasesSection";
import ComplianceCTA from "../components/enterprise/ComplianceCTA";
import Footer from "../components/layout/Footer";
const EnterprisePage = () => {
  return (
    <div className="min-h-screen overflow-x-clip bg-[#f5f5f5] text-[#252525]">
      {/* Shared page frame */}
      <div className="mx-auto max-w-[1200px] border-x border-[#dedede]">
        <Navbar />

        <main>
          {/* Hero */}
          <section className="px-3 pb-12 pt-4 sm:px-3 sm:pb-16">
            <EnterpriseHero />
          </section>
          <SectionDivider />
          <BrandCarousel />
          <SectionDivider />
          <KeyBenefits />
          <SectionDivider />
          <ComplianceSection />
          <SectionDivider />
          <SecurityFeatures />
          <SectionDivider />
          <div className=" bg-[#f4f4f5] px-3 py-6 sm:px-5 lg:px-3">
            <div className="mx-auto  min-h-[520px] max-w-[1480px] rounded-2xl border border-[#e1e1e1] bg-white px-6 shadow-[0_3px_8px_rgba(0,0,0,0.07)] sm:px-10 lg:min-h-[620px] lg:px-[5%]">
              <Testimonials />
            </div>
          </div>
          <SectionDivider />
          <TeamCoordinationFeatures />
          <SectionDivider />
          <UseCasesSection />
          <SectionDivider />
          <ComplianceCTA />
          <SectionDivider />
        </main>
      </div>
      <div className="lg:px-38">
        <Footer />
      </div>
    </div>
  );
};

export default EnterprisePage;
