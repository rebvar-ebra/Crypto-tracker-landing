// components/Features.tsx
import React from 'react';

const Features = () => {
  return (
    <section id="features" className="py-20">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Features</h2>
        <p className="mt-4 text-gray-600">Discover the tools to maximize your investments.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <div className="feature-card p-6 bg-white shadow-md text-center">
          <h3 className="text-xl font-bold">Portfolio Tracking</h3>
          <p className="mt-4 text-gray-600">Keep track of your crypto holdings in real-time.</p>
        </div>
        <div className="feature-card p-6 bg-white shadow-md text-center">
          <h3 className="text-xl font-bold">AI Recommendations</h3>
          <p className="mt-4 text-gray-600">Get smart investment advice powered by AI.</p>
        </div>
        <div className="feature-card p-6 bg-white shadow-md text-center">
          <h3 className="text-xl font-bold">Budget & Reports</h3>
          <p className="mt-4 text-gray-600">Track your crypto income and generate detailed reports.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
