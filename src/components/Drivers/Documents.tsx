"use client";

import { ChevronRight } from "lucide-react";
import { useState } from "react";
import profilePic from "../../assets/images/driverprofileImg.png";
import licensePic from "../../assets/images/driverLicesceImg.png";
import registrationPic from "../../assets/images/registrationImg.png";
import vehicelCertificatePic from "../../assets/images/vehicleCertificate.png";
import textTokenPic from "../../assets/images/TextToken.png";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  title: string;
}
// Modal Component
const Modal = ({ isOpen, onClose, imageSrc, title }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl p-4 md:p-6 relative max-w-md w-full h-[541px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-20">
          <button
            className="absolute top-6 right-3 text-gray-900 cursor-pointer hover:text-gray-700"
            onClick={onClose}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
          <h2 className="text-gray-900 text-xl md:text-2xl font-semibold leading-6">Documents</h2>
        </div>

        <div className="flex items-center justify-center">
          <img src={imageSrc} alt={title} className="w-[220px] h-[260px] rounded-lg object-cover" />
        </div>
      </div>
    </div>
  );
};

// Document Item Interface
interface DocumentItem {
  id: number;
  title: string;
  status: "verified" | "rejected";
  image: string; // Add image property
}

const DocumentSection = () => {
  const [selectedDoc, setSelectedDoc] = useState<{ image: string; title: string } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Document data with placeholder images
  const documentData: DocumentItem[] = [
    { 
      id: 1, 
      title: "Profile Picture", 
      status: "verified",
      image: profilePic
    },
    { 
      id: 2, 
      title: "Driver License", 
      status: "verified",
      image: licensePic
    },
    { 
      id: 3, 
      title: "Vehicle Registration", 
      status: "verified",
      image: registrationPic
    },
    { 
      id: 4, 
      title: "Vehicle Fitness Certificate", 
      status: "rejected",
      image: vehicelCertificatePic
    },
    { 
      id: 5, 
      title: "Vehicle Tex Token", 
      status: "rejected",
      image: textTokenPic
    },
  ];

  const openModal = (doc: DocumentItem) => {
    setSelectedDoc({
      title: doc.title,
      image: doc.image,
    });
    setIsModalOpen(true);
  };

  return (
    <div className="p-4">
      <div className="rounded-2xl border border-gray-100 p-3 md:p-6">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 leading-6 mb-6">Documents</h2>

        <div className="flex flex-col gap-3">
          {documentData.map((doc) => (
            <div 
              key={doc.id} 
              onClick={() => openModal(doc)}
              className="flex items-center justify-between p-4 border border-gray-200 rounded-2xl hover:bg-gray-50 transition-all cursor-pointer group"
            >
              {/* Left Side: Icon & Title */}
              <div className="flex items-center gap-4">
                {doc.status === "verified" ? (
                  <div className="text-[#0D9488]"> 
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <mask id={`mask_${doc.id}`} maskUnits="userSpaceOnUse" x="1" y="1" width="22" height="22">
                        <path d="M12 22C13.3135 22.0016 14.6143 21.7437 15.8278 21.2411C17.0412 20.7384 18.1434 20.0009 19.071 19.071C20.0009 18.1434 20.7384 17.0412 21.2411 15.8278C21.7437 14.6143 22.0016 13.3135 22 12C22.0016 10.6866 21.7437 9.38572 21.2411 8.17225C20.7384 6.95878 20.0009 5.85659 19.071 4.92901C18.1434 3.99909 17.0412 3.26162 15.8278 2.75897C14.6143 2.25631 13.3135 1.99839 12 2.00001C10.6866 1.99839 9.38572 2.25631 8.17225 2.75897C6.95878 3.26162 5.85659 3.99909 4.92901 4.92901C3.99909 5.85659 3.26162 6.95878 2.75897 8.17225C2.25631 9.38572 1.99839 10.6866 2.00001 12C1.99839 13.3135 2.25631 14.6143 2.75897 15.8278C3.26162 17.0412 3.99909 18.1434 4.92901 19.071C5.85659 20.0009 6.95878 20.7384 8.17225 21.2411C9.38572 21.7437 10.6866 22.0016 12 22Z" fill="white" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
                        <path d="M8 12L11 15L17 9" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </mask>
                      <g mask={`url(#mask_${doc.id})`}>
                        <path d="M0 0H24V24H0V0Z" fill="#008080"/>
                      </g>
                    </svg>
                  </div>
                ) : (
                  <div className="text-[#EF4444]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.65 7.04789C20.25 6.04989 17.52 3.91489 16.76 3.11589C16.0993 2.51173 15.2609 2.13744 14.37 2.04889C14.46 1.93889 8.37 2.04889 8.21 2.04889C7.54786 2.02042 6.88666 2.12386 6.26486 2.35322C5.64306 2.58258 5.07305 2.93326 4.588 3.38489C4.10399 3.83622 3.71439 4.37914 3.4418 4.98218C3.16921 5.58522 3.01904 6.23637 3 6.89789V17.1749C3.0217 17.8358 3.17479 18.4857 3.45036 19.0868C3.72592 19.6879 4.11844 20.2281 4.605 20.6759C5.09178 21.1248 5.66289 21.4726 6.28518 21.699C6.90746 21.9255 7.56853 22.026 8.23 21.9949H15.79C16.4524 22.0234 17.1138 21.9198 17.7358 21.6903C18.3578 21.4608 18.9279 21.1098 19.413 20.6579C19.8968 20.2065 20.2862 19.6635 20.5587 19.0605C20.8311 18.4574 20.9811 17.8063 21 17.1449V8.59489C20.9934 8.06034 20.8742 7.5332 20.65 7.04789ZM15.22 15.8379C16.15 16.7459 14.71 18.1629 13.8 17.2449L11.99 15.4389C11.17 16.0579 9.88 18.3129 8.77 17.2349C7.66 16.1569 9.99 14.8109 10.57 14.0219C9.95 13.2039 7.68 11.9069 8.77 10.8089C9.86 9.71089 11.17 11.9869 11.99 12.6049C12.82 11.9769 14.12 9.71189 15.22 10.7989C16.32 11.8869 14.03 13.1939 13.41 14.0219L15.22 15.8379ZM16.03 7.43689C14.36 7.43689 15.09 4.81289 14.94 3.73489C15.24 3.84089 15.517 4.00689 15.75 4.22389C16.06 4.55389 19.01 7.08789 19.15 7.43689H16.03Z" fill="#EA4335"/>
                    </svg>
                  </div>
                )}
                
                <span className="text-sm md:text-base font-normal text-gray-900 leading-5">
                  {doc.title}
                </span>
              </div>

              <div className="text-gray-400 group-hover:text-gray-900 transition-colors">
                <ChevronRight size={22} strokeWidth={1.5} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedDoc && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          imageSrc={selectedDoc.image}
          title={selectedDoc.title}
        />
      )}
    </div>
  );
};

export default DocumentSection;




// "use client";


// import {  ChevronRight } from "lucide-react";
// import Modal from "./ProfileModal";
// import { useState } from "react";
// import profilePic from "../../assets/images/driverprofileImg.png";


// interface DocumentItem {
//   id: number;
//   title: string;
//   status: "verified" | "rejected";
// }


// const documentData: DocumentItem[] = [
//   { id: 1, title: "Profile Picture", status: "verified" },
//   { id: 2, title: "Driver License", status: "verified" },
//   { id: 3, title: "Vehicle Registration", status: "verified" },
//   { id: 4, title: "Vehicle Fitness Certificate", status: "rejected" },
//   { id: 5, title: "Vehicle Tex Token", status: "rejected" },
// ];

// const DocumentSection = () => {
//       const [selectedDoc, setSelectedDoc] = useState<{ image: string; title: string } | null>(null);
//       const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = (title: string) => {
//     setSelectedDoc({
//       title,
//       image: profilePic, 
//     });
//     setIsModalOpen(true);
//   };
//   return (
//     <div className="">
//       <div className="rounded-2xl border border-gray-100  p-3 md:p-6 ">
        

//         <h2 className="text-xl md:text-2xl font-semibold text-titleColor leading-6 mb-6">Documents</h2>

  
//         <div className="flex flex-col gap-3">
//           {documentData.map((doc) => (
//             <div 
//               key={doc.id} 
//                  onClick={() => doc.title === "Profile Picture" && openModal(doc.title)}
//               className="flex items-center justify-between p-4 border border-gray-200 rounded-2xl hover:bg-gray-50 transition-all cursor-pointer group"
//             >
//               {/* Left Side: Icon & Title */}
//               <div className="flex items-center gap-4">
//                 {doc.status === "verified" ? (
       
//                   <div className="text-[#0D9488]"> 
//                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//   <mask id="mask0_455_42937"  maskUnits="userSpaceOnUse" x="1" y="1" width="22" height="22">
//     <path d="M12 22C13.3135 22.0016 14.6143 21.7437 15.8278 21.2411C17.0412 20.7384 18.1434 20.0009 19.071 19.071C20.0009 18.1434 20.7384 17.0412 21.2411 15.8278C21.7437 14.6143 22.0016 13.3135 22 12C22.0016 10.6866 21.7437 9.38572 21.2411 8.17225C20.7384 6.95878 20.0009 5.85659 19.071 4.92901C18.1434 3.99909 17.0412 3.26162 15.8278 2.75897C14.6143 2.25631 13.3135 1.99839 12 2.00001C10.6866 1.99839 9.38572 2.25631 8.17225 2.75897C6.95878 3.26162 5.85659 3.99909 4.92901 4.92901C3.99909 5.85659 3.26162 6.95878 2.75897 8.17225C2.25631 9.38572 1.99839 10.6866 2.00001 12C1.99839 13.3135 2.25631 14.6143 2.75897 15.8278C3.26162 17.0412 3.99909 18.1434 4.92901 19.071C5.85659 20.0009 6.95878 20.7384 8.17225 21.2411C9.38572 21.7437 10.6866 22.0016 12 22Z" fill="white" stroke="white" stroke-width="2" stroke-linejoin="round"/>
//     <path d="M8 12L11 15L17 9" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//   </mask>
//   <g mask="url(#mask0_455_42937)">
//     <path d="M0 0H24V24H0V0Z" fill="#008080"/>
//   </g>
// </svg>
//                   </div>
//                 ) : (
               
//                   <div className="text-[#EF4444]">
//                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//   <path d="M20.65 7.04789C20.25 6.04989 17.52 3.91489 16.76 3.11589C16.0993 2.51173 15.2609 2.13744 14.37 2.04889C14.46 1.93889 8.37 2.04889 8.21 2.04889C7.54786 2.02042 6.88666 2.12386 6.26486 2.35322C5.64306 2.58258 5.07305 2.93326 4.588 3.38489C4.10399 3.83622 3.71439 4.37914 3.4418 4.98218C3.16921 5.58522 3.01904 6.23637 3 6.89789V17.1749C3.0217 17.8358 3.17479 18.4857 3.45036 19.0868C3.72592 19.6879 4.11844 20.2281 4.605 20.6759C5.09178 21.1248 5.66289 21.4726 6.28518 21.699C6.90746 21.9255 7.56853 22.026 8.23 21.9949H15.79C16.4524 22.0234 17.1138 21.9198 17.7358 21.6903C18.3578 21.4608 18.9279 21.1098 19.413 20.6579C19.8968 20.2065 20.2862 19.6635 20.5587 19.0605C20.8311 18.4574 20.9811 17.8063 21 17.1449V8.59489C20.9934 8.06034 20.8742 7.5332 20.65 7.04789ZM15.22 15.8379C16.15 16.7459 14.71 18.1629 13.8 17.2449L11.99 15.4389C11.17 16.0579 9.88 18.3129 8.77 17.2349C7.66 16.1569 9.99 14.8109 10.57 14.0219C9.95 13.2039 7.68 11.9069 8.77 10.8089C9.86 9.71089 11.17 11.9869 11.99 12.6049C12.82 11.9769 14.12 9.71189 15.22 10.7989C16.32 11.8869 14.03 13.1939 13.41 14.0219L15.22 15.8379ZM16.03 7.43689C14.36 7.43689 15.09 4.81289 14.94 3.73489C15.24 3.84089 15.517 4.00689 15.75 4.22389C16.06 4.55389 19.01 7.08789 19.15 7.43689H16.03Z" fill="#EA4335"/>
// </svg>
//                   </div>
//                 )}
                
//                 <span className="text-sm md:text-base font-normal text-titleColor leading-5">
//                   {doc.title}
//                 </span>
//               </div>

        
//               <div className="text-gray-400 group-hover:text-gray-900 transition-colors">
//                 <ChevronRight size={22} strokeWidth={1.5} />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//           {selectedDoc && (
//         <Modal
//           isOpen={isModalOpen}
//           onClose={() => setIsModalOpen(false)}
//           imageSrc={selectedDoc.image}
//           title={selectedDoc.title}
//         />
//       )}
//     </div>
//   );
// };

// export default DocumentSection;