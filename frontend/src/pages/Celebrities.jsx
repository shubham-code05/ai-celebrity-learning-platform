import Navbar from "../components/Navbar";
const celebrities = [

  {
    name: "Virat Kohli",
    skill: "CSS Masterclass",
    students: "15K Students",
    image:
      "https://www.aljazeera.com/wp-content/uploads/2025/06/AP25154613071841-1749110200.jpg?resize=770%2C513&quality=80",
  },

  {
    name: "Salman Khan",
    skill: "MERN Stack",
    students: "20K Students",
    image:
      "https://c.ndtvimg.com/2025-06/q3tab73c_salman-khan_625x300_15_June_25.jpg?im=FeatureCrop,algorithm=dnn,width=773,height=435",
  },

  {
    name: "Sachin Tendulkar",
    skill: "Python Programming",
    students: "30K Students",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRybPhJjzjn-LD3DSUFEPMmLkDchdQYlFmxuOmusJtPp9vviGIrXoRTRzRrhTqKcuv4xPPvEEwCleLIICUOqTovTZnj4ZgsxsTUszg7Cg&s=10",
  },

  {
    name: "Shah Rukh Khan",
    skill: "Java + DSA",
    students: "40K Students",
    image:
      "https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=1200",
  },

  {
    name: "Deepika Padukone",
    skill: "React JS",
    students: "18K Students",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200",
  },

  {
    name: "Hrithik Roshan",
    skill: "Full Stack Development",
    students: "25K Students",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200",
  },

  {
    name: "Aamir Khan",
    skill: "JavaScript Advanced",
    students: "17K Students",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200",
  },

  {
    name: "MS Dhoni",
    skill: "DSA Mastery",
    students: "50K Students",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200",
  },

  {
    name: "Akshay Kumar",
    skill: "Machine Learning",
    students: "22K Students",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=1200",
  },

  {
    name: "Ranveer Singh",
    skill: "Artificial Intelligence",
    students: "19K Students",
    image:
      "https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=1200",
  },

  {
    name: "Ajay Devgan",
    skill: "Cyber Security",
    students: "14K Students",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200",
  },

  {
    name: "Kartik Aaryan",
    skill: "Cloud Computing",
    students: "16K Students",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200",
  },

];

function Celebrities() {
  return (
    <div className="min-h-screen bg-[#081028] text-white px-8 md:px-16 py-20">

      <Navbar />

      <h1 className="text-5xl md:text-6xl font-bold text-center mb-16">

        Popular{" "}

        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Celebrity Teachers
        </span>

      </h1>

      <div className="grid md:grid-cols-3 gap-10">

        {celebrities.map((celeb, index) => (

          <div
            key={index}
            className="bg-[#111827] rounded-3xl overflow-hidden border border-cyan-500/10 hover:border-cyan-400 hover:-translate-y-2 transition duration-500 shadow-2xl"
          >

            <div className="overflow-hidden">

              <img
                src={celeb.image}
                alt={celeb.name}
                className="w-full h-72 object-cover hover:scale-110 transition duration-700"
              />

            </div>

            <div className="p-6">

              <h2 className="text-3xl font-bold mb-3">
                {celeb.name}
              </h2>

              <p className="text-cyan-400 text-lg mb-2">
                Teaching: {celeb.skill}
              </p>

              <p className="text-gray-400 mb-6">
                {celeb.students}
              </p>

              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition duration-300">

                Start Learning

              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Celebrities;