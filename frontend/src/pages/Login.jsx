import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="min-h-screen bg-[#081028] flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-[#111827] border border-cyan-500/20 rounded-3xl p-8 shadow-2xl">

        <h1 className="text-4xl font-bold text-center text-white mb-2">
          Welcome Back
        </h1>

        <p className="text-gray-400 text-center mb-8">
          Login to CelebLearn AI
        </p>

        <form className="space-y-5">

          <input
            type="email"
            placeholder="Enter Email"
            className="w-full bg-[#1F2937] text-white px-5 py-4 rounded-xl outline-none border border-transparent focus:border-cyan-400"
          />

          <input
            type="password"
            placeholder="Enter Password"
            className="w-full bg-[#1F2937] text-white px-5 py-4 rounded-xl outline-none border border-transparent focus:border-cyan-400"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 py-4 rounded-xl text-lg font-semibold hover:scale-[1.02] transition duration-300"
          >
            Login
          </button>

        </form>

        <p className="text-gray-400 text-center mt-6">

          Don’t have an account?{" "}

          <Link to="/signup">

            <span className="text-cyan-400 cursor-pointer">
              Signup
            </span>

          </Link>

        </p>

      </div>

    </div>
  );
}

export default Login;