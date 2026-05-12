import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="min-h-screen bg-[#081028] flex items-center justify-center px-6 relative overflow-hidden">

      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full"></div>

      {/* Signup Card */}

      <div className="relative z-10 w-full max-w-md bg-[#111827]/90 border border-cyan-500/20 rounded-3xl p-8 shadow-2xl backdrop-blur-xl">

        <h1 className="text-4xl font-bold text-center text-white mb-2">
          Create Account
        </h1>

        <p className="text-gray-400 text-center mb-8">
          Join CelebLearn AI
        </p>

        <form className="space-y-5">

          <input
            type="text"
            placeholder="Enter Name"
            className="w-full bg-[#1F2937] text-white px-5 py-4 rounded-xl outline-none border border-transparent focus:border-cyan-400 transition"
          />

          <input
            type="email"
            placeholder="Enter Email"
            className="w-full bg-[#1F2937] text-white px-5 py-4 rounded-xl outline-none border border-transparent focus:border-cyan-400 transition"
          />

          <input
            type="password"
            placeholder="Enter Password"
            className="w-full bg-[#1F2937] text-white px-5 py-4 rounded-xl outline-none border border-transparent focus:border-cyan-400 transition"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 py-4 rounded-xl text-lg font-semibold hover:scale-[1.02] transition duration-300 shadow-lg shadow-cyan-500/20"
          >
            Signup
          </button>

        </form>

        {/* Bottom Text */}

        <p className="text-gray-400 text-center mt-6">

          Already have an account?{" "}

          <Link
            to="/login"
            className="text-cyan-400 hover:text-cyan-300 transition"
          >
            Login
          </Link>

        </p>

        {/* Back To Home */}

        <div className="text-center mt-4">

          <Link
            to="/"
            className="text-sm text-gray-500 hover:text-cyan-400 transition"
          >
            ← Back to Home
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Signup;