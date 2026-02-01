import { Contact } from "@/components/Contact";
import { AboutMe } from "@/components/AboutMe";
import { OverwhelmSupport } from "@/components/OverhelmSupport";
import { ProfessionalBackground } from "@/components/ProfessionalBackground";
import { FAQ } from "@/components/FAQ";
import { Services } from "@/components/Services";
import { MyApproach } from "@/components/MyApproach";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import OurOffice from "@/components/OurOffice";
import { HeroSection } from "@/components/HeroSection";

export default function Home() {
  return (
    <>  
    <Header />    
    <main className="w-full">
      <HeroSection />
      <MyApproach />
      <Services />
      <AboutMe />
      <OverwhelmSupport />
      <OurOffice /> 
      <FAQ />
      <ProfessionalBackground />
      <Contact />
    </main>
    <Footer />
    </>

  );
}