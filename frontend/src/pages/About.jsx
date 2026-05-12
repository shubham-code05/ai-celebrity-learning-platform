import Navbar from "../components/Navbar";

function About() {
  return (
    <div className="min-h-screen bg-[#081028] text-white">

      <Navbar />

      <div className="px-8 md:px-20 py-20">

        {/* Heading */}

        <div className="text-center mb-20">

          <h1 className="text-5xl md:text-6xl font-bold mb-6">

            About{" "}

            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              CelebLearn AI
            </span>

          </h1>

          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-10">

            CelebLearn AI is a futuristic AI-powered learning platform where students
            can learn coding and technology from AI-generated celebrity mentors.

          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-3 gap-10">

          <div className="bg-[#111827] p-10 rounded-3xl border border-cyan-500/10 hover:border-cyan-400 transition duration-500">

            <h2 className="text-3xl font-bold mb-5 text-cyan-400">
              Our Mission
            </h2>

            <p className="text-gray-300 leading-8">

              Our mission is to make coding education fun, interactive,
              and futuristic using AI-generated celebrity teachers.

            </p>

          </div>

          <div className="bg-[#111827] p-10 rounded-3xl border border-cyan-500/10 hover:border-cyan-400 transition duration-500">

            <h2 className="text-3xl font-bold mb-5 text-cyan-400">
              Smart Learning
            </h2>

            <p className="text-gray-300 leading-8">

              Students can learn Python, MERN Stack, JavaScript,
              CSS animations, and more through immersive AI tutorials.

            </p>

          </div>

          <div className="bg-[#111827] p-10 rounded-3xl border border-cyan-500/10 hover:border-cyan-400 transition duration-500">

            <h2 className="text-3xl font-bold mb-5 text-cyan-400">
              Future Vision
            </h2>

            <p className="text-gray-300 leading-8">

              We aim to revolutionize online education with AI mentors,
              smart quizzes, interactive learning, and virtual classrooms.

            </p>

          </div>

        </div>

        {/* Bottom Section */}

        <div className="mt-24 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/10 rounded-3xl p-10 text-center">

          <h2 className="text-4xl font-bold mb-6">

            Learn Smarter With{" "}

            <span className="text-cyan-400">
              AI Celebrity Teachers
            </span>

          </h2>

          <p className="text-gray-300 text-lg leading-9 max-w-4xl mx-auto">

            CelebLearn AI combines modern technology, artificial intelligence,
            and engaging learning experiences to help students become industry-ready developers.

          </p>

        </div>

      </div>

    </div>
  );
}

export default About;