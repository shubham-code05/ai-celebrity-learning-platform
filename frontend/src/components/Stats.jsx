function Stats() {

  const stats = [

    {
      number: "1M+",
      title: "Active Students",
    },

    {
      number: "100+",
      title: "AI Celebrity Teachers",
    },

    {
      number: "250+",
      title: "Premium Courses",
    },

    {
      number: "24/7",
      title: "Live Learning Support",
    },

  ];

  return (

    <section className="px-8 md:px-20 py-20">

      {/* Heading */}

      <div className="text-center mb-16">

        <h1 className="text-5xl md:text-6xl font-bold mb-6">

          Platform{" "}

          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Statistics
          </span>

        </h1>

        <p className="text-gray-400 text-lg max-w-3xl mx-auto">

          Thousands of students are learning modern technologies
          daily with AI-powered celebrity mentors.

        </p>

      </div>

      {/* Stats Cards */}

      <div className="grid md:grid-cols-4 gap-8">

        {stats.map((item, index) => (

          <div
            key={index}
            className="bg-[#111827] border border-cyan-500/10 rounded-3xl p-10 text-center hover:border-cyan-400 hover:-translate-y-2 transition duration-500 shadow-2xl"
          >

            <h2 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">

              {item.number}

            </h2>

            <p className="text-gray-300 text-xl font-medium">

              {item.title}

            </p>

          </div>

        ))}

      </div>

    </section>

  );
}

export default Stats;