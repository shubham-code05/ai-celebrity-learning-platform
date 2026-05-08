function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-5 border-b border-gray-800">

      <h1 className="text-3xl font-bold text-purple-500">
        CelebLearn AI
      </h1>

      <ul className="hidden md:flex gap-8 text-lg">
        <li className="hover:text-purple-400 cursor-pointer">Home</li>
        <li className="hover:text-purple-400 cursor-pointer">Courses</li>
        <li className="hover:text-purple-400 cursor-pointer">Celebrities</li>
        <li className="hover:text-purple-400 cursor-pointer">About</li>
      </ul>

      <button className="bg-purple-600 px-5 py-2 rounded-xl hover:bg-purple-700 transition">
        Login
      </button>

    </nav>
  );
}

export default Navbar;