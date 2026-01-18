/* eslint-disable @typescript-eslint/no-explicit-any */


import React, {  useState } from "react";
import riderImg from "../../assets/images/riderImg.png";
import RiderDetails from "./RiderDetails";
import RiderHistory from "./RiderHistory";
import Transactions from "./Transactions";
import {  useSearchParams } from "react-router-dom";

interface RiderData {
  id: string;
  name: string;
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
  emergencyContact: string;
  phone: string;
  location: string;
  avatar?: string;
  lastRide: string;
  registeredOn: string;
}

const RiderProfile: React.FC = () => {
// const [searchParams] = useSearchParams();
// const tabFromUrl = searchParams.get("tab") as
//   | "details"
//   | "ride-history"
//   | "transactions"
//   | null;

// //   const [activeTab, setActiveTab] = useState<"details" | "ride-history" | "transactions">("details");

// const [activeTab, setActiveTab] = useState<
//   "details" | "ride-history" | "transactions"
// >(tabFromUrl || "details");

//   const { riderId } = useParams(); // get rider id
  const [searchParams] = useSearchParams();
  const tabParam = searchParams.get("tab"); // get tab query

  const [activeTab, setActiveTab] = useState<"details" | "ride-history" | "transactions">(
    tabParam === "ride-history" ? "ride-history" : "details"
  );

  const [rider] = useState<RiderData>({
    id: '1',
    name: 'Annette Black',
    firstName: 'KEREN',
    lastName: 'NIX',
    mobile: '+880123456789',
    email: 'kerennix@gmail.com',
    emergencyContact: '+88 1123 125 1234',
    phone: '+88 1123 125 1234',
    location: '2972 westheimer rd. santa ana, illinois 85486',
    lastRide: '2 months ago',
    registeredOn: '2 months ago',
  });

    const handleBlock = (riderId: string) => {
    console.log(`Blocking rider ${riderId}`);
    alert(`Rider ${riderId} blocked!`);
  };

//   useEffect(() => {
//   if (tabFromUrl) {
//     setActiveTab(tabFromUrl);
//   }
// }, [tabFromUrl]);

  return (
    <div className="w-full min-h-screen  ">
        <div className="bg-white p-2 md:p-6 rounded-[16px]">
      {/* Header */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Rider Details</h2>

 <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-6 ">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-pink-400 to-pink-300 flex items-center justify-center overflow-hidden">
            {/* {rider.avatar ? (
              <img src={rider.avatar} alt={rider.name} className="w-full h-full object-cover" />
            ) : (
              <span className="text-white text-xl sm:text-2xl font-semibold">
                {rider.name.charAt(0)}
              </span>
            )} */}
             <img src={riderImg} alt="" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl leading-6 font-semibold text-titleColor mb-4">{rider.name}</h3>
            <p className="text-sm md:text-base font-normal text-textColor ">Mobile No: {rider.mobile}</p>
          </div>
        </div>
        {/* <div className="flex flex-col sm:items-end gap-1 w-full sm:w-auto"> */}
         <div>
           <p className="text-sm md:text-base text-textColor font-normal ">Last Ride: {rider.lastRide}</p>
          <p className="text-sm md:text-base text-textColor font-normal ">Registered on: {rider.registeredOn}</p>
         </div>
         <div>
         
            <button 
              onClick={() => handleBlock(rider.id)}
              className="mt-2 flex items-center gap-2 text-sm text-textColor border border-[#E5ECF6] py-2.5 px-4 rounded-xl hover:text-gray-800 transition-colors"
            >
             <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10.0003 1.6665C5.40032 1.6665 1.66699 5.39984 1.66699 9.99984C1.66699 14.5998 5.40032 18.3332 10.0003 18.3332C14.6003 18.3332 18.3337 14.5998 18.3337 9.99984C18.3337 5.39984 14.6003 1.6665 10.0003 1.6665ZM3.33366 9.99984C3.33366 6.3165 6.31699 3.33317 10.0003 3.33317C11.542 3.33317 12.9587 3.85817 14.0837 4.7415L4.74199 14.0832C3.82668 12.9192 3.33052 11.4806 3.33366 9.99984ZM10.0003 16.6665C8.45866 16.6665 7.04199 16.1415 5.91699 15.2582L15.2587 5.9165C16.174 7.08049 16.6701 8.51907 16.667 9.99984C16.667 13.6832 13.6837 16.6665 10.0003 16.6665Z" fill="#6B7280"/>
</svg>
              Block
            </button>
         
         {/* </div> */}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 border-b mb-4">
        {["details", "ride-history", "transactions"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as any)}
            className={`pb-2 px-3 text-sm font-medium cursor-pointer ${
              activeTab === tab
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab === "details"
              ? "Details"
              : tab === "ride-history"
              ? "Ride History"
              : "Transactions"}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === "details" && (
       <RiderDetails/>
      )}

      {activeTab === "ride-history" && (
        <RiderHistory />
      )}

      {activeTab === "transactions" && (
        <Transactions />
      )}
    </div>
    </div>
  );
};

export default RiderProfile;


