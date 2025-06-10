// "use client";

// import Link from "next/link";
// import { ArrowRight } from "lucide-react";
// import { BackgroundGradient } from "./ui/background-gradient";
// import CountUp from "./ui/countUp";
// import { TrendingUp, Users, Target, Award, Globe, Clock, BarChart2, DollarSign, Layers, Monitor } from "lucide-react";
// import { useState } from "react";
// import { useTheme } from "@/components/ui/theme-provider";

// function FeaturedCourses() {
//   const [hoveredCard, setHoveredCard] = useState<number | null>(null);
//   const { theme } = useTheme();

//   const stats = [
//     {
//       id: 1,
//       title: "Active Clients",
//       value: 150,
//       icon: Users,
//       suffix: "+",
//       description: "Satisfied businesses",
//     },
//     {
//       id: 2,
//       title: "Campaigns",
//       value: 500,
//       icon: Target,
//       suffix: "+",
//       description: "Successful launches",
//     },
//     {
//       id: 3,
//       title: "ROAS Average",
//       value: 4.2,
//       icon: TrendingUp,
//       suffix: "x",
//       description: "Return on ad spend",
//     },
//     {
//       id: 4,
//       title: "Years Experience",
//       value: 8,
//       icon: Clock,
//       suffix: "+",
//       description: "Industry expertise",
//     },
//     {
//       id: 5,
//       title: "Countries",
//       value: 15,
//       icon: Globe,
//       suffix: "+",
//       description: "Global reach",
//     },
//     {
//       id: 6,
//       title: "Growth Rate",
//       value: 75,
//       icon: BarChart2,
//       suffix: "%",
//       description: "Year-over-year",
//     },
//     {
//       id: 7,
//       title: "Ad Spend",
//       value: 10,
//       icon: DollarSign,
//       suffix: "M+",
//       description: "Managed annually",
//     },
//     {
//       id: 8,
//       title: "Platforms",
//       value: 8,
//       icon: Layers,
//       suffix: "+",
//       description: "Advertising channels",
//     },
//     {
//       id: 9,
//       title: "Optimizations",
//       value: 1200,
//       icon: Monitor,
//       suffix: "+",
//       description: "Monthly adjustments",
//     },
//     {
//       id: 10,
//       title: "Team Members",
//       value: 25,
//       icon: Users,
//       suffix: "+",
//       description: "Dedicated experts",
//     },
//   ];

//   return (
//     <div className={`py-16 ${theme === 'dark' ? 'bg-black' : 'bg-gray-50'} transition-colors duration-300`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header Section */}
//         <div className="text-center mb-16">
//           <h2 className={`text-sm font-semibold uppercase tracking-wider mb-3 ${
//             theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
//           }`}>
//             Performance Metrics
//           </h2>
//           <h1 className={`text-3xl md:text-5xl font-bold mb-4 ${
//             theme === 'dark' ? 'text-white' : 'text-gray-900'
//           }`}>
//             Data-Driven <span className="text-blue-500">Results</span>
//           </h1>
//           <p className={`text-lg max-w-3xl mx-auto ${
//             theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
//           }`}>
//             Our comprehensive approach delivers measurable outcomes across all key performance indicators
//           </p>
//         </div>

//         {/* Stats Grid - 2 rows of 5 stats each */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
//           {stats.slice(0, 5).map((stat) => (
//             <StatCard key={stat.id} stat={stat} theme={theme} />
//           ))}
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
//           {stats.slice(5, 10).map((stat) => (
//             <StatCard key={stat.id} stat={stat} theme={theme} />
//           ))}
//         </div>

//         {/* CTA Section */}
//         <div className="text-center">
//           <Link
//             href="/contact"
//             className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
//           >
//             Get Your Custom Report
//             <ArrowRight className="ml-2 h-4 w-4" />
//           </Link>
//           <p className={`mt-4 text-sm ${
//             theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
//           }`}>
//             Ready to see what we can do for your business?
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Reusable Stat Card Component
// function StatCard({ stat, theme }: { stat: any, theme: string }) {
//   const IconComponent = stat.icon;
//   return (
//     <div className="group">
//       <BackgroundGradient className="h-full">
//         <div className={`rounded-xl p-6 h-full border transition-all duration-300 ${
//           theme === 'dark'
//             ? 'bg-gray-900 border-gray-800 group-hover:border-blue-500'
//             : 'bg-white border-gray-200 group-hover:border-blue-400'
//         }`}>
//           <div className="mb-4">
//             <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300 ${
//               theme === 'dark'
//                 ? 'bg-gray-800 group-hover:bg-blue-500/20'
//                 : 'bg-blue-50 group-hover:bg-blue-100'
//             }`}>
//               <IconComponent className={`w-6 h-6 ${
//                 theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
//               }`} />
//             </div>
//           </div>

//           <div className="mb-2">
//             <div className="flex items-baseline">
//               <CountUp
//                 from={0}
//                 to={stat.value}
//                 duration={2.5}
//                 decimals={stat.value % 1 !== 0 ? 1 : 0}
//                 className={`text-3xl font-bold ${
//                   theme === 'dark' ? 'text-white' : 'text-gray-900'
//                 }`}
//               />
//               <span className={`text-3xl font-bold ${
//                 theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
//               } ml-1`}>
//                 {stat.suffix}
//               </span>
//             </div>
//           </div>

//           <h3 className={`text-lg font-semibold mb-1 ${
//             theme === 'dark' ? 'text-white' : 'text-gray-900'
//           }`}>
//             {stat.title}
//           </h3>

//           <p className={`text-sm ${
//             theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
//           }`}>
//             {stat.description}
//           </p>
//         </div>
//       </BackgroundGradient>
//     </div>
//   );
// }

// export default FeaturedCourses;

"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BackgroundGradient } from "./ui/background-gradient";
import CountUp from "./ui/countUp";
import {
  TrendingUp,
  Users,
  Target,
  Clock,
  Globe,
  BarChart2,
  DollarSign,
  Layers,
  Monitor,
} from "lucide-react";
import { motion } from "framer-motion";

function FeaturedCourses() {
  const stats = [
    {
      id: 1,
      title: "Active Clients",
      value: 150,
      icon: Users,
      suffix: "+",
      description: "Satisfied businesses",
    },
    {
      id: 2,
      title: "Campaigns",
      value: 500,
      icon: Target,
      suffix: "+",
      description: "Successful launches",
    },
    {
      id: 3,
      title: "ROAS Average",
      value: 4.2,
      icon: TrendingUp,
      suffix: "x",
      description: "Return on ad spend",
    },
    {
      id: 4,
      title: "Years Experience",
      value: 8,
      icon: Clock,
      suffix: "+",
      description: "Industry expertise",
    },
    {
      id: 5,
      title: "Countries",
      value: 15,
      icon: Globe,
      suffix: "+",
      description: "Global reach",
    },
    {
      id: 6,
      title: "Growth Rate",
      value: 75,
      icon: BarChart2,
      suffix: "%",
      description: "Year-over-year",
    },
    {
      id: 7,
      title: "Ad Spend",
      value: 10,
      icon: DollarSign,
      suffix: "M+",
      description: "Managed annually",
    },
    {
      id: 8,
      title: "Platforms",
      value: 8,
      icon: Layers,
      suffix: "+",
      description: "Advertising channels",
    },
    {
      id: 9,
      title: "Optimizations",
      value: 1200,
      icon: Monitor,
      suffix: "+",
      description: "Monthly adjustments",
    },
    {
      id: 10,
      title: "Team Members",
      value: 25,
      icon: Users,
      suffix: "+",
      description: "Dedicated experts",
    },
  ];

  // Animation variants for fade-in effect
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="py-12 bg-gradient-to-b from-white to-blue-50"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div className="text-center mb-12" variants={cardVariants}>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-3">
            Performance Metrics
          </h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Data-Driven <span className="text-blue-600">Results</span>
          </h1>
          <p className="text-base sm:text-lg max-w-3xl mx-auto text-gray-600">
            Our comprehensive approach delivers measurable outcomes across all
            key performance indicators
          </p>
        </motion.div>

        {/* Stats Grid - Responsive layout */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 mb-12"
          variants={containerVariants}
        >
          {stats.slice(0, 5).map((stat) => (
            <StatCard key={stat.id} stat={stat} variants={cardVariants} />
          ))}
        </motion.div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 mb-12"
          variants={containerVariants}
        >
          {stats.slice(5, 10).map((stat) => (
            <StatCard key={stat.id} stat={stat} variants={cardVariants} />
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div className="text-center" variants={cardVariants}>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-medium rounded-lg shadow-md text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Get Your Custom Report
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <p className="mt-4 text-sm sm:text-base text-gray-500">
            Ready to see what we can do for your business?
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

// Reusable Stat Card Component
function StatCard({ stat, variants }: { stat: any; variants: any }) {
  const IconComponent = stat.icon;

  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl"
      variants={variants}
      whileHover={{
        scale: 1.05,
        rotate: 1,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
    >
      <BackgroundGradient className="h-full">
        <div className="relative rounded-2xl p-5 sm:p-6 bg-white border border-gray-200 group-hover:border-blue-400 transition-all duration-300 shadow-sm group-hover:shadow-xl">
          {/* Subtle gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-100/0 to-blue-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="mb-4 relative z-10">
            <motion.div
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
            </motion.div>
          </div>

          <div className="mb-2 relative z-10">
            <div className="flex items-baseline">
              <CountUp
                from={0}
                to={stat.value}
                duration={3}
                decimals={stat.value % 1 !== 0 ? 1 : 0}
                className="text-2xl sm:text-3xl font-bold text-gray-900"
                easingFn={(t: number) => --t * t * t + 1} // Cubic easing for smoother animation
              />
              <span className="text-2xl sm:text-3xl font-bold text-blue-600 ml-1">
                {stat.suffix}
              </span>
            </div>
          </div>

          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 relative z-10">
            {stat.title}
          </h3>

          <p className="text-sm sm:text-base text-gray-600 relative z-10">
            {stat.description}
          </p>
        </div>
      </BackgroundGradient>
    </motion.div>
  );
}

export default FeaturedCourses;
