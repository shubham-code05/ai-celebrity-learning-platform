import Navbar from "../components/Navbar";

const courses = [

  {
    title: "Python Programming",
    teacher: "Sachin Tendulkar",
    students: "25K Students",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200",
  },

  {
    title: "Java Programming",
    teacher: "Shah Rukh Khan",
    students: "20K Students",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200",
  },

  {
    title: "MERN Stack Development",
    teacher: "Salman Khan",
    students: "18K Students",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200",
  },

  {
    title: "Full Stack Development",
    teacher: "Hrithik Roshan",
    students: "30K Students",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200",
  },

  {
    title: "React JS Mastery",
    teacher: "Deepika Padukone",
    students: "16K Students",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1200",
  },

  {
    title: "Node JS Backend",
    teacher: "Virat Kohli",
    students: "15K Students",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200",
  },

  {
    title: "JavaScript Advanced",
    teacher: "Aamir Khan",
    students: "22K Students",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200",
  },

  {
    title: "Data Structures & Algorithms",
    teacher: "MS Dhoni",
    students: "40K Students",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200",
  },

  {
    title: "Machine Learning",
    teacher: "Akshay Kumar",
    students: "19K Students",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200",
  },

  {
    title: "Artificial Intelligence",
    teacher: "Ranveer Singh",
    students: "24K Students",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200",
  },

  {
    title: "Cyber Security",
    teacher: "Ajay Devgan",
    students: "14K Students",
    image:
      "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=1200",
  },

  {
    title: "Cloud Computing",
    teacher: "Kartik Aaryan",
    students: "13K Students",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200",
  },

];

function Courses() {
  return (
    <div className="min-h-screen bg-[#081028] text-white">

      <Navbar />

      <div className="px-8 md:px-16 py-20">

        <h1 className="text-5xl md:text-6xl font-bold text-center mb-16">

          Trending{" "}

          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Courses
          </span>

        </h1>

        <div className="grid md:grid-cols-3 gap-10">

          {courses.map((course, index) => (

            <div
              key={index}
              className="bg-[#111827] rounded-3xl overflow-hidden border border-cyan-500/10 hover:border-cyan-400 hover:-translate-y-2 transition duration-500 shadow-2xl"
            >

              <img
                src={course.image}
                alt={course.title}
                className="w-full h-72 object-cover"
              />

              <div className="p-6">

                <h2 className="text-3xl font-bold mb-3">
                  {course.title}
                </h2>

                <p className="text-cyan-400 text-lg mb-2">
                  Teacher: {course.teacher}
                </p>

                <p className="text-gray-400 mb-6">
                  {course.students}
                </p>

                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition duration-300">

                  Enroll Now

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Courses;