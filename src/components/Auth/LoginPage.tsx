import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

import logiImg from "../../assets/images/loginImg.png";
import logo from "../../assets/images/logo.png";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
 const navigate  = useNavigate()
  return (
    <div className="flex h-screen bg-[#F3F6F6] overflow-hidden">
      {/* LEFT SIDE */}
      <div className="hidden lg:block lg:w-1/2 p-[10px] relative h-full">
        <img
          src={logiImg}
          alt="Login"
          className="w-full h-full rounded-[16px] object-cover"
        />

        {/* TOP BAR */}
        <div
          style={{
            boxShadow: `1px 1px 4px rgba(0,0,0,0.05) inset,
                        -6px -11px 18px rgba(255,255,255,0.16) inset`,
            backdropFilter: "blur(6px)",
          }}
          className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] bg-white/10 rounded-full px-9 py-4 flex items-center justify-between"
        >
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="h-8" />
            <h1 className="text-primaryColor text-[28px] font-bold">
              Hustle
            </h1>
          </div>

          <button className="px-5 py-2 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition">
            Login
          </button>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-8 relative h-full">
        <div className="w-full max-w-md space-y-6">
          <div>
            <h1 className="text-4xl md:text-[40px] font-bold  text-titleColor  mb-2">
              Sign In
            </h1>
            <p className="  text-titleColor text-base font-normal ">
              Welcome back! Please login to your account
            </p>
          </div>

          <form className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-[#171C35] mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-[8px] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primaryColor text-sm"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-[#171C35] mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-[8px] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primaryColor text-sm pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                </button>
              </div>
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4"
                />
                <span className="text-sm text-[#171C35]">
                  Remember me
                </span>
              </label>

              <Link
                to="/forget_password"
                className="text-sm text-primaryColor font-medium"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Button */}
            <button
            onClick={()=> navigate("/dashboard")}
              type="button"
              className="w-full py-3 bg-primaryColor text-white rounded-[8px] font-medium hover:bg-teal-700 transition cursor-pointer"
            >
              Sign In
            </button>

            {/* Footer */}
            <p className="text-center text-sm   text-titleColor  font-normal ">
              Don’t have an account?{" "}
              <Link to="/signup" className="text-primaryColor font-medium">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
