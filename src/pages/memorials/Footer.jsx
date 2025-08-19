import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h3 className="text-3xl font-bold uppercase mb-4">Pet Memorial</h3>
          <p className="text-sm text-gray-400">
            Honoring the love, loyalty, and life of our cherished companions.
            Join a compassionate community that remembers together.
          </p>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-lg font-semibold mb-4">About Us</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Our Story</li>
            <li>Meet the Team</li>
            <li>Support & Help</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Write a Tribute</li>
            <li>Community Wall</li>
            <li>Grief Support</li>
            <li>Pet Loss Blog</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Cookie Preferences</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
