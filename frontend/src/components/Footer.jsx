function Footer() {
  return (
    <footer className="bg-[#081028] border-t border-white/10 mt-20">

      <div className="px-10 md:px-20 py-16 grid md:grid-cols-4 gap-10">

        {/* Logo */}

        <div>

          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">

            CelebLearn AI

          </h1>

          <p className="text-gray-400 mt-5 leading-7">

            Learn coding and technology with AI-generated celebrity teachers.

          </p>

        </div>

        {/* Quick Links */}

        <div>

          <h2 className="text-2xl font-bold mb-5">
            Quick Links
          </h2>

          <ul className="space-y-3 text-gray-400">

            <li className="hover:text-cyan-400 cursor-pointer transition">
              Home
            </li>

            <li className="hover:text-cyan-400 cursor-pointer transition">
              Courses
            </li>

            <li className="hover:text-cyan-400 cursor-pointer transition">
              Celebrities
            </li>

            <li className="hover:text-cyan-400 cursor-pointer transition">
              About
            </li>

          </ul>

        </div>

        {/* Courses */}

        <div>

          <h2 className="text-2xl font-bold mb-5">
            Courses
          </h2>

          <ul className="space-y-3 text-gray-400">

            <li>Python</li>
            <li>MERN Stack</li>
            <li>CSS</li>
            <li>JavaScript</li>

          </ul>

        </div>

        {/* Contact */}

        <div>

          <h2 className="text-2xl font-bold mb-5">
            Contact
          </h2>

          <p className="text-gray-400">
            support@celeblearnai.com
          </p>

          <p className="text-gray-400 mt-3">
            Gorakhpur, India
          </p>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-white/10 py-6 text-center text-gray-500">

        © 2026 CelebLearn AI. All rights reserved.

      </div>

    </footer>
  );
}

export default Footer;