import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./card";
import { Button } from "./button";
import CountUp from "react-countup";
import { MapPin, Eye, Sun, Moon } from "lucide-react";

const BillboardAnalytics = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-red-100 px-6 py-10">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
          Explore Our Billboard Analytics
        </h1>
        <p className="text-lg text-gray-700">
          Data-driven insights for every advertising location
        </p>
        <Button className="mt-6">Launch a Campaign</Button>
      </motion.div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {[
          { label: "Campaigns", end: 820 },
          { label: "Clients", end: 240 },
          { label: "ROI %", end: 135 },
          { label: "Total Budget (Cr)", end: 7.8 },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            className="bg-white p-6 rounded-2xl shadow-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              {item.label}
            </h3>
            <CountUp
              end={item.end}
              duration={2}
              className="text-3xl font-bold text-red-600"
            />
          </motion.div>
        ))}
      </div>

      {/* Billboard Card Sample */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((id) => (
          <motion.div
            key={id}
            className="relative"
            whileHover={{ rotate: 1 }}
            transition={{ type: "spring" }}
          >
            <Card className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl">
              <img
                src={`https://source.unsplash.com/random/400x200?billboard-${id}`}
                alt="Billboard"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h4 className="font-bold text-lg mb-2">Location {id}</h4>
                <div className="flex items-center text-sm text-gray-500 gap-2 mb-2">
                  <MapPin className="w-4 h-4" />
                  Mumbai, Bandra
                </div>
                <div className="flex justify-between text-xs text-gray-700">
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" /> CPM: ₹320
                  </div>
                  <div className="flex items-center gap-1">
                    <Sun className="w-4 h-4" />
                    <Moon className="w-4 h-4" /> Lit: Yes
                  </div>
                </div>
                <Button
                  className="mt-4 w-full"
                  onClick={() => window.open("https://maps.google.com?q=mumbai+bandra", "_blank")}
                >
                  View on Map
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BillboardAnalytics;