import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { CheckCircle, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Enter your topic',
      description: 'Simply enter your desired topic or provide some context about what you want to write about.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      number: '02',
      title: 'AI works its magic',
      description: 'Our advanced AI analyzes your input, researches the topic, and crafts engaging, factually accurate content.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      number: '03',
      title: 'Edit and publish',
      description: 'Review the generated content, make any desired edits, and publish your polished piece across your platforms.',
      image: 'https://images.pexels.com/photos/5926389/pexels-photo-5926389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="How Abun Works"
          subtitle="Create valuable content in three simple steps with our AI-powered writing assistant."
        />
        
        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="mb-20 last:mb-0">
              <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-12`}>
                <div className="lg:w-1/2">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl opacity-10 blur-lg"></div>
                    <div className="relative overflow-hidden rounded-xl">
                      <img 
                        src={step.image} 
                        alt={step.title} 
                        className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-1/2">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl font-bold text-primary-600 opacity-50 mr-4">{step.number}</span>
                    <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-lg text-gray-600 mb-6">{step.description}</p>
                  
                  <div className="space-y-3">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary-600 mt-0.5 mr-2 flex-shrink-0" />
                        <p className="text-gray-700">
                          {index === 0 && item === 1 && 'Choose from popular topic suggestions or enter your own'}
                          {index === 0 && item === 2 && 'Set your content length and target audience'}
                          {index === 0 && item === 3 && 'Define the tone and style for your content'}
                          
                          {index === 1 && item === 1 && 'Our AI references up-to-date information from reliable sources'}
                          {index === 1 && item === 2 && 'Structures content with proper headings, paragraphs, and transitions'}
                          {index === 1 && item === 3 && 'Optimizes for readability and SEO automatically'}
                          
                          {index === 2 && item === 1 && 'Easy-to-use editor with formatting tools and suggestions'}
                          {index === 2 && item === 2 && 'Export to multiple formats including Word, PDF, and HTML'}
                          {index === 2 && item === 3 && 'Share directly to WordPress, Medium, or other platforms'}
                        </p>
                      </div>
                    ))}
                  </div>
                  
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block text-center mt-12">
                      <ArrowRight className={`h-10 w-10 mx-auto text-primary-300 transform ${index % 2 === 0 ? 'rotate-0' : 'rotate-180'}`} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;