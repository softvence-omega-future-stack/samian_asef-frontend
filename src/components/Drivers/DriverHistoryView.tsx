import React from "react";
import LeafletMap from "../Riders/Map";


interface Ride {
  id: string;
  pickupLocation: string;
  dropLocation: string;
  time: string;
  price: number;
  rating: number;
}

interface RideDetailsProps {
  ride: Ride;
  onBack: () => void;
}

const DriverHistoryView: React.FC<RideDetailsProps> = ({  onBack }) => {
  return (
    <div className="min-h-screen">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-textColor mb-4 hover:text-gray-700"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Back to Ride History
      </button>

      <div className=" ">
      {/* Top Section: Address and Timeline */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
        {/* Pickup */}
        <div className="flex-1">
          <p className="text-sm text-textColor font-medium mb-2.5">5 mins (0.7km) away</p>
          <h4 className="text-sm sm:text-base font-semibold text-titleColor">3891 Ranchview, California 62639</h4>
        </div>

        {/* Vertical/Horizontal Line Connector */}
        <div className="hidden md:flex items-center gap-2 flex-1 px-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 12C12.55 12 13.021 11.804 13.413 11.412C13.805 11.02 14.0007 10.5493 14 10C14 9.45 13.804 8.979 13.412 8.587C13.02 8.195 12.5493 7.99933 12 8C11.45 8 10.979 8.196 10.587 8.588C10.195 8.98 9.99933 9.45067 10 10C10 10.55 10.196 11.021 10.588 11.413C10.98 11.805 11.4507 12.0007 12 12ZM12 22C9.31667 19.7167 7.31267 17.596 5.988 15.638C4.66333 13.68 4.00067 11.8673 4 10.2C4 7.7 4.80433 5.70833 6.413 4.225C8.02167 2.74167 9.884 2 12 2C14.1167 2 15.9793 2.74167 17.588 4.225C19.1967 5.70833 20.0007 7.7 20 10.2C20 11.8667 19.3373 13.6793 18.012 15.638C16.6867 17.5967 14.6827 19.7173 12 22Z" fill="#2C2F33"/>
</svg>
          <div className="flex-1 border-t border-dashed border-gray-300"></div>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M22.9498 12.0002C22.9498 12.2835 22.8541 12.5212 22.6628 12.7132C22.4715 12.9052 22.2338 13.0009 21.9498 13.0002H20.9498C20.7165 15.0835 19.8541 16.8712 18.3628 18.3632C16.8715 19.8552 15.0838 20.7175 12.9998 20.9502V21.9502C12.9998 22.2335 12.9038 22.4709 12.7118 22.6622C12.5198 22.8535 12.2825 22.9495 11.9998 22.9502C11.7165 22.9502 11.4788 22.8542 11.2868 22.6622C11.0948 22.4702 10.9991 22.2329 10.9998 21.9502V20.9502C8.91647 20.7169 7.1288 19.8542 5.6368 18.3622C4.1448 16.8702 3.28247 15.0829 3.0498 13.0002H2.0498C1.76647 13.0002 1.52914 12.9042 1.3378 12.7122C1.14647 12.5202 1.05047 12.2829 1.0498 12.0002C1.0498 11.7169 1.1458 11.4792 1.3378 11.2872C1.5298 11.0952 1.76714 10.9995 2.0498 11.0002H3.0498C3.28314 8.91686 4.1458 7.12919 5.6378 5.63719C7.12981 4.14519 8.91714 3.28286 10.9998 3.05019V2.05019C10.9998 1.76686 11.0958 1.52919 11.2878 1.33719C11.4798 1.1452 11.7171 1.04953 11.9998 1.05019C12.2831 1.05019 12.5208 1.14586 12.7128 1.33719C12.9048 1.52853 13.0005 1.76619 12.9998 2.05019V3.05019C15.0831 3.28353 16.8708 4.14586 18.3628 5.63719C19.8548 7.12853 20.7171 8.91619 20.9498 11.0002H21.9498C22.2331 11.0002 22.4708 11.0962 22.6628 11.2882C22.8548 11.4802 22.9505 11.7175 22.9498 12.0002ZM18.9998 12.0002C18.9998 10.0669 18.3165 8.41686 16.9498 7.05019C15.5831 5.68353 13.9331 5.00019 11.9998 5.00019C10.0665 5.00019 8.41647 5.68353 7.0498 7.05019C5.68314 8.41686 4.9998 10.0669 4.9998 12.0002C4.9998 13.9335 5.68314 15.5835 7.0498 16.9502C8.41647 18.3169 10.0665 19.0002 11.9998 19.0002C13.9331 19.0002 15.5831 18.3169 16.9498 16.9502C18.3165 15.5835 18.9998 13.9335 18.9998 12.0002ZM15.9998 12.0002C15.9998 13.1002 15.6081 14.0419 14.8248 14.8252C14.0415 15.6085 13.0998 16.0002 11.9998 16.0002C10.8998 16.0002 9.95814 15.6085 9.1748 14.8252C8.39147 14.0419 7.9998 13.1002 7.9998 12.0002C7.9998 10.9002 8.39147 9.95853 9.1748 9.1752C9.95814 8.39186 10.8998 8.0002 11.9998 8.0002C13.0998 8.0002 14.0415 8.39186 14.8248 9.1752C15.6081 9.95853 15.9998 10.9002 15.9998 12.0002Z" fill="#2C2F33"/>
</svg>
        </div>

        {/* Drop */}
        <div className="flex-1 md:text-right">
          <p className="text-sm text-textColor font-medium mb-2.5">30 mins (12.7km) trip</p>
          <h4 className="text-sm sm:text-base font-semibold text-titleColor">1901 Thornridge Cir. Shiloh, California</h4>
        </div>
      </div>

      {/* Pricing Header */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-2xl md:text-[32px] font-semibold text-titleColor leading-[110%] mb-2">USD 15 USD</h2>
          <p className="text-base md:text-lg font-normal text-textColor leading-[110%]">Cash payment</p>
        </div>
        <div className="text-right">
          <div className="inline-flex items-center gap-1 bg-white shadow-sm text-primaryColor px-2 py-1 rounded-full mb-3">
            <span className="text-sm ">★</span>
            <span className="text-sm font-medium">4.5</span>
          </div>
          <p className="text-base md:text-lg font-normal text-titleColor leading-[100%]">Dec 13, 2024 | 8:50 A.M</p>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-48 sm:h-72 rounded-xl overflow-hidden mb-8 border border-gray-200">
    <LeafletMap/>
      </div>

      {/* Earnings Table */}
      <div className="space-y-4">
        <h3 className="font-semibold text-gray-900 text-sm md:text-base leading-6 mb-3">Your Earnings</h3>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center text-sm sm:text-base">
            <span className="text-titleColro text-sm font-normal">Base Fare</span>
            <div className="flex-1 max-w-[880px] mx-auto border-b border-dashed border-gray-300 mb-1"></div>
            <span className="font-bold text-titleColor ">$4.99</span>
          </div>

          <div className="flex justify-between items-center text-sm sm:text-base">
            <span className="text-titleColro text-sm font-normal">Booking Fee</span>
            <div className="flex-1 max-w-[880px] mx-auto border-b border-dashed border-gray-300 mb-1"></div>
            <span className="font-bold text-titleColor ">$2.13</span>
          </div>

          <div className="flex justify-between items-center text-sm sm:text-base">
            <span className="text-titleColro text-sm font-normal">Minimum Fare</span>
            <div className="flex-1 max-w-[880px] mx-auto border-b border-dashed border-gray-300 mb-1"></div>
            <span className="font-bold text-titleColor ">$7.00</span>
          </div>

          <div className="flex justify-between items-center font-bold pt-2 ">
            <span className="text-titleColor text-sm md:text-base font-bold">Total Fare</span>
            <div className="flex-1 max-w-[880px] mx-auto border-b border-dashed border-gray-300 mb-1"></div>
            <span className="text-titleColor text-sm md:text-base font-bold">$9.50</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default DriverHistoryView;
