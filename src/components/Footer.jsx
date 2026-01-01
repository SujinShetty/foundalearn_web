// src/components/Footer.jsx
import React from 'react';

const footerLinks = [
  {
    title: 'Product',
    links: ['Features', 'Pricing', 'FAQ', 'Testimonials'],
  },
  {
    title: 'Company',
    links: ['About Us', 'Our Team', 'Contact', 'Careers'],
  },
  {
    title: 'Resources',
    links: ['Blog', 'Guides', 'Webinars', 'Support'],
  },
  {
    title: 'Legal',
    links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-base text-gray-600 hover:text-primary-600"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-base text-gray-500 text-center">
            &copy; {new Date().getFullYear()} FoundaLearn. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;