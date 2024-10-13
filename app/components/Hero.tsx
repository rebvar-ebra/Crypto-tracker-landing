// components/Hero.tsx
import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 bg-gray-100 dark:bg-gray-800">
      <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100">Track, Analyze, and Optimize Your Crypto Investments</h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Get real-time insights and AI-powered recommendations.</p>
      <div className="mt-8">
        <Link href="/signup" className="bg-blue-500 text-white px-6 py-3 rounded">Get Started</Link>
        <Link href="#features" className="ml-4 bg-transparent border-2 border-blue-500 text-blue-500 dark:border-blue-300 dark:text-blue-300 px-6 py-3 rounded">Learn More</Link>
      </div>
    </section>
  );
};

export default Hero;
