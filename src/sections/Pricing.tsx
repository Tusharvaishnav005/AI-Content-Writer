import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { Check } from 'lucide-react';

const Pricing = () => {
  const [annual, setAnnual] = useState(true);
  
  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for individuals and small projects.',
      monthlyPrice: 29,
      annualPrice: 24,
      features: [
        '50,000 words per month',
        '10 keyword research queries',
        'Basic content formats',
        'Email support',
        'Export to PDF, Word',
        '1 user'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Professional',
      description: 'Ideal for professional content creators and small businesses.',
      monthlyPrice: 79,
      annualPrice: 69,
      features: [
        '200,000 words per month',
        'Unlimited keyword research',
        'All content formats',
        'Priority support',
        'CMS integrations',
        '3 users'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Business',
      description: 'For teams and businesses with high content needs.',
      monthlyPrice: 199,
      annualPrice: 169,
      features: [
        'Unlimited words',
        'Advanced analytics',
        'Custom AI training',
        'Dedicated support',
        'API access',
        'Unlimited users'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Simple, Transparent Pricing"
          subtitle="Choose the plan that's right for you. All plans include a 7-day free trial."
        />
        
        <div className="flex justify-center mb-12">
          <div className="bg-white p-1 rounded-full shadow-sm flex items-center">
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                !annual ? 'bg-primary-600 text-white shadow-md' : 'text-gray-600'
              }`}
              onClick={() => setAnnual(false)}
            >
              Monthly
            </button>
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                annual ? 'bg-primary-600 text-white shadow-md' : 'text-gray-600'
              }`}
              onClick={() => setAnnual(true)}
            >
              Annual <span className="text-xs opacity-90">Save 15%</span>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg ${
                plan.popular ? 'border-2 border-primary-500 md:scale-105' : 'border border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  Most Popular
                </div>
              )}
              
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900">
                    ${annual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-600 ml-2">/month</span>
                </div>
                {annual && (
                  <p className="text-sm text-primary-600 mt-2">
                    Billed annually (${plan.annualPrice * 12}/year)
                  </p>
                )}
              </div>
              
              <div className="p-6">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-primary-600 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.popular ? 'primary' : 'outline'} 
                  size="lg" 
                  fullWidth
                >
                  {plan.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Need a custom plan for your enterprise?</p>
          <Button variant="secondary" size="lg">
            Contact Us for Enterprise Pricing
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;