
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

import Link from 'next/link';
import ScrollToTop from "./ScrollToTop";


function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 bottom-0 w-full fixed">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-4">
        <p className="text-center">&copy; {new Date().getFullYear()} Chat App. All rights reserved.</p>
        <div className="flex space-x-4">
        <a
                  href="https://m.facebook.com/profile.php?id=100042475575989"
                  className="text-white hover:text-gray-300 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="h-6 w-6" />
                </a>
                <a
                  href="https://x.com/NAYANDAS618747"
                  className="text-white hover:text-gray-300 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="h-6 w-6" />
                </a>
                <a
                  href="https://instagram.com"
                  className="text-white hover:text-gray-300 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="h-6 w-6" />
                </a>
                <a
                  href="www.linkedin.com/in/nayan-das2004"
                  className="text-white hover:text-gray-300 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="h-6 w-6" />
                </a>
                
        </div>
       
      </div>
    </footer>
  );
}

export default Footer;
