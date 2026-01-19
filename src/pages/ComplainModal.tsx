"use client";

import { X } from "lucide-react"; 

interface Complaint {
  id: string;
  requestId: string;
  complaint: string;
  tripOtp: string;
  complaintBy: string; 
  submittedAt?: string; 
}

interface ComplainModalProps {
  selectedComplaint: Complaint;
  onClose: () => void;
}

const ComplainModal = ({ selectedComplaint, onClose }: ComplainModalProps) => {
  return (
    <div  onClick={onClose}  className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      
      <div className="bg-white w-full max-w-[600px] rounded-3xl p-6 relative shadow-lg text-[#333]">
        
     
       <div className="mb-6">
         <button
          className="absolute top-6 right-6 cursor-pointer text-gray-800 hover:text-black transition-colors mb-6"
          onClick={onClose}
        >
          <X size={24} />
        </button>
        </div>

        <div className="space-y-8 mt-12">
       </div>
          
          
          <div className="flex justify-between items-center mb-6">
            <span className="text-base md:text-lg text-titleColor leading-6 font-semibold">Request Id:</span>
            <span className="text-lg md:text-xl text-titleColor leading-6 font-semibold">{selectedComplaint.requestId || "99"}</span>
          </div>

          
          <div className="space-y-3 mb-6">
            <h3 className="text-base md:text-lg text-titleColor leading-6 font-semibold">Complaints:</h3>
            <p className="text-lg max-w-[411px] leading-relaxed text-gray-700">
              {/* {selectedComplaint.complaint} */}
              Driver took a wrong route This project is a comprehensive multi-sided Ride-Hailing Platform, consisting of a Rider App (iOS & Android), Driver App (iOS & Android), Admin Panel (Web Dashboard), and a robust Backend System with API and Database.
            </p>
          </div>

         
          <div className="flex justify-between items-center mb-6">
            <span className="text-base md:text-lg text-titleColor leading-6 font-semibold">Complaint By:</span>
            <span className="text-lg md:text-xl text-titleColor leading-6 font-semibold">{selectedComplaint.complaintBy}</span>
          </div>

     
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
            <span className="text-base md:text-lg text-titleColor leading-6 font-semibold">Submitted At:</span>
            <span className="text-lg md:text-xl text-titleColor leading-6 font-semibold">
           
              {selectedComplaint.submittedAt || "2025-10-18 20:49:43"}
            </span>
          </div>

        </div>
      </div>
  
  );
};

export default ComplainModal;