
import React  from 'react';

// ==========================================
// FILE 1: UserHistory.tsx (Reusable Card Component)
// Path: src/components/reusable/UserHistory.tsx
// ==========================================

interface RideHistoryData {
  id: string;
  driverImage: string;
  driverRating: number;
  pickupLocation: string;
  dropLocation: string;
  time: string;
  price: string;
}

interface UserHistoryProps {
  ride: RideHistoryData;
  onView: () => void;
}

export const UserHistory: React.FC<UserHistoryProps> = ({ ride, onView }) => {
  return (
    <div className="bg-[#F8F9FA] rounded-[20px] p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-6 w-full">
        {/* Left: Driver Info */}
        <div className="flex flex-col items-center gap-1 min-w-[60px]">
          <img 
            src={ride.driverImage} 
            alt="Driver" 
            className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" 
          />
          <div className="flex items-center gap-1 bg-white px-2 py-0.5 rounded-full shadow-sm">
            <span className="text-[10px] text-yellow-500">★</span>
            <span className="text-xs font-bold text-gray-700">{ride.driverRating}</span>
          </div>
        </div>

        {/* Center: Route Info */}
        <div className="flex-1 space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#87CEEB]"></div>
            <p className="text-sm sm:text-base font-semibold text-[#2C2F33]">
              {ride.pickupLocation}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#9370DB]"></div>
            <p className="text-sm sm:text-base font-semibold text-[#2C2F33]">
              {ride.dropLocation}
            </p>
          </div>
          <div className="flex items-center gap-8 pl-5">
            <span className="text-xs text-gray-400 font-medium">{ride.time}</span>
            <span className="text-sm text-[#00A79D] font-bold">{ride.price}</span>
          </div>
        </div>

        {/* Right: View Button */}
        <button
          onClick={onView}
          className="px-10 py-2.5 border border-[#2C2F33] text-[#2C2F33] rounded-full hover:bg-[#2C2F33] hover:text-white transition-all text-sm font-medium whitespace-nowrap"
        >
          View
        </button>
      </div>
    </div>
  );
};




// import React from 'react';

// // ==========================================
// // FILE 1: RideCard.tsx (Reusable Component)
// // ==========================================

// interface UserhistoryData {
//   id: string;
//   driverImage: string;
//   driverRating: number;
//   pickupLocation: string;
//   dropLocation: string;
//   time: string;
//   price: string;
// }

// interface UserHistoryProps {
//   ride: UserhistoryData;
//   onView: (rideId: string) => void;
// }



// export const UserHistory: React.FC<UserHistoryProps> = ({ ride, onView }) => {
//   return (
//     <div className="bg-[#F8F9FA] rounded-[20px] p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 border border-gray-100 shadow-sm">
//       <div className="flex items-center gap-6 w-full">
//         {/* Left: Driver Info */}
//         <div className="flex flex-col items-center gap-1 min-w-[60px]">
//           <img src={ride.driverImage} alt="Driver" className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" />
//           <div className="flex items-center gap-1 bg-white px-2 py-0.5 rounded-full shadow-sm">
//              <span className="text-[10px] text-gray-500">★</span>
//              <span className="text-xs font-bold text-gray-700">{ride.driverRating}</span>
//           </div>
//         </div>

//         {/* Center: Route Info */}
//         <div className="flex-1 space-y-3">
//           <div className="flex items-center gap-3">
//             <div className="w-2.5 h-2.5 rounded-full bg-[#87CEEB]"></div> {/* Blue Dot */}
//             <p className="text-sm sm:text-base font-semibold text-[#2C2F33]">{ride.pickupLocation}</p>
//           </div>
//           <div className="flex items-center gap-3">
//             <div className="w-2.5 h-2.5 rounded-full bg-[#9370DB]"></div> {/* Purple Dot */}
//             <p className="text-sm sm:text-base font-semibold text-[#2C2F33]">{ride.dropLocation}</p>
//           </div>
//           <div className="flex items-center gap-8 pl-5">
//              <span className="text-xs text-gray-400 font-medium">{ride.time}</span>
//              <span className="text-sm text-[#00A79D] font-bold">{ride.price}</span>
//           </div>
//         </div>

//         {/* Right: View Button */}
//         <button
//           onClick={() => onView(ride.id)}
//           className="px-10 py-2.5 border border-[#2C2F33] text-[#2C2F33] rounded-full hover:bg-[#2C2F33] hover:text-white transition-all text-sm font-medium"
//         >
//           View
//         </button>
//       </div>
//     </div>
//   );
// };

// export const UserHistory: React.FC<UserHistoryProps> = ({ ride, onView }) => {
//   return (
//     <div className="bg-white rounded-lg p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow mb-3">
//       <div className="flex items-center justify-between gap-4">
//         {/* Left Section - Driver Info & Route */}
//         <div className="flex items-start gap-3 sm:gap-4 flex-1 min-w-0">
//           {/* Driver Avatar & Rating */}
//           <div className="flex-shrink-0">
//             <div className="relative">
//               <img
//                 src={ride.driverImage}
//                 alt="Driver"
//                 className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
//               />
//               <div className="absolute -bottom-1 -left-1 bg-white rounded-full px-1.5 py-0.5 shadow-sm flex items-center gap-0.5">
//                 <svg
//                   className="w-3 h-3 text-yellow-400 fill-current"
//                   viewBox="0 0 20 20"
//                 >
//                   <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
//                 </svg>
//                 <span className="text-xs font-semibold text-gray-700">
//                   {ride.driverRating}
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* Route Info */}
//           <div className="flex-1 min-w-0">
//             {/* Pickup */}
//             <div className="flex items-start gap-2 mb-2">
//               <div className="flex-shrink-0 mt-1">
//                 <div className="w-2 h-2 rounded-full bg-blue-400"></div>
//               </div>
//               <p className="text-sm sm:text-base font-medium text-gray-900 truncate">
//                 {ride.pickupLocation}
//               </p>
//             </div>

//             {/* Drop */}
//             <div className="flex items-start gap-2">
//               <div className="flex-shrink-0 mt-1">
//                 <div className="w-2 h-2 rounded-full bg-purple-400"></div>
//               </div>
//               <p className="text-sm sm:text-base font-medium text-gray-900 truncate">
//                 {ride.dropLocation}
//               </p>
//             </div>

//             {/* Time */}
//             <p className="text-xs sm:text-sm text-gray-500 mt-2">
//               {ride.time}
//             </p>
//           </div>
//         </div>

//         {/* Right Section - Price & Button */}
//         <div className="flex flex-col items-end gap-3 flex-shrink-0">
//           <p className="text-lg sm:text-xl font-bold text-teal-600">
//             {ride.price}
//           </p>
//           <button
//             onClick={() => onView(ride.id)}
//             className="px-6 sm:px-8 py-2 border-2 border-gray-300 text-gray-700 rounded-full font-medium hover:border-teal-600 hover:text-teal-600 transition-colors text-sm sm:text-base"
//           >
//             View
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };