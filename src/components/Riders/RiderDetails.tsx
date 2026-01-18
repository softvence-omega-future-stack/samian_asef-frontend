import { useState } from "react";
import usflagImg from '../../assets/images/usFlag.png';

const RiderDetails: React.FC = () => {
  // Manual data
  const [formData, setFormData] = useState({
    firstName: "KEREN",
    lastName: "NIX",
    email: "kerennix@gmail.com",
    emergencyContact: "+88 1123 125 1234",
    phone: "+88 1123 125 1234",
    location: "2972 westheimer rd. santa ana, illinois 85486",
  });

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="  min-h-screen   mt-6 space-y-6">
      {/* Name Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">First name</label>
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) => handleInputChange('firstName', e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent disabled:bg-gray-50 disabled:cursor-not-allowed"
            disabled
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Last name</label>
          <input
            type="text"
            value={formData.lastName}
            onChange={(e) => handleInputChange('lastName', e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent disabled:bg-gray-50 disabled:cursor-not-allowed"
            disabled
          />
        </div>
      </div>

      {/* Contact Row */}
      <div className="grid grid-cols-1  xl:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent disabled:bg-gray-50 disabled:cursor-not-allowed"
            disabled
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Emergency contact</label>
          <div className="flex gap-2">
            <div className="flex items-center  shrink-0 gap-2 px-3 py-2.5 border border-gray-200 rounded-lg bg-gray-50">
              <img src={usflagImg} alt="US Flag" className="h-5 w-8" />
            </div>
            <input
              type="tel"
              value={formData.emergencyContact}
              onChange={(e) => handleInputChange('emergencyContact', e.target.value)}
              className="flex-1 px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent disabled:bg-gray-50 disabled:cursor-not-allowed"
              disabled
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
          <div className="flex gap-2">
            <div className="flex items-center gap-2 shrink-0 px-3 py-2.5 border border-gray-200 rounded-lg bg-gray-50">
              <img src={usflagImg} alt="US Flag" className="h-5 w-8" />
            </div>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className="flex-1 px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent disabled:bg-gray-50 disabled:cursor-not-allowed"
              disabled
            />
          </div>
        </div>
      </div>

      {/* Location */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
        <input
          type="text"
          value={formData.location}
          onChange={(e) => handleInputChange('location', e.target.value)}
          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent disabled:bg-gray-50 disabled:cursor-not-allowed"
          disabled
        />
      </div>
    </div>
  );
};

export default RiderDetails;








// import { useState } from "react";
// import { UserProfilePage } from "../reasable/UserProfilePage";

// interface RiderData {
//   id: string;
//   name: string;
//   firstName: string;
//   lastName: string;
//   mobile: string;
//   email: string;
//   emergencyContact: string;
//   phone: string;
//   location: string;
//   avatar?: string;
//   lastRide: string;
//   registeredOn: string;
// }

// // interface RiderDetailsProps {
// //   rider: RiderData;
// //   onSave: (data: Partial<RiderData>) => void;
// //   onBlock?: () => void;
// //   readOnly?: boolean;
// // }

// // interface FormData {
// //   firstName: string;
// //   lastName: string;
// //   email: string;
// //   emergencyContact: string;
// //   phone: string;
// //   location: string;
// // }


// const RiderDetails: React.FC = () => {
//   const [rider1] = useState<RiderData>({
//     id: '1',
//     name: 'Annette Black',
//     firstName: 'KEREN',
//     lastName: 'NIX',
//     mobile: '+880123456789',
//     email: 'kerennix@gmail.com',
//     emergencyContact: '+88 1123 125 1234',
//     phone: '+88 1123 125 1234',
//     location: '2972 westheimer rd. santa ana, illinois 85486',
//     lastRide: '2 months ago',
//     registeredOn: '2 months ago',
//   });

//   // const [rider2] = useState<RiderData>({
//   //   id: '2',
//   //   name: 'John Doe',
//   //   firstName: 'JOHN',
//   //   lastName: 'DOE',
//   //   mobile: '+880987654321',
//   //   email: 'johndoe@gmail.com',
//   //   emergencyContact: '+88 1555 555 5555',
//   //   phone: '+88 1555 555 5555',
//   //   location: '1234 main street, new york, ny 10001',
//   //   lastRide: '1 week ago',
//   //   registeredOn: '6 months ago',
//   // });

//   const handleSave = (riderId: string, data: Partial<RiderData>) => {
//     console.log(`Saving rider ${riderId}:`, data);
//     alert(`Data saved for rider ${riderId}! Check console for details.`);
//   };

//   const handleBlock = (riderId: string) => {
//     console.log(`Blocking rider ${riderId}`);
//     alert(`Rider ${riderId} blocked!`);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-8 px-4">
//       <div className=" space-y-8">
//         <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
   
//       </div>
        
//         <div className="space-y-8">
//           <div>
           
//             <UserProfilePage
//               title="Rider Details"
//               user={rider1}
//               onSave={(data) => handleSave(rider1.id, data)}
//               onBlock={() => handleBlock(rider1.id)}
//             />
//           </div>

//           {/* <div>
//             <h2 className="text-xl font-semibold text-gray-800 mb-4">Rider 2 - Editable</h2>
//             <DetailsPage
//               rider={rider2}
//               onSave={(data) => handleSave(rider2.id, data)}
//               onBlock={() => handleBlock(rider2.id)}
//             />
//           </div> */}
//         </div>

  
       
//       </div>
//     </div>
//   );
// };

// export default RiderDetails;



// const RiderDetails = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default RiderDetails
