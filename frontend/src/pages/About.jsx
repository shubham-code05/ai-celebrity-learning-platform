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

          <p className="text-gray-400 text-xl max-w-4xl mx-auto leading-10">

            CelebLearn AI is a futuristic AI-powered learning platform
            where students can learn coding and modern technologies
            from AI-generated celebrity mentors in an interactive way.

          </p>

        </div>

        {/* Feature Cards */}

        <div className="grid md:grid-cols-3 gap-10">

          {/* Mission */}

          <div className="bg-[#111827] p-10 rounded-3xl border border-cyan-500/10 hover:border-cyan-400 hover:scale-105 transition duration-500 shadow-lg">

            <h2 className="text-3xl font-bold mb-5 text-cyan-400">
              Our Mission
            </h2>

            <p className="text-gray-300 leading-8">

              Our mission is to make coding education fun,
              interactive, futuristic and accessible for every student
              using AI-generated celebrity teachers.

            </p>

          </div>

          {/* Smart Learning */}

          <div className="bg-[#111827] p-10 rounded-3xl border border-cyan-500/10 hover:border-cyan-400 hover:scale-105 transition duration-500 shadow-lg">

            <h2 className="text-3xl font-bold mb-5 text-cyan-400">
              Smart Learning
            </h2>

            <p className="text-gray-300 leading-8">

              Students can learn Python, Java, MERN Stack,
              Full Stack Development, AI, Data Structures,
              CSS Animation and more through immersive tutorials.

            </p>

          </div>

          {/* Future Vision */}

          <div className="bg-[#111827] p-10 rounded-3xl border border-cyan-500/10 hover:border-cyan-400 hover:scale-105 transition duration-500 shadow-lg">

            <h2 className="text-3xl font-bold mb-5 text-cyan-400">
              Future Vision
            </h2>

            <p className="text-gray-300 leading-8">

              We aim to revolutionize online education with
              AI mentors, virtual classrooms, smart dashboards,
              live sessions and personalized learning experiences.

            </p>

          </div>

        </div>

        {/* Technologies Section */}

        <div className="mt-24">

          <h2 className="text-5xl font-bold text-center mb-14">

            Technologies{" "}

            <span className="text-cyan-400">
              Used
            </span>

          </h2>

          <div className="flex flex-wrap justify-center gap-6">

            <div className="bg-[#111827] px-8 py-4 rounded-2xl border border-cyan-500/20 hover:scale-105 transition">
              React JS
            </div>

            <div className="bg-[#111827] px-8 py-4 rounded-2xl border border-cyan-500/20 hover:scale-105 transition">
              Tailwind CSS
            </div>

            <div className="bg-[#111827] px-8 py-4 rounded-2xl border border-cyan-500/20 hover:scale-105 transition">
              JavaScript
            </div>

            <div className="bg-[#111827] px-8 py-4 rounded-2xl border border-cyan-500/20 hover:scale-105 transition">
              React Router
            </div>

            <div className="bg-[#111827] px-8 py-4 rounded-2xl border border-cyan-500/20 hover:scale-105 transition">
              Vite
            </div>

            <div className="bg-[#111827] px-8 py-4 rounded-2xl border border-cyan-500/20 hover:scale-105 transition">
              Node JS
            </div>

          </div>

        </div>

        {/* Team Section */}

        <div className="mt-24">

          <h2 className="text-5xl font-bold text-center mb-14">

            Our{" "}

            <span className="text-cyan-400">
              Team
            </span>

          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="bg-[#111827] rounded-3xl p-8 text-center border border-cyan-500/10 hover:border-cyan-400 transition">

              <img
                src="/images/DSC09213.JPG"
                alt="team"
                className="w-32 h-32 rounded-full mx-auto object-cover mb-6"
              />

              <h3 className="text-2xl font-bold">
                Shubham Prajapati
              </h3>

              <p className="text-cyan-400 mt-2">
                Frontend Developer
              </p>

            </div>

            <div className="bg-[#111827] rounded-3xl p-8 text-center border border-cyan-500/10 hover:border-cyan-400 transition">

              <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
                alt="team"
                className="w-32 h-32 rounded-full mx-auto object-cover mb-6"
              />

              <h3 className="text-2xl font-bold">
                AI Mentor Team
              </h3>

              <p className="text-cyan-400 mt-2">
                AI Integration
              </p>

            </div>

            <div className="bg-[#111827] rounded-3xl p-8 text-center border border-cyan-500/10 hover:border-cyan-400 transition">

              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                alt="team"
                className="w-32 h-32 rounded-full mx-auto object-cover mb-6"
              />

              <h3 className="text-2xl font-bold">
                Design Team
              </h3>

              <p className="text-cyan-400 mt-2">
                UI / UX Design
              </p>

            </div>

          </div>

        </div>

        {/* Bottom Banner */}

        <div className="mt-24 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/10 rounded-3xl p-12 text-center shadow-xl">

          <h2 className="text-4xl md:text-5xl font-bold mb-6">

            Learn Smarter With{" "}

            <span className="text-cyan-400">
              AI Celebrity Teachers
            </span>

          </h2>

          <p className="text-gray-300 text-lg leading-9 max-w-4xl mx-auto">

            CelebLearn AI combines Artificial Intelligence,
            modern technologies and immersive user experiences
            to help students become industry-ready developers.

          </p>

        </div>

      </div>

    </div>

  );
}

export default About;