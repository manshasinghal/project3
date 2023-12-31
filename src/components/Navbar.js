import React, { useState } from 'react';
import logo from './pictures/logo2.png';
import { list } from './List';
import { Link } from 'react-router-dom';
import { X, Menu } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" text-black w-full ">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <div className="flex items-center space-x-8">
          <div className="w-24 h-24s">
            <img src={logo} alt="Logo" />
          </div>
          
        </div>

        <div className="hidden lg:flex space-x-6">
          <ul className="flex space-x-8">
            {list.map(({ index, path, name }) => (
              <li
                key={index}
                className="relative group cursor-pointer font-bold transition-all text-xl duration-300 hover:text-indigo-600"
              >
                <Link to={path}>{name}</Link>
                <div className="absolute w-full h-1 bg-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:hidden">
          <button
            className="p-2 rounded-md bg-purple-800 text-white"
            onClick={toggleNavbar}
          >
            {isOpen ? (
              <X size={24} className="h-6 w-6" />
            ) : (
              <Menu size={24} className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-purple-600">
          <ul className="space-y-4 p-4">
            {list.map(({ index, path, name }) => (
              <li
                key={index}
                className="cursor-pointer font-bold transition-all duration-300 hover:text-yellow-300"
              >
                <Link to={path}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
