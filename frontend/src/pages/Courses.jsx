import { useState } from "react";
import Navbar from "../components/Navbar";

const courses = [

  {
    title: "Python Programming",
    teacher: "Sachin Tendulkar",
    students: "25K Students",
    duration: "3 Months",
    level: "Beginner to Advanced",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200",
  },

  {
    title: "Java Programming",
    teacher: "Shah Rukh Khan",
    students: "20K Students",
    duration: "4 Months",
    level: "Intermediate",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200",
  },

  {
    title: "MERN Stack Development",
    teacher: "Salman Khan",
    students: "18K Students",
    duration: "5 Months",
    level: "Advanced",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200",
  },

  {
    title: "Full Stack Development",
    teacher: "Hrithik Roshan",
    students: "30K Students",
    duration: "6 Months",
    level: "Beginner to Advanced",
    rating: "5.0",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200",
  },

  {
    title: "React JS Mastery",
    teacher: "Deepika Padukone",
    students: "16K Students",
    duration: "2 Months",
    level: "Intermediate",
    rating: "4.7",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1200",
  },

  {
    title: "Node JS Backend",
    teacher: "Virat Kohli",
    students: "15K Students",
    duration: "3 Months",
    level: "Intermediate",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200",
  },

  {
    title: "JavaScript Advanced",
    teacher: "Aamir Khan",
    students: "22K Students",
    duration: "3 Months",
    level: "Advanced",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200",
  },

  {
    title: "Data Structures & Algorithms",
    teacher: "MS Dhoni",
    students: "40K Students",
    duration: "5 Months",
    level: "Beginner to Advanced",
    rating: "5.0",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200",
  },

  {
    title: "Machine Learning",
    teacher: "Akshay Kumar",
    students: "19K Students",
    duration: "7 Months",
    level: "Advanced",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200",
  },

  {
    title: "Artificial Intelligence",
    teacher: "Ranveer Singh",
    students: "24K Students",
    duration: "8 Months",
    level: "Advanced",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200",
  },

  {
    title: "Cyber Security",
    teacher: "Ajay Devgan",
    students: "14K Students",
    duration: "4 Months",
    level: "Intermediate",
    rating: "4.7",
    image:
      "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=1200",
  },

  {
    title: "Cloud Computing",
    teacher: "Kartik Aaryan",
    students: "13K Students",
    duration: "5 Months",
    level: "Intermediate",
    rating: "4.6",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200",
  },

];

function Courses() {

  const [search, setSearch] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [selectedCourse, setSelectedCourse] = useState(null);

  const filteredCourses = courses.filter((course) => {

    const matchesSearch =
      course.title.toLowerCase().includes(search.toLowerCase());

    const matchesLevel =
      selectedLevel === "All" ||
      course.level.includes(selectedLevel);

    return matchesSearch && matchesLevel;

  });

  return (

    <div className="min-h-screen bg-[#081028] text-white">

      <Navbar />

      <div className="px-8 md:px-16 py-20">

        {/* Heading */}

        <div className="text-center mb-16">

          <h1 className="text-5xl md:text-6xl font-bold mb-6">

            Trending{" "}

            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Courses
            </span>

          </h1>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto">

            Learn trending technologies from AI-generated celebrity mentors
            with immersive learning experience and smart interactive tutorials.

          </p>

        </div>

        {/* Search Bar */}

        <div className="flex justify-center mb-10">

          <input
            type="text"
            placeholder="Search Courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-[500px] bg-[#111827] border border-cyan-500/20 focus:border-cyan-400 outline-none px-6 py-4 rounded-2xl text-white placeholder:text-gray-500 shadow-lg"
          />

        </div>

        {/* Filter Buttons */}

        <div className="flex flex-wrap justify-center gap-5 mb-16">

          <button
            onClick={() => setSelectedLevel("All")}
            className={`px-6 py-3 rounded-2xl transition duration-300 ${
              selectedLevel === "All"
                ? "bg-cyan-500 text-white"
                : "bg-[#111827] border border-cyan-500/20"
            }`}
          >
            All
          </button>

          <button
            onClick={() => setSelectedLevel("Beginner")}
            className={`px-6 py-3 rounded-2xl transition duration-300 ${
              selectedLevel === "Beginner"
                ? "bg-cyan-500 text-white"
                : "bg-[#111827] border border-cyan-500/20"
            }`}
          >
            Beginner
          </button>

          <button
            onClick={() => setSelectedLevel("Intermediate")}
            className={`px-6 py-3 rounded-2xl transition duration-300 ${
              selectedLevel === "Intermediate"
                ? "bg-cyan-500 text-white"
                : "bg-[#111827] border border-cyan-500/20"
            }`}
          >
            Intermediate
          </button>

          <button
            onClick={() => setSelectedLevel("Advanced")}
            className={`px-6 py-3 rounded-2xl transition duration-300 ${
              selectedLevel === "Advanced"
                ? "bg-cyan-500 text-white"
                : "bg-[#111827] border border-cyan-500/20"
            }`}
          >
            Advanced
          </button>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-3 gap-10">

          {filteredCourses.map((course, index) => (

            <div
              key={index}
              className="bg-[#111827] rounded-3xl overflow-hidden border border-cyan-500/10 hover:border-cyan-400 hover:-translate-y-2 transition duration-500 shadow-2xl"
            >

              {/* Image */}

              <img
                src={course.image}
                alt={course.title}
                className="w-full h-72 object-cover"
              />

              {/* Content */}

              <div className="p-6">

                <h2 className="text-3xl font-bold mb-4">
                  {course.title}
                </h2>

                <p className="text-cyan-400 text-lg mb-2">
                  👨‍🏫 Teacher: {course.teacher}
                </p>

                <p className="text-gray-400 mb-2">
                  👨‍🎓 {course.students}
                </p>

                <p className="text-gray-400 mb-2">
                  ⏳ Duration: {course.duration}
                </p>

                <p className="text-gray-400 mb-2">
                  📚 Level: {course.level}
                </p>

                <p className="text-yellow-400 mb-6">
                  ⭐ Rating: {course.rating}
                </p>

                {/* Button */}

                <button
                  onClick={() => setSelectedCourse(course)}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-4 rounded-2xl font-semibold hover:scale-105 transition duration-300 shadow-lg shadow-cyan-500/20"
                >

                  Enroll Now

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* Course Modal */}

      {selectedCourse && (

        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-6">

          <div className="bg-[#111827] rounded-3xl max-w-2xl w-full overflow-hidden border border-cyan-500/20 shadow-2xl">

            <img
              src={selectedCourse.image}
              alt={selectedCourse.title}
              className="w-full h-72 object-cover"
            />

            <div className="p-8">

              <h2 className="text-4xl font-bold mb-4">
                {selectedCourse.title}
              </h2>

              <p className="text-cyan-400 text-xl mb-3">
                👨‍🏫 Teacher: {selectedCourse.teacher}
              </p>

              <p className="text-gray-400 mb-2">
                👨‍🎓 {selectedCourse.students}
              </p>

              <p className="text-gray-400 mb-2">
                ⏳ Duration: {selectedCourse.duration}
              </p>

              <p className="text-gray-400 mb-2">
                📚 Level: {selectedCourse.level}
              </p>

              <p className="text-yellow-400 mb-6">
                ⭐ Rating: {selectedCourse.rating}
              </p>

              <div className="flex gap-5 flex-wrap">

                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition duration-300">

                  Start Learning

                </button>

                <button
                  onClick={() => setSelectedCourse(null)}
                  className="border border-cyan-500/20 px-8 py-4 rounded-2xl hover:bg-white/5 transition"
                >

                  Close

                </button>

              </div>

            </div>

          </div>

        </div>

      )}

    </div>

  );
}

export default Courses;