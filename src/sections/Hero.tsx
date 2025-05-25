import React from 'react';
import Button from '../components/Button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-36 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6 animate-fade-in">
              AI Content Writer That Creates <span className="text-primary-600">Valuable Content</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-fade-in-delay-1">
              Transform your ideas into engaging, SEO-optimized content in seconds. Abun helps you create high-quality articles, blog posts, and more with the power of AI.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-delay-2">
              <Button size="lg">
                Try Abun Free
              </Button>
              <Button variant="outline" size="lg" className="group">
                <span>See how it works</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
            
            <div className="mt-12 flex items-center space-x-6 animate-fade-in-delay-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((num) => (
                  <img 
                    key={num}
                    src={`https://randomuser.me/api/portraits/women/${num + 20}.jpg`} 
                    alt="User" 
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center mb-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 text-sm">Trusted by <span className="font-semibold">5,000+</span> content creators</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative animate-fade-in-up">
            <div className="relative z-10 bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="bg-gray-800 px-4 py-2 flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-gray-400 text-sm">Abun Content Generator</div>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2">Generate a blog post about:</h3>
                  <div className="flex">
                    <input 
                      type="text" 
                      value="The future of AI in content creation" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500" 
                      readOnly
                    />
                    <button className="bg-primary-600 text-white px-4 py-2 rounded-r-lg">
                      Generate
                    </button>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="animate-pulse-slow">
                    <h4 className="font-bold text-xl mb-2">The Future of AI in Content Creation: Revolutionizing the Digital Landscape</h4>
                    <p className="text-gray-700">
                      Artificial Intelligence is rapidly transforming how we create, distribute, and consume content. In this comprehensive guide, we'll explore how AI is revolutionizing content creation and what this means for marketers, creators, and businesses in the coming years.
                    </p>
                    <div className="mt-4 space-y-2">
                      <p className="text-gray-700">
                        <span className="font-semibold">1. Personalization at Scale</span> - AI enables content personalization for individual users without manual effort...
                      </p>
                      <p className="text-gray-700">
                        <span className="font-semibold">2. Enhanced Creativity</span> - Contrary to popular belief, AI is augmenting human creativity rather than replacing it...
                      </p>
                      <p className="text-gray-700">
                        <span className="font-semibold">3. Data-Driven Content Strategy</span> - AI analyzes vast amounts of data to identify trends and topics...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-gradient-to-br from-primary-400 to-secondary-600 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-gradient-to-br from-secondary-400 to-primary-600 rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;