"use client"

import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const programs = [
  {
    title: "AI Fundamentals",
    type: "Course",
    description: "Learn the basics of Artificial Intelligence and Machine Learning.",
    duration: "8 weeks",
    level: "Beginner"
  },
  {
    title: "Data Science Internship",
    type: "Internship",
    description: "Gain hands-on experience working on real-world data science projects.",
    duration: "3 months",
    level: "Intermediate"
  },
  {
    title: "Deep Learning Masterclass",
    type: "Course",
    description: "Advanced techniques in neural networks and deep learning architectures.",
    duration: "12 weeks",
    level: "Advanced"
  }
];

const FeaturedPrograms = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="transition-all duration-300 transform hover:scale-105">
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle>{program.title}</CardTitle>
                  <CardDescription>{program.type}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="mb-4">{program.description}</p>
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary">{program.duration}</Badge>
                    <Badge>{program.level}</Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Learn More</Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPrograms;