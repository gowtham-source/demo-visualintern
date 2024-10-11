"use client"

import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-down">
          Empower Your Future in AI and Data Science
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-fade-in-up">
          Join Visualskill for cutting-edge courses, internships, and workshops
        </p>
        <div className="space-x-4 animate-fade-in">
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            Explore Courses
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-purple-600">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;