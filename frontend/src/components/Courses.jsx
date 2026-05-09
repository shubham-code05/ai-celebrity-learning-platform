const courses = [
  {
    title: "Python Mastery",
    teacher: "Sachin Tendulkar",
    students: "25K Students",
    image:
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=1200",
  },

  {
    title: "MERN Stack Bootcamp",
    teacher: "Salman Khan",
    students: "18K Students",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200",
  },

  {
    title: "CSS Animation Pro",
    teacher: "Virat Kohli",
    students: "12K Students",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200",
  },
];

function Courses() {
  return (
    <section className="px-10 md:px-20 py-20">

      <h1 className="text-5xl font-bold text-center mb-16">
        Trending <span className="text-cyan-400">Courses</span>
      </h1>

      <div className="grid md:grid-cols-3 gap-10">

        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-[#101935] rounded-3xl overflow-hidden border border-gray-800 hover:border-cyan-500 hover:scale-105 transition duration-300 shadow-xl"
          >

            <img
              src={course.image}
              alt={course.title}
              className="h-64 w-full object-cover"
            />

            <div className="p-6">

              <h2 className="text-3xl font-bold">
                {course.title}
              </h2>

              <p className="text-cyan-400 mt-3">
                Teacher: {course.teacher}
              </p>

              <p className="text-gray-400 mt-2">
                {course.students}
              </p>

              <button className="mt-6 bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-xl hover:scale-105 transition">

                Enroll Now

              </button>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Courses;