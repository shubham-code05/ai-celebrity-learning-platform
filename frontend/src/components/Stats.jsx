function Stats() {

  const stats = [

    {
      number: "1M+",
      title: "Active Students",
      growth: "+12%",
      icon: "👨‍🎓",
    },

    {
      number: "100+",
      title: "AI Celebrity Teachers",
      growth: "+18%",
      icon: "🤖",
    },

    {
      number: "250+",
      title: "Premium Courses",
      growth: "+10%",
      icon: "📚",
    },

    {
      number: "24/7",
      title: "Live Learning Support",
      growth: "+30%",
      icon: "⚡",
    },

  ];

  return (

    <section className="px-8 md:px-20 py-20">

      {/* Heading */}

      <div className="text-center mb-16">

        <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">

          Platform{" "}

          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Statistics
          </span>

        </h1>

        <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-8">

          Thousands of students are learning modern technologies
          daily with AI-powered celebrity mentors.

        </p>

      </div>

      {/* Stats Cards */}

      <div className="grid md:grid-cols-4 gap-8">

        {stats.map((item, index) => (

          <div
            key={index}
            className="group relative overflow-hidden bg-[#111827]/80 backdrop-blur-xl border border-cyan-500/10 rounded-3xl p-10 text-center hover:border-cyan-400 hover:-translate-y-3 hover:shadow-cyan-500/20 hover:shadow-2xl transition-all duration-500"
          >

            {/* Glow Effect */}

            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition duration-500"></div>

            {/* Floating Blur */}

            <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/10 blur-3xl rounded-full"></div>

            {/* Icon */}

            <div className="relative z-10 text-6xl mb-6 group-hover:scale-110 transition duration-500">
              {item.icon}
            </div>

            {/* Number */}

            <h2 className="relative z-10 text-5xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent group-hover:scale-110 transition duration-500">

              {item.number}

            </h2>

            {/* Title */}

            <p className="relative z-10 text-gray-300 text-xl font-medium mb-6">

              {item.title}

            </p>

            {/* Growth */}

            <div className="relative z-10 inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-400/20 px-4 py-2 rounded-xl text-cyan-300">

              🚀 {item.growth} Growth

            </div>

          </div>

        ))}

      </div>

    </section>

  );
}

export default Stats;