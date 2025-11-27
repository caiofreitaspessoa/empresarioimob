import { HeroSection } from "@/components/HeroSection";
import { MethodSection } from "@/components/MethodSection";
import { PrivilegeSection } from "@/components/PrivilegeSection";
import { FormSection } from "@/components/FormSection";
import { AboutSection } from "@/components/AboutSection";
import { ForWhoSection } from "@/components/ForWhoSection";
import { ProcessSection } from "@/components/ProcessSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <MethodSection />
      <PrivilegeSection />
      <FormSection />
      <AboutSection />
      <ForWhoSection />
      <ProcessSection />
      <FinalCTASection />
      <ContactSection />
    </div>
  );
};

export default Index;
