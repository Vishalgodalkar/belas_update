"use client";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicSchoolContent = [
  {
    title: "Innovative Billboard Advertising",
    description:
      "Experience the power of strategically placed billboards that captivate audiences and create lasting impressions. Our billboard campaigns combine prime location selections, eye-catching designs, and dynamic messaging to maximize your brand visibility and ROI. Each billboard is optimized for day and night visibility, ensuring your message shines 24/7.",
    content: (
      <img
        src="/logos/billboard.svg"
        alt="Billboard Advertising"
        className="w-full h-full object-contain"
      />
    ),
  },
  {
    title: "Eco-Friendly EV Cycle Advertisements",
    description:
      "Harness the growing trend of sustainable marketing with our electric vehicle (EV) cycle ads. These mobile billboards traverse prime city routes daily, engaging audiences with dynamic visuals and real-time tracking. Our customizable routes and data-driven insights make EV cycle advertising a smart and eco-conscious choice for brands looking to make a meaningful impact.",
    content: (
      <img
        src="/logos/evCycle.svg"
        alt="EV Cycle Advertisement"
        className="w-full h-full object-contain"
      />
    ),
  },
  {
    title: "Comprehensive Social Media Management",
    description:
      "Elevate your brand presence online with our full-service social media management. From content creation—reels, posts, videos—to strategic campaign planning and lead generation, we help you connect with your target audience effectively. Collaborate with us to amplify your voice across platforms and build lasting digital relationships that drive business growth.",
    content: (
      <img
        src="/logos/socialMedia.svg"
        alt="Social Media Management"
        className="w-full h-full object-contain"
      />
    ),
  },
  {
    title: "Why Choose Belas Creations?",
    description:
      "We blend creativity with data-driven marketing strategies to deliver exceptional results. Our diverse advertising solutions, cutting-edge analytics, and client-focused approach ensure that every campaign is impactful and measurable. Partner with us for innovative advertising that moves with you, backed by unmatched expertise and commitment.",
    content: (
      <img
        src="/logos/Belas.svg"
        alt="Social Media Management"
        className="w-full h-full object-contain"
      />
    ),
  },
];

function WhyChooseUs() {
  return (
    <div className="">
      <StickyScroll content={musicSchoolContent} />
    </div>
  );
}

export default WhyChooseUs;
