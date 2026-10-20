import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SectionDivider from "../components/layout/SectionDivider";

import Hero from "../components/landingPage/Hero";
import BrandCarousel from "../components/landingPage/BrandCarousel";
import HowItWorks from "../components/landingPage/HowItWorks";
import Benefits from "../components/landingPage/Benefits";
import Testimonials from "../components/landingPage/Testimonials";
import AppIntegrations from "../components/landingPage/AppIntegrations";
import WallOfLove from "../components/landingPage/WallOfLove";
import FAQ from "../components/landingPage/FAQ";
import SchedulingCTA from "../components/landingPage/SchedulingCTA";
export default function LandingPage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-[#f5f5f5] text-[#252525]">
      {/* Shared page frame */}
      <div className="mx-auto max-w-[1200px] border-x border-[#dedede]">
        <Navbar />

        <main>
          {/* Hero */}
          <section className="px-3 pb-12 pt-4 sm:px-3 sm:pb-16">
            <Hero />
          </section>

          {/* Brand carousel */}
          <SectionDivider />
          <BrandCarousel />
          <SectionDivider />

          {/* Additional landing-page sections */}
          <HowItWorks />
          <SectionDivider />

          <Benefits />
          <SectionDivider />
          <Testimonials />
          <SectionDivider />
          <AppIntegrations />
          <SectionDivider />
          <WallOfLove />
          <SectionDivider />
          <FAQ />
          {/* Brand carousel */}
          <SectionDivider />
          <BrandCarousel />
          <SectionDivider />
          <SchedulingCTA />
          {/* Add more sections here as you build them */}
          {/* <Features /> */}
          {/* <Testimonials /> */}
          {/* <CTASection /> */}
        </main>
        <SectionDivider />
      </div>
      <div className="lg:px-38">
        <Footer />
      </div>
    </div>
  );
}
