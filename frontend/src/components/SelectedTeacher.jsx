function SelectedTeacher() {
  return (
    <section className="px-8 md:px-16 py-20">

      <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-3xl p-10">

        <h1 className="text-4xl md:text-5xl font-bold mb-6">

          Your Selected{" "}

          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            AI Teacher
          </span>

        </h1>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Teacher Image */}

          <div>

            <img
              src="https://4kwallpapers.com/images/wallpapers/virat-kohli-indian-cricketer-2560x2560-2186.jpg"
              alt="teacher"
              className="rounded-3xl w-full h-[400px] object-cover border border-cyan-400"
            />

          </div>

          {/* Teacher Details */}

          <div>

            <h2 className="text-5xl font-bold mb-5">
              Virat Kohli
            </h2>

            <p className="text-cyan-400 text-2xl mb-4">
              Teaching: CSS Animation Masterclass
            </p>

            <p className="text-gray-300 leading-9 text-lg mb-8">

              Learn modern frontend development, CSS animations,
              responsive design, and futuristic UI building
              with AI-generated celebrity mentor experience.

            </p>

            <div className="flex gap-5 flex-wrap">

              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:scale-105 transition duration-300">

                Start Learning

              </button>

              <button className="border border-cyan-400 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-cyan-500/10 transition duration-300">

                Change Teacher

              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default SelectedTeacher;