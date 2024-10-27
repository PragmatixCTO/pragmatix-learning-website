import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Check, ChevronLeft, ShoppingCart } from "lucide-react";

// PricingTable Component
const PricingTable = () => {
  const plans = [
       {
      name: "Bronze",
      price: "890",
      originalPrice: "1500",
      validity: "30 days",
      features: [
               "1 Coaching Session",
        "1 Mock Interview",
        "1 Resume Review",
        "",
        ""
      ],
      color: "text-[#CD7F32]",
      bgColor: "bg-white"
    },
    {
      name: "Silver",
      price: "1990",
      originalPrice: "3400",
      validity: "45 days",
      features: [
                "2 Coaching Sessions",
        "2 Mock Interviews",
        "3 Resume Reviews",
        "1 Portfolio Consultations"
      ],
      color: "text-gray-400",
      bgColor: "bg-white",
      recommended: true
    },
    {
      name: "Gold",
      price: "3990",
      originalPrice: "6400",
      validity: "90 days",
      features: [
              "4 Coaching Sessions",
        "4 Mock Interviews",
        "Unlimited Resume Reviews",
        "2 Portfolio Consultations"
      ],
      color: "text-[#F0C808]",
      bgColor: "bg-white"
    }
  ];

  return (
    <div className="py-12 flex flex-col bg-[#F4F4F4]">
      <div className="container mx-auto px-1">
        <div className="text-left mb-12">
          <h2 className="text-5xl font-semibold text-[#264B78] mb-4">Choose Your Plan</h2>
          <p className="text-2xl text-gray-600">Get started with the package that best suits your needs</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative flex flex-col transform hover:scale-105 transition-all duration-200 ${
                plan.recommended ? 'border-2 border-[#0D98B9]' : ''
              } ${plan.bgColor}`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#0D98B9] text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Best-seller
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center flex-shrink-0">
                <h3 className={`text-2xl font-bold ${plan.color}`}>{plan.name}</h3>
                <div className="mt-4">
                  <span className="text-gray-400 line-through text-lg">₹{plan.originalPrice}</span>
                  <div className="flex items-center justify-center">
                    <span className="text-4xl font-bold text-[#264B78]">₹{plan.price}</span>
                    <span className="ml-2 text-sm text-gray-500">/ {plan.validity}</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-[#06B6B6] mr-2" />
                      <span className="text-gray-600">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter className="mt-auto pt-6">
                 
                  
               
                <Button 
                className={`w-full ${
                  plan.recommended 
                    ? 'bg-[#0D98B9] text-white hover:bg-[#264B78]' 
                    : 'bg-[#264B78] text-white hover:bg-[#0D98B9]'
                }`}
                  variant="outline"
                  onClick={() => window.location.href = 'https://pragmatixlearning.zohobookings.com/#/4687225000000037124'}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Buy Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main Page Component
const PragmatixPro = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ 
      behavior: 'smooth'
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F4F4F4]">
      <header className="bg-[#1e4976] py-4">
        <div className="container mx-auto px-4">
          <a href="/" className="inline-block">
            <Button variant="ghost" className="text-white">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </a>
        </div>
      </header>

      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-[#264B78] mb-6">Pragmatix Pro</h1>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg mb-4">
                Pragmatix Pro is our flagship program designed to accelerate your career growth. 
                There is a package for everyone to choose from to help you pave a path to your dream job. 
              </p>
             <p className="text- lg mb-4 text-[#E85F5C]">
              Click the "Buy Now" button below to book a free 10-min consultation with one of our experts to know more.
              </p>
              <h2 className="text-2xl font-semibold text-[#0D98B9] mb-4">Key Features:</h2>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Tailor-made Action Plan</li>
                <li>Mock Interviews and One-to-One Mentoring</li>
                <li>Resume and Portfolio Reviews</li>
                <li>Personal Branding Consultation</li>
              </ul>
              <Button 
                onClick={scrollToPricing}
                className="bg-[#0D98B9] text-white hover:bg-[#264B78] transition-colors"
              >
                Get started!
              </Button>
            </div>
            <div>
              <img
                src="/images/pragmatixpro.jpeg"
                alt="Pragmatix Pro"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>

        <div id="pricing" className="mt-16">
          <PricingTable />
        </div>
      </main>

      <footer className="bg-[#264B78] text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Pragmatix Learning. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default PragmatixPro;