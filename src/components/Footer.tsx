import React from "react";

function Footer() {
  return (
    <footer className="bg-white text-gray-700 py-12 border-t border-gray-200">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        {/* About Us */}
        <div>
          <h2 className="text-gray-900 text-lg font-semibold mb-4">
            About Belas
          </h2>
          <p className="mb-4">
            Belas is a leading service provider specializing in Hoardings, EV
            advertizement, and comprehensive digital marketing services. We help
            businesses grow with innovative advertising and design.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-gray-900 text-lg font-semibold mb-4">
            Quick Links
          </h2>
          <ul>
            <li>
              <a
                href="/"
                className="hover:text-blue-600 transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/courses"
                className="hover:text-blue-600 transition-colors duration-300"
              >
                Hoardings
              </a>
            </li>
            <li>
              <a
                href="/EV"
                className="hover:text-blue-600 transition-colors duration-300"
              >
                EV
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-blue-600 transition-colors duration-300"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-gray-900 text-lg font-semibold mb-4">
            Our Services
          </h2>
          <ul>
            <li>
              <a
                href="/contact"
                className="hover:text-blue-600 transition-colors duration-300"
              >
                Digital Marketing
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-blue-600 transition-colors duration-300"
              >
                Website Designing
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-blue-600 transition-colors duration-300"
              >
                Social Media Management
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-blue-600 transition-colors duration-300"
              >
                Flex Designing
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-gray-900 text-lg font-semibold mb-4">
            Contact Us
          </h2>
          <p>New Delhi, India</p>
          <p>Delhi 110001</p>
          <p>Email: info@belas.com</p>
          <p>Phone: +91 12345 67890</p>
        </div>
      </div>

      <p className="text-center text-xs text-gray-500 pt-8">
        © 2025 Belas. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;

// components/Footer.js
// import React from "react";
// import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

// const Footer: React.FC = () => {
//   return (
//     <footer className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-12">
//       <div className="container mx-auto px-6 lg:px-8">
//         {/* Main Footer Content */}
//         <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12">
//           {/* Brand Section */}
//           <div className="text-center lg:text-left">
//             <h1 className="text-3xl font-extrabold tracking-tight mb-3">
//               Bela's Creation
//             </h1>
//             <p className="text-blue-200 max-w-xs mx-auto lg:mx-0">
//               Advertising That Doesn't Just Shine, It Sells.
//             </p>
//             {/* Social Media Links */}
//             <div className="flex justify-center lg:justify-start mt-6 space-x-4">
//               <a
//                 href="#"
//                 className="text-blue-300 hover:text-white transition-colors duration-300"
//                 aria-label="Facebook"
//               >
//                 <FaFacebookF className="w-6 h-6" />
//               </a>
//               <a
//                 href="#"
//                 className="text-blue-300 hover:text-white transition-colors duration-300"
//                 aria-label="Instagram"
//               >
//                 <FaInstagram className="w-6 h-6" />
//               </a>
//               <a
//                 href="#"
//                 className="text-blue-300 hover:text-white transition-colors duration-300"
//                 aria-label="YouTube"
//               >
//                 <FaYoutube className="w-6 h-6" />
//               </a>
//             </div>
//           </div>

//           {/* Services Section */}
//           <div className="text-center lg:text-left">
//             <h2 className="text-xl font-semibold mb-4">Hoardings</h2>
//             <ul className="list-none space-y-3">
//               <li>
//                 <a
//                   href="#"
//                   className="text-blue-200 hover:text-blue-400 transition-colors duration-300"
//                 >
//                   EV Advertising
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-blue-200 hover:text-blue-400 transition-colors duration-300"
//                 >
//                   Digital Marketing
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-blue-200 hover:text-blue-400 transition-colors duration-300"
//                 >
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Contact Section */}
//           <div className="text-center lg:text-left">
//             <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
//             <p className="text-blue-200">New Delhi, India</p>
//             <p className="text-blue-200">Delhi 110001</p>
//             <p className="text-blue-200">Email: info@belas.com</p>
//             <p className="text-blue-200">Phone: +91 12345 67890</p>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="mt-12 pt-8 border-t border-blue-800 text-center">
//           <p className="text-blue-300 text-sm">
//             &copy; {new Date().getFullYear()} Bela's Creation. All rights
//             reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
