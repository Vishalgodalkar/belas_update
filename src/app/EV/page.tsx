// "use client";

// import { useState, useEffect } from "react";
// import serviceData from "@/data/evService.json";
// import Image from "next/image";
// import {
//   Route,
//   Clock,
//   MapPin,
//   Zap,
//   Monitor,
//   BarChart3,
//   Star,
//   Users,
//   CheckCircle,
//   PlayCircle,
//   Map,
//   Navigation,
//   Target,
//   ChevronLeft,
//   ChevronRight,
//   ImageIcon,
// } from "lucide-react";

// // Custom hook for number animation
// const useCountUp = (end: number, duration: number = 2000) => {
//   const [count, setCount] = useState(0);
//   const [hasStarted, setHasStarted] = useState(false);

//   useEffect(() => {
//     if (!hasStarted) return;

//     let startTime: number;
//     const animate = (currentTime: number) => {
//       if (!startTime) startTime = currentTime;
//       const progress = Math.min((currentTime - startTime) / duration, 1);

//       setCount(Math.floor(progress * end));

//       if (progress < 1) {
//         requestAnimationFrame(animate);
//       }
//     };

//     requestAnimationFrame(animate);
//   }, [end, duration, hasStarted]);

//   const startAnimation = () => setHasStarted(true);

//   return { count, startAnimation };
// };

// export default function EVCyclePage() {
//   const [activeFeature, setActiveFeature] = useState(0);
//   const [isVideoPlaying, setIsVideoPlaying] = useState(false);
//   const [selectedCity, setSelectedCity] = useState(0);
//   const [currentGalleryImage, setCurrentGalleryImage] = useState(0);
//   const [showImageView, setShowImageView] = useState(false);

//   // Animation counters for statistics
//   const totalCyclesCount = useCountUp(
//     parseInt(serviceData.statistics.totalCycles),
//   );
//   const citiesCoveredCount = useCountUp(serviceData.statistics.citiesCovered);
//   const dailyImpressionsCount = useCountUp(
//     Math.floor(serviceData.statistics.dailyImpressions / 1000),
//   );
//   const campaignsLaunchedCount = useCountUp(
//     serviceData.statistics.campaignsLaunched,
//   );
//   const clientSatisfactionCount = useCountUp(
//     serviceData.statistics.clientSatisfaction,
//   );

//   // Intersection Observer for triggering animations
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (
//             entry.isIntersecting &&
//             entry.target.id === "statistics-section"
//           ) {
//             totalCyclesCount.startAnimation();
//             citiesCoveredCount.startAnimation();
//             dailyImpressionsCount.startAnimation();
//             campaignsLaunchedCount.startAnimation();
//             clientSatisfactionCount.startAnimation();
//           }
//         });
//       },
//       { threshold: 0.5 },
//     );

//     const statsSection = document.getElementById("statistics-section");
//     if (statsSection) {
//       observer.observe(statsSection);
//     }

//     return () => observer.disconnect();
//   }, []);

//   const getFeatureIcon = (iconName: string) => {
//     const icons = {
//       route: Route,
//       clock: Clock,
//       location: MapPin,
//       zap: Zap,
//       monitor: Monitor,
//       analytics: BarChart3,
//     };
//     const IconComponent = icons[iconName as keyof typeof icons] || Route;
//     return <IconComponent className="w-6 h-6" />;
//   };

//   const nextGalleryImage = () => {
//     setCurrentGalleryImage((prev) => (prev + 1) % serviceData.gallery.length);
//   };

//   const prevGalleryImage = () => {
//     setCurrentGalleryImage(
//       (prev) =>
//         (prev - 1 + serviceData.gallery.length) % serviceData.gallery.length,
//     );
//   };

//   return (
//     <div className="min-h-screen bg-white text-gray-900 pt-20">
//       {" "}
//       {/* Added pt-20 for navbar spacing */}
//       {/* Hero Section */}
//       <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50">
//         {/* Animated Background Elements */}
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//           <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse"></div>
//           <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-pink-200/10 to-orange-200/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
//           <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-emerald-200/15 to-teal-200/15 rounded-full blur-3xl animate-pulse delay-2000"></div>
//         </div>

//         {/* Hero Content */}
//         <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
//           <div className="mb-8">
//             <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-6 py-2 rounded-full border border-gray-200 shadow-lg mb-6 hover:shadow-xl hover:scale-105 transition-all duration-300">
//               <Zap className="w-5 h-5 text-blue-600" />
//               <span className="text-sm font-medium text-gray-700">
//                 Smart Mobile Advertising
//               </span>
//             </div>

//             <h1 className="text-5xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent hover:scale-105 transition-transform duration-500">
//               {serviceData.serviceInfo.title}
//             </h1>

//             <p className="text-2xl md:text-3xl font-light text-blue-600 mb-4 italic hover:text-blue-700 transition-colors duration-300">
//               "{serviceData.serviceInfo.subtitle}"
//             </p>

//             <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed hover:text-gray-700 transition-colors duration-300">
//               {serviceData.serviceInfo.description}
//             </p>
//           </div>

//           {/* Hero Image/Video Section */}
//           <div className="relative max-w-4xl mx-auto mb-12">
//             <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200 shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-500 group">
//               {!isVideoPlaying && !showImageView ? (
//                 <div className="relative h-64 md:h-96 flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
//                   <div className="flex gap-4">
//                     <button
//                       onClick={() => setIsVideoPlaying(true)}
//                       className="group flex items-center gap-4 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-200 hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 hover:border-blue-300"
//                     >
//                       <PlayCircle className="w-6 h-6 text-blue-600 group-hover:text-blue-700 group-hover:scale-110 transition-all duration-300" />
//                       <span className="text-sm font-medium text-gray-800 group-hover:text-blue-700">
//                         Watch Demo
//                       </span>
//                     </button>
//                     <button
//                       onClick={() => setShowImageView(true)}
//                       className="group flex items-center gap-4 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-200 hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 hover:border-blue-300"
//                     >
//                       <ImageIcon className="w-6 h-6 text-blue-600 group-hover:text-blue-700 group-hover:scale-110 transition-all duration-300" />
//                       <span className="text-sm font-medium text-gray-800 group-hover:text-blue-700">
//                         View Gallery
//                       </span>
//                     </button>
//                   </div>
//                 </div>
//               ) : isVideoPlaying ? (
//                 <div className="relative">
//                   <video
//                     className="w-full h-64 md:h-96 object-cover"
//                     controls
//                     autoPlay
//                     src={serviceData.serviceInfo.videoUrl}
//                   >
//                     Your browser does not support the video tag.
//                   </video>
//                   <button
//                     onClick={() => setIsVideoPlaying(false)}
//                     className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-800 hover:bg-white transition-all duration-300 hover:scale-110"
//                   >
//                     Close
//                   </button>
//                 </div>
//               ) : (
//                 <div className="relative">
//                   <Image
//                     src={
//                       serviceData.serviceInfo.heroImage ||
//                       "/placeholder.svg?height=400&width=800" ||
//                       "/placeholder.svg"
//                     }
//                     alt="EV Cycle Hero"
//                     width={800}
//                     height={400}
//                     className="w-full h-64 md:h-96 object-cover group-hover:scale-110 transition-transform duration-500"
//                   />
//                   <button
//                     onClick={() => setShowImageView(false)}
//                     className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-800 hover:bg-white transition-all duration-300 hover:scale-110"
//                   >
//                     Close
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Enhanced CTA Button */}
//           <div className="flex justify-center">
//             <button className="relative group bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white px-12 py-5 rounded-2xl font-bold text-xl transition-all duration-500 hover:scale-110 shadow-2xl hover:shadow-blue-500/25 overflow-hidden">
//               {/* Animated background overlay */}
//               <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

//               {/* Button content */}
//               <div className="relative flex items-center gap-3">
//                 <Zap className="w-6 h-6 group-hover:rotate-12 group-hover:scale-125 transition-all duration-300" />
//                 <span className="group-hover:tracking-wider transition-all duration-300">
//                   Start Your Campaign
//                 </span>
//               </div>

//               {/* Glow effect */}
//               <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
//             </button>
//           </div>
//         </div>
//       </section>
//       {/* Statistics Section with Animated Numbers */}
//       <section id="statistics-section" className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
//             <div className="text-center group hover:scale-110 transition-all duration-300 hover:bg-white hover:shadow-xl rounded-2xl p-6">
//               <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:text-blue-700 transition-colors duration-300">
//                 {totalCyclesCount.count}+
//               </div>
//               <div className="text-gray-600 group-hover:text-gray-700">
//                 Active Cycles
//               </div>
//             </div>
//             <div className="text-center group hover:scale-110 transition-all duration-300 hover:bg-white hover:shadow-xl rounded-2xl p-6">
//               <div className="text-4xl font-bold text-indigo-600 mb-2 group-hover:text-indigo-700 transition-colors duration-300">
//                 {citiesCoveredCount.count}+
//               </div>
//               <div className="text-gray-600 group-hover:text-gray-700">
//                 Cities Covered
//               </div>
//             </div>
//             <div className="text-center group hover:scale-110 transition-all duration-300 hover:bg-white hover:shadow-xl rounded-2xl p-6">
//               <div className="text-4xl font-bold text-purple-600 mb-2 group-hover:text-purple-700 transition-colors duration-300">
//                 {dailyImpressionsCount.count}K+
//               </div>
//               <div className="text-gray-600 group-hover:text-gray-700">
//                 Daily Impressions
//               </div>
//             </div>
//             <div className="text-center group hover:scale-110 transition-all duration-300 hover:bg-white hover:shadow-xl rounded-2xl p-6">
//               <div className="text-4xl font-bold text-emerald-600 mb-2 group-hover:text-emerald-700 transition-colors duration-300">
//                 {campaignsLaunchedCount.count}+
//               </div>
//               <div className="text-gray-600 group-hover:text-gray-700">
//                 Campaigns Launched
//               </div>
//             </div>
//             <div className="text-center group hover:scale-110 transition-all duration-300 hover:bg-white hover:shadow-xl rounded-2xl p-6">
//               <div className="text-4xl font-bold text-rose-600 mb-2 group-hover:text-rose-700 transition-colors duration-300">
//                 {clientSatisfactionCount.count}%
//               </div>
//               <div className="text-gray-600 group-hover:text-gray-700">
//                 Client Satisfaction
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Gallery Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent hover:scale-105 transition-transform duration-500">
//               See It In Action
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto hover:text-gray-700 transition-colors duration-300">
//               Explore our mobile advertising solutions through real-world
//               examples
//             </p>
//           </div>

//           <div className="relative max-w-4xl mx-auto">
//             <div className="relative bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 group">
//               <Image
//                 src={
//                   serviceData.gallery[currentGalleryImage].image ||
//                   "/placeholder.svg?height=500&width=800" ||
//                   "/placeholder.svg"
//                 }
//                 alt={serviceData.gallery[currentGalleryImage].title}
//                 width={800}
//                 height={500}
//                 className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500"
//               />

//               {/* Enhanced Navigation Arrows */}
//               <button
//                 onClick={prevGalleryImage}
//                 className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-125 hover:shadow-xl"
//               >
//                 <ChevronLeft className="w-6 h-6 text-gray-700 hover:text-blue-600 transition-colors duration-300" />
//               </button>
//               <button
//                 onClick={nextGalleryImage}
//                 className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-125 hover:shadow-xl"
//               >
//                 <ChevronRight className="w-6 h-6 text-gray-700 hover:text-blue-600 transition-colors duration-300" />
//               </button>

//               {/* Image Info */}
//               <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
//                 <h3 className="text-white text-xl font-bold mb-2">
//                   {serviceData.gallery[currentGalleryImage].title}
//                 </h3>
//                 <p className="text-white/90 text-sm">
//                   {serviceData.gallery[currentGalleryImage].description}
//                 </p>
//               </div>
//             </div>

//             {/* Enhanced Gallery Thumbnails */}
//             <div className="flex justify-center gap-2 mt-6">
//               {serviceData.gallery.map((item, index) => (
//                 <button
//                   key={item.id}
//                   onClick={() => setCurrentGalleryImage(index)}
//                   className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-150 ${
//                     index === currentGalleryImage
//                       ? "bg-blue-600 shadow-lg shadow-blue-600/50"
//                       : "bg-gray-300 hover:bg-gray-400"
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Maps & Route Planning Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent hover:scale-105 transition-transform duration-500">
//               Smart Route Planning
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto hover:text-gray-700 transition-colors duration-300">
//               Design custom routes and target prime locations with our advanced
//               mapping technology
//             </p>
//           </div>

//           <div className="grid lg:grid-cols-3 gap-8 mb-12">
//             <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
//               <div className="flex items-center gap-4 mb-6">
//                 <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl text-white">
//                   <Map className="w-6 h-6" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-800">
//                   Interactive Maps
//                 </h3>
//               </div>
//               <p className="text-gray-600 mb-4">
//                 Visualize and customize your advertising routes with our
//                 interactive mapping interface.
//               </p>
//               <ul className="space-y-2 text-sm text-gray-500">
//                 <li className="flex items-center gap-2">
//                   <CheckCircle className="w-4 h-4 text-green-500" />
//                   Real-time traffic data
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <CheckCircle className="w-4 h-4 text-green-500" />
//                   Demographic overlays
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <CheckCircle className="w-4 h-4 text-green-500" />
//                   POI integration
//                 </li>
//               </ul>
//             </div>

//             <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
//               <div className="flex items-center gap-4 mb-6">
//                 <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl text-white">
//                   <Navigation className="w-6 h-6" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-800">
//                   Custom Routes
//                 </h3>
//               </div>
//               <p className="text-gray-600 mb-4">
//                 Create tailored routes that align with your campaign objectives
//                 and target audience.
//               </p>
//               <ul className="space-y-2 text-sm text-gray-500">
//                 <li className="flex items-center gap-2">
//                   <CheckCircle className="w-4 h-4 text-green-500" />
//                   Drag & drop planning
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <CheckCircle className="w-4 h-4 text-green-500" />
//                   Time-based scheduling
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <CheckCircle className="w-4 h-4 text-green-500" />
//                   Route optimization
//                 </li>
//               </ul>
//             </div>

//             <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
//               <div className="flex items-center gap-4 mb-6">
//                 <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white">
//                   <Target className="w-6 h-6" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-800">
//                   Prime Locations
//                 </h3>
//               </div>
//               <p className="text-gray-600 mb-4">
//                 Access our curated database of high-impact locations and premium
//                 advertising zones.
//               </p>
//               <ul className="space-y-2 text-sm text-gray-500">
//                 <li className="flex items-center gap-2">
//                   <CheckCircle className="w-4 h-4 text-green-500" />
//                   Business districts
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <CheckCircle className="w-4 h-4 text-green-500" />
//                   Shopping centers
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <CheckCircle className="w-4 h-4 text-green-500" />
//                   Event venues
//                 </li>
//               </ul>
//             </div>
//           </div>

//           {/* Map Interface Mockup */}
//           <div className="h-96 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg relative hover:scale-105 transition-all duration-300">
//             <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-md">
//               <h3 className="text-sm font-bold text-gray-800">
//                 PCMC Cycle Routes
//               </h3>
//               <p className="text-xs text-gray-600">Pimpri-Chinchwad, Pune</p>
//             </div>

//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60901.72659267158!2d73.73565!3d18.6298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9c6c6c6c6c6%3A0x6c6c6c6c6c6c6c6c!2sPimpri-Chinchwad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
//               width="100%"
//               height="100%"
//               style={{ border: 0 }}
//               allowFullScreen
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//               className="rounded-2xl"
//             />

//             {/* Route Overlay Indicators */}
//             <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-md">
//               <div className="flex items-center gap-2 mb-2">
//                 <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
//                 <span className="text-xs text-gray-700">Main Routes</span>
//               </div>
//               <div className="flex items-center gap-2 mb-2">
//                 <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//                 <span className="text-xs text-gray-700">Cycle Paths</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
//                 <span className="text-xs text-gray-700">Commercial Areas</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Features Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-indigo-800 bg-clip-text text-transparent hover:scale-105 transition-transform duration-500">
//               Advanced Features
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto hover:text-gray-700 transition-colors duration-300">
//               Cutting-edge technology meets intelligent advertising solutions
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {serviceData.features.map((feature, index) => (
//               <div
//                 key={feature.id}
//                 className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 shadow-lg"
//                 onMouseEnter={() => setActiveFeature(index)}
//               >
//                 {/* Feature Image */}
//                 <div className="mb-6 overflow-hidden rounded-xl">
//                   <Image
//                     src={
//                       feature.image || "/placeholder.svg?height=200&width=300"
//                     }
//                     alt={feature.title}
//                     width={300}
//                     height={200}
//                     className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
//                   />
//                 </div>

//                 <div className="flex items-center gap-4 mb-6">
//                   <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl text-white">
//                     {getFeatureIcon(feature.icon)}
//                   </div>
//                   <h3 className="text-2xl font-bold text-gray-800">
//                     {feature.title}
//                   </h3>
//                 </div>

//                 <p className="text-gray-600 mb-6 leading-relaxed">
//                   {feature.description}
//                 </p>

//                 <ul className="space-y-2">
//                   {feature.benefits.map((benefit, i) => (
//                     <li
//                       key={i}
//                       className="flex items-center gap-3 text-sm text-gray-500"
//                     >
//                       <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
//                       {benefit}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//       {/* Service Areas */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent hover:scale-105 transition-transform duration-500">
//                 Coverage Areas
//               </h2>

//               <div className="space-y-6">
//                 {serviceData.serviceAreas.map((area, index) => (
//                   <div
//                     key={area.id}
//                     className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer hover:scale-105 ${
//                       selectedCity === index
//                         ? "bg-blue-50 border-blue-300 shadow-lg"
//                         : "bg-white border-gray-200 hover:shadow-xl shadow-lg"
//                     }`}
//                     onClick={() => setSelectedCity(index)}
//                   >
//                     {/* City Image */}
//                     <div className="mb-4 overflow-hidden rounded-lg">
//                       <Image
//                         src={
//                           area.image || "/placeholder.svg?height=150&width=300"
//                         }
//                         alt={area.city}
//                         width={300}
//                         height={150}
//                         className="w-full h-32 object-cover"
//                       />
//                     </div>

//                     <div className="flex justify-between items-start mb-4">
//                       <h3 className="text-2xl font-bold text-gray-800">
//                         {area.city}
//                       </h3>
//                       <div className="text-right">
//                         <div className="text-2xl font-bold text-blue-600">
//                           {area.coverage}
//                         </div>
//                         <div className="text-sm text-gray-500">Coverage</div>
//                       </div>
//                     </div>

//                     <div className="grid grid-cols-3 gap-4 text-sm">
//                       <div>
//                         <div className="font-semibold text-indigo-600">
//                           {area.activeCycles}
//                         </div>
//                         <div className="text-gray-500">Active Cycles</div>
//                       </div>
//                       <div>
//                         <div className="font-semibold text-purple-600">
//                           {(area.dailyReach / 1000).toFixed(0)}K
//                         </div>
//                         <div className="text-gray-500">Daily Reach</div>
//                       </div>
//                       <div>
//                         <div className="font-semibold text-emerald-600">
//                           {area.zones.length}
//                         </div>
//                         <div className="text-gray-500">Zones</div>
//                       </div>
//                     </div>

//                     <div className="mt-4">
//                       <div className="text-sm text-gray-500 mb-2">Zones:</div>
//                       <div className="flex flex-wrap gap-2">
//                         {area.zones.map((zone, i) => (
//                           <span
//                             key={i}
//                             className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
//                           >
//                             {zone}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Route Visualization Placeholder */}
//             <div className="h-96 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg relative hover:scale-105 transition-all duration-300">
//               <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-md">
//                 <h3 className="text-sm font-bold text-gray-800">
//                   PCMC Cycle Routes
//                 </h3>
//                 <p className="text-xs text-gray-600">Pimpri-Chinchwad, Pune</p>
//               </div>

//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60901.72659267158!2d73.73565!3d18.6298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9c6c6c6c6c6%3A0x6c6c6c6c6c6c6c6c!2sPimpri-Chinchwad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
//                 width="100%"
//                 height="100%"
//                 style={{ border: 0 }}
//                 allowFullScreen
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 className="rounded-2xl"
//               />

//               {/* Route Overlay Indicators */}
//               <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-md">
//                 <div className="flex items-center gap-2 mb-2">
//                   <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
//                   <span className="text-xs text-gray-700">Main Routes</span>
//                 </div>
//                 <div className="flex items-center gap-2 mb-2">
//                   <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//                   <span className="text-xs text-gray-700">Cycle Paths</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
//                   <span className="text-xs text-gray-700">
//                     Commercial Areas
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* CTA Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-4xl mx-auto px-4 text-center">
//           <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-gray-200 rounded-3xl p-12 shadow-xl hover:scale-105 transition-all duration-300">
//             <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent hover:scale-105 transition-transform duration-500">
//               Ready to Move Forward?
//             </h2>
//             <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto hover:text-gray-700 transition-colors duration-300">
//               Join the mobile advertising revolution and reach your audience
//               with precision and style.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 justify-center">
//                 <Zap className="w-5 h-5" />
//                 Launch Campaign
//               </button>
//               <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2 justify-center">
//                 <Users className="w-5 h-5" />
//                 Contact Sales
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import serviceData from "@/data/evService.json";
import Image from "next/image";
import {
  Route,
  Clock,
  MapPin,
  Zap,
  Monitor,
  BarChart3,
  Users,
  CheckCircle,
  PlayCircle,
  Map,
  Navigation,
  Target,
  ChevronLeft,
  ChevronRight,
  ImageIcon,
} from "lucide-react";

// Custom hook for number animation
const useCountUp = (end: number, duration = 2000) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, hasStarted]);

  const startAnimation = () => setHasStarted(true);

  return { count, startAnimation };
};

export default function EVCyclePage() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [selectedCity, setSelectedCity] = useState(0);
  const [currentGalleryImage, setCurrentGalleryImage] = useState(0);
  const [showImageView, setShowImageView] = useState(false);

  // Animation counters for statistics
  const totalCyclesCount = useCountUp(
    Number.parseInt(serviceData.statistics.totalCycles),
  );
  const citiesCoveredCount = useCountUp(serviceData.statistics.citiesCovered);
  const dailyImpressionsCount = useCountUp(
    Math.floor(serviceData.statistics.dailyImpressions / 1000),
  );
  const campaignsLaunchedCount = useCountUp(
    serviceData.statistics.campaignsLaunched,
  );
  const clientSatisfactionCount = useCountUp(
    serviceData.statistics.clientSatisfaction,
  );

  // Intersection Observer for triggering animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (
            entry.isIntersecting &&
            entry.target.id === "statistics-section"
          ) {
            totalCyclesCount.startAnimation();
            citiesCoveredCount.startAnimation();
            dailyImpressionsCount.startAnimation();
            campaignsLaunchedCount.startAnimation();
            clientSatisfactionCount.startAnimation();
          }
        });
      },
      { threshold: 0.5 },
    );

    const statsSection = document.getElementById("statistics-section");
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => observer.disconnect();
  }, []);

  const getFeatureIcon = (iconName: string) => {
    const icons = {
      route: Route,
      clock: Clock,
      location: MapPin,
      zap: Zap,
      monitor: Monitor,
      analytics: BarChart3,
    };
    const IconComponent = icons[iconName as keyof typeof icons] || Route;
    return <IconComponent className="w-6 h-6" />;
  };

  const nextGalleryImage = () => {
    setCurrentGalleryImage((prev) => (prev + 1) % serviceData.gallery.length);
  };

  const prevGalleryImage = () => {
    setCurrentGalleryImage(
      (prev) =>
        (prev - 1 + serviceData.gallery.length) % serviceData.gallery.length,
    );
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {" "}
      {/* Added pt-20 for navbar spacing */}
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50 pt-[18vh]">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-pink-200/10 to-orange-200/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-emerald-200/15 to-teal-200/15 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="mb-8">
            <div className="inline-flex  items-center gap-2 bg-white/90 backdrop-blur-sm px-6 py-2 rounded-full border border-gray-200 shadow-lg mb-6 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <Zap className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">
                Smart Mobile Advertising
              </span>
            </div>

            <h1 className="text-5xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 py-4 bg-clip-text text-transparent hover:scale-105 transition-transform duration-500">
              {serviceData.serviceInfo.title}
            </h1>

            <p className="text-2xl md:text-3xl font-light text-blue-600 mb-4 italic hover:text-blue-700 transition-colors duration-300">
              "{serviceData.serviceInfo.subtitle}"
            </p>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed hover:text-gray-700 transition-colors duration-300">
              {serviceData.serviceInfo.description}
            </p>
          </div>

          {/* Hero Image/Video Section */}
          <div className="relative max-w-4xl mx-auto mb-12">
            <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200 shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-500 group">
              {!isVideoPlaying && !showImageView ? (
                <div className="relative h-64 md:h-96 flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
                  <div className="flex gap-4">
                    <button
                      onClick={() => setIsVideoPlaying(true)}
                      className="group relative overflow-hidden flex items-center gap-4 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-200 hover:border-blue-300 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      {/* Subtle hover effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <PlayCircle className="relative z-10 w-6 h-6 text-blue-600 group-hover:text-blue-700 group-hover:scale-110 transition-all duration-300" />
                      <span className="relative z-10 text-sm font-medium text-gray-800 group-hover:text-blue-700">
                        Watch Demo
                      </span>
                    </button>
                    <button
                      onClick={() => setShowImageView(true)}
                      className="group relative overflow-hidden flex items-center gap-4 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-200 hover:border-blue-300 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      {/* Subtle hover effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <ImageIcon className="relative z-10 w-6 h-6 text-blue-600 group-hover:text-blue-700 group-hover:scale-110 transition-all duration-300" />
                      <span className="relative z-10 text-sm font-medium text-gray-800 group-hover:text-blue-700">
                        View Gallery
                      </span>
                    </button>
                  </div>
                </div>
              ) : isVideoPlaying ? (
                <div className="relative">
                  <video
                    className="w-full h-64 md:h-96 object-cover"
                    controls
                    autoPlay
                    src={serviceData.serviceInfo.videoUrl}
                  >
                    Your browser does not support the video tag.
                  </video>
                  <button
                    onClick={() => setIsVideoPlaying(false)}
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-800 hover:bg-white transition-all duration-300 hover:scale-110"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <div className="relative">
                  <Image
                    src={
                      serviceData.serviceInfo.heroImage ||
                      "/placeholder.svg?height=400&width=800" ||
                      "/placeholder.svg" ||
                      "/placeholder.svg" ||
                      "/placeholder.svg" ||
                      "/placeholder.svg"
                    }
                    alt="EV Cycle Hero"
                    width={800}
                    height={400}
                    className="w-full h-64 md:h-96 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <button
                    onClick={() => setShowImageView(false)}
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-800 hover:bg-white transition-all duration-300 hover:scale-110"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Enhanced CTA Button */}
          <div className="flex justify-center">
            <button className="relative overflow-hidden group bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white px-12 py-5 rounded-full font-bold text-xl transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/30">
              {/* Animated shine effect */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>

              {/* Button content */}
              <div className="relative flex items-center gap-3">
                <Zap className="w-6 h-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
                <span className="group-hover:tracking-wider transition-all duration-300">
                  Start Your Campaign
                </span>
              </div>
            </button>
          </div>
        </div>
      </section>
      {/* Statistics Section with Animated Numbers */}
      <section id="statistics-section" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="text-center group hover:scale-110 transition-all duration-300 hover:bg-white hover:shadow-xl rounded-2xl p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                {totalCyclesCount.count}+
              </div>
              <div className="text-gray-600 group-hover:text-gray-700">
                Active Cycles
              </div>
            </div>
            <div className="text-center group hover:scale-110 transition-all duration-300 hover:bg-white hover:shadow-xl rounded-2xl p-6">
              <div className="text-4xl font-bold text-indigo-600 mb-2 group-hover:text-indigo-700 transition-colors duration-300">
                {citiesCoveredCount.count}+
              </div>
              <div className="text-gray-600 group-hover:text-gray-700">
                Cities Covered
              </div>
            </div>
            <div className="text-center group hover:scale-110 transition-all duration-300 hover:bg-white hover:shadow-xl rounded-2xl p-6">
              <div className="text-4xl font-bold text-purple-600 mb-2 group-hover:text-purple-700 transition-colors duration-300">
                {dailyImpressionsCount.count}K+
              </div>
              <div className="text-gray-600 group-hover:text-gray-700">
                Daily Impressions
              </div>
            </div>
            <div className="text-center group hover:scale-110 transition-all duration-300 hover:bg-white hover:shadow-xl rounded-2xl p-6">
              <div className="text-4xl font-bold text-emerald-600 mb-2 group-hover:text-emerald-700 transition-colors duration-300">
                {campaignsLaunchedCount.count}+
              </div>
              <div className="text-gray-600 group-hover:text-gray-700">
                Campaigns Launched
              </div>
            </div>
            <div className="text-center group hover:scale-110 transition-all duration-300 hover:bg-white hover:shadow-xl rounded-2xl p-6">
              <div className="text-4xl font-bold text-rose-600 mb-2 group-hover:text-rose-700 transition-colors duration-300">
                {clientSatisfactionCount.count}%
              </div>
              <div className="text-gray-600 group-hover:text-gray-700">
                Client Satisfaction
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent hover:scale-105 transition-transform duration-500">
              See It In Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto hover:text-gray-700 transition-colors duration-300">
              Explore our mobile advertising solutions through real-world
              examples
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="relative bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 group">
              <Image
                src={
                  serviceData.gallery[currentGalleryImage].image ||
                  "/placeholder.svg?height=500&width=800" ||
                  "/placeholder.svg" ||
                  "/placeholder.svg" ||
                  "/placeholder.svg" ||
                  "/placeholder.svg"
                }
                alt={serviceData.gallery[currentGalleryImage].title}
                width={800}
                height={500}
                className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Enhanced Navigation Arrows */}
              <button
                onClick={prevGalleryImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-125 hover:shadow-xl"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700 hover:text-blue-600 transition-colors duration-300" />
              </button>
              <button
                onClick={nextGalleryImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-125 hover:shadow-xl"
              >
                <ChevronRight className="w-6 h-6 text-gray-700 hover:text-blue-600 transition-colors duration-300" />
              </button>

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-white text-xl font-bold mb-2">
                  {serviceData.gallery[currentGalleryImage].title}
                </h3>
                <p className="text-white/90 text-sm">
                  {serviceData.gallery[currentGalleryImage].description}
                </p>
              </div>
            </div>

            {/* Enhanced Gallery Thumbnails */}
            <div className="flex justify-center gap-2 mt-6">
              {serviceData.gallery.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentGalleryImage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-150 ${
                    index === currentGalleryImage
                      ? "bg-blue-600 shadow-lg shadow-blue-600/50"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Maps & Route Planning Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent hover:scale-105 transition-transform duration-500">
              Smart Route Planning
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto hover:text-gray-700 transition-colors duration-300">
              Design custom routes and target prime locations with our advanced
              mapping technology
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl text-white">
                  <Map className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Interactive Maps
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Visualize and customize your advertising routes with our
                interactive mapping interface.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Real-time traffic data
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Demographic overlays
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  POI integration
                </li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl text-white">
                  <Navigation className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Custom Routes
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Create tailored routes that align with your campaign objectives
                and target audience.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Drag & drop planning
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Time-based scheduling
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Route optimization
                </li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Prime Locations
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Access our curated database of high-impact locations and premium
                advertising zones.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Business districts
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Shopping centers
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Event venues
                </li>
              </ul>
            </div>
          </div>

          {/* Map Interface Mockup */}
          <div className="h-96 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg relative hover:scale-105 transition-all duration-300">
            <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-md">
              <h3 className="text-sm font-bold text-gray-800">
                PCMC Cycle Routes
              </h3>
              <p className="text-xs text-gray-600">Pimpri-Chinchwad, Pune</p>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60901.72659267158!2d73.73565!3d18.6298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9c6c6c6c6c6%3A0x6c6c6c6c6c6c6c6c!2sPimpri-Chinchwad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl"
            />

            {/* Route Overlay Indicators */}
            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-md">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-xs text-gray-700">Main Routes</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-xs text-gray-700">Cycle Paths</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span className="text-xs text-gray-700">Commercial Areas</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-indigo-800 bg-clip-text text-transparent hover:scale-105 transition-transform duration-500">
              Advanced Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto hover:text-gray-700 transition-colors duration-300">
              Cutting-edge technology meets intelligent advertising solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceData.features.map((feature, index) => (
              <div
                key={feature.id}
                className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 shadow-lg"
                onMouseEnter={() => setActiveFeature(index)}
              >
                {/* Feature Image */}
                <div className="mb-6 overflow-hidden rounded-xl">
                  <Image
                    src={
                      feature.image || "/placeholder.svg?height=200&width=300"
                    }
                    alt={feature.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl text-white">
                    {getFeatureIcon(feature.icon)}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {feature.title}
                  </h3>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                <ul className="space-y-2">
                  {feature.benefits.map((benefit, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-sm text-gray-500"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Service Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent hover:scale-105 transition-transform duration-500">
                Coverage Areas
              </h2>

              <div className="space-y-6">
                {serviceData.serviceAreas.map((area, index) => (
                  <div
                    key={area.id}
                    className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer hover:scale-105 ${
                      selectedCity === index
                        ? "bg-blue-50 border-blue-300 shadow-lg"
                        : "bg-white border-gray-200 hover:shadow-xl shadow-lg"
                    }`}
                    onClick={() => setSelectedCity(index)}
                  >
                    {/* City Image */}
                    <div className="mb-4 overflow-hidden rounded-lg">
                      <Image
                        src={
                          area.image || "/placeholder.svg?height=150&width=300"
                        }
                        alt={area.city}
                        width={300}
                        height={150}
                        className="w-full h-32 object-cover"
                      />
                    </div>

                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-gray-800">
                        {area.city}
                      </h3>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-blue-600">
                          {area.coverage}
                        </div>
                        <div className="text-sm text-gray-500">Coverage</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <div className="font-semibold text-indigo-600">
                          {area.activeCycles}
                        </div>
                        <div className="text-gray-500">Active Cycles</div>
                      </div>
                      <div>
                        <div className="font-semibold text-purple-600">
                          {(area.dailyReach / 1000).toFixed(0)}K
                        </div>
                        <div className="text-gray-500">Daily Reach</div>
                      </div>
                      <div>
                        <div className="font-semibold text-emerald-600">
                          {area.zones.length}
                        </div>
                        <div className="text-gray-500">Zones</div>
                      </div>
                    </div>

                    <div className="mt-4">
                      <div className="text-sm text-gray-500 mb-2">Zones:</div>
                      <div className="flex flex-wrap gap-2">
                        {area.zones.map((zone, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
                          >
                            {zone}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Route Visualization Placeholder */}
            <div className="h-96 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg relative hover:scale-105 transition-all duration-300">
              <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-md">
                <h3 className="text-sm font-bold text-gray-800">
                  PCMC Cycle Routes
                </h3>
                <p className="text-xs text-gray-600">Pimpri-Chinchwad, Pune</p>
              </div>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60901.72659267158!2d73.73565!3d18.6298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9c6c6c6c6c6%3A0x6c6c6c6c6c6c6c6c!2sPimpri-Chinchwad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl"
              />

              {/* Route Overlay Indicators */}
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-md">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-xs text-gray-700">Main Routes</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-gray-700">Cycle Paths</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-xs text-gray-700">
                    Commercial Areas
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-gray-200 rounded-3xl p-12 shadow-xl hover:shadow-2xl transition-all duration-500">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
              Ready to Move Forward?
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Join the mobile advertising revolution and reach your audience
              with precision and style.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="relative overflow-hidden group bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-500 hover:shadow-lg hover:shadow-blue-500/30">
                {/* Animated shine effect */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>

                <div className="relative flex items-center justify-center gap-3">
                  <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="group-hover:tracking-wider transition-all duration-300">
                    Launch Campaign
                  </span>
                </div>
              </button>

              <button className="relative overflow-hidden group bg-white border-2 border-blue-600 text-blue-600 hover:text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-500 hover:shadow-lg">
                {/* Fill effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>

                <div className="relative flex items-center justify-center gap-3">
                  <Users className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="group-hover:tracking-wider transition-all duration-300">
                    Contact Sales
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
