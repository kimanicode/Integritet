import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300">&copy; 2024 Integritet. All rights reserved.</p>
          <div className="flex mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-gray-400  mr-4"><FaInstagram  className=''/></a>
            <a href="#" className="text-gray-300 hover:text-gray-400 mr-4"><FaFacebook /></a>
            <a href="#" className="text-gray-300 hover:text-gray-400 mr-4"><FaTwitter /></a>
            <a href="#" className="text-gray-300 hover:text-gray-400"><FaWhatsapp /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
