import React from 'react';
import Button from '../components/Button';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Transform Your Content Creation Today</h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Join thousands of content creators, marketers, and businesses who are saving time and creating better content with Abun.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              className="bg-white text-primary-600 hover:bg-gray-100 hover:text-primary-700 group"
              size="lg"
            >
              <span>Start Your Free Trial</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              size="lg"
            >
              Schedule a Demo
            </Button>
          </div>
          
          <p className="mt-8 text-sm opacity-80">
            No credit card required. 7-day free trial. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;