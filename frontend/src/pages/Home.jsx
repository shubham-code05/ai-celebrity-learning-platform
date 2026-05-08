import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import CelebritySection from "../components/CelebritySection";

function Home() {
  return (
    <div className="bg-[#0B1120] text-white min-h-screen overflow-hidden">

      <Navbar />
      <Hero />
      <Stats />
      <CelebritySection />

    </div>
  );
}

export default Home;