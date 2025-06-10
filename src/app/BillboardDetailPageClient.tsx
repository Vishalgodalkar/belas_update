// "use client";

// import {
//   MapPin,
//   Eye,
//   Users,
//   Compass,
//   Camera,
//   ChevronLeft,
//   ChevronRight,
//   X,
//   Play,
//   Maximize2,
//   Navigation,
//   BarChart3,
//   TrendingUp,
//   Clock,
//   Target,
//   Zap,
//   ArrowRight,
// } from "lucide-react";
// import { useState, useEffect, useRef } from "react";
// import { ShineBorder } from "@/components/magicui/shine-border";

// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   LineChart,
//   Line,
//   PieChart,
//   Pie,
//   Cell,
//   AreaChart,
//   Area,
//   Legend,
// } from "recharts";

// interface Board {
//   id: number;
//   name: string;
//   location: {
//     city: string;
//     area: string;
//     address: string;
//     lat: number;
//     lng: number;
//     streetViewUrl: string;
//   };
//   specs: {
//     size: string;
//     type: string;
//     elevation: string;
//     lighting: string;
//     rotationInterval: string;
//     orientation: string;
//   };
//   metrics: {
//     footfall: {
//       daily: number;
//       weekly: number;
//       peakHours: string[];
//     };
//     impressions: {
//       daily: number;
//       monthly: number;
//       cpm: number;
//     };
//     visibility: {
//       day: {
//         distance: string;
//         obstructions: string;
//       };
//       night: {
//         distance: string;
//         illumination: string;
//       };
//       viewingAngles: number[];
//     };
//   };
//   media: {
//     images: string[];
//     panorama: string | null;
//   };
// }

// interface BillboardDetailPageProps {
//   params: {
//     id: string;
//   };
//   board: Board;
// }

// export default function BillboardDetailPageClient({
//   params,
//   board,
// }: BillboardDetailPageProps) {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [modalImageIndex, setModalImageIndex] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);
//   const [activeChart, setActiveChart] = useState("weekly");
//   const [animatedValues, setAnimatedValues] = useState({
//     dailyTraffic: 0,
//     impressions: 0,
//     cpm: 0,
//   });
//   const [mapHovered, setMapHovered] = useState(false);
//   const [activeSpec, setActiveSpec] = useState<number | null>(null);
//   const mapRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     setIsVisible(true);

//     // Animate counter values
//     const timer = setTimeout(() => {
//       setAnimatedValues({
//         dailyTraffic: board.metrics.footfall.daily,
//         impressions: board.metrics.impressions.daily,
//         cpm: board.metrics.impressions.cpm,
//       });
//     }, 500);

//     // Add scroll animation for map
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("map-animated");
//           }
//         });
//       },
//       { threshold: 0.2 },
//     );

//     if (mapRef.current) {
//       observer.observe(mapRef.current);
//     }

//     return () => {
//       clearTimeout(timer);
//       if (mapRef.current) {
//         observer.unobserve(mapRef.current);
//       }
//     };
//   }, [board]);

//   if (!board) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center animate-pulse">
//           <div className="w-24 h-24 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
//             <Eye className="w-12 h-12 text-red-500" />
//           </div>
//           <h1 className="text-2xl font-bold text-gray-900 mb-2">
//             Billboard Not Found
//           </h1>
//           <p className="text-gray-600 mb-6">
//             The requested billboard details are not available.
//           </p>
//           <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
//             View All Locations
//           </button>
//         </div>
//       </div>
//     );
//   }

//   const allImages = [...board.media.images];
//   if (board.media.panorama) {
//     allImages.push(board.media.panorama);
//   }

//   const nextImage = () => {
//     setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
//   };

//   const prevImage = () => {
//     setCurrentImageIndex(
//       (prev) => (prev - 1 + allImages.length) % allImages.length,
//     );
//   };

//   const openModal = (index: number) => {
//     setModalImageIndex(index);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   // Dynamic chart data with real-time simulation
//   const weeklyTrafficData = [
//     {
//       day: "Mon",
//       traffic: Math.floor(
//         board.metrics.footfall.daily * (0.8 + Math.random() * 0.1),
//       ),
//       impressions: Math.floor(
//         board.metrics.impressions.daily * (0.8 + Math.random() * 0.1),
//       ),
//     },
//     {
//       day: "Tue",
//       traffic: Math.floor(
//         board.metrics.footfall.daily * (0.9 + Math.random() * 0.1),
//       ),
//       impressions: Math.floor(
//         board.metrics.impressions.daily * (0.9 + Math.random() * 0.1),
//       ),
//     },
//     {
//       day: "Wed",
//       traffic: Math.floor(
//         board.metrics.footfall.daily * (1.1 + Math.random() * 0.1),
//       ),
//       impressions: Math.floor(
//         board.metrics.impressions.daily * (1.1 + Math.random() * 0.1),
//       ),
//     },
//     {
//       day: "Thu",
//       traffic: Math.floor(
//         board.metrics.footfall.daily * (1.2 + Math.random() * 0.1),
//       ),
//       impressions: Math.floor(
//         board.metrics.impressions.daily * (1.2 + Math.random() * 0.1),
//       ),
//     },
//     {
//       day: "Fri",
//       traffic: Math.floor(
//         board.metrics.footfall.daily * (1.4 + Math.random() * 0.1),
//       ),
//       impressions: Math.floor(
//         board.metrics.impressions.daily * (1.4 + Math.random() * 0.1),
//       ),
//     },
//     {
//       day: "Sat",
//       traffic: Math.floor(
//         board.metrics.footfall.daily * (1.6 + Math.random() * 0.1),
//       ),
//       impressions: Math.floor(
//         board.metrics.impressions.daily * (1.6 + Math.random() * 0.1),
//       ),
//     },
//     {
//       day: "Sun",
//       traffic: Math.floor(
//         board.metrics.footfall.daily * (1.3 + Math.random() * 0.1),
//       ),
//       impressions: Math.floor(
//         board.metrics.impressions.daily * (1.3 + Math.random() * 0.1),
//       ),
//     },
//   ];

//   const hourlyTrafficData = [
//     { hour: "6AM", traffic: Math.floor(board.metrics.footfall.daily * 0.02) },
//     { hour: "8AM", traffic: Math.floor(board.metrics.footfall.daily * 0.08) },
//     { hour: "10AM", traffic: Math.floor(board.metrics.footfall.daily * 0.12) },
//     { hour: "12PM", traffic: Math.floor(board.metrics.footfall.daily * 0.15) },
//     { hour: "2PM", traffic: Math.floor(board.metrics.footfall.daily * 0.13) },
//     { hour: "4PM", traffic: Math.floor(board.metrics.footfall.daily * 0.18) },
//     { hour: "6PM", traffic: Math.floor(board.metrics.footfall.daily * 0.22) },
//     { hour: "8PM", traffic: Math.floor(board.metrics.footfall.daily * 0.08) },
//     { hour: "10PM", traffic: Math.floor(board.metrics.footfall.daily * 0.02) },
//   ];

//   const visibilityData = [
//     { name: "Excellent", value: 45, color: "#10b981" },
//     { name: "Good", value: 35, color: "#3b82f6" },
//     { name: "Fair", value: 20, color: "#f59e0b" },
//   ];

//   const monthlyPerformanceData = [
//     {
//       month: "Jan",
//       impressions: Math.floor(board.metrics.impressions.monthly * 0.8),
//       revenue: Math.floor(
//         (board.metrics.impressions.monthly *
//           0.8 *
//           board.metrics.impressions.cpm) /
//           1000,
//       ),
//       engagement: 85,
//     },
//     {
//       month: "Feb",
//       impressions: Math.floor(board.metrics.impressions.monthly * 0.9),
//       revenue: Math.floor(
//         (board.metrics.impressions.monthly *
//           0.9 *
//           board.metrics.impressions.cpm) /
//           1000,
//       ),
//       engagement: 88,
//     },
//     {
//       month: "Mar",
//       impressions: Math.floor(board.metrics.impressions.monthly * 1.1),
//       revenue: Math.floor(
//         (board.metrics.impressions.monthly *
//           1.1 *
//           board.metrics.impressions.cpm) /
//           1000,
//       ),
//       engagement: 92,
//     },
//     {
//       month: "Apr",
//       impressions: Math.floor(board.metrics.impressions.monthly * 1.2),
//       revenue: Math.floor(
//         (board.metrics.impressions.monthly *
//           1.2 *
//           board.metrics.impressions.cpm) /
//           1000,
//       ),
//       engagement: 95,
//     },
//     {
//       month: "May",
//       impressions: Math.floor(board.metrics.impressions.monthly * 1.0),
//       revenue: Math.floor(
//         (board.metrics.impressions.monthly *
//           1.0 *
//           board.metrics.impressions.cpm) /
//           1000,
//       ),
//       engagement: 90,
//     },
//     {
//       month: "Jun",
//       impressions: Math.floor(board.metrics.impressions.monthly * 1.3),
//       revenue: Math.floor(
//         (board.metrics.impressions.monthly *
//           1.3 *
//           board.metrics.impressions.cpm) /
//           1000,
//       ),
//       engagement: 98,
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 opacity-30 z-0"></div>
//       <style jsx>{`
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes fadeInLeft {
//           from {
//             opacity: 0;
//             transform: translateX(-30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         @keyframes fadeInRight {
//           from {
//             opacity: 0;
//             transform: translateX(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         @keyframes slideIn {
//           from {
//             opacity: 0;
//             transform: scale(0.95);
//           }
//           to {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }

//         @keyframes countUp {
//           from {
//             opacity: 0;
//             transform: scale(0.8);
//           }
//           to {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }

//         @keyframes pulse {
//           0%,
//           100% {
//             transform: scale(1);
//           }
//           50% {
//             transform: scale(1.05);
//           }
//         }

//         @keyframes float {
//           0%,
//           100% {
//             transform: translateY(0);
//           }
//           50% {
//             transform: translateY(-10px);
//           }
//         }

//         @keyframes rotate {
//           from {
//             transform: rotate(0deg);
//           }
//           to {
//             transform: rotate(360deg);
//           }
//         }

//         @keyframes expandWidth {
//           from {
//             width: 0;
//             opacity: 0;
//           }
//           to {
//             width: 100%;
//             opacity: 1;
//           }
//         }

//         .animate-fade-in-up {
//           animation: fadeInUp 0.6s ease-out forwards;
//         }

//         .animate-fade-in-left {
//           animation: fadeInLeft 0.6s ease-out forwards;
//         }

//         .animate-fade-in-right {
//           animation: fadeInRight 0.6s ease-out forwards;
//         }

//         .animate-slide-in {
//           animation: slideIn 0.5s ease-out forwards;
//         }

//         .animate-count-up {
//           animation: countUp 0.8s ease-out forwards;
//         }

//         .animate-pulse-slow {
//           animation: pulse 3s ease-in-out infinite;
//         }

//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }

//         .animate-rotate {
//           animation: rotate 10s linear infinite;
//         }

//         .map-animated {
//           animation: expandWidth 1.2s ease-out forwards;
//         }

//         .stagger-1 {
//           animation-delay: 0.1s;
//         }
//         .stagger-2 {
//           animation-delay: 0.2s;
//         }
//         .stagger-3 {
//           animation-delay: 0.3s;
//         }
//         .stagger-4 {
//           animation-delay: 0.4s;
//         }
//         .stagger-5 {
//           animation-delay: 0.5s;
//         }
//         .stagger-6 {
//           animation-delay: 0.6s;
//         }
//       `}</style>

//       {/* Hero Header */}
//       <div className="bg-white mx-auto shadow-sm border-b border-gray-200">
//         <div className="container mx-auto px-4 py-8">
//           <div
//             className={`max-w-6xl mx-auto transition-all duration-1000 ${
//               isVisible ? "animate-fade-in-up" : "opacity-0"
//             }`}
//           >
//             <div className="flex flex-col items-center text-center pt-20 gap-3 mb-4">
//               <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center animate-pulse-slow">
//                 <Eye className="w-6 h-6 text-blue-600" />
//               </div>
//               <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
//                 Billboard Details
//               </span>
//             </div>
//             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight text-center">
//               {board.name}
//             </h1>
//             <div className="flex items-center justify-center gap-2 text-gray-600">
//               <MapPin className="w-5 h-5 text-blue-500 animate-pulse-slow" />
//               <span className="text-lg">
//                 {board.location.city} • {board.location.area}
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Media Gallery Section - Moved to Top */}
//       <section
//         className={`bg-white shadow-sm border-b border-gray-200 transition-all duration-1000 ${isVisible ? "animate-fade-in-up stagger-1" : "opacity-0"}`}
//       >
//         <div className="container mx-auto px-4 py-8">
//           <div className="flex items-center justify-between mb-6">
//             <div className="flex items-center gap-3">
//               <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center animate-float">
//                 <Camera className="w-5 h-5 text-blue-600" />
//               </div>
//               <h2 className="text-2xl font-bold text-gray-900">
//                 Media Gallery
//               </h2>
//             </div>
//             <div className="flex items-center gap-2 text-sm text-gray-500">
//               <span>
//                 {currentImageIndex + 1} of {allImages.length}
//               </span>
//             </div>
//           </div>

//           <div className="relative group">
//             {/* Main Image Display */}
//             <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-lg bg-gray-100">
//               <ShineBorder />
//               <img
//                 src={
//                   allImages[currentImageIndex] ||
//                   "/placeholder.svg?height=500&width=800"
//                 }
//                 alt={`${board.name} view ${currentImageIndex + 1}`}
//                 className="w-full h-full object-cover transition-all duration-500 hover:scale-105 cursor-pointer"
//                 onClick={() => openModal(currentImageIndex)}
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

//               {/* View Full Size Button */}
//               <button
//                 onClick={() => openModal(currentImageIndex)}
//                 className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-900 px-4 py-2 rounded-lg font-medium transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 shadow-lg"
//               >
//                 <div className="flex items-center gap-2">
//                   <Maximize2 className="w-4 h-4" />
//                   View Full Size
//                 </div>
//               </button>

//               {/* Navigation Arrows */}
//               <button
//                 onClick={prevImage}
//                 className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 shadow-lg"
//               >
//                 <ChevronLeft className="w-6 h-6" />
//               </button>
//               <button
//                 onClick={nextImage}
//                 className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 shadow-lg"
//               >
//                 <ChevronRight className="w-6 h-6" />
//               </button>

//               {/* Image Type Badge */}
//               {currentImageIndex === allImages.length - 1 &&
//                 board.media.panorama && (
//                   <div className="absolute bottom-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2 animate-pulse-slow">
//                     <span className="text-xs">360°</span>
//                     Panoramic View
//                   </div>
//                 )}
//             </div>

//             {/* Thumbnail Navigation */}
//             <div className="flex gap-3 mt-6 overflow-x-auto pb-2">
//               {allImages.map((image, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentImageIndex(index)}
//                   className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 ${
//                     currentImageIndex === index
//                       ? "ring-4 ring-blue-500 shadow-lg"
//                       : "ring-2 ring-gray-200 hover:ring-gray-300"
//                   }`}
//                 >
//                   <img
//                     src={image || "/placeholder.svg?height=80&width=80"}
//                     alt={`Thumbnail ${index + 1}`}
//                     className="w-full h-full object-cover"
//                   />
//                   {index === allImages.length - 1 && board.media.panorama && (
//                     <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
//                       <span className="text-white text-xs font-bold">360°</span>
//                     </div>
//                   )}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Image Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-slide-in">
//           <div className="relative max-w-7xl max-h-full">
//             <button
//               onClick={closeModal}
//               className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300 z-10 hover:scale-110"
//             >
//               <X className="w-6 h-6" />
//             </button>

//             <img
//               src={allImages[modalImageIndex] || "/placeholder.svg"}
//               alt={`${board.name} full size view`}
//               className="max-w-full max-h-full object-contain rounded-lg"
//             />

//             {/* Modal Navigation */}
//             {allImages.length > 1 && (
//               <>
//                 <button
//                   onClick={() =>
//                     setModalImageIndex(
//                       (prev) =>
//                         (prev - 1 + allImages.length) % allImages.length,
//                     )
//                   }
//                   className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
//                 >
//                   <ChevronLeft className="w-6 h-6" />
//                 </button>
//                 <button
//                   onClick={() =>
//                     setModalImageIndex((prev) => (prev + 1) % allImages.length)
//                   }
//                   className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
//                 >
//                   <ChevronRight className="w-6 h-6" />
//                 </button>
//               </>
//             )}

//             <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/20 text-white px-4 py-2 rounded-lg">
//               {modalImageIndex + 1} of {allImages.length}
//             </div>
//           </div>
//         </div>
//       )}

//       <div className="container mx-auto px-4 py-8">
//         {/* Key Metrics Cards */}
//         <div
//           className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 transition-all duration-1000 ${isVisible ? "animate-fade-in-up stagger-2" : "opacity-0"}`}
//         >
//           <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105 group">
//             <div className="flex items-center justify-between mb-4">
//               <Users className="w-8 h-8 text-blue-600 group-hover:animate-pulse" />
//               <span className="text-gray-500 text-sm font-medium">
//                 Daily Traffic
//               </span>
//             </div>
//             <div className="text-3xl font-bold text-gray-900 mb-1 animate-count-up">
//               {(animatedValues.dailyTraffic / 1000).toFixed(1)}K
//             </div>
//             <div className="text-gray-500 text-sm">
//               {board.metrics.footfall.weekly.toLocaleString()} weekly
//             </div>
//             <div className="mt-3 flex items-center text-green-600 text-sm">
//               <TrendingUp className="w-4 h-4 mr-1" />
//               +12% from last month
//             </div>
//           </div>

//           <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105 group">
//             <div className="flex items-center justify-between mb-4">
//               <Eye className="w-8 h-8 text-green-600 group-hover:animate-pulse" />
//               <span className="text-gray-500 text-sm font-medium">
//                 Impressions
//               </span>
//             </div>
//             <div className="text-3xl font-bold text-gray-900 mb-1 animate-count-up">
//               {(animatedValues.impressions / 1000).toFixed(1)}K
//             </div>
//             <div className="text-gray-500 text-sm">
//               ${animatedValues.cpm} CPM
//             </div>
//             <div className="mt-3 flex items-center text-green-600 text-sm">
//               <TrendingUp className="w-4 h-4 mr-1" />
//               +8% from last month
//             </div>
//           </div>

//           <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105 group">
//             <div className="flex items-center justify-between mb-4">
//               <Clock className="w-8 h-8 text-purple-600 group-hover:animate-pulse" />
//               <span className="text-gray-500 text-sm font-medium">
//                 Peak Hours
//               </span>
//             </div>
//             <div className="text-2xl font-bold text-gray-900 mb-1">
//               {board.metrics.footfall.peakHours[0]} -{" "}
//               {board.metrics.footfall.peakHours[1]}
//             </div>
//             <div className="text-gray-500 text-sm">Highest traffic period</div>
//             <div className="mt-3 flex items-center text-blue-600 text-sm">
//               <Target className="w-4 h-4 mr-1" />
//               Prime advertising window
//             </div>
//           </div>
//         </div>

//         {/* Map Section - Full Width */}
//         <section
//           ref={mapRef}
//           className={`bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mb-8 transition-all duration-1000 ${
//             isVisible ? "animate-fade-in-up stagger-3" : "opacity-0"
//           }`}
//           onMouseEnter={() => setMapHovered(true)}
//           onMouseLeave={() => setMapHovered(false)}
//         >
//           <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
//             <div className="flex items-center justify-between">
//               <div className="flex items-center gap-3">
//                 <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center animate-float">
//                   <MapPin className="w-5 h-5 text-blue-600" />
//                 </div>
//                 <h2 className="text-2xl font-bold text-gray-900">
//                   Location & Map
//                 </h2>
//               </div>
//               <div className="flex items-center gap-2">
//                 <div className="text-sm text-gray-500 flex items-center">
//                   <span className="font-mono bg-gray-100 px-2 py-1 rounded text-xs mr-2">
//                     {board.location.lat.toFixed(4)},{" "}
//                     {board.location.lng.toFixed(4)}
//                   </span>
//                   <div
//                     className={`w-2 h-2 rounded-full bg-green-500 ${mapHovered ? "animate-pulse" : ""}`}
//                   ></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="p-0 overflow-hidden">
//             <div className="w-full h-[400px] bg-gray-50 relative">
//               <iframe
//                 src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d${board.location.lng}!3d${board.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMCcwOS4yIk4gNzPCsDU5JzA2LjQiVw!5e0!3m2!1sen!2sus!4v1635959385076!5m2!1sen!2sus&markers=color:red%7C${board.location.lat},${board.location.lng}`}
//                 width="100%"
//                 height="100%"
//                 style={{ border: 0 }}
//                 allowFullScreen
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 className="w-full h-full"
//               ></iframe>

//               {/* Map Overlay Controls */}
//               <div className="absolute bottom-4 left-4 right-4 flex justify-between">
//                 <div className="flex gap-2">
//                   <a
//                     href={`https://www.google.com/maps/dir/?api=1&destination=${board.location.lat},${board.location.lng}`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm hover:scale-105 transform duration-300 shadow-lg"
//                   >
//                     <Navigation className="w-4 h-4" />
//                     Get Directions
//                   </a>
//                   <a
//                     href={board.location.streetViewUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm hover:scale-105 transform duration-300 shadow-lg"
//                   >
//                     <Play className="w-4 h-4" />
//                     Street View
//                   </a>
//                 </div>
//                 <a
//                   href={`https://www.google.com/maps/@${board.location.lat},${board.location.lng},3a,75y,90t/data=!3m6!1e1!3m4!1s0x0:0x0!2e0!7i13312!8i6656`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-gray-900 px-4 py-2 rounded-lg font-medium transition-colors text-sm hover:scale-105 transform duration-300 shadow-lg"
//                 >
//                   <span className="text-sm">🌐</span>
//                   360° View
//                 </a>
//               </div>
//             </div>

//             {/* Address Information */}
//             <div className="p-6 bg-white border-t border-gray-100">
//               <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
//                     <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
//                     Address
//                   </h3>
//                   <p className="text-gray-800 font-medium">
//                     {board.location.address}
//                   </p>
//                   <p className="text-gray-600">{board.location.city}</p>
//                 </div>
//                 <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:border-blue-300 transition-colors duration-300">
//                   <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
//                     <span className="text-lg">🌐</span>
//                     Area Information
//                   </h4>
//                   <p className="text-gray-600 mb-2">{board.location.area}</p>
//                   <div className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
//                     <ArrowRight className="w-4 h-4" />
//                     <span className="text-sm font-medium">
//                       View area details
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
//           {/* Analytics Charts Section - 2 columns */}
//           <div className="xl:col-span-2 space-y-8">
//             {/* Dynamic Analytics Charts */}
//             <section
//               className={`bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-1000 ${isVisible ? "animate-fade-in-up stagger-4" : "opacity-0"}`}
//             >
//               <div className="bg-gray-50 px-8 py-6 border-b border-gray-200">
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-3">
//                     <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center animate-rotate">
//                       <BarChart3 className="w-5 h-5 text-blue-600" />
//                     </div>
//                     <h2 className="text-2xl font-bold text-gray-900">
//                       Performance Analytics
//                     </h2>
//                   </div>
//                   <div className="flex gap-2">
//                     <button
//                       onClick={() => setActiveChart("weekly")}
//                       className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
//                         activeChart === "weekly"
//                           ? "bg-blue-600 text-white scale-105"
//                           : "bg-gray-100 text-gray-600 hover:bg-gray-200"
//                       }`}
//                     >
//                       Weekly
//                     </button>
//                     <button
//                       onClick={() => setActiveChart("hourly")}
//                       className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
//                         activeChart === "hourly"
//                           ? "bg-blue-600 text-white scale-105"
//                           : "bg-gray-100 text-gray-600 hover:bg-gray-200"
//                       }`}
//                     >
//                       Hourly
//                     </button>
//                   </div>
//                 </div>
//               </div>
//               <div className="p-8">
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
//                   {/* Dynamic Chart Display */}
//                   <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 hover:shadow-lg transition-all duration-300 hover:border-blue-300">
//                     <h3 className="text-lg font-semibold text-gray-900 mb-4">
//                       {activeChart === "weekly"
//                         ? "Weekly Traffic & Impressions"
//                         : "Hourly Traffic Pattern"}
//                     </h3>
//                     <div className="h-64">
//                       <ResponsiveContainer width="100%" height="100%">
//                         {activeChart === "weekly" ? (
//                           <BarChart data={weeklyTrafficData}>
//                             <CartesianGrid
//                               strokeDasharray="3 3"
//                               stroke="#e2e8f0"
//                             />
//                             <XAxis dataKey="day" stroke="#64748b" />
//                             <YAxis stroke="#64748b" />
//                             <Tooltip
//                               contentStyle={{
//                                 backgroundColor: "white",
//                                 border: "1px solid #e2e8f0",
//                                 borderRadius: "8px",
//                                 boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
//                               }}
//                               animationDuration={300}
//                             />
//                             <Legend />
//                             <Bar
//                               dataKey="traffic"
//                               fill="#3b82f6"
//                               radius={[4, 4, 0, 0]}
//                               name="Traffic"
//                               animationDuration={1500}
//                             />
//                             <Bar
//                               dataKey="impressions"
//                               fill="#06b6d4"
//                               radius={[4, 4, 0, 0]}
//                               name="Impressions"
//                               animationDuration={1500}
//                             />
//                           </BarChart>
//                         ) : (
//                           <AreaChart data={hourlyTrafficData}>
//                             <CartesianGrid
//                               strokeDasharray="3 3"
//                               stroke="#e2e8f0"
//                             />
//                             <XAxis dataKey="hour" stroke="#64748b" />
//                             <YAxis stroke="#64748b" />
//                             <Tooltip
//                               contentStyle={{
//                                 backgroundColor: "white",
//                                 border: "1px solid #e2e8f0",
//                                 borderRadius: "8px",
//                                 boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
//                               }}
//                               animationDuration={300}
//                             />
//                             <Area
//                               type="monotone"
//                               dataKey="traffic"
//                               stroke="#10b981"
//                               fill="#10b981"
//                               fillOpacity={0.3}
//                               animationDuration={1500}
//                             />
//                           </AreaChart>
//                         )}
//                       </ResponsiveContainer>
//                     </div>
//                   </div>

//                   {/* Monthly Performance Trend */}
//                   <div className="bg-purple-50 rounded-xl p-6 border border-purple-100 hover:shadow-lg transition-all duration-300 hover:border-purple-300">
//                     <h3 className="text-lg font-semibold text-gray-900 mb-4">
//                       Monthly Performance Trend
//                     </h3>
//                     <div className="h-64">
//                       <ResponsiveContainer width="100%" height="100%">
//                         <LineChart data={monthlyPerformanceData}>
//                           <CartesianGrid
//                             strokeDasharray="3 3"
//                             stroke="#e2e8f0"
//                           />
//                           <XAxis dataKey="month" stroke="#64748b" />
//                           <YAxis stroke="#64748b" />
//                           <Tooltip
//                             contentStyle={{
//                               backgroundColor: "white",
//                               border: "1px solid #e2e8f0",
//                               borderRadius: "8px",
//                               boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
//                             }}
//                             animationDuration={300}
//                           />
//                           <Legend />
//                           <Line
//                             type="monotone"
//                             dataKey="impressions"
//                             stroke="#8b5cf6"
//                             strokeWidth={3}
//                             dot={{ fill: "#8b5cf6", strokeWidth: 2, r: 4 }}
//                             name="Impressions"
//                             animationDuration={1500}
//                           />
//                           <Line
//                             type="monotone"
//                             dataKey="revenue"
//                             stroke="#ec4899"
//                             strokeWidth={3}
//                             dot={{ fill: "#ec4899", strokeWidth: 2, r: 4 }}
//                             name="Revenue ($)"
//                             animationDuration={1500}
//                           />
//                         </LineChart>
//                       </ResponsiveContainer>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Visibility Analysis */}
//                 <div className="bg-amber-50 rounded-xl p-6 border border-amber-100 hover:shadow-lg transition-all duration-300 hover:border-amber-300">
//                   <h3 className="text-lg font-semibold text-gray-900 mb-4">
//                     Visibility Analysis
//                   </h3>
//                   <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                     <div className="h-64">
//                       <ResponsiveContainer width="100%" height="100%">
//                         <PieChart>
//                           <Pie
//                             data={visibilityData}
//                             cx="50%"
//                             cy="50%"
//                             innerRadius={60}
//                             outerRadius={100}
//                             paddingAngle={5}
//                             dataKey="value"
//                             animationDuration={1500}
//                           >
//                             {visibilityData.map((entry, index) => (
//                               <Cell key={`cell-${index}`} fill={entry.color} />
//                             ))}
//                           </Pie>
//                           <Tooltip
//                             contentStyle={{
//                               backgroundColor: "white",
//                               border: "1px solid #e2e8f0",
//                               borderRadius: "8px",
//                               boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
//                             }}
//                             animationDuration={300}
//                           />
//                         </PieChart>
//                       </ResponsiveContainer>
//                     </div>
//                     <div className="flex flex-col justify-center space-y-4">
//                       {visibilityData.map((item, index) => (
//                         <div
//                           key={index}
//                           className="flex items-center justify-between"
//                         >
//                           <div className="flex items-center gap-3">
//                             <div
//                               className="w-4 h-4 rounded-full"
//                               style={{ backgroundColor: item.color }}
//                             ></div>
//                             <span className="text-gray-700 font-medium">
//                               {item.name}
//                             </span>
//                           </div>
//                           <span className="text-gray-900 font-bold">
//                             {item.value}%
//                           </span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </section>

//             {/* Technical Specifications */}
//             <section
//               className={`bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-1000 ${isVisible ? "animate-fade-in-up stagger-5" : "opacity-0"}`}
//             >
//               <div className="bg-gray-50 px-8 py-6 border-b border-gray-200">
//                 <div className="flex items-center gap-3">
//                   <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center animate-float">
//                     <Compass className="w-5 h-5 text-purple-600" />
//                   </div>
//                   <h2 className="text-2xl font-bold text-gray-900">
//                     Technical Specifications
//                   </h2>
//                 </div>
//               </div>
//               <div className="p-8">
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                   {[
//                     {
//                       label: "Size",
//                       value: board.specs.size,
//                       icon: "📐",
//                       color: "bg-blue-50 border-blue-200",
//                     },
//                     {
//                       label: "Type",
//                       value: board.specs.type,
//                       icon: "🖥️",
//                       color: "bg-green-50 border-green-200",
//                     },
//                     {
//                       label: "Elevation",
//                       value: board.specs.elevation,
//                       icon: "📏",
//                       color: "bg-yellow-50 border-yellow-200",
//                     },
//                     {
//                       label: "Lighting",
//                       value: board.specs.lighting,
//                       icon: "💡",
//                       color: "bg-purple-50 border-purple-200",
//                     },
//                     {
//                       label: "Rotation",
//                       value: board.specs.rotationInterval,
//                       icon: "🔄",
//                       color: "bg-pink-50 border-pink-200",
//                     },
//                     {
//                       label: "Orientation",
//                       value: board.specs.orientation,
//                       icon: "🧭",
//                       color: "bg-indigo-50 border-indigo-200",
//                     },
//                   ].map((spec, index) => (
//                     <div
//                       key={index}
//                       className={`${spec.color} rounded-xl p-6 border hover:shadow-lg transition-all duration-300 hover:scale-105 ${
//                         activeSpec === index
//                           ? "ring-2 ring-offset-2 ring-blue-500"
//                           : ""
//                       }`}
//                       onMouseEnter={() => setActiveSpec(index)}
//                       onMouseLeave={() => setActiveSpec(null)}
//                     >
//                       <div className="flex items-center gap-3 mb-3">
//                         <span
//                           className={`text-2xl ${activeSpec === index ? "animate-pulse-slow" : ""}`}
//                         >
//                           {spec.icon}
//                         </span>
//                         <h3 className="font-semibold text-gray-900">
//                           {spec.label}
//                         </h3>
//                       </div>
//                       <p className="text-gray-700 font-medium">{spec.value}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </section>
//           </div>

//           {/* Sidebar */}
//           <div className="xl:col-span-1 space-y-8">
//             {/* Detailed Metrics */}
//             <section
//               className={`bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-1000 ${isVisible ? "animate-fade-in-up stagger-4" : "opacity-0"}`}
//             >
//               <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
//                 <div className="flex items-center gap-3">
//                   <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center animate-pulse-slow">
//                     <Eye className="w-4 h-4 text-emerald-600" />
//                   </div>
//                   <h2 className="text-xl font-bold text-gray-900">
//                     Detailed Metrics
//                   </h2>
//                 </div>
//               </div>
//               <div className="p-6">
//                 <div className="space-y-6">
//                   {/* Traffic Metrics */}
//                   <div className="bg-blue-50 rounded-xl p-4 border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-md">
//                     <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
//                       <Users className="w-5 h-5 text-blue-600" />
//                       Traffic Analysis
//                     </h3>
//                     <div className="space-y-3">
//                       <div className="flex justify-between items-center">
//                         <span className="text-gray-600">Daily Average</span>
//                         <span className="font-bold text-gray-900">
//                           {board.metrics.footfall.daily.toLocaleString()}
//                         </span>
//                       </div>
//                       <div className="flex justify-between items-center">
//                         <span className="text-gray-600">Weekly Total</span>
//                         <span className="font-bold text-gray-900">
//                           {board.metrics.footfall.weekly.toLocaleString()}
//                         </span>
//                       </div>
//                       <div className="pt-3 border-t border-blue-200">
//                         <span className="text-gray-600 text-sm">
//                           Peak Hours:{" "}
//                         </span>
//                         <span className="font-semibold text-blue-700">
//                           {board.metrics.footfall.peakHours.join(" - ")}
//                         </span>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Visibility Metrics */}
//                   <div className="space-y-4">
//                     <div className="bg-amber-50 rounded-xl p-4 border border-amber-100 hover:border-amber-300 transition-all duration-300 hover:shadow-md">
//                       <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
//                         <span className="text-xl animate-pulse-slow">☀️</span>
//                         Day Visibility
//                       </h3>
//                       <div className="space-y-2">
//                         <div className="flex justify-between items-center">
//                           <span className="text-gray-600">Distance</span>
//                           <span className="font-bold text-gray-900">
//                             {board.metrics.visibility.day.distance}
//                           </span>
//                         </div>
//                         <div className="flex justify-between items-center">
//                           <span className="text-gray-600">Obstructions</span>
//                           <span className="font-medium text-gray-700">
//                             {board.metrics.visibility.day.obstructions}
//                           </span>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-100 hover:border-indigo-300 transition-all duration-300 hover:shadow-md">
//                       <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
//                         <span className="text-xl animate-pulse-slow">🌙</span>
//                         Night Visibility
//                       </h3>
//                       <div className="space-y-2">
//                         <div className="flex justify-between items-center">
//                           <span className="text-gray-600">Distance</span>
//                           <span className="font-bold text-gray-900">
//                             {board.metrics.visibility.night.distance}
//                           </span>
//                         </div>
//                         <div className="flex justify-between items-center">
//                           <span className="text-gray-600">Illumination</span>
//                           <span className="font-medium text-gray-700">
//                             {board.metrics.visibility.night.illumination}
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Viewing Angles */}
//                   <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-md">
//                     <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
//                       <Compass className="w-5 h-5 text-gray-600 animate-rotate" />
//                       Viewing Angles
//                     </h3>
//                     <div className="flex flex-wrap gap-2">
//                       {board.metrics.visibility.viewingAngles.map(
//                         (angle, index) => (
//                           <span
//                             key={index}
//                             className="bg-white text-gray-800 px-3 py-1 rounded-full text-sm font-medium border border-gray-300 hover:bg-gray-100 transition-colors hover:scale-110 transform duration-300"
//                           >
//                             {angle}°
//                           </span>
//                         ),
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </section>

//             {/* Call to Action */}
//             <section
//               className={`bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-lg overflow-hidden transition-all duration-1000 ${isVisible ? "animate-fade-in-up stagger-6" : "opacity-0"}`}
//             >
//               <div className="p-6 text-white">
//                 <div className="flex items-center gap-3 mb-4">
//                   <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center animate-pulse-slow">
//                     <Zap className="w-5 h-5 text-white" />
//                   </div>
//                   <h2 className="text-xl font-bold">Ready to Book?</h2>
//                 </div>
//                 <p className="text-blue-100 mb-6">
//                   Secure this premium billboard location for your next
//                   advertising campaign.
//                 </p>
//                 <button className="w-full bg-white text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
//                   <span>Book Now</span>
//                   <ArrowRight className="w-4 h-4" />
//                 </button>
//               </div>
//             </section>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import {
  MapPin,
  Eye,
  Users,
  Compass,
  Camera,
  ChevronLeft,
  ChevronRight,
  X,
  Play,
  Maximize2,
  Navigation,
  BarChart3,
  TrendingUp,
  Clock,
  Target,
  Zap,
  ArrowRight,
  Globe,
  Ruler,
  Monitor,
  Move3D,
  Lightbulb,
  RotateCw,
  Sun,
  Moon,
  Cloud,
  CloudRain,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  Legend,
} from "recharts";

interface Board {
  id: number;
  name: string;
  location: {
    city: string;
    area: string;
    address: string;
    lat: number;
    lng: number;
    streetViewUrl: string;
  };
  specs: {
    size: string;
    type: string;
    elevation: string;
    lighting: string;
    rotationInterval: string;
    orientation: string;
  };
  metrics: {
    footfall: {
      daily: number;
      weekly: number;
      peakHours: string[];
    };
    impressions: {
      daily: number;
      monthly: number;
      cpm: number;
    };
    visibility: {
      day: {
        distance: string;
        obstructions: string;
      };
      night: {
        distance: string;
        illumination: string;
      };
      viewingAngles: number[];
    };
    media: {
      images: string[];
      panorama: string | null;
    };
  };
}

interface BillboardDetailPageProps {
  params: {
    id: string;
  };
  board: Board;
}

export default function BillboardDetailPageClient({
  params,
  board,
}: BillboardDetailPageProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [activeChart, setActiveChart] = useState("weekly");
  const [animatedValues, setAnimatedValues] = useState({
    dailyTraffic: 0,
    impressions: 0,
    cpm: 0,
  });
  const [mapHovered, setMapHovered] = useState(false);
  const [activeSpec, setActiveSpec] = useState<number | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);

    // Animate counter values
    const timer = setTimeout(() => {
      setAnimatedValues({
        dailyTraffic: board.metrics.footfall.daily,
        impressions: board.metrics.impressions.daily,
        cpm: board.metrics.impressions.cpm,
      });
    }, 500);

    // Add scroll animation for map
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("map-animated");
          }
        });
      },
      { threshold: 0.2 },
    );

    if (mapRef.current) {
      observer.observe(mapRef.current);
    }

    return () => {
      clearTimeout(timer);
      if (mapRef.current) {
        observer.unobserve(mapRef.current);
      }
    };
  }, [board]);

  if (!board) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center animate-pulse">
          <div className="w-24 h-24 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
            <Eye className="w-12 h-12 text-red-500" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Billboard Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            The requested billboard details are not available.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
            View All Locations
          </button>
        </div>
      </div>
    );
  }

  const allImages = [...board.media.images];
  if (board.media.panorama) {
    allImages.push(board.media.panorama);
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + allImages.length) % allImages.length,
    );
  };

  const openModal = (index: number) => {
    setModalImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Dynamic chart data with real-time simulation
  const weeklyTrafficData = [
    {
      day: "Mon",
      traffic: Math.floor(
        board.metrics.footfall.daily * (0.8 + Math.random() * 0.1),
      ),
      impressions: Math.floor(
        board.metrics.impressions.daily * (0.8 + Math.random() * 0.1),
      ),
    },
    {
      day: "Tue",
      traffic: Math.floor(
        board.metrics.footfall.daily * (0.9 + Math.random() * 0.1),
      ),
      impressions: Math.floor(
        board.metrics.impressions.daily * (0.9 + Math.random() * 0.1),
      ),
    },
    {
      day: "Wed",
      traffic: Math.floor(
        board.metrics.footfall.daily * (1.1 + Math.random() * 0.1),
      ),
      impressions: Math.floor(
        board.metrics.impressions.daily * (1.1 + Math.random() * 0.1),
      ),
    },
    {
      day: "Thu",
      traffic: Math.floor(
        board.metrics.footfall.daily * (1.2 + Math.random() * 0.1),
      ),
      impressions: Math.floor(
        board.metrics.impressions.daily * (1.2 + Math.random() * 0.1),
      ),
    },
    {
      day: "Fri",
      traffic: Math.floor(
        board.metrics.footfall.daily * (1.4 + Math.random() * 0.1),
      ),
      impressions: Math.floor(
        board.metrics.impressions.daily * (1.4 + Math.random() * 0.1),
      ),
    },
    {
      day: "Sat",
      traffic: Math.floor(
        board.metrics.footfall.daily * (1.6 + Math.random() * 0.1),
      ),
      impressions: Math.floor(
        board.metrics.impressions.daily * (1.6 + Math.random() * 0.1),
      ),
    },
    {
      day: "Sun",
      traffic: Math.floor(
        board.metrics.footfall.daily * (1.3 + Math.random() * 0.1),
      ),
      impressions: Math.floor(
        board.metrics.impressions.daily * (1.3 + Math.random() * 0.1),
      ),
    },
  ];

  const hourlyTrafficData = [
    { hour: "6AM", traffic: Math.floor(board.metrics.footfall.daily * 0.02) },
    { hour: "8AM", traffic: Math.floor(board.metrics.footfall.daily * 0.08) },
    { hour: "10AM", traffic: Math.floor(board.metrics.footfall.daily * 0.12) },
    { hour: "12PM", traffic: Math.floor(board.metrics.footfall.daily * 0.15) },
    { hour: "2PM", traffic: Math.floor(board.metrics.footfall.daily * 0.13) },
    { hour: "4PM", traffic: Math.floor(board.metrics.footfall.daily * 0.18) },
    { hour: "6PM", traffic: Math.floor(board.metrics.footfall.daily * 0.22) },
    { hour: "8PM", traffic: Math.floor(board.metrics.footfall.daily * 0.08) },
    { hour: "10PM", traffic: Math.floor(board.metrics.footfall.daily * 0.02) },
  ];

  const visibilityData = [
    { name: "Clear Weather", value: 45, color: "#10b981", icon: Sun },
    { name: "Cloudy", value: 35, color: "#3b82f6", icon: Cloud },
    { name: "Rainy/Snow", value: 20, color: "#f59e0b", icon: CloudRain },
  ];

  const monthlyPerformanceData = [
    {
      month: "Jan",
      impressions: Math.floor(board.metrics.impressions.monthly * 0.8),
      engagement: 85,
    },
    {
      month: "Feb",
      impressions: Math.floor(board.metrics.impressions.monthly * 0.9),
      engagement: 88,
    },
    {
      month: "Mar",
      impressions: Math.floor(board.metrics.impressions.monthly * 1.1),
      engagement: 92,
    },
    {
      month: "Apr",
      impressions: Math.floor(board.metrics.impressions.monthly * 1.2),
      engagement: 95,
    },
    {
      month: "May",
      impressions: Math.floor(board.metrics.impressions.monthly * 1.0),
      engagement: 90,
    },
    {
      month: "Jun",
      impressions: Math.floor(board.metrics.impressions.monthly * 1.3),
      engagement: 98,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-purple-200 opacity-30 z-0"></div>
      <style jsx>{`
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

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes countUp {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes expandWidth {
          from {
            width: 0;
            opacity: 0;
          }
          to {
            width: 100%;
            opacity: 1;
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-fade-in-left {
          animation: fadeInLeft 0.6s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: fadeInRight 0.6s ease-out forwards;
        }

        .animate-slide-in {
          animation: slideIn 0.5s ease-out forwards;
        }

        .animate-count-up {
          animation: countUp 0.8s ease-out forwards;
        }

        .animate-pulse-slow {
          animation: pulse 3s ease-in-out infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-rotate {
          animation: rotate 10s linear infinite;
        }

        .map-animated {
          animation: expandWidth 1.2s ease-out forwards;
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

      {/* Hero Header */}
      <div className="bg-white mx-auto shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <div
            className={`max-w-6xl mx-auto transition-all duration-1000 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <div className="flex flex-col items-center text-center pt-20 gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center animate-pulse-slow">
                <Eye className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
                Billboard Details
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight text-center">
              {board.name}
            </h1>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <MapPin className="w-5 h-5 text-blue-500 animate-pulse-slow" />
              <span className="text-lg">
                {board.location.city} • {board.location.area}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Media Gallery Section - Moved to Top */}
      <section
        className={`bg-white shadow-sm border-b border-gray-200 transition-all duration-1000 ${isVisible ? "animate-fade-in-up stagger-1" : "opacity-0"}`}
      >
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center animate-float">
                <Camera className="w-5 h-5 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Media Gallery
              </h2>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>
                {currentImageIndex + 1} of {allImages.length}
              </span>
            </div>
          </div>

          <div className="relative group">
            {/* Main Image Display */}
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-lg bg-gray-100">
              <img
                src={
                  allImages[currentImageIndex] ||
                  "/placeholder.svg?height=500&width=800" ||
                  "/placeholder.svg"
                }
                alt={`${board.name} view ${currentImageIndex + 1}`}
                className="w-full h-full object-cover transition-all duration-500 hover:scale-105 cursor-pointer"
                onClick={() => openModal(currentImageIndex)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* View Full Size Button */}
              <button
                onClick={() => openModal(currentImageIndex)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-900 px-4 py-2 rounded-lg font-medium transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <Maximize2 className="w-4 h-4" />
                  View Full Size
                </div>
              </button>

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 shadow-lg"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 shadow-lg"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image Type Badge */}
              {currentImageIndex === allImages.length - 1 &&
                board.media.panorama && (
                  <div className="absolute bottom-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2 animate-pulse-slow">
                    <span className="text-xs">360°</span>
                    Panoramic View
                  </div>
                )}
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex gap-3 mt-6 overflow-x-auto pb-2">
              {allImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 ${
                    currentImageIndex === index
                      ? "ring-4 ring-blue-500 shadow-lg"
                      : "ring-2 ring-gray-200 hover:ring-gray-300"
                  }`}
                >
                  <img
                    src={image || "/placeholder.svg?height=80&width=80"}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {index === allImages.length - 1 && board.media.panorama && (
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">360°</span>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-slide-in">
          <div className="relative max-w-7xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300 z-10 hover:scale-110"
            >
              <X className="w-6 h-6" />
            </button>

            <img
              src={allImages[modalImageIndex] || "/placeholder.svg"}
              alt={`${board.name} full size view`}
              className="max-w-full max-h-full object-contain rounded-lg"
            />

            {/* Modal Navigation */}
            {allImages.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setModalImageIndex(
                      (prev) =>
                        (prev - 1 + allImages.length) % allImages.length,
                    )
                  }
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={() =>
                    setModalImageIndex((prev) => (prev + 1) % allImages.length)
                  }
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/20 text-white px-4 py-2 rounded-lg">
              {modalImageIndex + 1} of {allImages.length}
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-8">
        {/* Key Metrics Cards */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 transition-all duration-1000 ${isVisible ? "animate-fade-in-up stagger-2" : "opacity-0"}`}
        >
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105 group">
            <div className="flex items-center justify-between mb-4">
              <Users className="w-8 h-8 text-blue-600 group-hover:animate-pulse" />
              <span className="text-gray-500 text-sm font-medium">
                Daily Traffic
              </span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1 animate-count-up">
              {(animatedValues.dailyTraffic / 1000).toFixed(1)}K
            </div>
            <div className="text-gray-500 text-sm">
              {board.metrics.footfall.weekly.toLocaleString()} weekly
            </div>
            <div className="mt-3 flex items-center text-green-600 text-sm">
              <TrendingUp className="w-4 h-4 mr-1" />
              +12% from last month
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105 group">
            <div className="flex items-center justify-between mb-4">
              <Eye className="w-8 h-8 text-green-600 group-hover:animate-pulse" />
              <span className="text-gray-500 text-sm font-medium">
                Impressions
              </span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1 animate-count-up">
              {(animatedValues.impressions / 1000).toFixed(1)}K
            </div>
            <div className="text-gray-500 text-sm">
              ${animatedValues.cpm} CPM
            </div>
            <div className="mt-3 flex items-center text-green-600 text-sm">
              <TrendingUp className="w-4 h-4 mr-1" />
              +8% from last month
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105 group">
            <div className="flex items-center justify-between mb-4">
              <Clock className="w-8 h-8 text-purple-600 group-hover:animate-pulse" />
              <span className="text-gray-500 text-sm font-medium">
                Peak Hours
              </span>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">
              {board.metrics.footfall.peakHours[0]} -{" "}
              {board.metrics.footfall.peakHours[1]}
            </div>
            <div className="text-gray-500 text-sm">Highest traffic period</div>
            <div className="mt-3 flex items-center text-blue-600 text-sm">
              <Target className="w-4 h-4 mr-1" />
              Prime advertising window
            </div>
          </div>
        </div>

        {/* Map Section - Full Width */}
        <section
          ref={mapRef}
          className={`bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mb-8 transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up stagger-3" : "opacity-0"
          }`}
          onMouseEnter={() => setMapHovered(true)}
          onMouseLeave={() => setMapHovered(false)}
        >
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center animate-float">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Location & Map
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-sm text-gray-500 flex items-center">
                  <span className="font-mono bg-gray-100 px-2 py-1 rounded text-xs mr-2">
                    {board.location.lat.toFixed(4)},{" "}
                    {board.location.lng.toFixed(4)}
                  </span>
                  <div
                    className={`w-2 h-2 rounded-full bg-green-500 ${mapHovered ? "animate-pulse" : ""}`}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-0 overflow-hidden">
            <div className="w-full h-[400px] bg-gray-50 relative">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d${board.location.lng}!3d${board.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMCcwOS4yIk4gNzPCsDU5JzA2LjQiVw!5e0!3m2!1sen!2sus!4v1635959385076!5m2!1sen!2sus&markers=color:red%7C${board.location.lat},${board.location.lng}`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>

              {/* Map Overlay Controls */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                <div className="flex gap-2">
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${board.location.lat},${board.location.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm hover:scale-105 transform duration-300 shadow-lg"
                  >
                    <Navigation className="w-4 h-4" />
                    Get Directions
                  </a>
                  <a
                    href={board.location.streetViewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm hover:scale-105 transform duration-300 shadow-lg"
                  >
                    <Play className="w-4 h-4" />
                    Street View
                  </a>
                </div>
                <a
                  href={`https://www.google.com/maps/@${board.location.lat},${board.location.lng},3a,75y,90t/data=!3m6!1e1!3m4!1s0x0:0x0!2e0!7i13312!8i6656`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-gray-900 px-4 py-2 rounded-lg font-medium transition-colors text-sm hover:scale-105 transform duration-300 shadow-lg"
                >
                  <Globe className="w-4 h-4" />
                  360° View
                </a>
              </div>
            </div>

            {/* Address Information */}
            <div className="p-6 bg-white border-t border-gray-100">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    Address
                  </h3>
                  <p className="text-gray-800 font-medium">
                    {board.location.address}
                  </p>
                  <p className="text-gray-600">{board.location.city}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:border-blue-300 transition-colors duration-300">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Globe className="w-4 h-4" />
                    Area Information
                  </h4>
                  <p className="text-gray-600 mb-2">{board.location.area}</p>
                  <div className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                    <ArrowRight className="w-4 h-4" />
                    <span className="text-sm font-medium">
                      View area details
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Analytics Charts Section - 2 columns */}
          <div className="xl:col-span-2 space-y-8">
            {/* Dynamic Analytics Charts */}
            <section
              className={`bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-1000 ${isVisible ? "animate-fade-in-up stagger-4" : "opacity-0"}`}
            >
              <div className="bg-gray-50 px-8 py-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center animate-rotate">
                      <BarChart3 className="w-5 h-5 text-blue-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      Performance Analytics
                    </h2>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setActiveChart("weekly")}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        activeChart === "weekly"
                          ? "bg-blue-600 text-white scale-105"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      Weekly
                    </button>
                    <button
                      onClick={() => setActiveChart("hourly")}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        activeChart === "hourly"
                          ? "bg-blue-600 text-white scale-105"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      Hourly
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  {/* Dynamic Chart Display */}
                  <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 hover:shadow-lg transition-all duration-300 hover:border-blue-300">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      {activeChart === "weekly"
                        ? "Weekly Traffic & Impressions"
                        : "Hourly Traffic Pattern"}
                    </h3>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        {activeChart === "weekly" ? (
                          <BarChart data={weeklyTrafficData}>
                            <CartesianGrid
                              strokeDasharray="3 3"
                              stroke="#e2e8f0"
                            />
                            <XAxis dataKey="day" stroke="#64748b" />
                            <YAxis stroke="#64748b" />
                            <Tooltip
                              contentStyle={{
                                backgroundColor: "white",
                                border: "1px solid #e2e8f0",
                                borderRadius: "8px",
                                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                              }}
                              animationDuration={300}
                            />
                            <Legend />
                            <Bar
                              dataKey="traffic"
                              fill="#3b82f6"
                              radius={[4, 4, 0, 0]}
                              name="Traffic"
                              animationDuration={1500}
                            />
                            <Bar
                              dataKey="impressions"
                              fill="#06b6d4"
                              radius={[4, 4, 0, 0]}
                              name="Impressions"
                              animationDuration={1500}
                            />
                          </BarChart>
                        ) : (
                          <AreaChart data={hourlyTrafficData}>
                            <CartesianGrid
                              strokeDasharray="3 3"
                              stroke="#e2e8f0"
                            />
                            <XAxis dataKey="hour" stroke="#64748b" />
                            <YAxis stroke="#64748b" />
                            <Tooltip
                              contentStyle={{
                                backgroundColor: "white",
                                border: "1px solid #e2e8f0",
                                borderRadius: "8px",
                                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                              }}
                              animationDuration={300}
                            />
                            <Area
                              type="monotone"
                              dataKey="traffic"
                              stroke="#10b981"
                              fill="#10b981"
                              fillOpacity={0.3}
                              animationDuration={1500}
                            />
                          </AreaChart>
                        )}
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Monthly Performance Trend */}
                  <div className="bg-purple-50 rounded-xl p-6 border border-purple-100 hover:shadow-lg transition-all duration-300 hover:border-purple-300">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Monthly Performance Trend
                    </h3>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={monthlyPerformanceData}>
                          <CartesianGrid
                            strokeDasharray="3 3"
                            stroke="#e2e8f0"
                          />
                          <XAxis dataKey="month" stroke="#64748b" />
                          <YAxis stroke="#64748b" />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: "white",
                              border: "1px solid #e2e8f0",
                              borderRadius: "8px",
                              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                            }}
                            animationDuration={300}
                          />
                          <Legend />
                          <Line
                            type="monotone"
                            dataKey="impressions"
                            stroke="#8b5cf6"
                            strokeWidth={3}
                            dot={{ fill: "#8b5cf6", strokeWidth: 2, r: 4 }}
                            name="Impressions"
                            animationDuration={1500}
                          />
                          <Line
                            type="monotone"
                            dataKey="engagement"
                            stroke="#ec4899"
                            strokeWidth={3}
                            dot={{ fill: "#ec4899", strokeWidth: 2, r: 4 }}
                            name="Engagement (%)"
                            animationDuration={1500}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>

                {/* Weather-Based Visibility */}
                <div className="bg-amber-50 rounded-xl p-6 border border-amber-100 hover:shadow-lg transition-all duration-300 hover:border-amber-300">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Weather-Based Visibility
                  </h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={visibilityData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={100}
                            paddingAngle={5}
                            dataKey="value"
                            animationDuration={1500}
                          >
                            {visibilityData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip
                            contentStyle={{
                              backgroundColor: "white",
                              border: "1px solid #e2e8f0",
                              borderRadius: "8px",
                              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                            }}
                            animationDuration={300}
                          />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="flex flex-col justify-center space-y-4">
                      {visibilityData.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between"
                        >
                          <div className="flex items-center gap-3">
                            <item.icon
                              className="w-4 h-4"
                              style={{ color: item.color }}
                            />
                            <span className="text-gray-700 font-medium">
                              {item.name}
                            </span>
                          </div>
                          <span className="text-gray-900 font-bold">
                            {item.value}%
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Technical Specifications */}
            <section
              className={`bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-1000 ${isVisible ? "animate-fade-in-up stagger-5" : "opacity-0"}`}
            >
              <div className="bg-gray-50 px-8 py-6 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center animate-float">
                    <Compass className="w-5 h-5 text-purple-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Technical Specifications
                  </h2>
                </div>
              </div>
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      label: "Size",
                      value: board.specs.size,
                      icon: Ruler,
                      color: "bg-blue-50 border-blue-200",
                    },
                    {
                      label: "Type",
                      value: board.specs.type,
                      icon: Monitor,
                      color: "bg-green-50 border-green-200",
                    },
                    {
                      label: "Elevation",
                      value: board.specs.elevation,
                      icon: Move3D,
                      color: "bg-yellow-50 border-yellow-200",
                    },
                    {
                      label: "Lighting",
                      value: board.specs.lighting,
                      icon: Lightbulb,
                      color: "bg-purple-50 border-purple-200",
                    },
                    {
                      label: "Rotation",
                      value: board.specs.rotationInterval,
                      icon: RotateCw,
                      color: "bg-pink-50 border-pink-200",
                    },
                    {
                      label: "Orientation",
                      value: board.specs.orientation,
                      icon: Compass,
                      color: "bg-indigo-50 border-indigo-200",
                    },
                  ].map((spec, index) => (
                    <div
                      key={index}
                      className={`${spec.color} rounded-xl p-6 border hover:shadow-lg transition-all duration-300 hover:scale-105 ${
                        activeSpec === index
                          ? "ring-2 ring-offset-2 ring-blue-500"
                          : ""
                      }`}
                      onMouseEnter={() => setActiveSpec(index)}
                      onMouseLeave={() => setActiveSpec(null)}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <spec.icon
                          className={`w-6 h-6 text-gray-600 ${activeSpec === index ? "animate-pulse-slow" : ""}`}
                        />
                        <h3 className="font-semibold text-gray-900">
                          {spec.label}
                        </h3>
                      </div>
                      <p className="text-gray-700 font-medium">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="xl:col-span-1 space-y-8">
            {/* Detailed Metrics */}
            <section
              className={`bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-1000 ${isVisible ? "animate-fade-in-up stagger-4" : "opacity-0"}`}
            >
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center animate-pulse-slow">
                    <Eye className="w-4 h-4 text-emerald-600" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">
                    Detailed Metrics
                  </h2>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  {/* Traffic Metrics */}
                  <div className="bg-blue-50 rounded-xl p-4 border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-md">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Users className="w-5 h-5 text-blue-600" />
                      Traffic Analysis
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Daily Average</span>
                        <span className="font-bold text-gray-900">
                          {board.metrics.footfall.daily.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Weekly Total</span>
                        <span className="font-bold text-gray-900">
                          {board.metrics.footfall.weekly.toLocaleString()}
                        </span>
                      </div>
                      <div className="pt-3 border-t border-blue-200">
                        <span className="text-gray-600 text-sm">
                          Peak Hours:{" "}
                        </span>
                        <span className="font-semibold text-blue-700">
                          {board.metrics.footfall.peakHours.join(" - ")}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Visibility Metrics */}
                  <div className="space-y-4">
                    <div className="bg-amber-50 rounded-xl p-4 border border-amber-100 hover:border-amber-300 transition-all duration-300 hover:shadow-md">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <Sun className="w-5 h-5 text-amber-500 animate-pulse-slow" />
                        Day Visibility
                      </h3>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Distance</span>
                          <span className="font-bold text-gray-900">
                            {board.metrics.visibility.day.distance}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Obstructions</span>
                          <span className="font-medium text-gray-700">
                            {board.metrics.visibility.day.obstructions}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-100 hover:border-indigo-300 transition-all duration-300 hover:shadow-md">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <Moon className="w-5 h-5 text-indigo-500 animate-pulse-slow" />
                        Night Visibility
                      </h3>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Distance</span>
                          <span className="font-bold text-gray-900">
                            {board.metrics.visibility.night.distance}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Illumination</span>
                          <span className="font-medium text-gray-700">
                            {board.metrics.visibility.night.illumination}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Viewing Angles */}
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-md">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Compass className="w-5 h-5 text-gray-600 animate-rotate" />
                      Viewing Angles
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {board.metrics.visibility.viewingAngles.map(
                        (angle, index) => (
                          <span
                            key={index}
                            className="bg-white text-gray-800 px-3 py-1 rounded-full text-sm font-medium border border-gray-300 hover:bg-gray-100 transition-colors hover:scale-110 transform duration-300"
                          >
                            {angle}°
                          </span>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section
              className={`bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-lg overflow-hidden transition-all duration-1000 ${isVisible ? "animate-fade-in-up stagger-6" : "opacity-0"}`}
            >
              <div className="p-6 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center animate-pulse-slow">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-xl font-bold">Ready to Book?</h2>
                </div>
                <p className="text-blue-100 mb-6">
                  Secure this premium billboard location for your next
                  advertising campaign.
                </p>
                <button className="w-full bg-white text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                  <span>Book Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
