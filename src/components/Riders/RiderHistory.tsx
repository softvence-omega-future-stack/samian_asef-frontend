import { useState } from "react";
import HisImg from '../../assets/images/historyimg.png';
import HistoryView from "./HistoryView";

interface Ride {
  id: string;
  pickupLocation: string;
  dropLocation: string;
  time: string;
  price: number;
  rating: number;
}

const RiderHistory = () => {
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
      <HistoryView ride={selectedRide} onBack={handleBackClick} />
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

export default RiderHistory;






// import { useState } from "react";
// import HisImg from '../../assets/images/historyimg.png';

// interface Ride {
//   id: string;
//   pickupLocation: string;
//   dropLocation: string;
//   time: string;
//   price: number;
//   rating: number;
// }

// const RiderHistory = () => {
//   const [rides] = useState<Ride[]>([
//     { id: "1", pickupLocation: "Chicago, USA", dropLocation: "San Francisco, USA", time: "12:45 - 01:12 PM", price: 9.5, rating: 4.5 },
//     { id: "2", pickupLocation: "New York, USA", dropLocation: "Los Angeles, USA", time: "02:00 - 03:15 PM", price: 12.0, rating: 4.8 },
//     { id: "3", pickupLocation: "Dallas, USA", dropLocation: "Houston, USA", time: "10:30 - 11:15 AM", price: 7.5, rating: 4.2 },
//     { id: "4", pickupLocation: "Miami, USA", dropLocation: "Orlando, USA", time: "01:00 - 02:30 PM", price: 8.5, rating: 4.7 },
//     { id: "5", pickupLocation: "Seattle, USA", dropLocation: "Portland, USA", time: "03:15 - 04:00 PM", price: 6.5, rating: 4.3 },
//   ]);

//   return (
//     <div className="min-h-screen  ">
//       <div className="space-y-3">
//         {rides.length === 0 ? (
//           <p className="text-center text-gray-400 py-10">No rides available</p>
//         ) : (
//           rides.map((ride) => (
//             <div key={ride.id} className="flex items-center justify-between bg-[#F5F5F5] rounded-[16px] p-4 ">
//               <div className="flex items-start gap-4">
//                 {/* Profile */}
//                 <div className="flex flex-col items-center">
//                   <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mb-1">
//                     <img src={HisImg} alt="" />
//                   </div>
//                   <div className="flex bg-white rounded-lg py-1 px-2.5 -mt-3 items-center gap-1 text-xs">
//                     <span className="text-black ">★</span>
//                     <span className="font-medium">{ride.rating}</span>
//                   </div>
//                 </div>

//                 {/* Route Info */}
//                 <div className="flex flex-col gap-2">
//                   {/* <div className="flex items-center gap-2 mb-4">
//                     <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                    
//                     <span className="font-medium text-textColor text-sm md:text-base">{ride.pickupLocation}</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <div className="w-2 h-2 rounded-full bg-purple-400"></div>
//                     <span className="font-medium text-textColor text-sm md:text-base">{ride.dropLocation}</span>
//                   </div> */}
//                   <div className="flex items-start ">
//   {/* Left: Your SVG */}
//   <div className="flex-shrink-0">
//                   <svg width="34" height="74" viewBox="0 0 34 74" fill="none" xmlns="http://www.w3.org/2000/svg">
//   <path d="M17 14V53" stroke="#DEE2E4"/>
//   <g filter="url(#filter0_d_455_20331)">
//     <circle cx="17" cy="13" r="7" fill="#89CFFF"/>
//     <circle cx="17" cy="13" r="6" stroke="white" stroke-width="2"/>
//   </g>
//   <g filter="url(#filter1_d_455_20331)">
//     <circle cx="17" cy="53" r="7" fill="#A089FF"/>
//     <circle cx="17" cy="53" r="6" stroke="white" stroke-width="2"/>
//   </g>
//   <defs>
//     <filter id="filter0_d_455_20331" x="0" y="0" width="34" height="34" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
//       <feFlood flood-opacity="0" result="BackgroundImageFix"/>
//       <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
//       <feOffset dy="4"/>
//       <feGaussianBlur stdDeviation="5"/>
//       <feComposite in2="hardAlpha" operator="out"/>
//       <feColorMatrix type="matrix" values="0 0 0 0 0.372083 0 0 0 0 0.616045 0 0 0 0 0.783333 0 0 0 0.24 0"/>
//       <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_455_20331"/>
//       <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_455_20331" result="shape"/>
//     </filter>
//     <filter id="filter1_d_455_20331" x="0" y="40" width="34" height="34" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
//       <feFlood flood-opacity="0" result="BackgroundImageFix"/>
//       <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
//       <feOffset dy="4"/>
//       <feGaussianBlur stdDeviation="5"/>
//       <feComposite in2="hardAlpha" operator="out"/>
//       <feColorMatrix type="matrix" values="0 0 0 0 0.409796 0 0 0 0 0.346597 0 0 0 0 0.670833 0 0 0 0.16 0"/>
//       <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_455_20331"/>
//       <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_455_20331" result="shape"/>
//     </filter>
//   </defs>
// </svg>
// </div>
// {/* Right: Texts aligned with circles */}
//   <div className="flex flex-col  justify-between ">
//     <div>
//       <p className="font-medium text-titleColor text-sm md:text-base mb-4">
//         {ride.pickupLocation}
//       </p>
//     </div>
//     <div>
//       <p className="font-medium text-titleColor text-sm md:text-base">
//         {ride.dropLocation}
//       </p>
//     </div>
//   </div>
// </div>
//                   <div className="flex items-center gap-19 gap-3 mt-1">
//                     <span className="text-sm text-textColor font-normal">{ride.time}</span>
//                     <span className="text-sm md:text-base  font-semibold text-primaryColor">${ride.price}</span>
//                   </div>
//                 </div>
//               </div>

//               {/* View Button */}
//               <button className="px-4 py-2 border border-textColor  rounded-full text-textColor text-sm font-medium hover:bg-gray-50 transition-colors cursor-pointer">
//                 View
//               </button>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default RiderHistory;






// import { UserProfilePage } from "../reasable/UserProfilePage";

// export const RiderHistory: React.FC = () => {
//   const ridesList: RideHistoryData[] = [
//     {
//       id: '1',
//       driverImage: 'https://i.pravatar.cc/150?img=1',
//       driverRating: 4.5,
//       pickupLocation: 'Chicago, USA',
//       dropLocation: 'San Fransisco, USA',
//       time: '12:45 - 01:12 PM',
//       price: '$9.50',
//     },
//     {
//       id: '2',
//       driverImage: 'https://i.pravatar.cc/150?img=2',
//       driverRating: 4.8,
//       pickupLocation: 'New York, USA',
//       dropLocation: 'Boston, USA',
//       time: '10:30 - 11:45 AM',
//       price: '$12.50',
//     },
//     {
//       id: '3',
//       driverImage: 'https://i.pravatar.cc/150?img=3',
//       driverRating: 4.7,
//       pickupLocation: 'Los Angeles, USA',
//       dropLocation: 'San Diego, USA',
//       time: '02:15 - 03:30 PM',
//       price: '$15.00',
//     },
//   ];

//   const userData: UserData = {
//     id: '1',
//     name: 'Brooklyn Simmons',
//     mobile: '0123456789',
//     lastRide: '22 Jan 2026',
//     registeredOn: '10 Oct 2025',
//     firstName: 'Brooklyn',
//     lastName: 'Simmons',
//     email: 'brooklyn@example.com',
//     emergencyContact: '987654321',
//     phone: '0123456789',
//     location: 'Chicago, USA',
//     rides: ridesList, // Pass rides here
//   };

//   const handleViewRide = (rideId: string) => {
//     console.log('View Ride ID:', rideId);
//     alert(`Viewing ride details for ID: ${rideId}`);
//     // Navigate to ride details: router.push(`/rides/${rideId}`)
//   };

//   const handleBlock = () => {
//     console.log('Blocking user:', userData.id);
//     alert(`User ${userData.name} has been blocked!`);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-6 px-4">
//       <UserProfilePage
//         title="Rider Details" // ✅ Title pass kora
//         user={userData}
//         onView={handleViewRide}
//         onBlock={handleBlock}
//       />
//     </div>
//   );
// };

// // Demo with Empty State
// // const RiderHistoryEmpty: React.FC = () => {
// //   const userDataEmpty: UserData = {
// //     id: '2',
// //     name: 'John Doe',
// //     mobile: '9876543210',
// //     lastRide: 'Never',
// //     registeredOn: '15 Jan 2026',
// //     firstName: 'John',
// //     lastName: 'Doe',
// //     email: 'john@example.com',
// //     emergencyContact: '123456789',
// //     phone: '9876543210',
// //     location: 'New York, USA',
// //     rides: [], // Empty rides
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-50 py-6 px-4">
// //       <UserProfilePage
// //         title="Rider Details (No History)"
// //         user={userDataEmpty}
// //         onView={(id) => console.log(id)}
// //       />
// //     </div>
// //   );
// // };

// // ==========================================
// // DEMO APP - Toggle between states
// // ==========================================

// // const App: React.FC = () => {
// //   const [showEmpty, setShowEmpty] = useState(false);

// //   return (
// //     <div>
// //       <div className="bg-teal-600 text-white p-4 text-center">
// //         <button
// //           onClick={() => setShowEmpty(!showEmpty)}
// //           className="bg-white text-teal-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
// //         >
// //           {showEmpty ? 'Show With Rides' : 'Show Empty State'}
// //         </button>
// //       </div>
// //       {showEmpty ? <RiderHistoryEmpty /> : <RiderHistory />}
// //     </div>
// //   );
// // };

// // export default App;




// // import { UserProfilePage } from "../reasable/UserProfilePage";



// // const RiderHistory = () => {
// //   const ridesList  = [
// //     {
// //       id: '1',
// //       driverImage: 'https://i.pravatar.cc/150?img=1',
// //       driverRating: 4.5,
// //       pickupLocation: 'Chicago, USA',
// //       dropLocation: 'San Fransisco, USA',
// //       time: '12:45 - 01:12 PM',
// //       price: '$9.50',
// //     },
// //     {
// //       id: '2',
// //       driverImage: 'https://i.pravatar.cc/150?img=2',
// //       driverRating: 4.5,
// //       pickupLocation: 'Chicago, USA',
// //       dropLocation: 'San Fransisco, USA',
// //       time: '12:45 - 01:12 PM',
// //       price: '$9.50',
// //     },
// //     {
// //       id: '3',
// //       driverImage: 'https://i.pravatar.cc/150?img=3',
// //       driverRating: 4.5,
// //       pickupLocation: 'Chicago, USA',
// //       dropLocation: 'San Fransisco, USA',
// //       time: '12:45 - 01:12 PM',
// //       price: '$9.50',
// //     },
// //     {
// //       id: '4',
// //       driverImage: 'https://i.pravatar.cc/150?img=4',
// //       driverRating: 4.5,
// //       pickupLocation: 'Chicago, USA',
// //       dropLocation: 'San Fransisco, USA',
// //       time: '12:45 - 01:12 PM',
// //       price: '$9.50',
// //     },
// //     {
// //       id: '5',
// //       driverImage: 'https://i.pravatar.cc/150?img=5',
// //       driverRating: 4.5,
// //       pickupLocation: 'Chicago, USA',
// //       dropLocation: 'San Fransisco, USA',
// //       time: '12:45 - 01:12 PM',
// //       price: '$9.50',
// //     },
// //   ];

// //   const userData = {
// //     id: '1',
// //     name: 'Brooklyn Simmons',
// //     mobile: '0123456789',
// //     lastRide: '22 Jan 2026',
// //     registeredOn: '10 Oct 2025',
// //     firstName: 'Brooklyn',
// //     lastName: 'Simmons',
// //     email: 'brooklyn@example.com',
// //     emergencyContact: '987654321',
// //     phone: '0123456789',
// //     location: 'Chicago, USA',
// //     rides: ridesList 
// //   };

// // //   const handleViewRide = (rideId: string) => {
// // //     console.log('Viewing ride:', rideId);
// // //     alert(`View button clicked for ride ${rideId}`);
// // //     // Real app e: navigate to ride details page
// // //     // router.push(`/rides/${rideId}`);
// // //   };

// //   return (
// //     <div className="min-h-screen bg-gray-50 py-6 px-4">
// //         <UserProfilePage 
        
// //         user={userData} 
// //         onView={(id) => console.log("View Ride ID:", id)} 
// //       />
// //       {/* <div className="max-w-4xl mx-auto">
// //         <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
// //           Available Rides
// //         </h1>

// //         <div className="space-y-0">

// //         </div>


// //         <div className="mt-8 p-5 bg-blue-50 rounded-lg border border-blue-200">
// //           <h3 className="text-base sm:text-lg font-semibold text-blue-900 mb-3">
// //             📦 Component Structure
// //           </h3>
// //           <div className="space-y-2 text-xs sm:text-sm text-blue-800">
// //             <p>
// //               <strong>File 1:</strong> RideCard.tsx (Reusable component)
// //             </p>
// //             <p>
// //               <strong>File 2:</strong> RidesList.tsx (Parent component with
// //               props)
// //             </p>
// //             <p className="pt-2">
// //               <strong>Props:</strong> ride (data), onView (callback function)
// //             </p>
// //             <p>
// //               <strong>TypeScript:</strong> RideCardData interface for type
// //               safety
// //             </p>
// //           </div>
// //         </div>


// //         <div className="mt-4 p-5 bg-green-50 rounded-lg border border-green-200">
// //           <h3 className="text-base sm:text-lg font-semibold text-green-900 mb-3">
// //             🚀 API Integration Example
// //           </h3>
// //           <pre className="text-xs bg-green-100 p-3 rounded overflow-x-auto">
// //             {`// RidesList.tsx
// // const [rides, setRides] = useState<RideCardData[]>([]);

// // useEffect(() => {
// //   fetch('/api/rides')
// //     .then(res => res.json())
// //     .then(data => setRides(data));
// // }, []);

// // // Then map over rides
// // {rides.map(ride => (
// //   <RideCard 
// //     key={ride.id} 
// //     ride={ride} 
// //     onView={handleViewRide} 
// //   />
// // ))}`}
// //           </pre>
// //         </div>
// //       </div> */}
// //     </div>
// //   );


// // }

// // export default RiderHistory

