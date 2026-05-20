import { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

function OtpVerification() {

  const [otp, setOtp] = useState("");

  const handleVerify = (e) => {

    e.preventDefault();

    if (otp.length < 6) {
      toast.error("Enter valid OTP");
      return;
    }

    toast.success("OTP Verified Successfully 🚀");
  };

  return (

    <div className="min-h-screen bg-[#081028] flex items-center justify-center px-6 relative overflow-hidden">

      {/* Glow Effects */}

      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full"></div>

      {/* Card */}

      <div className="relative z-10 w-full max-w-md bg-[#111827]/90 border border-cyan-500/20 rounded-[35px] p-10 shadow-2xl backdrop-blur-xl">

        <h1 className="text-5xl font-bold text-white mb-4 text-center">
          Verify OTP
        </h1>

        <p className="text-gray-400 text-center mb-10 text-lg">
          Enter the 6-digit OTP sent to your email 📩
        </p>

        <form onSubmit={handleVerify} className="space-y-8">

          <input
            type="text"
            maxLength={6}
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
            className="w-full bg-[#1F2937] text-white px-6 py-5 rounded-2xl outline-none border border-transparent focus:border-cyan-400 transition text-center tracking-[10px] text-2xl"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 py-5 rounded-2xl text-xl font-semibold hover:scale-[1.02] transition duration-300 shadow-lg shadow-cyan-500/20"
          >
            Verify OTP
          </button>

        </form>

        {/* Resend */}

        <div className="text-center mt-8">

          <button
            onClick={() => toast.success("OTP Resent Successfully")}
            className="text-cyan-400 hover:text-cyan-300 transition"
          >
            Resend OTP
          </button>

        </div>

        {/* Back */}

        <div className="text-center mt-6">

          <Link
            to="/login"
            className="text-sm text-gray-500 hover:text-cyan-400 transition"
          >
            ← Back to Login
          </Link>

        </div>

      </div>

    </div>
  );
}

export default OtpVerification;