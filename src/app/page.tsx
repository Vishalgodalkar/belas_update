import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import Testimonials from "@/components/Testimonials";
// import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";
import CompanySlider from "@/components/ui/CompanySlider";
import AnimatedCursor from "react-animated-cursor";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[o.96] antialiased bg-grid-white/[0.2]">
      <AnimatedCursor
        innerSize={10}
        outerSize={35}
        color="255, 90, 0" // vibrant orange for ad-agency branding
        outerAlpha={0.3}
        innerScale={0.8}
        outerScale={2.8}
        showSystemCursor={false}
        hasBlendMode={true}
        outerStyle={{
          mixBlendMode: "exclusion", // creates a striking visual over light/dark
          backgroundColor: "rgba(255, 90, 0, 0.3)", // soft orange glow
        }}
        innerStyle={{
          backgroundColor: "rgb(255, 90, 0)",
          border: "2px solid white",
        }}
        clickables={[
          "a",
          "input",
          "textarea",
          "button",
          "select",
          ".link",
          '[role="button"]',
          '[data-cursor="true"]',
        ]}
      />
      <HeroSection />
      <CompanySlider />
      <FeaturedCourses />
      <WhyChooseUs />
      <Testimonials />
      {/* <UpcomingWebinars /> */}
      <Instructors />
      <Footer />
    </main>
  );
}
