// import { useState } from "react";

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

//   const [rider2] = useState<RiderData>({
//     id: '2',
//     name: 'John Doe',
//     firstName: 'JOHN',
//     lastName: 'DOE',
//     mobile: '+880987654321',
//     email: 'johndoe@gmail.com',
//     emergencyContact: '+88 1555 555 5555',
//     phone: '+88 1555 555 5555',
//     location: '1234 main street, new york, ny 10001',
//     lastRide: '1 week ago',
//     registeredOn: '6 months ago',
//   });

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
//       <div className="max-w-7xl mx-auto space-y-8">
//         <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
//           Reusable Rider Details Component Demo
//         </h1>
        
//         <div className="space-y-8">
//           <div>
//             <h2 className="text-xl font-semibold text-gray-800 mb-4">Rider 1 - Editable</h2>
//             <RiderDetails
//               rider={rider1}
//               onSave={(data) => handleSave(rider1.id, data)}
//               onBlock={() => handleBlock(rider1.id)}
//             />
//           </div>

//           <div>
//             <h2 className="text-xl font-semibold text-gray-800 mb-4">Rider 2 - Editable</h2>
//             <RiderDetails
//               rider={rider2}
//               onSave={(data) => handleSave(rider2.id, data)}
//               onBlock={() => handleBlock(rider2.id)}
//             />
//           </div>
//         </div>

//         {/* Usage Instructions */}
//         <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-200">
//           <h3 className="text-lg font-semibold text-blue-900 mb-3">
//             How to Use This Component
//           </h3>
//           <div className="space-y-2 text-sm text-blue-800">
//             <p>• <strong>Reusable:</strong> Import and use the RiderDetails component anywhere</p>
//             <p>• <strong>TypeScript:</strong> Full type safety with RiderData and RiderDetailsProps interfaces</p>
//             <p>• <strong>Props:</strong> rider (data), onSave (callback), onBlock (optional callback), readOnly (optional)</p>
//             <p>• <strong>Responsive:</strong> Mobile-first design with Tailwind CSS</p>
//             <p>• <strong>Future-ready:</strong> Easy to integrate with API calls in onSave and onBlock handlers</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RiderDetails;



const RiderDetails = () => {
  return (
    <div>
      
    </div>
  )
}

export default RiderDetails
