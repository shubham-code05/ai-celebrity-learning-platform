import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Courses from "./pages/Courses";
import Celebrities from "./pages/Celebrities";
import About from "./pages/About";

function App() {
  return (
    <Routes>

      {/* Home Page */}
      <Route path="/" element={<Home />} />

      {/* Login Page */}
      <Route path="/login" element={<Login />} />

      {/* Signup Page */}
      <Route path="/signup" element={<Signup />} />

      {/* Courses Page */}
      <Route path="/courses" element={<Courses />} />

      {/* Celebrities Page */}
      <Route path="/celebrities" element={<Celebrities />} />

      {/* About Page */}
      <Route path="/about" element={<About />} />

    </Routes>
  );
}

export default App;