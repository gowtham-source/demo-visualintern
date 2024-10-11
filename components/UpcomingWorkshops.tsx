"use client"

import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const workshops = [
  {
    title: "Introduction to Generative AI",
    date: "July 15, 2023",
    description: "Explore the basics of generative AI and its applications in various industries.",
    instructor: "Dr. Alex Thompson"
  },
  {
    title: "Advanced Data Visualization with Power BI",
    date: "August 5, 2023",
    description: "Learn to create compelling data stories using advanced Power BI techniques.",
    instructor: "Maria Garcia"
  },
  {
    title: "Natural Language Processing in Python",
    date: "August 20, 2023",
    description: "Hands-on workshop on implementing NLP techniques using Python libraries.",
    instructor: "Dr. James Lee"
  }
];

const UpcomingWorkshops = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Upcoming Workshops</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {workshops.map((workshop, index) => (
            <div key={index} className="transition-all duration-300 transform hover:scale-105">
              <Card className="h-full flex flex-col bg-white shadow-lg">
                <CardHeader>
                  <CardTitle>{workshop.title}</CardTitle>
                  <CardDescription>{workshop.date}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="mb-4">{workshop.description}</p>
                  <p className="text-sm text-gray-600">Instructor: {workshop.instructor}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white">Register Now</Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingWorkshops;