import React from 'react';

const Footer = ({ isDark }) => {
  return (
    <footer className={`border-t ${isDark ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-white'} py-8`}>
      <div className="max-w-full mx-auto px-8 sm:px-12 lg:px-16 text-center">
        <p className="text-gray-500">© 2026 Narendra Deshmukh. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;