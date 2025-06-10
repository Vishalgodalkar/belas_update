"use client";

import Image from "next/image";
import Link from "next/link";
import locationData from "@/data/locations_billboard.json";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { useState, useEffect } from "react";
import {
  Search,
  Filter,
  MapPin,
  Users,
  ArrowRight,
  Sparkles,
  Eye,
  Target,
  TrendingUp,
  Globe,
  BarChart3,
} from "lucide-react";

interface LocationCard {
  id: number;
  name: string;
  slug: string;
  image: string;
  description: string;
  city: string;
  numberOfBoards: number;
  featured: boolean;
  dailyTraffic: number;
  priceRange: string;
  primaryType: string;
  tags: string[];
}

export default function LocationsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredLocations = locationData.locationCards.filter(
    (location: LocationCard) =>
      location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      location.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      location.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      location.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
  );

  const formatTraffic = (traffic: number) => {
    if (traffic >= 1000000) {
      return `${(traffic / 1000000).toFixed(1)}M`;
    } else if (traffic >= 1000) {
      return `${(traffic / 1000).toFixed(0)}K`;
    }
    return traffic.toString();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Stunning Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large Animated Gradient Orbs */}
        <div className="absolute -top-40 -left-40 w-[1000px] h-[1000px] bg-gradient-to-br from-blue-200/60 via-indigo-200/40 to-purple-200/30 rounded-full blur-3xl animate-pulse transform rotate-12"></div>
        <div className="absolute top-1/4 -right-40 w-[800px] h-[800px] bg-gradient-to-bl from-cyan-200/50 via-blue-200/30 to-indigo-200/20 rounded-full blur-3xl animate-pulse delay-1000 transform -rotate-12"></div>
        <div className="absolute -bottom-40 left-1/3 w-[900px] h-[900px] bg-gradient-to-tr from-indigo-200/50 via-purple-200/30 to-blue-200/20 rounded-full blur-3xl animate-pulse delay-2000 transform rotate-45"></div>

        {/* Medium Gradient Layers */}
        <div className="absolute top-1/3 left-1/5 w-[600px] h-[600px] bg-gradient-to-r from-emerald-100/60 to-teal-100/40 rounded-full blur-2xl animate-pulse delay-500 transform rotate-90"></div>
        <div className="absolute bottom-1/4 right-1/5 w-[700px] h-[700px] bg-gradient-to-l from-violet-100/50 to-purple-100/30 rounded-full blur-2xl animate-pulse delay-1500 transform -rotate-45"></div>

        {/* Smaller Accent Orbs */}
        <div className="absolute top-1/6 right-1/3 w-[300px] h-[300px] bg-gradient-to-br from-rose-100/70 to-pink-100/50 rounded-full blur-xl animate-pulse delay-3000"></div>
        <div className="absolute bottom-1/6 left-1/4 w-[400px] h-[400px] bg-gradient-to-tr from-amber-100/60 to-yellow-100/40 rounded-full blur-xl animate-pulse delay-2500"></div>

        {/* Sophisticated Grid Patterns */}
        <div className="absolute inset-0 opacity-[0.06]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.4) 1px, transparent 1px)
            `,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        {/* Diagonal Mesh Pattern */}
        <div className="absolute inset-0 opacity-[0.03] transform rotate-45">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
              linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)
            `,
              backgroundSize: "100px 100px",
            }}
          ></div>
        </div>

        {/* Dynamic Animated Lines */}
        <div className="absolute top-1/5 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400/40 to-transparent animate-pulse"></div>
        <div className="absolute top-2/5 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent animate-pulse delay-1000"></div>
        <div className="absolute top-3/5 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-400/25 to-transparent animate-pulse delay-2000"></div>
        <div className="absolute top-4/5 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400/35 to-transparent animate-pulse delay-3000"></div>

        {/* Vertical Accent Lines */}
        <div className="absolute top-0 left-1/5 w-0.5 h-full bg-gradient-to-b from-transparent via-blue-400/30 to-transparent animate-pulse delay-500"></div>
        <div className="absolute top-0 right-1/4 w-0.5 h-full bg-gradient-to-b from-transparent via-indigo-400/25 to-transparent animate-pulse delay-1500"></div>
        <div className="absolute top-0 left-3/4 w-0.5 h-full bg-gradient-to-b from-transparent via-purple-400/20 to-transparent animate-pulse delay-2500"></div>

        {/* Floating Geometric Masterpieces */}
        <div
          className="absolute top-1/6 right-1/5 w-40 h-40 border-2 border-blue-300/40 rounded-2xl transform rotate-45 animate-spin opacity-50"
          style={{ animationDuration: "30s" }}
        >
          <div className="absolute inset-4 border border-indigo-400/30 rounded-xl animate-pulse"></div>
          <div className="absolute inset-8 bg-gradient-to-br from-blue-200/20 to-indigo-200/10 rounded-lg"></div>
        </div>

        <div
          className="absolute top-3/4 left-1/6 w-32 h-32 border-2 border-purple-300/35 rounded-full animate-pulse opacity-40"
          style={{ animationDuration: "4s" }}
        >
          <div
            className="absolute inset-3 border border-violet-400/25 rounded-full animate-spin"
            style={{ animationDuration: "20s" }}
          ></div>
          <div className="absolute inset-6 bg-gradient-to-br from-purple-200/15 to-violet-200/10 rounded-full"></div>
        </div>

        <div
          className="absolute top-1/2 right-1/6 w-28 h-28 bg-gradient-to-br from-cyan-200/30 to-blue-200/20 rounded-2xl transform rotate-12 animate-bounce opacity-45"
          style={{ animationDuration: "5s" }}
        >
          <div className="absolute inset-2 border border-cyan-400/20 rounded-xl animate-pulse"></div>
        </div>

        {/* Complex Nested Shapes */}
        <div className="absolute top-1/4 left-1/3 w-48 h-48 opacity-20">
          <div
            className="w-full h-full border-2 border-emerald-300/50 rounded-3xl transform rotate-45 animate-spin"
            style={{ animationDuration: "25s" }}
          >
            <div className="absolute inset-6 border border-teal-400/40 rounded-2xl animate-pulse">
              <div className="absolute inset-4 bg-gradient-to-br from-emerald-200/20 to-teal-200/15 rounded-xl"></div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-1/3 left-2/3 w-44 h-44 opacity-25">
          <div
            className="w-full h-full border-2 border-rose-300/45 rounded-full animate-pulse"
            style={{ animationDuration: "6s" }}
          >
            <div
              className="absolute inset-6 border-2 border-pink-400/35 rounded-2xl transform rotate-45 animate-spin"
              style={{ animationDuration: "18s" }}
            >
              <div className="absolute inset-3 bg-gradient-to-br from-rose-200/20 to-pink-200/15 rounded-lg"></div>
            </div>
          </div>
        </div>

        {/* Hexagonal Constellation */}
        <div className="absolute top-2/3 right-1/3 w-36 h-36 opacity-30">
          <div
            className="w-full h-full border-2 border-amber-300/40 transform rotate-30 animate-pulse"
            style={{
              clipPath:
                "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              animationDuration: "7s",
            }}
          >
            <div className="absolute inset-4 bg-gradient-to-br from-amber-200/25 to-yellow-200/15"></div>
          </div>
        </div>

        {/* Triangular Elements */}
        <div className="absolute top-1/3 right-1/4 w-24 h-24 opacity-25">
          <div
            className="w-full h-full border-2 border-violet-400/35 animate-spin"
            style={{
              clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
              animationDuration: "15s",
            }}
          >
            <div className="absolute inset-2 bg-gradient-to-br from-violet-200/20 to-purple-200/15"></div>
          </div>
        </div>

        {/* Sophisticated Dot Matrix */}
        <div className="absolute inset-0 opacity-[0.04]">
          {[...Array(80)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-pulse"
              style={{
                width: `${2 + Math.random() * 3}px`,
                height: `${2 + Math.random() * 3}px`,
                backgroundColor: `hsl(${220 + Math.random() * 60}, 70%, 60%)`,
                left: `${(i % 10) * 10 + Math.random() * 5}%`,
                top: `${Math.floor(i / 10) * 12.5 + Math.random() * 5}%`,
                animationDelay: `${i * 0.1}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(35)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              width: `${3 + Math.random() * 6}px`,
              height: `${3 + Math.random() * 6}px`,
              background: `linear-gradient(45deg, 
                hsl(${200 + Math.random() * 80}, 60%, 70%), 
                hsl(${240 + Math.random() * 60}, 50%, 80%))`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 12}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
              boxShadow: `0 0 ${10 + Math.random() * 20}px rgba(99, 102, 241, 0.3)`,
            }}
          ></div>
        ))}
      </div>

      {/* Stunning Wave Patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1200 800"
            className="animate-pulse"
          >
            <defs>
              <pattern
                id="wave1"
                x="0"
                y="0"
                width="300"
                height="150"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M0,75 Q75,25 150,75 T300,75"
                  stroke="rgb(59, 130, 246)"
                  strokeWidth="3"
                  fill="none"
                  opacity="0.4"
                />
              </pattern>
              <pattern
                id="wave2"
                x="0"
                y="0"
                width="200"
                height="100"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M0,50 Q50,10 100,50 T200,50"
                  stroke="rgb(99, 102, 241)"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.3"
                />
              </pattern>
              <pattern
                id="wave3"
                x="0"
                y="0"
                width="250"
                height="120"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M0,60 Q62.5,20 125,60 T250,60"
                  stroke="rgb(139, 92, 246)"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.25"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#wave1)" />
            <rect
              width="100%"
              height="100%"
              fill="url(#wave2)"
              transform="translate(100, 50)"
            />
            <rect
              width="100%"
              height="100%"
              fill="url(#wave3)"
              transform="translate(50, 100)"
            />
          </svg>
        </div>
      </div>

      {/* Radial Gradient Overlays */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-blue-300/20 via-indigo-200/10 to-transparent rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-radial from-purple-300/25 via-violet-200/15 to-transparent rounded-full blur-2xl animate-pulse delay-2000"></div>
        <div className="absolute top-2/3 left-1/6 w-72 h-72 bg-gradient-radial from-cyan-300/20 via-blue-200/10 to-transparent rounded-full blur-2xl animate-pulse delay-3000"></div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px) scale(1) rotate(0deg);
            opacity: 0.4;
          }
          25% {
            transform: translateY(-50px) translateX(20px) scale(1.4)
              rotate(90deg);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-20px) translateX(-25px) scale(0.6)
              rotate(180deg);
            opacity: 0.3;
          }
          75% {
            transform: translateY(30px) translateX(15px) scale(1.3)
              rotate(270deg);
            opacity: 0.7;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(60px) rotateX(15deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotateX(0deg);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }

        .glass-professional {
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(28px);
          border: 1px solid rgba(255, 255, 255, 0.9);
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(24px);
          border: 1px solid rgba(255, 255, 255, 0.95);
        }

        .professional-glow {
          box-shadow:
            0 0 40px rgba(99, 102, 241, 0.2),
            0 0 80px rgba(99, 102, 241, 0.1),
            0 25px 50px rgba(203, 213, 225, 0.5);
        }

        .subtle-glow {
          box-shadow:
            0 0 25px rgba(99, 102, 241, 0.15),
            0 15px 35px rgba(203, 213, 225, 0.4);
        }

        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>

      <div className="relative z-10 py-12 pt-36">
        {/* Professional Header Section */}
        <div
          className={`text-center mb-20 px-4 transition-all duration-1200 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <div className="inline-flex items-center gap-4 glass-professional px-8 py-4 rounded-full subtle-glow mb-10">
            <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-full flex items-center justify-center">
              <Globe className="w-5 h-5 text-white" />
            </div>
            <span className="text-sm font-semibold text-slate-700 tracking-wide">
              PREMIUM BILLBOARD NETWORK
            </span>
            <div className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-slate-400 rounded-full animate-pulse"></div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-slate-600 via-slate-700 to-slate-600 bg-clip-text text-transparent mb-8 leading-tight tracking-tight">
            Strategic
            <span className="block bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-600 bg-clip-text text-transparent">
              Locations
            </span>
            <span className="block text-2xl md:text-4xl font-medium text-slate-500 mt-6 tracking-normal">
              {filteredLocations.length} Premium Advertising Opportunities
            </span>
          </h1>

          <p className="text-slate-600 max-w-4xl mx-auto text-xl leading-relaxed font-medium">
            Discover strategically positioned billboard locations in high-impact
            markets.
            <span className="text-indigo-600 font-semibold">
              {" "}
              Maximize your brand's market penetration
            </span>{" "}
            with our curated portfolio of premium advertising real estate.
          </p>
        </div>

        {/* Professional Search Section */}
        <div
          className={`max-w-6xl mx-auto px-4 mb-20 transition-all duration-1200 delay-300 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <div className="glass-professional rounded-3xl p-10 professional-glow">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Professional Search Bar */}
              <div className="relative flex-1">
                <div className="absolute left-6 top-1/2 transform -translate-y-1/2 text-indigo-500">
                  <Search className="w-6 h-6" />
                </div>
                <input
                  type="text"
                  placeholder="Search locations, markets, demographics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-16 pr-6 py-5 bg-white/80 border-2 border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500/50 transition-all duration-300 placeholder-slate-400 text-slate-700 font-medium text-lg backdrop-blur-sm"
                />
                <div className="absolute right-6 top-1/2 transform -translate-y-1/2">
                  <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-full flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Professional Filter Button */}
              <button className="flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-2xl transition-all duration-300 subtle-glow font-semibold text-lg">
                <Filter className="w-6 h-6" />
                <span>Advanced Analytics</span>
              </button>
            </div>

            {/* Enhanced Professional Analytics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12 pt-10 border-t border-slate-200/50">
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-100/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-2xl mx-auto mb-5 flex items-center justify-center shadow-lg shadow-indigo-500/25 transition-all duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-slate-700 mb-2 bg-gradient-to-r from-indigo-600 to-slate-700 bg-clip-text text-transparent">
                  2.5B+
                </div>
                <div className="text-slate-600 font-semibold text-sm tracking-wide uppercase">
                  Monthly Impressions
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  Verified reach across all platforms
                </div>
              </div>

              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-500 rounded-2xl mx-auto mb-5 flex items-center justify-center shadow-lg shadow-emerald-500/25 transition-all duration-300">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-slate-700 mb-2 bg-gradient-to-r from-emerald-600 to-slate-700 bg-clip-text text-transparent">
                  94%
                </div>
                <div className="text-slate-600 font-semibold text-sm tracking-wide uppercase">
                  Campaign Success
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  Client satisfaction & ROI achievement
                </div>
              </div>

              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-100/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-violet-500 rounded-2xl mx-auto mb-5 flex items-center justify-center shadow-lg shadow-purple-500/25 transition-all duration-300">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-slate-700 mb-2 bg-gradient-to-r from-purple-600 to-slate-700 bg-clip-text text-transparent">
                  150+
                </div>
                <div className="text-slate-600 font-semibold text-sm tracking-wide uppercase">
                  Global Markets
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  Premium locations worldwide
                </div>
              </div>

              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-orange-500 rounded-2xl mx-auto mb-5 flex items-center justify-center shadow-lg shadow-amber-500/25 transition-all duration-300">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-slate-700 mb-2 bg-gradient-to-r from-amber-600 to-slate-700 bg-clip-text text-transparent">
                  24/7
                </div>
                <div className="text-slate-600 font-semibold text-sm tracking-wide uppercase">
                  Brand Visibility
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  Continuous exposure guarantee
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Locations Grid */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredLocations.map((location: LocationCard, index) => (
              <div
                key={location.id}
                className={`transition-all duration-1200 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: `${500 + index * 200}ms` }}
              >
                <div className="glass-card relative w-full h-auto transition-all duration-700 overflow-hidden rounded-3xl">
                  {/* Professional Location Image */}
                  <div className="relative overflow-hidden">
                    <Link href={`/courses/${location.id}`}>
                      <div className="relative overflow-hidden">
                        <Image
                          src={
                            location.image ||
                            "/placeholder.svg?height=300&width=400" ||
                            "/placeholder.svg"
                          }
                          height={300}
                          width={400}
                          className="h-64 w-full object-cover transition-all duration-700"
                          alt={`${location.name} billboard location`}
                          priority={location.featured}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/30 via-indigo-500/10 to-transparent opacity-0 transition-opacity duration-500"></div>

                        {/* Professional Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500">
                          <div className="glass-professional px-8 py-4 rounded-2xl text-slate-700 font-bold flex items-center gap-3 transform translate-y-8 subtle-glow">
                            <span>View Analytics</span>
                            <ArrowRight className="w-5 h-5 transition-transform duration-300" />
                          </div>
                        </div>

                        {/* Professional Featured Badge */}
                        {location.featured && (
                          <div className="absolute top-6 left-6 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 backdrop-blur-sm">
                            <Sparkles className="w-3 h-3" />
                            Premium Location
                          </div>
                        )}
                      </div>
                    </Link>
                  </div>

                  {/* Professional Card Content */}
                  <div className="p-8">
                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-4">
                      <Link href={`/courses/${location.id}`}>
                        <span className="text-slate-700 transition-all duration-300">
                          {location.name}
                        </span>
                      </Link>
                    </h3>

                    {/* City with professional styling */}
                    <div className="flex items-center gap-3 text-sm text-slate-500 mb-6">
                      <div className="w-6 h-6 bg-gradient-to-r from-indigo-600 to-slate-500 rounded-lg flex items-center justify-center">
                        <MapPin className="w-3 h-3 text-white" />
                      </div>
                      <span className="font-medium">{location.city}</span>
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 mb-6">
                      {location.description}
                    </p>

                    {/* Professional Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-200/50">
                        <div className="flex items-center gap-2 text-xs text-indigo-600 font-semibold mb-2">
                          <Eye className="w-4 h-4" />
                          <span>Daily Reach</span>
                        </div>
                        <div className="text-slate-700 font-bold text-lg">
                          {formatTraffic(location.dailyTraffic)}
                        </div>
                        <div className="text-xs text-slate-500 mt-1">
                          impressions/day
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-4 rounded-xl border border-emerald-200/50">
                        <div className="flex items-center gap-2 text-xs text-emerald-600 font-semibold mb-2">
                          <Users className="w-4 h-4" />
                          <span>Available Boards</span>
                        </div>
                        <div className="text-slate-700 font-bold text-lg">
                          {location.numberOfBoards} boards
                        </div>
                        <div className="text-xs text-slate-500 mt-1">
                          premium locations
                        </div>
                      </div>
                    </div>

                    {/* Professional Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {location.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className={`px-3 py-2 text-xs rounded-full font-medium border ${
                            tagIndex === 0
                              ? "bg-blue-100 text-blue-700 border-blue-200"
                              : tagIndex === 1
                                ? "bg-purple-100 text-purple-700 border-purple-200"
                                : "bg-emerald-100 text-emerald-700 border-emerald-200"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Professional CTA */}
                    <Link
                      href={`/courses/${location.id}`}
                      className="w-full bg-gradient-to-r from-slate-600 to-slate-700 text-white py-4 px-6 rounded-xl font-semibold text-center transition-all duration-300 subtle-glow flex items-center justify-center gap-3"
                    >
                      <span>View Market Data</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional No Results Message */}
        {filteredLocations.length === 0 && (
          <div className="text-center py-24">
            <div className="w-40 h-40 mx-auto mb-10 bg-gradient-to-r from-slate-200 to-slate-300 rounded-full flex items-center justify-center professional-glow">
              <Search className="w-20 h-20 text-slate-500" />
            </div>
            <h3 className="text-4xl font-bold text-slate-700 mb-6">
              No locations match your criteria
            </h3>
            <p className="text-slate-500 mb-10 text-lg max-w-2xl mx-auto">
              Refine your search parameters or explore our complete portfolio of
              premium advertising locations
            </p>
            <button
              onClick={() => setSearchTerm("")}
              className="bg-gradient-to-r from-purple-600 to-violet-700 text-white px-10 py-4 rounded-2xl font-semibold transition-all duration-300 subtle-glow"
            >
              View All Locations
            </button>
          </div>
        )}

        {/* Creative Ad Agency CTA Section */}
        <div
          className={`max-w-6xl mx-auto px-4 mt-20 transition-all duration-1200 delay-800 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <div className="glass-professional rounded-[32px] p-10 professional-glow overflow-hidden relative">
            {/* Background accent elements */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-indigo-400/20 to-purple-400/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-gradient-to-tr from-blue-400/20 to-cyan-400/10 rounded-full blur-3xl"></div>

            <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
              {/* Left content */}
              <div className="md:w-2/3 text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-700 mb-4 leading-tight">
                  Ready to Dominate Your Market?
                </h2>
                <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                  Partner with industry leaders to execute high-impact
                  advertising campaigns across our premium billboard network.
                  <span className="font-semibold text-indigo-600">
                    {" "}
                    Drive measurable results
                  </span>{" "}
                  and establish market dominance.
                </p>
              </div>

              {/* Right buttons */}
              <div className="md:w-1/3 flex flex-col gap-4">
                <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-[20px] font-semibold transition-all duration-300 subtle-glow flex items-center justify-between">
                  <span className="text-lg">Launch Campaign</span>
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                </button>

                <button className="bg-white text-slate-700 px-8 py-4 rounded-[20px] font-semibold transition-all duration-300 border border-slate-200 flex items-center justify-between">
                  <span className="text-lg">Request Analytics</span>
                  <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center transition-all duration-300">
                    <BarChart3 className="w-5 h-5 text-indigo-600" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
