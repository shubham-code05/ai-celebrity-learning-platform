const celebrities = [
  {
    name: "Virat Kohli",
    subject: "CSS Masterclass",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200",
  },
  {
    name: "Salman Khan",
    subject: "MERN Stack",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200",
  },
  {
    name: "Sachin Tendulkar",
    subject: "Python Programming",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=1200",
  },
];

function CelebritySection() {
  return (
    <section className="px-10 md:px-20 py-20">

      <h1 className="text-4xl md:text-5xl font-bold mb-14 text-center">
        Popular <span className="text-purple-500">Celebrity Teachers</span>
      </h1>

      <div className="grid md:grid-cols-3 gap-10">

        {celebrities.map((celebrity, index) => (
          <div
            key={index}
            className="bg-[#111827] rounded-3xl overflow-hidden border border-gray-800 hover:scale-105 hover:border-purple-500 transition duration-300 shadow-xl"
          >

            <div className="overflow-hidden">
              <img
                src={celebrity.image}
                alt={celebrity.name}
                className="h-72 w-full object-cover hover:scale-110 transition duration-500"
              />
            </div>

            <div className="p-6">

              <h2 className="text-3xl font-bold">
                {celebrity.name}
              </h2>

              <p className="text-gray-400 mt-3 text-lg">
                Teaching: {celebrity.subject}
              </p>

              <button className="mt-6 bg-purple-600 px-6 py-3 rounded-xl hover:bg-purple-700 transition text-lg">
                Start Learning
              </button>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default CelebritySection;