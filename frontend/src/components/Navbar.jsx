import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#081028]/70 border-b border-white/10">

      <div className="flex items-center justify-between px-8 md:px-16 py-5">

        {/* Logo */}

        <Link to="/">

          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent cursor-pointer">
            CelebLearn AI
          </h1>

        </Link>

        {/* Desktop Nav Links */}

        <ul className="hidden md:flex gap-10 text-lg font-medium items-center">

          <li className="hover:text-cyan-400 cursor-pointer transition duration-300">
            <Link to="/">Home</Link>
          </li>

          <li className="hover:text-cyan-400 cursor-pointer transition duration-300">
            <Link to="/courses">Courses</Link>
          </li>

          <li className="hover:text-cyan-400 cursor-pointer transition duration-300">
            <Link to="/celebrities">Celebrities</Link>
          </li>

          <li className="hover:text-cyan-400 cursor-pointer transition duration-300">
            <Link to="/about">About</Link>
          </li>

        </ul>

        {/* Desktop Login Button */}

        <Link to="/login">

          <button className="hidden md:block bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition duration-300 shadow-lg shadow-cyan-500/20">

            Login

          </button>

        </Link>

        {/* Mobile Menu Button */}

        <div
          className="md:hidden text-3xl text-white cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >

          {menuOpen ? <FaTimes /> : <FaBars />}

        </div>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (

        <div className="md:hidden flex flex-col items-center gap-8 py-8 bg-[#081028] border-t border-white/10 text-lg font-medium">

          <Link
            to="/"
            className="hover:text-cyan-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/courses"
            className="hover:text-cyan-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            Courses
          </Link>

          <Link
            to="/celebrities"
            className="hover:text-cyan-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            Celebrities
          </Link>

          <Link
            to="/about"
            className="hover:text-cyan-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>

          <Link
            to="/login"
            onClick={() => setMenuOpen(false)}
          >

            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition duration-300">

              Login

            </button>

          </Link>

        </div>

      )}

    </nav>
  );
}

export default Navbar;