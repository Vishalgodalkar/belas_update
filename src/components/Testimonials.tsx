// 'use client'

// import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

// const Testimonials = [
//   {
//     quote:
//       "Joining the music school transformed my understanding of music and helped me to truly discover my own sound. The instructors are world-class!",
//     name: "Alex Johnson",
//     title: "Guitar Student",
//   },
//   {
//     quote:
//       "The community and support at this school are unmatched. I've grown not just as a pianist, but also as a performer, thanks to their comprehensive approach.",
//     name: "Samantha Lee",
//     title: "Piano Student",
//   },
//   {
//     quote:
//       "This school offered me the tools and confidence to take my singing to the next level. I'm endlessly grateful for the personalized coaching.",
//     name: "Michael Chen",
//     title: "Vocal Student",
//   },
//   {
//     quote:
//       "As a violinist, finding the right mentor can be challenging, but this school matched me with a teacher who truly understands my goals and challenges.",
//     name: "Emily Taylor",
//     title: "Violin Student",
//   },
//   {
//     quote:
//       "The production courses here opened my eyes to the intricacies of music production. Highly recommend for any aspiring producers!",
//     name: "Chris Morales",
//     title: "Music Production Student",
//   },
// ];

// function TestimoniaCards() {
//   return (
//     <div className="h-[35rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
//       <h2 className=" mb-8 text-[1.9rem] leading-8 font-extrabold tracking-tight text-stone-300 sm:text-5xl text-center  ">
//         Hear our Harmony: Voices of Success
//       </h2>
//       <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
//         <div className="w-full max-w-6xl">
//           <InfiniteMovingCards
//             items={Testimonials}
//             direction="right"
//             speed="slow"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TestimoniaCards

//working version 2
// "use client";

// import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
// import { Star } from "lucide-react";
// import { useState, useEffect } from "react";

// interface Testimonial {
//   quote: string;
//   name: string;
//   title: string;
//   company: string;
//   rating: number;
//   image?: string;
// }

// const Testimonials: Testimonial[] = [
//   {
//     quote:
//       "This agency transformed our digital presence completely. Our ROI increased by 300% within just 3 months of working with them.",
//     name: "Sarah Mitchell",
//     title: "Marketing Director",
//     company: "TechFlow Solutions",
//     rating: 5,
//   },
//   {
//     quote:
//       "Outstanding creative campaigns that truly resonated with our target audience. The team's strategic approach is unmatched in the industry.",
//     name: "David Rodriguez",
//     title: "CEO",
//     company: "GreenLeaf Enterprises",
//     rating: 5,
//   },
//   {
//     quote:
//       "Professional, results-driven, and incredibly innovative. They helped us scale from startup to market leader in just 18 months.",
//     name: "Emily Chen",
//     title: "Founder",
//     company: "NextGen Fitness",
//     rating: 5,
//   },
//   {
//     quote:
//       "The data-driven insights and campaign optimization exceeded all our expectations. Best investment we've made for our business growth.",
//     name: "Michael Thompson",
//     title: "CMO",
//     company: "Urban Retail Co.",
//     rating: 4,
//   },
//   {
//     quote:
//       "Exceptional service and remarkable results. Our brand awareness increased by 250% and lead generation improved dramatically.",
//     name: "Jessica Park",
//     title: "Brand Manager",
//     company: "Luxury Living",
//     rating: 5,
//   },
//   {
//     quote:
//       "Their creative team brought our vision to life perfectly. The campaigns were not just beautiful but incredibly effective.",
//     name: "Robert Kim",
//     title: "Creative Director",
//     company: "Artisan Brands",
//     rating: 4,
//   },
// ];

// function TestimoniaCards() {
//   const [isVisible, setIsVisible] = useState(false);
//   const [hoveredCard, setHoveredCard] = useState<number | null>(null);

//   useEffect(() => {
//     const timer = setTimeout(() => setIsVisible(true), 300);
//     return () => clearTimeout(timer);
//   }, []);

//   const renderStars = (rating: number, isHovered = false) => {
//     return (
//       <div className="flex items-center gap-1 mb-3">
//         {[...Array(5)].map((_, index) => (
//           <Star
//             key={index}
//             className={`w-4 h-4 transition-all duration-300 ${
//               index < rating
//                 ? isHovered
//                   ? "text-yellow-400 fill-yellow-400 scale-110"
//                   : "text-yellow-500 fill-yellow-500"
//                 : "text-gray-600 fill-gray-600"
//             }`}
//           />
//         ))}
//         <span className="text-sm text-gray-400 ml-2 font-medium">
//           {rating}.0
//         </span>
//       </div>
//     );
//   };

//   const averageRating = (
//     Testimonials.reduce((sum, testimonial) => sum + testimonial.rating, 0) /
//     Testimonials.length
//   ).toFixed(1);

//   return (
//     <div className="min-h-screen w-full bg-black bg-dot-white/[0.1] relative flex flex-col items-center justify-center overflow-hidden py-12 md:py-20">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
//       </div>

//       <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header Section with Animations */}
//         <div className="text-center mb-12 md:mb-16">
//           <div className="inline-block mb-4">
//             <span className="text-blue-500 text-sm md:text-base font-semibold uppercase tracking-wider">
//               Client Success Stories
//             </span>
//           </div>

//           <h2
//             className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-center mb-6 transition-all duration-1000 ${
//               isVisible
//                 ? "opacity-100 translate-y-0"
//                 : "opacity-0 translate-y-10"
//             }`}
//           >
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-blue-400 animate-gradient-x">
//               Voices of Success
//             </span>
//           </h2>

//           {/* Stats Section */}
//           <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 mb-8">
//             <div className="flex items-center gap-2">
//               <div className="flex">
//                 {[...Array(5)].map((_, index) => (
//                   <Star
//                     key={index}
//                     className="w-5 h-5 text-yellow-500 fill-yellow-500"
//                   />
//                 ))}
//               </div>
//               <span className="text-white font-semibold text-lg">
//                 {averageRating}
//               </span>
//             </div>
//             <div className="text-gray-400 text-sm">
//               Based on {Testimonials.length}+ client reviews
//             </div>
//           </div>

//           <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
//             Discover how we've helped businesses achieve remarkable growth
//             through strategic digital marketing campaigns
//           </p>
//         </div>

//         {/* Testimonials Carousel */}
//         <div className="relative">
//           <div className="flex justify-center w-full overflow-hidden">
//             <div className="w-full max-w-6xl">
//               <InfiniteMovingCards
//                 items={Testimonials.map((testimonial, index) => ({
//                   ...testimonial,
//                   quote: (
//                     <div
//                       className="group"
//                       onMouseEnter={() => setHoveredCard(index)}
//                       onMouseLeave={() => setHoveredCard(null)}
//                     >
//                       {renderStars(testimonial.rating, hoveredCard === index)}
//                       <blockquote className="text-gray-200 text-base md:text-lg leading-relaxed mb-4 group-hover:text-white transition-colors duration-300">
//                         "{testimonial.quote}"
//                       </blockquote>
//                       <div className="flex items-center gap-3">
//                         <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
//                           <span className="text-white font-semibold text-sm">
//                             {testimonial.name
//                               .split(" ")
//                               .map((n) => n[0])
//                               .join("")}
//                           </span>
//                         </div>
//                         <div>
//                           <div className="text-white font-semibold group-hover:text-blue-400 transition-colors duration-300">
//                             {testimonial.name}
//                           </div>
//                           <div className="text-gray-400 text-sm">
//                             {testimonial.title} at {testimonial.company}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   ),
//                 }))}
//                 direction="right"
//                 speed="slow"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Call to Action */}
//         <div className="text-center mt-12 md:mt-16">
//           <div className="inline-block group">
//             <button className="relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
//               <span className="relative z-10">Start Your Success Story</span>
//               <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
//             </button>
//           </div>
//           <p className="text-gray-400 text-sm mt-4">
//             Join 500+ satisfied clients who've transformed their business with
//             us
//           </p>
//         </div>
//       </div>

//       {/* Custom Styles */}
//       <style jsx>{`
//         @keyframes gradient-x {
//           0%,
//           100% {
//             background-size: 200% 200%;
//             background-position: left center;
//           }
//           50% {
//             background-size: 200% 200%;
//             background-position: right center;
//           }
//         }

//         .animate-gradient-x {
//           animation: gradient-x 3s ease infinite;
//         }
//       `}</style>
//     </div>
//   );
// }

// export default TestimoniaCards;

// "use client";

// import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
// import { Star, Quote, Sparkles, Zap } from "lucide-react";
// import { useState, useEffect, useRef } from "react";

// interface Testimonial {
//   quote: string;
//   name: string;
//   title: string;
//   company: string;
//   rating: number;
//   color: string;
//   industry: string;
// }

// const Testimonials: Testimonial[] = [
//   {
//     quote:
//       "This agency transformed our digital presence completely. Our ROI increased by 300% within just 3 months of working with them. Absolutely phenomenal results!",
//     name: "Sarah Mitchell",
//     title: "Marketing Director",
//     company: "TechFlow Solutions",
//     rating: 5,
//     color: "from-pink-500 to-rose-500",
//     industry: "Technology",
//   },
//   {
//     quote:
//       "Outstanding creative campaigns that truly resonated with our target audience. The team's strategic approach is unmatched in the industry.",
//     name: "David Rodriguez",
//     title: "CEO",
//     company: "GreenLeaf Enterprises",
//     rating: 5,
//     color: "from-emerald-500 to-teal-500",
//     industry: "Sustainability",
//   },
//   {
//     quote:
//       "Professional, results-driven, and incredibly innovative. They helped us scale from startup to market leader in just 18 months.",
//     name: "Emily Chen",
//     title: "Founder",
//     company: "NextGen Fitness",
//     rating: 5,
//     color: "from-purple-500 to-indigo-500",
//     industry: "Health & Fitness",
//   },
//   {
//     quote:
//       "The data-driven insights and campaign optimization exceeded all our expectations. Best investment we've made for our business growth.",
//     name: "Michael Thompson",
//     title: "CMO",
//     company: "Urban Retail Co.",
//     rating: 4,
//     color: "from-orange-500 to-red-500",
//     industry: "Retail",
//   },
//   {
//     quote:
//       "Exceptional service and remarkable results. Our brand awareness increased by 250% and lead generation improved dramatically.",
//     name: "Jessica Park",
//     title: "Brand Manager",
//     company: "Luxury Living",
//     rating: 5,
//     color: "from-blue-500 to-cyan-500",
//     industry: "Luxury Goods",
//   },
//   {
//     quote:
//       "Their creative team brought our vision to life perfectly. The campaigns were not just beautiful but incredibly effective.",
//     name: "Robert Kim",
//     title: "Creative Director",
//     company: "Artisan Brands",
//     rating: 4,
//     color: "from-violet-500 to-purple-500",
//     industry: "Creative Agency",
//   },
// ];

// function TestimoniaCards() {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isVisible, setIsVisible] = useState(false);
//   const [activeCard, setActiveCard] = useState<number | null>(null);
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const timer = setTimeout(() => setIsVisible(true), 500);
//     return () => clearTimeout(timer);
//   }, []);

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       if (containerRef.current) {
//         const rect = containerRef.current.getBoundingClientRect();
//         setMousePosition({
//           x: e.clientX - rect.left,
//           y: e.clientY - rect.top,
//         });
//       }
//     };

//     const container = containerRef.current;
//     if (container) {
//       container.addEventListener("mousemove", handleMouseMove);
//       return () => container.removeEventListener("mousemove", handleMouseMove);
//     }
//   }, []);

//   const renderAnimatedStars = (
//     rating: number,
//     color: string,
//     isActive = false,
//   ) => {
//     return (
//       <div className="flex items-center gap-1 mb-4">
//         {[...Array(5)].map((_, index) => (
//           <div key={index} className="relative">
//             <Star
//               className={`w-5 h-5 transition-all duration-500 ${
//                 index < rating
//                   ? `text-yellow-400 fill-yellow-400 ${isActive ? "scale-125 rotate-12" : "scale-100"}`
//                   : "text-gray-600 fill-gray-600"
//               }`}
//             />
//             {index < rating && isActive && (
//               <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-yellow-300 animate-pulse" />
//             )}
//           </div>
//         ))}
//         <div
//           className={`ml-3 px-2 py-1 rounded-full bg-gradient-to-r ${color} text-white text-xs font-bold`}
//         >
//           {rating}.0
//         </div>
//       </div>
//     );
//   };

//   const averageRating = (
//     Testimonials.reduce((sum, testimonial) => sum + testimonial.rating, 0) /
//     Testimonials.length
//   ).toFixed(1);

//   return (
//     <div
//       ref={containerRef}
//       className="min-h-screen w-full bg-black relative flex flex-col items-center justify-center overflow-hidden py-12 md:py-20"
//     >
//       {/* Dynamic Background with Mouse Interaction */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {/* Animated Orbs */}
//         <div
//           className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl transition-all duration-1000"
//           style={{
//             left: `${mousePosition.x * 0.1}px`,
//             top: `${mousePosition.y * 0.1}px`,
//           }}
//         ></div>
//         <div
//           className="absolute w-64 h-64 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full blur-3xl transition-all duration-1500"
//           style={{
//             right: `${mousePosition.x * 0.05}px`,
//             bottom: `${mousePosition.y * 0.05}px`,
//           }}
//         ></div>

//         {/* Floating Geometric Shapes */}
//         {[...Array(8)].map((_, i) => (
//           <div
//             key={i}
//             className={`absolute w-4 h-4 bg-gradient-to-r ${
//               Testimonials[i % Testimonials.length]?.color
//             } opacity-20 animate-float-${i % 3}`}
//             style={{
//               left: `${10 + i * 12}%`,
//               top: `${20 + i * 8}%`,
//               animationDelay: `${i * 0.5}s`,
//             }}
//           ></div>
//         ))}
//       </div>

//       <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Spectacular Header */}
//         <div className="text-center mb-16 md:mb-20">
//           <div className="relative inline-block mb-6">
//             <Quote className="absolute -top-4 -left-4 w-8 h-8 text-blue-500/30 animate-pulse" />
//             <span className="text-blue-400 text-sm md:text-base font-bold uppercase tracking-[0.2em] relative">
//               ✨ Client Success Stories ✨
//             </span>
//             <Quote className="absolute -bottom-4 -right-4 w-8 h-8 text-purple-500/30 animate-pulse delay-500" />
//           </div>

//           <h2
//             className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-center mb-8 transition-all duration-1000 ${
//               isVisible
//                 ? "opacity-100 translate-y-0"
//                 : "opacity-0 translate-y-20"
//             }`}
//           >
//             <span className="relative inline-block">
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-purple-400 animate-gradient-flow">
//                 Voices of
//               </span>
//               <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-lg animate-pulse"></div>
//             </span>
//             <br />
//             <span className="relative inline-block mt-2">
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 animate-gradient-flow-reverse">
//                 SUCCESS
//               </span>
//               <Zap className="inline-block ml-4 w-8 h-8 md:w-12 md:h-12 text-yellow-400 animate-bounce" />
//             </span>
//           </h2>

//           {/* Enhanced Stats Section */}
//           <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-8">
//             <div className="relative group">
//               <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur opacity-30 group-hover:opacity-60 transition-opacity"></div>
//               <div className="relative flex items-center gap-3 bg-black/50 backdrop-blur-sm rounded-full px-6 py-3 border border-yellow-500/30">
//                 <div className="flex">
//                   {[...Array(5)].map((_, index) => (
//                     <Star
//                       key={index}
//                       className="w-6 h-6 text-yellow-400 fill-yellow-400 animate-pulse"
//                       style={{ animationDelay: `${index * 0.1}s` }}
//                     />
//                   ))}
//                 </div>
//                 <span className="text-white font-bold text-xl">
//                   {averageRating}
//                 </span>
//               </div>
//             </div>

//             <div className="text-gray-300 text-lg font-medium">
//               Based on{" "}
//               <span className="text-blue-400 font-bold">
//                 {Testimonials.length}00+
//               </span>{" "}
//               client reviews
//             </div>
//           </div>

//           <p className="text-gray-300 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
//             Discover how we've helped businesses achieve{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 font-bold">
//               remarkable growth
//             </span>{" "}
//             through strategic digital marketing campaigns
//           </p>
//         </div>

//         {/* Enhanced Testimonials Carousel */}
//         <div className="relative mb-16">
//           <div className="flex justify-center w-full overflow-hidden">
//             <div className="w-full max-w-6xl">
//               <InfiniteMovingCards
//                 items={Testimonials.map((testimonial, index) => ({
//                   ...testimonial,
//                   quote: (
//                     <div
//                       className="group relative"
//                       onMouseEnter={() => setActiveCard(index)}
//                       onMouseLeave={() => setActiveCard(null)}
//                     >
//                       {/* Holographic Border Effect */}
//                       <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-sm"></div>

//                       <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 group-hover:border-gray-600 transition-all duration-500">
//                         {/* Industry Badge */}
//                         <div className="absolute -top-3 left-6">
//                           <span
//                             className={`px-3 py-1 text-xs font-bold text-white rounded-full bg-gradient-to-r ${testimonial.color} shadow-lg`}
//                           >
//                             {testimonial.industry}
//                           </span>
//                         </div>

//                         {/* Animated Stars */}
//                         <div className="mt-4">
//                           {renderAnimatedStars(
//                             testimonial.rating,
//                             testimonial.color,
//                             activeCard === index,
//                           )}
//                         </div>

//                         {/* Quote with Typewriter Effect */}
//                         <blockquote className="text-gray-200 text-base md:text-lg leading-relaxed mb-6 group-hover:text-white transition-colors duration-300 relative">
//                           <Quote className="absolute -top-2 -left-2 w-6 h-6 text-blue-500/30" />
//                           "{testimonial.quote}"
//                           <Quote className="absolute -bottom-2 -right-2 w-6 h-6 text-purple-500/30 rotate-180" />
//                         </blockquote>

//                         {/* Enhanced Profile Section */}
//                         <div className="flex items-center gap-4">
//                           <div className="relative">
//                             <div
//                               className={`w-14 h-14 bg-gradient-to-r ${testimonial.color} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
//                             >
//                               <span className="text-white font-bold text-lg">
//                                 {testimonial.name
//                                   .split(" ")
//                                   .map((n) => n[0])
//                                   .join("")}
//                               </span>
//                             </div>
//                             {activeCard === index && (
//                               <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/50 to-purple-500/50 rounded-full blur animate-pulse"></div>
//                             )}
//                           </div>
//                           <div>
//                             <div className="text-white font-bold text-lg group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
//                               {testimonial.name}
//                             </div>
//                             <div className="text-gray-400 text-sm font-medium">
//                               {testimonial.title}
//                             </div>
//                             <div className="text-gray-500 text-xs">
//                               {testimonial.company}
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   ),
//                 }))}
//                 direction="right"
//                 speed="slow"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Spectacular CTA */}
//         <div className="text-center">
//           <div className="relative inline-block group">
//             <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full blur opacity-70 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
//             <button className="relative px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold text-lg rounded-full hover:scale-105 transition-all duration-300 shadow-2xl">
//               <span className="relative z-10 flex items-center gap-2">
//                 <Sparkles className="w-5 h-5" />
//                 Start Your Success Story
//                 <Zap className="w-5 h-5" />
//               </span>
//             </button>
//           </div>
//           <p className="text-gray-400 text-sm mt-6 animate-pulse">
//             Join <span className="text-blue-400 font-bold">500+</span> satisfied
//             clients who've transformed their business with us
//           </p>
//         </div>
//       </div>

//       {/* Custom Animations */}
//       <style jsx>{`
//         @keyframes gradient-flow {
//           0%,
//           100% {
//             background-position: 0% 50%;
//           }
//           50% {
//             background-position: 100% 50%;
//           }
//         }

//         @keyframes gradient-flow-reverse {
//           0%,
//           100% {
//             background-position: 100% 50%;
//           }
//           50% {
//             background-position: 0% 50%;
//           }
//         }

//         @keyframes float-0 {
//           0%,
//           100% {
//             transform: translateY(0px) rotate(0deg);
//           }
//           50% {
//             transform: translateY(-20px) rotate(180deg);
//           }
//         }

//         @keyframes float-1 {
//           0%,
//           100% {
//             transform: translateY(0px) rotate(0deg);
//           }
//           50% {
//             transform: translateY(-30px) rotate(-180deg);
//           }
//         }

//         @keyframes float-2 {
//           0%,
//           100% {
//             transform: translateY(0px) rotate(0deg);
//           }
//           50% {
//             transform: translateY(-25px) rotate(90deg);
//           }
//         }

//         .animate-gradient-flow {
//           background-size: 200% 200%;
//           animation: gradient-flow 3s ease infinite;
//         }

//         .animate-gradient-flow-reverse {
//           background-size: 200% 200%;
//           animation: gradient-flow-reverse 3s ease infinite;
//         }

//         .animate-float-0 {
//           animation: float-0 6s ease-in-out infinite;
//         }
//         .animate-float-1 {
//           animation: float-1 8s ease-in-out infinite;
//         }
//         .animate-float-2 {
//           animation: float-2 7s ease-in-out infinite;
//         }
//       `}</style>
//     </div>
//   );
// }

// export default TestimoniaCards;
// components/Testimonials.tsx
// "use client";

// import { Star } from "lucide-react";
// import { motion, useAnimation } from "framer-motion";
// import { useState } from "react";

// const testimonials = [
//   {
//     id: 1,
//     quote: "Our ROI increased by 300% within 3 months. Phenomenal results!",
//     name: "Sarah Mitchell",
//     title: "Marketing Director",
//     company: "TechFlow",
//     rating: 5,
//     color: "from-blue-500 to-cyan-500",
//   },
//   {
//     id: 2,
//     quote: "Outstanding campaigns that resonated with our audience perfectly.",
//     name: "David Rodriguez",
//     title: "CEO",
//     company: "GreenLeaf",
//     rating: 5,
//     color: "from-emerald-500 to-teal-500",
//   },
//   {
//     id: 3,
//     quote: "Transformed our digital presence completely. Worth every penny!",
//     name: "Michael Chen",
//     title: "CTO",
//     company: "NexusTech",
//     rating: 5,
//     color: "from-purple-500 to-indigo-500",
//   },
//   {
//     id: 4,
//     quote:
//       "Their creative team brought our vision to life beyond expectations.",
//     name: "Jessica Wong",
//     title: "Brand Manager",
//     company: "LuxLiving",
//     rating: 4,
//     color: "from-pink-500 to-rose-500",
//   },
//   {
//     id: 5,
//     quote: "Data-driven insights helped us dominate our market segment.",
//     name: "Robert Kim",
//     title: "CMO",
//     company: "UrbanRetail",
//     rating: 5,
//     color: "from-orange-500 to-amber-500",
//   },
//   {
//     id: 6,
//     quote: "Scaled our startup to market leader in just 18 months. Incredible!",
//     name: "Emily Park",
//     title: "Founder",
//     company: "NextGen",
//     rating: 4,
//     color: "from-violet-500 to-purple-500",
//   },
// ];

// export default function Testimonials() {
//   const [isHovered, setIsHovered] = useState(false);
//   const topControls = useAnimation();
//   const bottomControls = useAnimation();

//   // Create unique keys by adding index to duplicated items
//   const duplicatedTestimonials = [...testimonials, ...testimonials].map(
//     (t, i) => ({
//       ...t,
//       uniqueKey: `${t.id}-${i}`,
//     }),
//   );

//   const handleHoverStart = () => {
//     setIsHovered(true);
//     topControls.stop();
//     bottomControls.stop();
//   };

//   const handleHoverEnd = () => {
//     setIsHovered(false);
//     topControls.start({
//       x: ["0%", "-100%"],
//       transition: {
//         duration: 20,
//         ease: "linear",
//         repeat: Infinity,
//       },
//     });
//     bottomControls.start({
//       x: ["-100%", "0%"],
//       transition: {
//         duration: 25,
//         ease: "linear",
//         repeat: Infinity,
//       },
//     });
//   };

//   return (
//     <section className="py-16 bg-gray-50 overflow-hidden">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
//           Trusted by Industry Leaders
//         </h2>

//         {/* Top Marquee (Left to Right) */}
//         <div className="mb-8 overflow-hidden">
//           <motion.div
//             className="flex"
//             animate={topControls}
//             initial={{
//               x: ["0%", "-100%"],
//             }}
//             transition={{
//               duration: 20,
//               ease: "linear",
//               repeat: Infinity,
//             }}
//             onHoverStart={handleHoverStart}
//             onHoverEnd={handleHoverEnd}
//           >
//             {duplicatedTestimonials.map((testimonial) => (
//               <TestimonialCard
//                 key={`top-${testimonial.uniqueKey}`}
//                 {...testimonial}
//                 isHovered={isHovered}
//               />
//             ))}
//           </motion.div>
//         </div>

//         {/* Bottom Marquee (Right to Left) */}
//         <div className="overflow-hidden">
//           <motion.div
//             className="flex"
//             animate={bottomControls}
//             initial={{
//               x: ["-100%", "0%"],
//             }}
//             transition={{
//               duration: 25,
//               ease: "linear",
//               repeat: Infinity,
//             }}
//             onHoverStart={handleHoverStart}
//             onHoverEnd={handleHoverEnd}
//           >
//             {duplicatedTestimonials.map((testimonial) => (
//               <TestimonialCard
//                 key={`bottom-${testimonial.uniqueKey}`}
//                 {...testimonial}
//                 isHovered={isHovered}
//               />
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function TestimonialCard({
//   quote,
//   name,
//   title,
//   company,
//   rating,
//   color,
//   isHovered,
// }: any) {
//   return (
//     <div
//       className={`flex-shrink-0 w-80 mx-4 p-6 bg-white rounded-lg border border-gray-200 shadow-sm transition-all ${isHovered ? "shadow-lg scale-[1.02]" : "shadow-sm"}`}
//     >
//       <div className="flex mb-3">
//         {[...Array(5)].map((_, i) => (
//           <Star
//             key={i}
//             className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
//           />
//         ))}
//         <span
//           className={`ml-2 px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${color} text-white`}
//         >
//           {rating}.0
//         </span>
//       </div>
//       <p className="text-gray-600 italic mb-4">"{quote}"</p>
//       <div className="border-t border-gray-100 pt-3">
//         <h4 className="font-medium text-gray-900">{name}</h4>
//         <p className="text-sm text-gray-500">
//           {title}, {company}
//         </p>
//       </div>
//     </div>
//   );
// }

"use client";

import { Star } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const testimonials = [
  {
    id: 1,
    quote: "Our ROI increased by 300% within 3 months. Phenomenal results!",
    name: "Sarah Mitchell",
    title: "Marketing Director",
    company: "TechFlow",
    rating: 5,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    quote: "Outstanding campaigns that resonated with our audience perfectly.",
    name: "David Rodriguez",
    title: "CEO",
    company: "GreenLeaf",
    rating: 5,
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: 3,
    quote: "Transformed our digital presence completely. Worth every penny!",
    name: "Michael Chen",
    title: "CTO",
    company: "NexusTech",
    rating: 5,
    color: "from-purple-500 to-indigo-500",
  },
  {
    id: 4,
    quote:
      "Their creative team brought our vision to life beyond expectations.",
    name: "Jessica Wong",
    title: "Brand Manager",
    company: "LuxLiving",
    rating: 4,
    color: "from-pink-500 to-rose-500",
  },
  {
    id: 5,
    quote: "Data-driven insights helped us dominate our market segment.",
    name: "Robert Kim",
    title: "CMO",
    company: "UrbanRetail",
    rating: 5,
    color: "from-orange-500 to-amber-500",
  },
  {
    id: 6,
    quote: "Scaled our startup to market leader in just 18 months. Incredible!",
    name: "Emily Park",
    title: "Founder",
    company: "NextGen",
    rating: 4,
    color: "from-violet-500 to-purple-500",
  },
];

export default function Testimonials() {
  const [isHovered, setIsHovered] = useState(false);
  const topControls = useAnimation();
  const bottomControls = useAnimation();

  // Duplicate testimonials enough times to avoid gaps on large screens
  const duplicatedTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ].map((t, i) => ({
    ...t,
    uniqueKey: `${t.id}-${i}`,
  }));

  // Start animation on mount and when hover ends
  useEffect(() => {
    if (!isHovered) {
      topControls.start({
        x: ["0%", "-100%"],
        transition: {
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        },
      });
      bottomControls.start({
        x: ["-100%", "0%"],
        transition: {
          duration: 36,
          ease: "linear",
          repeat: Infinity,
        },
      });
    }
    // Stop animation on hover
    else {
      topControls.stop();
      bottomControls.stop();
    }
  }, [isHovered, topControls, bottomControls]);

  return (
    <section className="py-10 sm:py-14 md:py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-900">
          Trusted by Industry Leaders
        </h2>

        {/* Top Marquee (Left to Right) */}
        <div className="mb-6 sm:mb-8 overflow-hidden">
          <motion.div
            className="flex flex-nowrap min-w-full will-change-transform"
            animate={topControls}
            initial={{
              x: "0%",
            }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            {duplicatedTestimonials.map((testimonial) => (
              <TestimonialCard
                key={`top-${testimonial.uniqueKey}`}
                {...testimonial}
                isHovered={isHovered}
              />
            ))}
          </motion.div>
        </div>

        {/* Bottom Marquee (Right to Left) */}
        <div className="overflow-hidden">
          <motion.div
            className="flex flex-nowrap min-w-full will-change-transform"
            animate={bottomControls}
            initial={{
              x: "-100%",
            }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            {duplicatedTestimonials.map((testimonial) => (
              <TestimonialCard
                key={`bottom-${testimonial.uniqueKey}`}
                {...testimonial}
                isHovered={isHovered}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  quote,
  name,
  title,
  company,
  rating,
  color,
  isHovered,
}) {
  return (
    <div
      className={`
        flex-shrink-0
        w-64 sm:w-80 md:w-96
        mx-2 sm:mx-4
        p-4 sm:p-6
        bg-white rounded-lg border border-gray-200
        shadow-sm transition-all duration-200
        ${isHovered ? "shadow-lg scale-[1.02]" : "shadow-sm"}
      `}
    >
      <div className="flex mb-3 items-center">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
          />
        ))}
        <span
          className={`ml-2 px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${color} text-white`}
        >
          {rating}.0
        </span>
      </div>
      <p className="text-gray-600 italic mb-4">"{quote}"</p>
      <div className="border-t border-gray-100 pt-3">
        <h4 className="font-medium text-gray-900">{name}</h4>
        <p className="text-sm text-gray-500">
          {title}, {company}
        </p>
      </div>
    </div>
  );
}
