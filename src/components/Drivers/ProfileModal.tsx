"use client";

import React from "react";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  title: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, imageSrc, title }) => {
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
          className="absolute top-6 right-3 text-titleColor cursor-pointer hover:text-gray-700"
          onClick={onClose}
        >
          <X size={20} />
        </button>
         <h2 className="text-titleColor text-xl md:text-2xl font-semibold leading-6">Documents</h2>
     </div>

        {/* <h2 className="text-lg md:text-xl font-semibold mb-4">{title}</h2> */}
       
        <div className="flex items-center justify-center">
            <img src={imageSrc} alt={title} className="w-[220px] h-[260px] rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
