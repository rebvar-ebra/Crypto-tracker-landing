// components/Footer.tsx
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 text-center dark:bg-gray-900 dark:text-gray-400">
      <p>&copy; 2024 Crypto Tracker. All rights reserved.</p>
      <div className="mt-4">
        <Link href="/privacy">Privacy Policy</Link> | <Link href="/terms">Terms of Service</Link>
      </div>
    </footer>
  );
};

export default Footer;
