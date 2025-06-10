"use client";

import Image from "next/image";
import { RetroGrid } from "@/components/magicui/retro-grid";
import CardSwap, { Card } from "./ui/cardSwap";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import RotatingText from "@/components/ui/RotatingText";
import { AuroraText } from "@/components/magicui/aurora-text";
import { HyperText } from "@/components/magicui/hyper-text";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden montserrat">
      {/* === BACKGROUND EFFECTS === */}
      <div className="absolute inset-0 overflow-hidden">
        <RetroGrid />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-blue-50 to-indigo-50 opacity-30 blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-gradient-to-br from-slate-50 to-gray-50 opacity-40 blur-3xl" />
      </div>

      {/* === LOGO === */}
      <div
        className="absolute top-8 left-[20%] transform -translate-x-[200px] z-50 
                      max-[1536px]:left-[26%] max-[1280px]:left-[22%] 
                      max-[1024px]:left-[18%] max-[768px]:left-1/2 
                      max-[768px]:transform max-[768px]:-translate-x-1/2 
                      max-[768px]:translate-y-0"
      >
        <Image
          src="/logos/belas.png"
          alt="Bela's Creation"
          width={550}
          height={250}
          className="w-auto h-24 max-[900px]:h-16 max-[750px]:h-14"
          priority
        />
      </div>

      {/* === MAIN CONTENT CONTAINER === */}
      <div className="container mx-auto px-8 py-20 pt-32">
        <div className="flex items-center justify-between min-h-[700px] max-[768px]:flex-col max-[768px]:gap-12">
          {/* === LEFT TEXT CONTENT === */}
          <div className="w-[45%] max-[768px]:w-full text-left space-y-8 relative z-10 pr-12 max-[768px]:pr-0">
            {/* HEADLINE */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-slate-900 tracking-tight">
                <span className="bg-gradient-to-r from-indigo-600 to-indigo-600 bg-clip-text text-transparent">
                  Belas <AuroraText>Creation</AuroraText>
                </span>
              </h1>

              {/* ROTATING TEXT */}
              <h2 className="text-[#9ACBD0] text-4xl font-semibold overflow-hidden">
                <RotatingText
                  texts={["Hoardings", "EV", "Cycles", "Digital Marketing!"]}
                  mainClassName=""
                  staggerFrom="last"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                />
              </h2>

              {/* TAGLINE */}
              <h3 className="text-xl text-slate-600 leading-relaxed font-medium">
                Advertising That Doesn't Just Shine,{" "}
                <PointerHighlight
                  rectangleClassName="bg-neutral-200 dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600"
                  pointerClassName="text-yellow-500"
                >
                  <span className="relative z-10">It Sells.</span>
                </PointerHighlight>
              </h3>

              {/* PARAGRAPH */}
              <HyperText>
                Big ideas, bigger impressions — we own the streets. From outdoor
                to digital, we turn attention into action.
              </HyperText>

              {/* INDUSTRY TRUST */}
              <div className="flex items-center gap-4 text-slate-500">
                <div className="h-px w-12 bg-gradient-to-r from-slate-300 to-transparent" />
                <span className="text-sm text-semibold font-medium tracking-wide uppercase">
                  Trusted by Industry Leaders
                </span>
              </div>
            </div>

            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="/courses">
                <InteractiveHoverButton>Hoardings</InteractiveHoverButton>
              </a>

              <a href="/courses">
                <InteractiveHoverButton>EV</InteractiveHoverButton>
              </a>

              <a href="/courses">
                <InteractiveHoverButton>Get in touch</InteractiveHoverButton>
              </a>
            </div>

            {/* CORE SERVICES */}
            <div className="space-y-4 pt-6">
              <h4 className="text-lg font-semibold text-slate-900">
                Our Core Services
              </h4>
              <div className="space-y-3 text-sm">
                {[
                  {
                    color: "bg-blue-500",
                    text: "Premium Billboard Advertising",
                  },
                  {
                    color: "bg-emerald-500",
                    text: "Sustainable EV Cycle Campaigns",
                  },
                  {
                    color: "bg-indigo-500",
                    text: "Complete Digital Marketing",
                  },
                ].map((service, idx) => (
                  <div className="flex items-center gap-3" key={idx}>
                    <div className={`w-3 h-3 ${service.color} rounded-full`} />
                    <span className="text-slate-600">{service.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Card Section - Fixed Width - Hidden on Mobile */}
          <div className="pt-20 hidden md:block w-[55%] max-[768px]:w-full relative z-10">
            <div className="relative w-full h-full flex items-center justify-center">
              <CardSwap
                cardDistance={50}
                verticalDistance={40}
                delay={4000}
                pauseOnHover={true}
                width={600}
                height={450}
                easing="linear"
              >
                {/* Card 1 - Billboard Advertising */}
                <Card className="!bg-white shadow-2xl rounded-3xl overflow-hidden !border-0 hover:shadow-3xl transition-all duration-300 w-full sm:w-[90%] mx-auto">
                  <div className="flex flex-col sm:flex-row h-full w-full bg-gradient-to-r from-white to-slate-50 rounded-3xl overflow-hidden">
                    {/* Left Image Section */}
                    <div className="sm:w-2/5 w-full relative bg-gradient-to-br from-slate-100 to-slate-200 rounded-t-3xl sm:rounded-l-3xl sm:rounded-tr-none overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative">
                          <div className="w-40 h-28 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-2xl relative overflow-hidden mx-auto sm:m-0">
                            <div className="absolute inset-3 bg-white rounded-lg flex items-center justify-center">
                              <div className="text-center">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full mx-auto mb-2 shadow-lg"></div>
                                <div className="text-sm font-bold text-slate-800">
                                  PREMIUM
                                </div>
                                <div className="text-xs text-slate-600">
                                  BILLBOARD
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-8 h-20 bg-gradient-to-b from-slate-700 to-slate-800 rounded-b-xl shadow-lg hidden sm:block"></div>
                          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-20 h-8 bg-slate-600 rounded-xl shadow-md hidden sm:block"></div>
                        </div>
                      </div>
                    </div>

                    {/* Right Content Section */}
                    <div className="sm:w-3/5 w-full p-8 sm:p-10 flex flex-col justify-between rounded-b-3xl sm:rounded-b-none sm:rounded-r-3xl">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">
                          Billboard Advertising
                        </h3>
                        <p className="text-slate-600 leading-relaxed mb-6">
                          Premium outdoor placements in high-traffic locations
                          with guaranteed visibility and measurable ROI for
                          maximum brand exposure across the city.
                        </p>
                        <ul className="text-sm text-slate-500 space-y-2">
                          <li>• Prime location targeting</li>
                          <li>• 24/7 visibility guarantee</li>
                          <li>• Performance analytics</li>
                          <li>• Custom design support</li>
                        </ul>
                      </div>
                      <div className="flex items-center justify-between mt-8">
                        <span className="px-4 py-2 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
                          High Impact
                        </span>
                        <span className="text-lg text-slate-900 font-bold">
                          ₹50,000+
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Card 2 - EV Cycle Advertising */}
                <Card className="!bg-white shadow-2xl rounded-3xl overflow-hidden !border-0 hover:shadow-3xl transition-all duration-300 w-full sm:w-[90%] mx-auto">
                  <div className="flex flex-col sm:flex-row h-full w-full bg-gradient-to-r from-white to-emerald-50 rounded-3xl overflow-hidden">
                    {/* Left Image Section */}
                    <div className="sm:w-2/5 w-full relative bg-gradient-to-br from-emerald-100 to-green-200 rounded-t-3xl sm:rounded-l-3xl sm:rounded-tr-none overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative">
                          <div className="w-40 h-24 relative mx-auto sm:m-0">
                            <div className="absolute top-8 left-8 w-32 h-10 bg-gradient-to-r from-emerald-600 to-green-600 rounded-full shadow-xl"></div>
                            <div className="absolute top-4 left-12 w-24 h-10 bg-gradient-to-r from-emerald-700 to-green-700 rounded-full shadow-lg"></div>
                            <div className="absolute top-12 left-4 w-12 h-12 bg-slate-800 rounded-full border-4 border-emerald-300 shadow-xl"></div>
                            <div className="absolute top-12 right-4 w-12 h-12 bg-slate-800 rounded-full border-4 border-emerald-300 shadow-xl"></div>
                            <div className="absolute top-0 right-8 w-5 h-5 bg-emerald-400 rounded-full animate-pulse shadow-lg"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Content Section */}
                    <div className="sm:w-3/5 w-full p-8 sm:p-10 flex flex-col justify-between rounded-b-3xl sm:rounded-b-none sm:rounded-r-3xl">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">
                          EV Cycle Advertising
                        </h3>
                        <p className="text-slate-600 leading-relaxed mb-6">
                          Sustainable mobile advertising with GPS tracking,
                          route optimization, and real-time campaign analytics
                          for eco-conscious brands.
                        </p>
                        <ul className="text-sm text-slate-500 space-y-2">
                          <li>• Custom route planning</li>
                          <li>• Real-time GPS tracking</li>
                          <li>• Daily circulation reports</li>
                        </ul>
                      </div>
                      <div className="flex items-center justify-between mt-8">
                        <span className="px-4 py-2 bg-emerald-100 text-emerald-700 text-sm font-semibold rounded-full">
                          Eco-Friendly
                        </span>
                        <span className="text-lg text-slate-900 font-bold">
                          ₹25,000+
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Card 3 - Digital Marketing */}
                <Card className="!bg-white shadow-2xl rounded-3xl overflow-hidden !border-0 hover:shadow-3xl transition-all duration-300 w-full sm:w-[90%] mx-auto">
                  <div className="flex flex-col sm:flex-row h-full w-full bg-gradient-to-r from-white to-blue-50 rounded-3xl overflow-hidden">
                    {/* Left Image Section */}
                    <div className="sm:w-2/5 w-full relative bg-gradient-to-br from-blue-100 to-indigo-200 rounded-t-3xl sm:rounded-l-3xl sm:rounded-tr-none overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="grid grid-cols-2 gap-4 mx-auto sm:m-0">
                          <div className="w-18 h-18 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-xl">
                            <div className="w-12 h-12 bg-white rounded-xl shadow-lg"></div>
                          </div>
                          <div className="w-18 h-18 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-xl">
                            <div className="w-10 h-10 border-3 border-white rounded-full"></div>
                          </div>
                          <div className="w-18 h-18 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl">
                            <div className="space-y-2">
                              <div className="w-12 h-2 bg-white rounded-full"></div>
                              <div className="w-10 h-2 bg-white rounded-full"></div>
                              <div className="w-12 h-2 bg-white rounded-full"></div>
                            </div>
                          </div>
                          <div className="w-18 h-18 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-2xl flex items-center justify-center shadow-xl">
                            <div className="w-10 h-10 bg-white rounded-lg transform rotate-45 shadow-lg"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Content Section */}
                    <div className="sm:w-3/5 w-full p-8 sm:p-10 flex flex-col justify-between rounded-b-3xl sm:rounded-b-none sm:rounded-r-3xl">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">
                          Digital Marketing
                        </h3>
                        <p className="text-slate-600 leading-relaxed mb-6">
                          Comprehensive digital strategies including social
                          media management, web design, and performance
                          marketing for complete online presence.
                        </p>
                        <ul className="text-sm text-slate-500 space-y-2">
                          <li>• Social media management</li>
                          <li>• Website design &amp; development</li>
                          <li>• Performance marketing</li>
                          <li>• Content creation</li>
                        </ul>
                      </div>
                      <div className="flex items-center justify-between mt-8">
                        <span className="px-4 py-2 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
                          Full-Service
                        </span>
                        <span className="text-lg text-slate-900 font-bold">
                          ₹15K/mo
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              </CardSwap>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
