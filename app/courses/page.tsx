"use client"

import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const courses = [
  {
    title: "AI Fundamentals",
    description: "Learn the basics of Artificial Intelligence and Machine Learning.",
    duration: "8 weeks",
    level: "Beginner",
    domain: "AI"
  },
  {
    title: "Data Analytics Essentials",
    description: "Master the fundamentals of data analysis and visualization.",
    duration: "10 weeks",
    level: "Beginner",
    domain: "Data Analytics"
  },
  {
    title: "Deep Learning Masterclass",
    description: "Advanced techniques in neural networks and deep learning architectures.",
    duration: "12 weeks",
    level: "Advanced",
    domain: "Deep Learning"
  },
  {
    title: "Generative AI and GANs",
    description: "Explore the world of generative models and their applications.",
    duration: "8 weeks",
    level: "Intermediate",
    domain: "Generative AI"
  },
  {
    title: "Power BI for Business Intelligence",
    description: "Learn to create powerful dashboards and reports with Power BI.",
    duration: "6 weeks",
    level: "Intermediate",
    domain: "Power BI"
  },
  {
    title: "Applied Data Science",
    description: "End-to-end data science projects from data collection to deployment.",
    duration: "14 weeks",
    level: "Advanced",
    domain: "Data Science"
  }
];

const CoursesPage = () => {
  const [domainFilter, setDomainFilter] = useState("All");
  const [levelFilter, setLevelFilter] = useState("All");

  const filteredCourses = courses.filter(course => 
    (domainFilter === "All" || course.domain === domainFilter) &&
    (levelFilter === "All" || course.level === levelFilter)
  );

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Courses</h1>
        
        <div className="flex justify-center space-x-4 mb-8">
          <Select onValueChange={(value) => setDomainFilter(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Domain" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Domains</SelectItem>
              <SelectItem value="AI">AI</SelectItem>
              <SelectItem value="Data Analytics">Data Analytics</SelectItem>
              <SelectItem value="Deep Learning">Deep Learning</SelectItem>
              <SelectItem value="Generative AI">Generative AI</SelectItem>
              <SelectItem value="Power BI">Power BI</SelectItem>
              <SelectItem value="Data Science">Data Science</SelectItem>
            </SelectContent>
          </Select>

          <Select onValueChange={(value) => setLevelFilter(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Levels</SelectItem>
              <SelectItem value="Beginner">Beginner</SelectItem>
              <SelectItem value="Intermediate">Intermediate</SelectItem>
              <SelectItem value="Advanced">Advanced</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{course.title}</CardTitle>
                <CardDescription>{course.domain}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{course.description}</p>
                <div className="flex justify-between items-center">
                  <Badge variant="secondary">{course.duration}</Badge>
                  <Badge>{course.level}</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Enroll Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;