import { Link } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";

import {
  FaGoogle,
  FaEye,
  FaEyeSlash,
  FaUserGraduate,
} from "react-icons/fa";

function Signup() {

  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({

    name: "",
    email: "",
    password: "",
    confirmPassword: "",

  });

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,

    });

  };

  const handleSignup = (e) => {

    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {

      toast.error("Please fill all fields ❌");

      return;

    }

    if (formData.password.length < 6) {

      toast.error("Password must be at least 6 characters 🔒");

      return;

    }

    if (formData.password !== formData.confirmPassword) {

      toast.error("Passwords do not match ❌");

      return;

    }

    setLoading(true);

    setTimeout(() => {

      setLoading(false);

      toast.success("Account Created Successfully 🚀");

    }, 2000);

  };

  return (

    <div className="min-h-screen bg-[#081028] flex items-center justify-center px-6 py-10 relative overflow-hidden">

      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/20 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/20 blur-[140px] rounded-full"></div>

      {/* Main Card */}

      <div className="relative z-10 w-full max-w-6xl grid md:grid-cols-2 rounded-[40px] overflow-hidden border border-cyan-500/20 shadow-2xl backdrop-blur-xl bg-[#111827]/80">

        {/* LEFT SIDE */}

        <div className="hidden md:flex flex-col justify-center items-center p-14 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 relative overflow-hidden">

          <div className="absolute top-10 left-10 text-cyan-400 text-5xl opacity-20">
            <FaUserGraduate />
          </div>

          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200"
            alt="Students"
            className="w-[90%] rounded-3xl shadow-2xl border border-cyan-500/20"
          />

          <h1 className="text-5xl font-bold mt-10 text-center leading-tight">

            Join{" "}

            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              CelebLearn AI
            </span>

          </h1>

          <p className="text-gray-300 text-center mt-6 text-lg leading-8">

            Learn coding from AI celebrity teachers with immersive dashboards,
            futuristic learning tools and interactive tutorials.

          </p>

        </div>

        {/* RIGHT SIDE */}

        <div className="p-8 md:p-14 flex flex-col justify-center">

          <h1 className="text-5xl font-bold text-white mb-3">
            Create Account
          </h1>

          <p className="text-gray-400 text-lg mb-10">
            Signup and start your AI learning journey 🚀
          </p>

          {/* Google Signup */}

          <button className="w-full flex items-center justify-center gap-4 bg-white text-black py-4 rounded-2xl font-semibold hover:scale-[1.02] transition duration-300 mb-8">

            <FaGoogle className="text-xl" />

            Continue with Google

          </button>

          {/* Divider */}

          <div className="flex items-center gap-4 mb-8">

            <div className="flex-1 h-[1px] bg-gray-700"></div>

            <span className="text-gray-500">
              OR
            </span>

            <div className="flex-1 h-[1px] bg-gray-700"></div>

          </div>

          {/* Form */}

          <form onSubmit={handleSignup} className="space-y-6">

            {/* Name */}

            <input
              type="text"
              name="name"
              placeholder="Enter Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-[#1F2937] text-white px-5 py-4 rounded-2xl outline-none border border-transparent focus:border-cyan-400 transition"
            />

            {/* Email */}

            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-[#1F2937] text-white px-5 py-4 rounded-2xl outline-none border border-transparent focus:border-cyan-400 transition"
            />

            {/* Password */}

            <div className="relative">

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-[#1F2937] text-white px-5 py-4 rounded-2xl outline-none border border-transparent focus:border-cyan-400 transition"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400"
              >

                {showPassword ? <FaEyeSlash /> : <FaEye />}

              </button>

            </div>

            {/* Confirm Password */}

            <div className="relative">

              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full bg-[#1F2937] text-white px-5 py-4 rounded-2xl outline-none border border-transparent focus:border-cyan-400 transition"
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
                className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400"
              >

                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}

              </button>

            </div>

            {/* Signup Button */}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 py-4 rounded-2xl text-lg font-semibold hover:scale-[1.02] transition duration-300 shadow-lg shadow-cyan-500/20"
            >

              {loading ? "Creating Account..." : "Signup"}

            </button>

          </form>

          {/* Bottom */}

          <p className="text-gray-400 text-center mt-10 text-lg">

            Already have an account?{" "}

            <Link
              to="/login"
              className="text-cyan-400 hover:text-cyan-300 transition font-semibold"
            >
              Login
            </Link>

          </p>

          {/* Back Home */}

          <div className="text-center mt-6">

            <Link
              to="/"
              className="text-sm text-gray-500 hover:text-cyan-400 transition"
            >
              ← Back to Home
            </Link>

          </div>

        </div>

      </div>

    </div>

  );
}

export default Signup;