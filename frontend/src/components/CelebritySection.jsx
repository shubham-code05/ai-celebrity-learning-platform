const celebrities = [
  {
    name: "Virat Kohli",
    subject: "CSS Masterclass",
    image:
      "https://4kwallpapers.com/images/wallpapers/virat-kohli-indian-cricketer-2560x2560-2186.jpg",
  },

  {
    name: "Salman Khan",
    subject: "MERN Stack",
    image:
      "https://filmfare.wwmindia.com/content/2018/feb/thu_1519451028.jpg",
  },

  {
    name: "Sachin Tendulkar",
    subject: "Python Programming",
    image:
      "https://img.etimg.com/thumb/width-1200,height-1200,imgsize-70288,resizemode-75,msid-49100674/magazines/panache/sachin-tendulkar-to-tie-up-with-mobile-wallet-firm.jpg",
  },
];

function CelebritySection({ setTeacher }) {
  return (
    <section className="px-10 md:px-20 py-20">

      <h1 className="text-4xl md:text-5xl font-bold mb-14 text-center">

        Popular{" "}

        <span className="text-cyan-400">
          Celebrity Teachers
        </span>

      </h1>

      <div className="grid md:grid-cols-3 gap-10">

        {celebrities.map((celebrity, index) => (
          <div
            key={index}
            className="bg-[#101935] rounded-3xl overflow-hidden border border-gray-800 hover:scale-105 hover:border-cyan-500 transition duration-300 shadow-xl"
          >

            {/* Image */}

            <div className="overflow-hidden">

              <img
                src={celebrity.image}
                alt={celebrity.name}
                className="h-72 w-full object-cover hover:scale-110 transition duration-500"
              />

            </div>

            {/* Content */}

            <div className="p-6">

              <h2 className="text-3xl font-bold">
                {celebrity.name}
              </h2>

              <p className="text-gray-400 mt-3 text-lg">
                Teaching: {celebrity.subject}
              </p>

              <button
                onClick={() => setTeacher(celebrity.name)}
                className="mt-6 bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-xl hover:scale-105 transition text-lg"
              >

                Choose Teacher

              </button>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default CelebritySection;