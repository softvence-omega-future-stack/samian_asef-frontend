
import React, { useState } from 'react';
import userImg from '../../assets/images/riderImg.png';

import UserDetails from './UserDetails';
import { UserHistory } from './UserHistory';



interface RideData {
  id: string;
  driverImage: string;
  driverRating: number;
  pickupLocation: string;
  dropLocation: string;
  time: string;
  price: string;
}

interface UserData {
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
          rides?: RideData[];
}


interface UserProfilePageProps {
  title?:string;
  user: UserData;
  onSave?: (data: Partial<UserData>) => void;
  onBlock?: () => void;
  readOnly?: boolean;
  onView?: (rideId: string) => void;

}

// interface FormData {
//   firstName: string;
//   lastName: string;
//   email: string;
//   emergencyContact: string;
//   phone: string;
//   location: string;
// }

// Reusable UserProfilePage Component
export const UserProfilePage: React.FC<UserProfilePageProps> = ({ 
  title,
  user, 
  // onSave, 
  onBlock,

onView


}) => {
  const [activeTab, setActiveTab] = useState<'details' | 'ride-history' | 'transactions'>('details');
  // const [formData, setFormData] = useState<FormData>({
  //   firstName: user.firstName,
  //   lastName: user.lastName,
  //   email: user.email,
  //   emergencyContact: user.emergencyContact,
  //   phone: user.phone,
  //   location: user.location,
  // });

  // const handleInputChange = (field: keyof FormData, value: string) => {
  //   setFormData(prev => ({ ...prev, [field]: value }));
  // };

  // const handleSave = () => {
  //   onSave(formData);
  // };

  return (
    <div className="w-full min-h-screen  bg-white rounded-[16px] shadow-sm p-4 sm:p-6 ">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
        <h2 className="text-xl sm:text-2xl font-semibold text-[#2C2F33] leading-6  ">{title}</h2>
      </div>

      {/* Profile Section */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-6 ">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-pink-400 to-pink-300 flex items-center justify-center overflow-hidden">
            {/* {user.avatar ? (
              <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
            ) : (
              <span className="text-white text-xl sm:text-2xl font-semibold">
                {user.name.charAt(0)}
              </span>
            )} */}
             <img src={userImg} alt="" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl leading-6 font-semibold text-titleColor mb-4">{user.name}</h3>
            <p className="text-sm md:text-base font-normal text-textColor ">Mobile No: {user.mobile}</p>
          </div>
        </div>
        {/* <div className="flex flex-col sm:items-end gap-1 w-full sm:w-auto"> */}
         <div>
           <p className="text-sm md:text-base text-textColor font-normal ">Last Ride: {user.lastRide}</p>
          <p className="text-sm md:text-base text-textColor font-normal ">Registered on: {user.registeredOn}</p>
         </div>
         <div>
           {onBlock && (
            <button 
              onClick={onBlock}
              className="mt-2 flex items-center gap-2 text-sm text-textColor border border-[#E5ECF6] py-2.5 px-4 rounded-xl hover:text-gray-800 transition-colors"
            >
             <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10.0003 1.6665C5.40032 1.6665 1.66699 5.39984 1.66699 9.99984C1.66699 14.5998 5.40032 18.3332 10.0003 18.3332C14.6003 18.3332 18.3337 14.5998 18.3337 9.99984C18.3337 5.39984 14.6003 1.6665 10.0003 1.6665ZM3.33366 9.99984C3.33366 6.3165 6.31699 3.33317 10.0003 3.33317C11.542 3.33317 12.9587 3.85817 14.0837 4.7415L4.74199 14.0832C3.82668 12.9192 3.33052 11.4806 3.33366 9.99984ZM10.0003 16.6665C8.45866 16.6665 7.04199 16.1415 5.91699 15.2582L15.2587 5.9165C16.174 7.08049 16.6701 8.51907 16.667 9.99984C16.667 13.6832 13.6837 16.6665 10.0003 16.6665Z" fill="#6B7280"/>
</svg>
              Block
            </button>
          )}
         {/* </div> */}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-6 mb-6 border-b overflow-x-auto">
        <button
          onClick={() => setActiveTab('details')}
          className={`pb-3 px-1 text-sm sm:text-base md:text-lg  font-normal leading-6 cursor-pointer whitespace-nowrap transition-colors ${
            activeTab === 'details'
              ? 'text-primaryColor border-b-2 border-primaryColor'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Details
        </button>
        <button
          onClick={() => setActiveTab('ride-history')}
          className={`pb-3 px-1 text-sm sm:text-base md:text-lg  font-normal leading-6 cursor-pointer whitespace-nowrap transition-colors ${
            activeTab === 'ride-history'
              ? 'text-primaryColor border-b-2 border-primaryColor'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Ride History
        </button>
        <button
          onClick={() => setActiveTab('transactions')}
          className={`pb-3 px-1 text-sm sm:text-base md:text-lg  font-normal leading-6 cursor-pointer whitespace-nowrap transition-colors ${
            activeTab === 'transactions'
              ? 'text-primaryColor border-b-2 border-primaryColor'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Transactions
        </button>
      </div>

      {/* Form Content */}
      {activeTab === 'details' && (
        <UserDetails user={user} readOnly={true} />
      )}

{activeTab === 'ride-history' && (
  <div className="flex flex-col gap-4 mt-4"> 
   
    {user.rides && user.rides.length > 0 ? (
      user.rides.map((ride) => (
        <UserHistory 
          key={ride.id} 
          ride={ride} 
          onView={() => onView?.(ride.id)} 
        />
      ))
    ) : (
      <p className="text-center py-10 text-gray-400">No History Available</p>
    )}
  </div>
)}



      {activeTab === 'transactions' && (
        <div className="py-12 text-center text-gray-500">
          <p>Transaction history will be displayed here</p>
        </div>
      )}
    </div>
  );
};