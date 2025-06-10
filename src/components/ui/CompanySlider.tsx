"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface CompanyLogo {
  name: string;
  color: string;
  width: number;
  height: number;
}

const CompanySlider = () => {
  const [isMobile, setIsMobile] = useState(false);

  const companyLogos: CompanyLogo[] = [
    {
      name: "Aditya Birla Hospital",
      color: "/logos/adityaBirla.png",
      width: 120,
      height: 40,
    },
    {
      name: "Jevan Jyoti Hospital",
      color: "/logos/jeevanJyoti.png",
      width: 120,
      height: 40,
    },
    {
      name: "Dominos",
      color: "/logos/dominos.png",
      width: 120,
      height: 40,
    },
    
    { name: "KFC", color: "/logos/Kfc.png", width: 120, height: 40 },
    {
      name: "Swiggy",
      color: "/logos/swiggy.png",
      width: 120,
      height: 40,
    },
    {
      name: "Nitro Fitness",
      color: "/logos/NitroFit.png",
      width: 120,
      height: 40,
    },
    {
      name: "Golds Gym",
      color: "/logos/goldsGym.png",
      width: 120,
      height: 40,
    },
  ];

  const infiniteLogos = [...companyLogos, ...companyLogos, ...companyLogos];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="py-12 md:py-16 overflow-hidden bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h3 className="text-blue-600 text-sm md:text-base font-semibold uppercase tracking-wider mb-2">
            Our Partners
          </h3>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
            Trusted by Industry Leaders
          </h2>
          <div className="w-20 h-1 bg-blue-600/50 mx-auto mt-4 rounded-full" />
        </div>

        <div className="relative group">
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

          <div
            className="flex overflow-hidden"
            style={{ paddingTop: "24px", paddingBottom: "24px" }} // Extra vertical padding
          >
            <div
              className="flex items-center gap-6 md:gap-10 animate-marquee group-hover:[animation-play-state:paused]"
              onTouchStart={(e) =>
                (e.currentTarget.style.animationPlayState = "paused")
              }
              onTouchEnd={(e) =>
                (e.currentTarget.style.animationPlayState = "running")
              }
            >
              {infiniteLogos.map((logo, index) => (
                <div
                  key={`${logo.name}-${index}`}
                  className="relative flex-shrink-0 flex items-center justify-center"
                  style={{
                    minWidth: `${isMobile ? logo.width * 0.8 : logo.width}px`,
                    height: `${isMobile ? logo.height * 0.8 + 40 : logo.height + 40}px`, // Includes space above/below logo
                  }}
                >
                  <Image
                    src={logo.color}
                    alt={`${logo.name} logo`}
                    width={isMobile ? logo.width * 0.8 : logo.width}
                    height={isMobile ? logo.height * 0.8 : logo.height}
                    loading="lazy"
                    title={logo.name}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-marquee {
          animation: marquee 20s linear infinite;
        }

        @media (max-width: 768px) {
          .animate-marquee {
            animation-duration: 15s;
          }
        }
      `}</style>
    </section>
  );
};

export default CompanySlider;
