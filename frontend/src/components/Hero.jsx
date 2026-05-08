function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-20">

      <div className="max-w-xl">

        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Learn From <span className="text-purple-500">AI Celebrities</span>
        </h1>

        <p className="text-gray-400 text-lg mt-6">
          Learn Python, MERN Stack, CSS and more with AI-generated celebrity teachers.
        </p>

        <div className="flex gap-5 mt-8">

          <button className="bg-purple-600 px-6 py-3 rounded-xl text-lg hover:bg-purple-700 transition">
            Start Learning
          </button>

          <button className="border border-gray-600 px-6 py-3 rounded-xl text-lg hover:border-purple-500 transition">
            Watch Demo
          </button>

        </div>

      </div>

      <div className="mt-16 md:mt-0">

        <div className="bg-gradient-to-r from-purple-600 to-blue-500 p-1 rounded-3xl">

          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="AI Teacher"
            className="w-[500px] rounded-3xl"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;