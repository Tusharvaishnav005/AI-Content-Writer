import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { TextSelect, Search, Sparkles, FileText, Zap, BarChart } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <TextSelect className="h-8 w-8 text-primary-600" />,
      title: 'Smart Content Generation',
      description: 'Create high-quality, engaging content with just a few clicks. Our AI understands context and delivers human-like writing.'
    },
    {
      icon: <Search className="h-8 w-8 text-primary-600" />,
      title: 'Keyword Research',
      description: 'Discover high-performing keywords that will boost your SEO rankings and attract more organic traffic to your content.'
    },
    {
      icon: <Sparkles className="h-8 w-8 text-primary-600" />,
      title: 'Content Enhancement',
      description: 'Transform average content into exceptional pieces with our AI-powered enhancement tools. Improve readability, tone, and style.'
    },
    {
      icon: <FileText className="h-8 w-8 text-primary-600" />,
      title: 'Multiple Content Formats',
      description: 'Generate blog posts, social media updates, email newsletters, product descriptions, and more with specialized AI templates.'
    },
    {
      icon: <Zap className="h-8 w-8 text-primary-600" />,
      title: 'Instant Results',
      description: 'Save hours of work with our lightning-fast content generation. Get publish-ready content in seconds, not days.'
    },
    {
      icon: <BarChart className="h-8 w-8 text-primary-600" />,
      title: 'Content Analytics',
      description: 'Track the performance of your AI-generated content with built-in analytics. Understand what works and refine your strategy.'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Powerful Features for Content Creation"
          subtitle="Abun combines cutting-edge AI technology with intuitive design to transform how you create content."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:border-primary-100 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-primary-50 rounded-lg flex items-center justify-center mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;