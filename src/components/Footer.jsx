import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-black font-landingPageHeading">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Left Section */}
        <div>
          <h1 className="text-lg font-semibold tracking-widest mb-6">AUTONO</h1>
          <div className="space-y-2 text-sm">
            <p>Technology</p>
            <p>About</p>
            <p>Careers</p>
          </div>
        </div>

        {/* Middle Section */}
        <div className="text-sm space-y-2">
          <p>Tel: 123-456-7890</p>
          <p>Email: info@mysite.com</p>
          <p>500 Terry Francine St</p>
          <p>San Francisco, CA 94158</p>
        </div>

        {/* Right Section */}
        <div>
          <h2 className="text-sm tracking-widest font-semibold mb-4">SUBSCRIBE</h2>
          <p className="text-sm mb-4">Sign up to receive Autono news and updates.</p>
          <form className="flex items-center mb-4">
            <input
              type="email"
              placeholder="Email *"
              className="border border-gray-400 px-4 py-2 w-full mr-2 text-sm outline-none focus:ring-2 focus:ring-black"
            />
            <button className="bg-black text-white px-4 py-2 text-sm">Subscribe</button>
          </form>
          <div className="flex items-center space-x-2 text-sm">
            <input type="checkbox" id="newsletter" />
            <label htmlFor="newsletter">Yes, subscribe me to your newsletter.*</label>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-6 px-6 flex flex-col md:flex-row justify-between items-center text-xs">
        <p>© 2035 by Autono. Powered and secured by <a href="#" className="underline">Wix</a></p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <FaLinkedinIn className="hover:text-gray-500 cursor-pointer" />
          <FaFacebookF className="hover:text-gray-500 cursor-pointer" />
          <FaTwitter className="hover:text-gray-500 cursor-pointer" />
          <FaInstagram className="hover:text-gray-500 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
