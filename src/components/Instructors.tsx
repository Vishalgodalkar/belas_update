"use client";
import React from "react";
import { Vortex } from "./ui/vortex";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const teamMembers = [
  {
    id: 1,
    name: "Dreke",
    designation: "Creative Director",
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Ayesha Patel",
    designation: "Lead Strategist",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Rahul Mehta",
    designation: "Digital Marketing Expert",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a4c8b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Sneha Kapoor",
    designation: "Graphic Designer",
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

function Team() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center bg-gradient-to-br from-purple-900 to-indigo-900">
      <Vortex className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
        <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-extrabold text-center mb-8">
          Meet Our Expert Team
        </h2>
        <p className="text-base md:text-lg text-center mb-4 text-gray-300 max-w-3xl">
          Our dedicated professionals bring creativity, strategy, and innovation
          to drive your brand’s success.
        </p>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={teamMembers} />
        </div>
      </Vortex>
    </div>
  );
}

export default Team;
