import { X } from "lucide-react";

interface BlockModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const BlockModal = ({ isOpen, onClose, onConfirm }: BlockModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      onClick={onClose} // outside click
    >
      <div
        className="relative bg-white rounded-2xl p-6 w-full max-w-md pb-13"
        onClick={(e) => e.stopPropagation()} 
      >
        <div className="mb-12">
              <button
          className="absolute top-6 right-3 text-titleColor cursor-pointer hover:text-gray-700 "
          onClick={onClose}
        >
          <X size={20} />
        </button>
        </div>
        

       <div className="text-center mb-8">
         <p className="text-xl sm:text-2xl md:text-3xl text-titleColor font-normal leading-[120%] ">
         Are you sure you want to <span className="text-[#FF2A34]">Block</span> this account
        </p>
       </div>

        <div className="flex flex-col gap-3">
          

          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-xl bg-primaryColor text-white  hover:bg-teal-700 cursor-pointer text-sm md:text-base font-medium leading-6 "
          >
            Yes, Do it 
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl  text-titleColor border border-textColor cursor-pointer text-sm md:text-base font-medium leading-6 "
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlockModal;
