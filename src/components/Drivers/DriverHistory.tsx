import { useState } from "react";
import HisImg from '../../assets/images/historyimg.png';
import DriverHistoryView from "./DriverHistoryView";


interface Ride {
  id: string;
  pickupLocation: string;
  dropLocation: string;
  time: string;
  price: number;
  rating: number;
}

const DriverHistory = () => {
  const [rides] = useState<Ride[]>([
    { id: "1", pickupLocation: "Chicago, USA", dropLocation: "San Francisco, USA", time: "12:45 - 01:12 PM", price: 9.5, rating: 4.5 },
    { id: "2", pickupLocation: "New York, USA", dropLocation: "Los Angeles, USA", time: "02:00 - 03:15 PM", price: 12.0, rating: 4.8 },
    { id: "3", pickupLocation: "Dallas, USA", dropLocation: "Houston, USA", time: "10:30 - 11:15 AM", price: 7.5, rating: 4.2 },
    { id: "4", pickupLocation: "Miami, USA", dropLocation: "Orlando, USA", time: "01:00 - 02:30 PM", price: 8.5, rating: 4.7 },
    { id: "5", pickupLocation: "Seattle, USA", dropLocation: "Portland, USA", time: "03:15 - 04:00 PM", price: 6.5, rating: 4.3 },
  ]);

  const [selectedRide, setSelectedRide] = useState<Ride | null>(null);

  const handleViewClick = (ride: Ride) => {
    setSelectedRide(ride);
  };

  const handleBackClick = () => {
    setSelectedRide(null);
  };

  // If a ride is selected, show the ride details page
  if (selectedRide) {
    return (
      <DriverHistoryView ride={selectedRide} onBack={handleBackClick} />
    );
  }

  // Default view - show ride history list
  return (
    <div className="min-h-screen">
      <div className="space-y-3">
        {rides.length === 0 ? (
          <p className="text-center text-gray-400 py-10">No rides available</p>
        ) : (
          rides.map((ride) => (
            <div key={ride.id} className="flex items-center justify-between bg-[#F5F5F5] rounded-[16px] p-4">
              <div className="flex items-start gap-4">
                {/* Profile */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mb-1">
                    <img src={HisImg} alt="" />
                  </div>
                  <div className="flex bg-white rounded-lg py-1 px-2.5 -mt-3 items-center gap-1 text-xs">
                    <span className="text-black">★</span>
                    <span className="font-medium">{ride.rating}</span>
                  </div>
                </div>

                {/* Route Info */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg width="34" height="74" viewBox="0 0 34 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 14V53" stroke="#DEE2E4"/>
                        <g filter="url(#filter0_d_455_20331)">
                          <circle cx="17" cy="13" r="7" fill="#89CFFF"/>
                          <circle cx="17" cy="13" r="6" stroke="white" strokeWidth="2"/>
                        </g>
                        <g filter="url(#filter1_d_455_20331)">
                          <circle cx="17" cy="53" r="7" fill="#A089FF"/>
                          <circle cx="17" cy="53" r="6" stroke="white" strokeWidth="2"/>
                        </g>
                        <defs>
                          <filter id="filter0_d_455_20331" x="0" y="0" width="34" height="34" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="4"/>
                            <feGaussianBlur stdDeviation="5"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0.372083 0 0 0 0 0.616045 0 0 0 0 0.783333 0 0 0 0.24 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_455_20331"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_455_20331" result="shape"/>
                          </filter>
                          <filter id="filter1_d_455_20331" x="0" y="40" width="34" height="34" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="4"/>
                            <feGaussianBlur stdDeviation="5"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0.409796 0 0 0 0 0.346597 0 0 0 0 0.670833 0 0 0 0.16 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_455_20331"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_455_20331" result="shape"/>
                          </filter>
                        </defs>
                      </svg>
                    </div>
                    <div className="flex flex-col justify-between">
                      <div>
                        <p className="font-medium text-titleColor text-sm md:text-base mb-4">
                          {ride.pickupLocation}
                        </p>
                      </div>
                      <div>
                        <p className="font-medium text-titleColor text-sm md:text-base">
                          {ride.dropLocation}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-sm text-textColor font-normal">{ride.time}</span>
                    <span className="text-sm md:text-base font-semibold text-primaryColor">${ride.price}</span>
                  </div>
                </div>
              </div>

              {/* View Button */}
              <button 
                onClick={() => handleViewClick(ride)}
                className="px-4 py-2 border border-textColor rounded-full text-textColor text-sm font-medium hover:bg-gray-50 transition-colors cursor-pointer"
              >
                View
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DriverHistory;