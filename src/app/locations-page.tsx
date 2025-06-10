"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import locationData from "@/data/locations_billboard.json";
import { useState, useEffect } from "react";
import {
  Search,
  Filter,
  Star,
  MapPin,
  Users,
  ArrowRight,
  Sparkles,
  Eye,
  DollarSign,
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
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-pink-200/20 to-orange-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-emerald-200/25 to-teal-200/25 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          ></div>
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) rotate(120deg);
          }
          66% {
            transform: translateY(10px) rotate(240deg);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.6s ease-out forwards;
        }

        .shimmer {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }

        .stagger-1 {
          animation-delay: 0.1s;
        }
        .stagger-2 {
          animation-delay: 0.2s;
        }
        .stagger-3 {
          animation-delay: 0.3s;
        }
        .stagger-4 {
          animation-delay: 0.4s;
        }
        .stagger-5 {
          animation-delay: 0.5s;
        }
        .stagger-6 {
          animation-delay: 0.6s;
        }
      `}</style>

      <div className="relative z-10 py-12 pt-36">
        {/* Header Section */}
        <div
          className={`text-center mb-16 px-4 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full border border-white/20 shadow-lg mb-6">
            <Sparkles className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">
              Premium Billboard Locations
            </span>
          </div>

          <h1 className="text-4xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6 leading-tight">
            Billboard Locations
            <span className="block text-2xl md:text-4xl font-normal text-gray-600 mt-2">
              ({filteredLocations.length} available)
            </span>
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Discover premium billboard advertising locations in the world's most
            iconic destinations
          </p>
        </div>

        {/* Search and Filter Section */}
        <div
          className={`max-w-4xl mx-auto px-4 mb-12 transition-all duration-1000 delay-200 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search Bar */}
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search locations, cities, or tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 placeholder-gray-500"
                />
              </div>

              {/* Filter Button */}
              <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <Filter className="w-5 h-5" />
                <span className="font-medium">Filters</span>
              </button>
            </div>
          </div>
        </div>

        {/* Locations Grid */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredLocations.map((location: LocationCard, index) => (
              <div
                key={location.id}
                className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: `${300 + index * 100}ms` }}
                onMouseEnter={() => setHoveredCard(location.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Card className="bg-white/80 backdrop-blur-sm relative group hover:shadow-2xl hover:shadow-blue-500/10 border border-white/20 w-full h-auto transition-all duration-500 hover:scale-105 hover:bg-white/90 overflow-hidden">
                  {/* Featured Badge */}
                  {location.featured && (
                    <div className="absolute -top-2 -right-2 z-20">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                        <Star className="w-3 h-3 fill-current" />
                        Featured
                      </div>
                    </div>
                  )}

                  {/* Location Image */}
                  <div className="relative overflow-hidden">
                    <Link href={`/courses/${location.id}`}>
                      <div className="relative overflow-hidden group">
                        <Image
                          src={
                            location.image ||
                            "/placeholder.svg?height=300&width=400"
                          }
                          height={300}
                          width={400}
                          className="h-48 w-full object-cover transition-all duration-500 group-hover:scale-110"
                          alt={`${location.name} billboard location`}
                          priority={location.featured}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-gray-900 font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0">
                            <span>View Location</span>
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>

                  <CardHeader className="pb-2">
                    {/* Title */}
                    <CardTitle className="text-xl">
                      <Link
                        href={`/locations/${location.slug}`}
                        className="group"
                      >
                        <span className="group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                          {location.name}
                        </span>
                      </Link>
                    </CardTitle>

                    {/* City */}
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4 text-blue-500" />
                      <span>{location.city}</span>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Description */}
                    <CardDescription className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                      {location.description}
                    </CardDescription>

                    {/* Location Stats */}
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        <span>{formatTraffic(location.dailyTraffic)}/day</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{location.numberOfBoards} boards</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        <span>{location.primaryType}</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {location.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>

                  {/* Action Buttons */}
                  <CardFooter className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <Link
                      href={`/billboard/${location.id}`}
                      className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-300 text-sm font-medium"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-xl text-sm font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2">
                      <DollarSign className="w-4 h-4" />
                      <span>{location.priceRange}</span>
                    </button>
                  </CardFooter>

                  {/* Shimmer Effect on Hover */}
                  {hoveredCard === location.id && (
                    <div className="absolute inset-0 shimmer rounded-2xl pointer-events-none"></div>
                  )}
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* No Results Message */}
        {filteredLocations.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full flex items-center justify-center">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              No locations found
            </h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search terms or browse all locations
            </p>
            <button
              onClick={() => setSearchTerm("")}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105"
            >
              Clear Search
            </button>
          </div>
        )}

        {/* Bottom CTA Section */}
        <div
          className={`max-w-4xl mx-auto px-4 mt-20 transition-all duration-1000 delay-500 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Launch Your Campaign?
              </h2>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Connect with millions of potential customers through our premium
                billboard locations worldwide
              </p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
