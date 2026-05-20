import { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

import {
  FaEnvelope,
  FaArrowLeft,
} from "react-icons/fa";

function ForgotPassword() {

  const [email, setEmail] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!email) {

      toast.error("Please enter your email ❌");

      return;

    }

    setLoading(true);

    setTimeout(() => {

      setLoading(false);

      toast.success("Reset link sent successfully 🚀");

    }, 2000);

  };

  return (

    <div className="min-h-screen bg-[#081028] flex items-center justify-center px-6 relative overflow-hidden">

      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/20 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/20 blur-[140px] rounded-full"></div>

      {/* Card */}

      <div className="relative z-10 w-full max-w-lg bg-[#111827]/80 border border-cyan-500/20 rounded-[40px] p-10 shadow-2xl backdrop-blur-xl">

        {/* Icon */}

        <div className="w-24 h-24 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-4xl mx-auto mb-8 shadow-lg shadow-cyan-500/20">

          <FaEnvelope />

        </div>

        {/* Heading */}

        <h1 className="text-5xl font-bold text-center mb-4">

          Forgot{" "}

          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Password
          </span>

        </h1>

        <p className="text-gray-400 text-center text-lg leading-8 mb-10">

          Enter your registered email address and we’ll send you a password reset link.

        </p>

        {/* Form */}

        <form onSubmit={handleSubmit} className="space-y-6">

          <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-[#1F2937] text-white px-6 py-5 rounded-2xl outline-none border border-transparent focus:border-cyan-400 transition"
          />

          {/* Button */}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 py-5 rounded-2xl text-lg font-semibold hover:scale-[1.02] transition duration-300 shadow-lg shadow-cyan-500/20"
          >

            {loading ? "Sending Reset Link..." : "Send Reset Link"}

          </button>

        </form>

        {/* Back Login */}

        <div className="text-center mt-8">

          <Link
            to="/login"
            className="inline-flex items-center gap-3 text-cyan-400 hover:text-cyan-300 transition text-lg"
          >

            <FaArrowLeft />

            Back to Login

          </Link>

        </div>

      </div>

    </div>

  );
}

export default ForgotPassword;