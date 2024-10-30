import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-300 py-8 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-lg font-semibold mb-2">About Us</h4>
          <p className="text-sm text-center md:text-left">
            We are dedicated to providing the best movie experiences. Enjoy browsing our collection and finding your next favorite film!
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/movies" className="hover:text-white">Movies</a></li>
            <li><a href="/series" className="hover:text-white">Series</a></li>
            <li><a href="/watchlist" className="hover:text-white">Watchlist</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="https://facebook.com" className="hover:text-white"><FaFacebook size={20} /></a>
            <a href="https://twitter.com" className="hover:text-white"><FaTwitter size={20} /></a>
            <a href="https://instagram.com" className="hover:text-white"><FaInstagram size={20} /></a>
            <a href="https://linkedin.com" className="hover:text-white"><FaLinkedin size={20} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 text-center border-t border-gray-700 pt-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} MuWiz. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
