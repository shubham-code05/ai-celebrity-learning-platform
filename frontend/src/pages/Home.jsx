import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import CelebritySection from "../components/CelebritySection";
import Courses from "../components/Courses";
import Footer from "../components/Footer";
import SelectedTeacher from "../components/SelectedTeacher";
import VideoSection from "../components/VideoSection";

function Home() {

  const [teacher, setTeacher] = useState("Virat Kohli");

  return (
    <div className="bg-[#081028] text-white min-h-screen overflow-hidden relative">

      {/* Glow Effects */}

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500 opacity-20 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600 opacity-20 blur-[140px] rounded-full"></div>

      <div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] bg-blue-500 opacity-10 blur-[120px] rounded-full"></div>

      {/* Main Content */}

      <div className="relative z-10">

        <Navbar />

        <Hero />

        {/* Selected AI Teacher */}

        <SelectedTeacher teacher={teacher} />

        {/* AI Video Section */}

        <VideoSection teacher={teacher} />

        {/* Stats */}

        <Stats />

        {/* Celebrity Teacher Selection */}

        <CelebritySection setTeacher={setTeacher} />

        {/* Courses */}

        <Courses />

        {/* Footer */}

        <Footer />

      </div>

    </div>
  );
}

export default Home;