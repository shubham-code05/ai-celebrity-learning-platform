import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-20">

      {/* LEFT SIDE */}

      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="max-w-xl"
      >

        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Learn From{" "}
          <span className="text-purple-500">
            AI Celebrities
          </span>
        </h1>

        <p className="text-gray-400 text-lg mt-6 leading-8">
          Learn Python, MERN Stack, CSS and more with
          AI-generated celebrity teachers.
        </p>

        <div className="flex gap-5 mt-8">

          <button className="bg-purple-600 px-6 py-3 rounded-xl text-lg hover:bg-purple-700 transition shadow-lg shadow-purple-700/40">
            Start Learning
          </button>

          <button className="border border-gray-600 px-6 py-3 rounded-xl text-lg hover:border-cyan-400 hover:text-cyan-400 transition">
            Watch Demo
          </button>

        </div>

      </motion.div>

      {/* RIGHT SIDE */}

      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="mt-16 md:mt-0"
      >

        <div className="bg-gradient-to-r from-purple-600 to-cyan-500 p-1 rounded-3xl shadow-2xl shadow-cyan-500/20">

          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200"
            alt="AI Teacher"
            className="w-[500px] rounded-3xl hover:scale-105 transition duration-500"
          />

        </div>

      </motion.div>

    </section>
  );
}

export default Hero;