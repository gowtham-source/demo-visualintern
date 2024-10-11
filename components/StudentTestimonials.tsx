"use client"

import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Data Scientist at TechCorp",
    testimonial: "Visualskill's AI Fundamentals course was a game-changer for my career. The hands-on projects and expert instructors helped me land my dream job!"
  },
  {
    name: "Michael Chen",
    role: "Machine Learning Engineer",
    testimonial: "The Data Science Internship at Visualskill provided me with real-world experience that set me apart in the job market. Highly recommended!"
  },
  {
    name: "Emily Rodriguez",
    role: "AI Researcher",
    testimonial: "The Deep Learning Masterclass pushed my skills to the next level. The cutting-edge curriculum and supportive community were invaluable."
  },
  {
    name: "David Kim",
    role: "Business Intelligence Analyst",
    testimonial: "Visualskill's Power BI workshop helped me transform our company's data visualization practices. The skills I gained are used daily in my work."
  }
];

const StudentTestimonials = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Student Testimonials</h2>
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <blockquote className="text-lg italic mb-4 text-center">"{testimonial.testimonial}"</blockquote>
                    <cite className="font-semibold">{testimonial.name}</cite>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default StudentTestimonials;