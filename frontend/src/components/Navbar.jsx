function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#081028]/70 border-b border-white/10">

      <div className="flex items-center justify-between px-8 md:px-16 py-5">

        {/* Logo */}

        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          CelebLearn AI
        </h1>

        {/* Nav Links */}

        <ul className="hidden md:flex gap-10 text-lg font-medium">

          <li className="hover:text-cyan-400 cursor-pointer transition duration-300">
            Home
          </li>

          <li className="hover:text-cyan-400 cursor-pointer transition duration-300">
            Courses
          </li>

          <li className="hover:text-cyan-400 cursor-pointer transition duration-300">
            Celebrities
          </li>

          <li className="hover:text-cyan-400 cursor-pointer transition duration-300">
            About
          </li>

        </ul>

        {/* Login Button */}

        <button className="bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition duration-300 shadow-lg shadow-cyan-500/20">

          Login

        </button>

      </div>

    </nav>
  );
}

export default Navbar;