import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-10 bg-white shadow-md">
      <h1 className="text-3xl font-bold">Tyler Bowman</h1>
      <ul className="flex space-x-6 text-gray-700 font-medium text-2xl">
	<li><a href="#about" className="hover:text-blue-500">About</a></li>
        <li><a href="#seeweed" className="hover:text-blue-500">Seeweed</a></li>
        <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
        <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
      </ul>
    </nav>
  );
}

