import { Link, useNavigate } from "react-router-dom";

import logiImg from "../../assets/images/loginImg.png";
import logo from "../../assets/images/logo.png";

export default function OTPPage() {
    const navigate = useNavigate()
  return (
    <div className="flex h-screen bg-[#F3F6F6] overflow-hidden">
      {/* LEFT SIDE */}
      <div className="hidden lg:block lg:w-1/2 p-[10px] relative h-full">
        <img
          src={logiImg}
          alt="OTP Verification"
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
              OTP
            </h1>
            <p className="  text-titleColor text-base font-normal ">
              Please enter the Six digit One time password we sent to
your email to confirm its you
            </p>
          </div>

          <form className="space-y-6">
            {/* OTP Inputs */}
            <div className="flex justify-between gap-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  className="w-12 h-12 text-center text-lg font-semibold border border-gray-300 rounded-[8px] focus:outline-none focus:ring-2 focus:ring-primaryColor"
                />
              ))}
            </div>

            {/* Button */}
            <button
              type="button"
                onClick={()=> navigate('/new_password')}
              className="w-full py-3 bg-primaryColor text-white rounded-[8px] font-medium hover:bg-teal-700 transition cursor-pointer"
            >
              Send Verification Code 
            </button>

            {/* Resend */}
           <div className="flex flex-col">
             <p className="text-center text-sm   text-titleColor text-base font-normal ">
              Didn’t receive the code?{" "}
               </p>
              <button
                type="button"
                className="text-primaryColor font-medium cursor-pointer"
              >
               Send OTP Again
              </button>
           </div>
           
          </form>
        </div>
      </div>
    </div>
  );
}
