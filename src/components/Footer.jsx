import React from "react";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-white py-5 px-6 md:px-20 text-center shadow-inner"
    >
      <h4 className="text-xl font-bold mb-6">Get in Touch</h4>

      <p className="mb-6 text-lg">
        Email: <span className="font-semibold">tylerjackb32@gmail.com</span> | Phone:{" "}
        <span className="font-semibold">(715) 928-1532</span>
      </p>

      <div className="flex justify-center space-x-10 text-lg">
        <a
          href="https://github.com/tyler-bowman"
          target="_blank"
          className="text-blue-500 hover:text-blue-800 transition"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/tyler-bowman-4a4557330/"
          target="_blank"
          className="text-blue-500 hover:text-blue-800 transition"
        >
          LinkedIn
        </a>
      </div>

      <p className="mt-6 text-gray-400 text-lg">&copy; 2025 Tyler Bowman</p>
    </footer>
  );
}

