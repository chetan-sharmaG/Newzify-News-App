import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="px-6 md:px-10 bg-[#EEEAEA] py-8 flex flex-col gap-6">
      
      {/* Top Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
        
        {/* Branding + Description */}
        <div className="text-center sm:text-left sm:w-[40%] text-sm text-red-600">
          <h1 className="text-2xl font-bold mb-1">Newzify</h1>
          <p>Craft narratives that ignite inspiration, knowledge, books, and entertainment.</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center sm:justify-end gap-4 text-sm font-medium text-gray-700">
          <Link target="_blank" to="/news/national" className="hover:text-red-600">India</Link>
          <Link target="_blank" to="/news/world" className="hover:text-red-600">World</Link>
          <Link target="_blank" to="/news/politics" className="hover:text-red-600">Politics</Link>
          <Link target="_blank" to="/news/business" className="hover:text-red-600">Business</Link>
          <Link target="_blank" to="/news/entertainment" className="hover:text-red-600">Entertainment</Link>
          <Link target="_blank" to="/news/technology" className="hover:text-red-600">Technology</Link>
          <Link target="_blank" to="/news/startup" className="hover:text-red-600">Startup</Link>
          <Link target="_blank" to="/news/science" className="hover:text-red-600">Science</Link>
          <Link target="_blank" to="/news/automobile" className="hover:text-red-600">Auto-Mobile</Link>
          <Link target="_blank" to="/sports" className="hover:text-red-600">Sports</Link>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-700 border-t border-gray-300 pt-4">
        <p className="text-center sm:text-left mb-2 sm:mb-0">&#169; 2024 Newzify. All rights reserved.</p>
        <div className="flex gap-4 flex-wrap justify-center">
          <button className="hover:text-red-600">Terms of Service</button>
          <button className="hover:text-red-600">Privacy Policy</button>
          <button className="hover:text-red-600">Cookie Policy</button>
          <button className="hover:text-red-600">Partners</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
