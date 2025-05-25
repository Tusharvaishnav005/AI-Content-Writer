import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import Card from '../components/Card';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      content: "Abun has completely transformed our content marketing strategy. We're now producing twice the content in half the time, and the quality is consistently excellent. Our blog traffic has increased by 73% since we started using Abun.",
      author: "Sarah Johnson",
      position: "Marketing Director",
      company: "TechVision",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
      id: 2,
      content: "As a solo entrepreneur, Abun has been a game-changer for me. It's like having a professional content team at my fingertips. The keyword research feature alone has helped me rank for terms I never thought possible.",
      author: "Michael Chen",
      position: "Founder",
      company: "GrowthHackers",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg"
    },
    {
      id: 3,
      content: "I was skeptical about AI-generated content, but Abun changed my mind. The quality is exceptional, and it captures our brand voice perfectly. Our editorial team now uses it for all our content drafts.",
      author: "Jessica Miller",
      position: "Content Strategist",
      company: "MediaPulse",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
      id: 4,
      content: "Abun helped us scale our content production from 5 articles per month to over 30, without sacrificing quality. Our SEO performance has improved dramatically, and we're reaching new audiences every day.",
      author: "David Wilson",
      position: "SEO Manager",
      company: "Rankify",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    {
      id: 5,
      content: "The time savings are incredible. What used to take me days now takes minutes. Abun doesn't just generate content—it generates good content that needs minimal editing. Absolutely worth every penny.",
      author: "Emma Roberts",
      position: "Freelance Writer",
      company: "Self-employed",
      avatar: "https://randomuser.me/api/portraits/women/17.jpg"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const visibleCount = 3;

  const nextSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex + 1 >= testimonials.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex - 1 < 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Calculate visible testimonials
  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (activeIndex + i) % testimonials.length;
      result.push(testimonials[index]);
    }
    return result;
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="What Our Users Say"
          subtitle="Don't just take our word for it. See what content creators, marketers, and business owners are saying about Abun."
        />
        
        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {getVisibleTestimonials().map((testimonial, index) => (
              <Card key={testimonial.id} hover className="h-full flex flex-col">
                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-4">
                    <Quote className="h-8 w-8 text-primary-400 opacity-60" />
                  </div>
                  <p className="text-gray-700 mb-6 flex-1">{testimonial.content}</p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.author} 
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                      <p className="text-sm text-gray-600">{testimonial.position}, {testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="flex justify-center mt-12 space-x-4">
            <button 
              onClick={prevSlide} 
              className="p-2 rounded-full bg-gray-100 hover:bg-primary-50 text-gray-600 hover:text-primary-600 transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button 
              onClick={nextSlide} 
              className="p-2 rounded-full bg-gray-100 hover:bg-primary-50 text-gray-600 hover:text-primary-600 transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;