/* eslint-disable @typescript-eslint/no-explicit-any */


import React, {  useState } from "react";
import riderImg from "../../assets/images/driverImg.png";

import {  useSearchParams } from "react-router-dom";
import DriverDetails from "./DriverDetails";
import DriverHistory from "./DriverHistory";
import DriverTransactions from "./DriverTransactions";
import Reviews from "./Reviews";
import Documents from "./Documents";
import BlockModal from "./BlockModal";


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
  rating:number | string;
}

const DriverProfile: React.FC = () => {
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

  const [activeTab, setActiveTab] = useState<"details" | "ride-history" | "transactions" | "review" | "documents">(
    tabParam === "ride-history" ? "ride-history" : "details"
  );

  const [rider] = useState<RiderData>({
    id: '1',
    name: 'Floyed Miles',
    firstName: 'KEREN',
    lastName: 'NIX',
    mobile: '+880123456789',
    email: 'kerennix@gmail.com',
    emergencyContact: '+88 1123 125 1234',
    phone: '+88 1123 125 1234',
    location: '2972 westheimer rd. santa ana, illinois 85486',
    lastRide: '2 months ago',
    registeredOn: '2 months ago',
    rating: '4.89 (334)',
  });

 

//   useEffect(() => {
//   if (tabFromUrl) {
//     setActiveTab(tabFromUrl);
//   }
// }, [tabFromUrl]);


const [showBlockModal, setShowBlockModal] = useState(false);
const [, setSelectedRiderId] = useState<string | null>(null);

const handleBlockConfirm = () => {
  console.log("User Blocked");

  setShowBlockModal(false);
};

  return (
    <div className="w-full min-h-screen  ">
        <div className="bg-white p-2 md:p-6 rounded-[16px]">
      {/* Header */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Driver Details</h2>

 <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-6 ">
        <div className="flex items-center gap-2 ">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full  flex items-center justify-center overflow-hidden">
            {/* {rider.avatar ? (
              <img src={rider.avatar} alt={rider.name} className="w-full h-full object-cover" />
            ) : (
              <span className="text-white text-xl sm:text-2xl font-semibold">
                {rider.name.charAt(0)}
              </span>
            )} */}
             <img src={riderImg} alt="" className="h-14 w-14 rounded-full" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl leading-6 font-semibold text-titleColor mb-2">{rider.name}</h3>
            <p className="text-sm md:text-base font-normal text-textColor ">Mobile No: {rider.mobile}</p>
          </div>
        </div>
        {/* <div className="flex flex-col sm:items-end gap-1 w-full sm:w-auto"> */}
         <div>
           <p className="text-sm md:text-base text-textColor font-normal ">Last Ride: {rider.lastRide}</p>
        
             <p className="text-sm md:text-base text-textColor font-normal ">Registered on: {rider.registeredOn}</p>
            </div>
            <div>
                  <span className="text-sm md:text-base text-textColor font-normal flex items-center gap-2">Rating: <p className="text-yellow-500"><svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M5.37403 0C5.89866 0 6.31192 0.396266 6.57575 0.930957L7.45676 2.70758C7.48347 2.76256 7.54681 2.83999 7.64201 2.91082C7.73711 2.98157 7.83025 3.02061 7.89152 3.0309L9.48635 3.29806C10.0624 3.39487 10.5453 3.67725 10.702 4.16895C10.8586 4.66025 10.6292 5.1708 10.2149 5.58582L10.2145 5.58623L8.97553 6.83543C8.92643 6.88494 8.87142 6.97821 8.83692 7.09972C8.80266 7.22041 8.79962 7.33034 8.81516 7.40137L8.81537 7.40236L9.16984 8.94769C9.31685 9.59087 9.26814 10.2287 8.81452 10.5621C8.35933 10.8967 7.73732 10.7484 7.17224 10.4118L5.67725 9.51951C5.61448 9.482 5.50666 9.45162 5.37652 9.45162C5.24734 9.45162 5.13726 9.48159 5.0704 9.52049L5.06945 9.52105L3.57742 10.4116C3.013 10.7493 2.39175 10.895 1.93653 10.5601C1.48322 10.2266 1.43205 9.59002 1.57953 8.94736L1.93393 7.40236L1.93414 7.40137C1.94968 7.33034 1.94664 7.22041 1.91238 7.09972C1.87788 6.97821 1.82287 6.88494 1.77376 6.83543L0.533902 5.58532C0.1223 5.17032 -0.10642 4.6602 0.0489504 4.16963C0.204773 3.67762 0.686691 3.3949 1.26314 3.29803L2.85664 3.0311L2.85714 3.03101C2.91556 3.02087 3.00733 2.98228 3.10221 2.91134C3.19728 2.84027 3.26077 2.76268 3.28754 2.70758L3.28888 2.70483L4.16879 0.930486L4.16914 0.929787C4.43546 0.395538 4.84999 0 5.37403 0Z" fill="#EAB308"/>
</svg></p> {rider.rating}</span>
            </div>
         <div>
         
            <button 
              onClick={() => {
    setSelectedRiderId(rider.id);
    setShowBlockModal(true);
  }}
              className="mt-2 flex items-center gap-2 text-sm text-textColor border border-[#E5ECF6] py-2.5 px-4 rounded-xl hover:text-gray-800 transition-colors cursor-pointer"
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
      <div className="flex flex-wrap gap-4 border-b mb-4">
        {["details", "ride-history", "transactions","review", "documents"].map((tab) => (
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
              : tab === "transactions"
              ? "Transactions"
              : tab === "review"
              ? "Review"
              : tab === "documents"
              ? "Documents"
              : tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === "details" && (
       <DriverDetails/>
      )}

      {activeTab === "ride-history" && (
        <DriverHistory />
      )}

      {activeTab === "transactions" && (
        <DriverTransactions />
      )}
  
      {activeTab === "review" && (
        <Reviews />
      )}
      {activeTab === "documents" && (
        <Documents />
      )}
    </div>

<BlockModal
  isOpen={showBlockModal}
  onClose={() => setShowBlockModal(false)}
  onConfirm={handleBlockConfirm}
/>


    </div>
  );
};

export default DriverProfile;


