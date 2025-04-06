import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import BenefitsSection from "@/components/BenefitsSection";
import ActionPlanSection from "@/components/ActionPlanSection";
import Testimonials from "@/components/Testimonials";
import FaqSection from "@/components/FaqSection";
import CourseBanner from "@/components/CourseBanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <BenefitsSection />
      <ActionPlanSection />
      <Testimonials />
      <FaqSection />
      <CourseBanner />
      <Footer />
    </div>
  );
};

export default Index;