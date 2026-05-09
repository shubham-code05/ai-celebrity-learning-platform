function VideoSection({ teacher }) {
  return (
    <section className="px-10 md:px-20 py-20">

      <h1 className="text-5xl font-bold text-center mb-16">

        AI Video{" "}

        <span className="text-cyan-400">
          Learning
        </span>

      </h1>

      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* Video Player */}

        <div className="bg-[#101935]/80 backdrop-blur-xl border border-cyan-500/20 rounded-3xl overflow-hidden shadow-2xl">

          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200"
            alt="AI Video"
            className="w-full h-[400px] object-cover"
          />

          <div className="p-6">

            <div className="flex items-center justify-between">

              <h2 className="text-3xl font-bold">
                {teacher} Teaching
              </h2>

              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 rounded-xl hover:scale-105 transition">

                ▶ Play

              </button>

            </div>

          </div>

        </div>

        {/* Lesson Details */}

        <div>

          <h2 className="text-5xl font-bold leading-tight">

            Learn Coding With{" "}

            <span className="text-cyan-400">
              AI Celebrity Mentors
            </span>

          </h2>

          <p className="text-gray-400 text-lg mt-6 leading-8">

            Experience futuristic learning with AI-generated celebrity teachers,
            interactive lessons, smart quizzes, and immersive coding tutorials.

          </p>

          {/* Progress */}

          <div className="mt-10">

            <div className="flex justify-between mb-3">

              <span className="text-lg">
                Course Progress
              </span>

              <span className="text-cyan-400">
                75%
              </span>

            </div>

            <div className="w-full bg-gray-800 rounded-full h-4">

              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 h-4 rounded-full w-[75%]"></div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default VideoSection;