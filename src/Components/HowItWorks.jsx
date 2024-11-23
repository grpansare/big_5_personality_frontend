import React from 'react';
import { FaClipboardList, FaUserAlt, FaCheckCircle, FaShippingFast } from 'react-icons/fa'; // React Icons

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: 'Step 1: Take the Test',
      description: 'Start by taking the Big 5 Personality Test. It only takes a few minutes to complete and provides you with insightful results.',
      icon: <FaClipboardList className="h-6 w-6 text-white" />,
    },
    {
      id: 2,
      title: 'Step 2: Get Your Results',
      description: 'Receive a detailed report on your personality traits and how they impact your behavior and interactions.',
      icon: <FaUserAlt className="h-6 w-6 text-white" />,
    },
    {
      id: 3,
      title: 'Step 3: Understand Yourself',
      description: 'Use your results to understand your strengths and areas for growth. Gain insights into how you approach various situations.',
      icon: <FaCheckCircle className="h-6 w-6 text-white" />,
    },
    {
      id: 4,
      title: 'Step 4: Take Action',
      description: 'Apply your newfound knowledge to improve your personal and professional life, enhance relationships, and make better decisions.',
      icon: <FaShippingFast className="h-6 w-6 text-white" />,
    },
  ];

  return (
    <div className="w-full px-6 py-12">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">How It Works</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step) => (
          <div key={step.id} className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="bg-green-500 p-4 rounded-full mb-6 inline-block">
              {step.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;