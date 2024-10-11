"use client"

import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const workshops = [
  {
    title: "Introduction to Generative AI",
    date: "July 15, 2023",
    time: "10:00 AM - 2:00 PM EST",
    description: "Explore the basics of generative AI and its applications in various industries.",
    instructor: "Dr. Alex Thompson",
    price: "$99"
  },
  {
    title: "Advanced Data Visualization with Power BI",
    date: "August 5, 2023",
    time: "1:00 PM - 5:00 PM EST",
    description: "Learn to create compelling data stories using advanced Power BI techniques.",
    instructor: "Maria Garcia",
    price: "$129"
  },
  {
    title: "Natural Language Processing in Python",
    date: "August 20, 2023",
    time: "9:00 AM - 4:00 PM EST",
    description: "Hands-on workshop on implementing NLP techniques using Python libraries.",
    instructor: "Dr. James Lee",
    price: "$179"
  },
  {
    title: "Deep Learning for Computer Vision",
    date: "September 10, 2023",
    time: "10:00 AM - 3:00 PM EST",
    description: "Implement state-of-the-art deep learning models for image recognition and object detection.",
    instructor: "Dr. Sarah Chen",
    price: "$149"
  }
];

const WorkshopsPage = () => {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Upcoming Workshops</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {workshops.map((workshop, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{workshop.title}</CardTitle>
                <CardDescription>{workshop.date} | {workshop.time}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{workshop.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <Badge variant="secondary">Instructor: {workshop.instructor}</Badge>
                  <Badge variant="outline">{workshop.price}</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Register Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">Workshop Information</h2>
          <p className="max-w-2xl mx-auto">
            All workshops are conducted online via Zoom. Participants will receive a link to join the workshop after registration. 
            Materials and resources will be provided before the workshop date. For any questions, please contact 
            <a href="mailto:workshops@visualskill.com" className="text-primary hover:underline"> workshops@visualskill.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkshopsPage;