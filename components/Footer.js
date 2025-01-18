import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        {/* Footer Top */}
        <div className="flex flex-col md:flex-row justify-between mb-8">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-3xl font-bold mb-2">Forum.io</h2>
            <p className="text-lg text-gray-300">
              Your favorite place to chat and connect that's you want!
            </p>
          </div>

          {/* Links Section */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10">
            <div className="flex flex-col items-center md:items-start">
              <h4 className="font-semibold text-lg">Quick Links</h4>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="/" className="hover:text-gray-300 transition duration-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-gray-300 transition duration-300">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-gray-300 transition duration-300">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Media Links */}
            <div className="flex flex-col items-center md:items-start">
              <h4 className="font-semibold text-lg">Follow Us</h4>
              <div className="flex space-x-6 mt-4">
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
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-6 mt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} ChatNow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
