import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow z-10 relative">
      <div className="max-w-[88rem] mx-auto px-4 flex justify-between items-center h-20">
        {/* Brand */}
        <Link to="/" className="text-2xl font-bold text-amber-600">
          Pet Memorial
        </Link>

        {/* Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-3xl md:hidden text-amber-600 focus:outline-none"
        >
          {isOpen ? '✕' : '☰'}
        </button>

        {/* Desktop */}
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-amber-600 hover:text-black">Home</Link>
          <Link to="/memorials/seememorial" className="text-amber-600 hover:text-black">Memorials</Link>
          <Link to="/memorials/signin" className="text-amber-600 hover:text-black">Sign In</Link>
          {/*<Link to="/memorials/signup" className="text-amber-600 hover:text-black">Sign Up</Link>*/}
          <Link to="/memorials/contact" className="text-amber-600 hover:text-black">Contact Us</Link>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col px-4 pb-4 bg-white shadow">
          <Link to="/" className="py-2 text-amber-600 hover:text-black">Home</Link>
          <Link to="/memorials/seememorial" className="py-2 text-amber-600 hover:text-black">Memorials</Link>
          <Link to="/memorials/signin" className="py-2 text-amber-600 hover:text-black">Sign In</Link>
          {/*<Link to="/memorials/signup" className="py-2 text-amber-600 hover:text-black">Sign Up</Link>*/}
          <Link to="/memorials/contact" className="py-2 text-amber-600 hover:text-black">Contact Us</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
