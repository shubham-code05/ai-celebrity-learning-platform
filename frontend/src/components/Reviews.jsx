function Reviews() {

  const reviews = [

    {
      name: "Rahul Sharma",
      course: "MERN Stack",
      review:
        "Amazing platform! Learning with celebrity AI teachers feels super interactive and fun.",
    },

    {
      name: "Priya Singh",
      course: "Python Programming",
      review:
        "The UI is futuristic and courses are very engaging. Loved the experience.",
    },

    {
      name: "Aman Verma",
      course: "Full Stack Development",
      review:
        "Best learning platform concept I have seen. The AI mentor idea is unique.",
    },

  ];

  return (

    <section className="px-8 md:px-16 py-20">

      {/* Heading */}

      <div className="text-center mb-16">

        <h1 className="text-5xl md:text-6xl font-bold mb-6">

          Student{" "}

          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Reviews
          </span>

        </h1>

        <p className="text-gray-400 text-lg max-w-3xl mx-auto">

          See what students are saying about CelebLearn AI platform.

        </p>

      </div>

      {/* Cards */}

      <div className="grid md:grid-cols-3 gap-10">

        {reviews.map((review, index) => (

          <div
            key={index}
            className="bg-[#111827] border border-cyan-500/10 rounded-3xl p-8 hover:border-cyan-400 hover:-translate-y-2 transition duration-500 shadow-2xl"
          >

            <div className="text-yellow-400 text-2xl mb-4">
              ⭐⭐⭐⭐⭐
            </div>

            <p className="text-gray-300 leading-8 mb-6">
              "{review.review}"
            </p>

            <h2 className="text-2xl font-bold">
              {review.name}
            </h2>

            <p className="text-cyan-400 mt-2">
              {review.course}
            </p>

          </div>

        ))}

      </div>

    </section>

  );
}

export default Reviews;