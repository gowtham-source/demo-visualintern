"use client"

import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const internships = [
  {
    title: "AI Research Intern",
    company: "TechInnovate Labs",
    description: "Assist in cutting-edge AI research projects and contribute to academic papers.",
    duration: "6 months",
    type: "Full-time",
    location: "Remote"
  },
  {
    title: "Data Science Intern",
    company: "DataCrunch Analytics",
    description: "Work on real-world data science projects and develop predictive models.",
    duration: "3 months",
    type: "Part-time",
    location: "Hybrid"
  },
  {
    title: "Machine Learning Engineer Intern",
    company: "AICore Solutions",
    description: "Develop and deploy machine learning models for production environments.",
    duration: "4 months",
    type: "Full-time",
    location: "On-site"
  },
  {
    title: "Business Intelligence Intern",
    company: "InsightFlow",
    description: "Create data visualizations and dashboards using Power BI and Tableau.",
    duration: "3 months",
    type: "Part-time",
    location: "Remote"
  }
];

const InternshipsPage = () => {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Internship Opportunities</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {internships.map((internship, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{internship.title}</CardTitle>
                <CardDescription>{internship.company}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{internship.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">{internship.duration}</Badge>
                  <Badge variant="outline">{internship.type}</Badge>
                  <Badge>{internship.location}</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Apply Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">Application Instructions</h2>
          <p className="max-w-2xl mx-auto">
            To apply for an internship, please send your resume, a cover letter, and any relevant project samples to 
            <a href="mailto:internships@visualskill.com" className="text-primary hover:underline"> internships@visualskill.com</a>. 
            Be sure to mention the specific internship title in your email subject line.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InternshipsPage;