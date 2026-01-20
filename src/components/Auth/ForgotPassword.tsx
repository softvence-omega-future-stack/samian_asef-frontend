import { Link, useNavigate } from "react-router-dom";

import logiImg from "../../assets/images/loginImg.png";
import logo from "../../assets/images/logo.png";

export default function ForgotPasswordPage() {
    const navigate = useNavigate()
  return (
    <div className="flex h-screen bg-[#F3F6F6] overflow-hidden">
      {/* LEFT SIDE */}
      <div className="hidden lg:block lg:w-1/2 p-[10px] relative h-full">
        <img
          src={logiImg}
          alt="Forgot Password"
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

          <Link
            to="/login"
            className="px-5 py-2 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition"
          >
            Login
          </Link>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-8 h-full">
        <div className="w-full max-w-md space-y-6">
          <div>
            <h1 className="text-4xl md:text-[40px] font-bold  text-titleColor  mb-2">
              Forgot Password
            </h1>
            <p className="  text-titleColor text-base font-normal ">
             Enter your registered email or phone number. We’ll send you a verification code to reset your password.
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

            {/* Button */}
            <button
              type="button"
              onClick={()=> navigate('/otp')}
              className="w-full py-3 bg-primaryColor text-white rounded-[8px] font-medium hover:bg-teal-700 transition cursor-pointer"
            >
              Send Verification Code
            </button>

            {/* Footer */}
            {/* <p className="text-center text-sm   text-titleColor text-base font-normal ">
              Remember your password?{" "}
              <Link to="/login" className="text-primaryColor font-medium">
                Login
              </Link>
            </p> */}
          </form>
        </div>
      </div>
    </div>
  );
}
