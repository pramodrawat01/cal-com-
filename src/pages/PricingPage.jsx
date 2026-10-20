import React from "react";
import Navbar from "../components/layout/Navbar";
import PricingHero from "../components/pricing/PricingHero";
import Footer from "../components/layout/Footer";
import SectionDivider from "../components/layout/SectionDivider";
import BrandCarousel from "../components/landingPage/BrandCarousel";
import FeatureBreakdown from "../components/pricing/FeatureBreakdown";
import SchedulingCTA from "../components/pricing/SchedulingCTA";

const PricingPage = () => {
  return (
    <div className="min-h-screen overflow-x-clip bg-[#f5f5f5] text-[#252525]">
      {/* Shared page frame */}
      <div className="mx-auto max-w-[1200px] border-x border-[#dedede]">
        <Navbar />

        <main>
          {/* Hero */}
          <section className="px-3 pb-12 pt-4 sm:px-3 sm:pb-16">
            <PricingHero />
          </section>
          <SectionDivider />
          <BrandCarousel />
          <SectionDivider />
          <div className=" bg-[#f4f4f5] px-3 py-6 sm:px-5 lg:px-3">
            <div className="mx-auto  min-h-[520px] max-w-[1480px] rounded-2xl border border-[#e1e1e1]  bg-white shadow-[0_3px_8px_rgba(0,0,0,0.07)]  lg:min-h-[620px] ">
              <FeatureBreakdown />
            </div>
          </div>
          <SectionDivider/>
          <SchedulingCTA/>
        </main>
        <SectionDivider />
      </div>
      <div className="lg:px-38">
        <Footer />
      </div>
    </div>
  );
};

export default PricingPage;
