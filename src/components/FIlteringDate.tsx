import { useState, useRef, useEffect } from 'react';

interface DateRangePickerProps {
  onApply?: (startDate: string, endDate: string) => void;
}

const DateRangePicker = ({ onApply }: DateRangePickerProps) => {
  const [startDate, setStartDate] = useState<string>('2025-12-20');
  const [endDate, setEndDate] = useState<string>('2025-12-25');
  const [showCalendar, setShowCalendar] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const buttonRef = useRef<HTMLDivElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setShowCalendar(false);
      }
    };
    if (showCalendar) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showCalendar]);

  const handleApply = () => {
    if (!startDate || !endDate) {
      setError('Please select both start and end dates');
      return;
    }
    setError('');
    setShowCalendar(false);

    if (onApply) {
      onApply(startDate, endDate); 
    }
  };

  const handleClear = () => {
    setStartDate('');
    setEndDate('');
    setError('');
    setShowCalendar(false);

    if (onApply) {
      onApply('', ''); 
    }
  };

  return (
    <div className="relative w-full">
      <div
        ref={buttonRef}
        onClick={() => setShowCalendar(!showCalendar)}
        className="flex items-center justify-between gap-2 px-3 py-2 text-sm font-medium text-[#344054] hover:bg-gray-50 cursor-pointer rounded-lg border border-gray-300 transition-colors w-full"
      >
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="19"
            viewBox="0 0 17 19"
            fill="none"
            className="flex-shrink-0"
          >
            <path
              d="M15.833 7.49967H0.833008M11.6663 0.833008V4.16634M4.99967 0.833008V4.16634M4.83301 17.4997H11.833C13.2331 17.4997 13.9332 17.4997 14.468 17.2272C14.9384 16.9875 15.3208 16.6051 15.5605 16.1347C15.833 15.5999 15.833 14.8998 15.833 13.4997V6.49967C15.833 5.09954 15.833 4.39948 15.5605 3.8647C15.3208 3.39429 14.9384 3.01184 14.468 2.77216C13.9332 2.49967 13.2331 2.49967 11.833 2.49967H4.83301C3.43288 2.49967 2.73281 2.49967 2.19803 2.77216C1.72763 3.01184 1.34517 3.39429 1.10549 3.8647C0.833008 4.39948 0.833008 5.09954 0.833008 6.49967V13.4997C0.833008 14.8998 0.833008 15.5999 1.10549 16.1347C1.34517 16.6051 1.72763 16.9875 2.19803 17.2272C2.73281 17.4997 3.43288 17.4997 4.83301 17.4997Z"
              stroke="#344054"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="truncate text-sm">
            {startDate && endDate
              ? `${formatDate(startDate)} – ${formatDate(endDate)}`
              : 'Select Date Range'}
          </span>
        </div>
        {(startDate || endDate) && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleClear();
            }}
            className="hover:bg-gray-200 rounded p-1 flex-shrink-0"
            title="Clear filter"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        )}
      </div>

      {error && (
        <div className="mt-2 text-xs text-amber-600 bg-amber-50 p-2 rounded-lg">
          {error}
        </div>
      )}

      {showCalendar && (
        <div
          ref={dropdownRef}
          className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg p-6 z-50 w-full min-w-[250px]"
        >
          <h3 className="text-sm font-semibold text-gray-700 mb-4">
            Select Date Range
          </h3>
          <div className="mb-4">
            <label className="block text-xs font-medium text-gray-500 mb-1">
              Start Date
            </label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block text-xs font-medium text-gray-500 mb-1">
              End Date
            </label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              min={startDate}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
          <div className="flex gap-2 pt-2">
            <button
              onClick={() => setShowCalendar(false)}
              className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleApply}
              disabled={!startDate || !endDate}
              className="flex-1 px-4 py-2 text-sm font-medium text-white bg-[#526FFF] hover:bg-blue-600 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DateRangePicker;







// import { useState, useRef, useEffect } from 'react';

// interface DateRangePickerProps {
//   initialStartDate?: string;
//   initialEndDate?: string;
//   onApply?: (startDate: string, endDate: string) => void;
// }

// const DateRangePicker: React.FC<DateRangePickerProps> = ({
//   initialStartDate = '',
//   initialEndDate = '',
//   onApply,
// }) => {
//   const [startDate, setStartDate] = useState<string>(initialStartDate);
//   const [endDate, setEndDate] = useState<string>(initialEndDate);
//   const [showCalendar, setShowCalendar] = useState<boolean>(false);
//   const [error, setError] = useState<string>('');
//   const [loading, setLoading] = useState<boolean>(false);

//   const buttonRef = useRef<HTMLDivElement | null>(null);
//   const dropdownRef = useRef<HTMLDivElement | null>(null);

//   const formatDate = (dateString: string) => {
//     if (!dateString) return '';
//     const date = new Date(dateString);
//     return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
//   };

//   // Click outside to close
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target as Node) &&
//         buttonRef.current &&
//         !buttonRef.current.contains(event.target as Node)
//       ) {
//         setShowCalendar(false);
//       }
//     };
//     if (showCalendar) document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, [showCalendar]);

//   const handleApply = () => {
//     if (!startDate || !endDate) {
//       setError('Please select both dates');
//       return;
//     }
//     setLoading(true);
//     setError('');
//     // Pass the selected dates to parent
//     onApply?.(startDate, endDate);
//     setLoading(false);
//     setShowCalendar(false);
//   };

//   const handleClear = () => {
//     setStartDate('');
//     setEndDate('');
//     setError('');
//     onApply?.('', '');
//     setShowCalendar(false);
//   };

//   return (
//     <div className="relative w-full max-w-[260px]">
//       {/* Button */}
//       <div
//         ref={buttonRef}
//         onClick={() => setShowCalendar(!showCalendar)}
//         className="flex items-center justify-between gap-2 px-4 py-2.5 text-sm font-medium text-[#344054] hover:bg-gray-50 cursor-pointer rounded-lg border border-gray-300 transition-colors"
//       >
//         <div className="flex items-center gap-2">
//           {/* Calendar SVG */}
//           <svg xmlns="http://www.w3.org/2000/svg" width="17" height="19" viewBox="0 0 17 19" fill="none">
//             <path d="M15.833 7.49967H0.833008M11.6663 0.833008V4.16634M4.99967 0.833008V4.16634M4.83301 17.4997H11.833C13.2331 17.4997 13.9332 17.4997 14.468 17.2272C14.9384 16.9875 15.3208 16.6051 15.5605 16.1347C15.833 15.5999 15.833 14.8998 15.833 13.4997V6.49967C15.833 5.09954 15.833 4.39948 15.5605 3.8647C15.3208 3.39429 14.9384 3.01184 14.468 2.77216C13.9332 2.49967 13.2331 2.49967 11.833 2.49967H4.83301C3.43288 2.49967 2.73281 2.49967 2.19803 2.77216C1.72763 3.01184 1.34517 3.39429 1.10549 3.8647C0.833008 4.39948 0.833008 5.09954 0.833008 6.49967V13.4997C0.833008 14.8998 0.833008 15.5999 1.10549 16.1347C1.34517 16.6051 1.72763 16.9875 2.19803 17.2272C2.73281 17.4997 3.43288 17.4997 4.83301 17.4997Z" stroke="#344054" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
//           </svg>
//           <span className="truncate">
//             {startDate && endDate
//               ? `${formatDate(startDate)} – ${formatDate(endDate)}`
//               : "Select Date Range"}
//           </span>
//         </div>
//         {(startDate || endDate) && (
//           <button
//             onClick={(e) => { e.stopPropagation(); handleClear(); }}
//             className="hover:bg-gray-200 rounded p-1"
//             title="Clear filter"
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//               <line x1="18" y1="6" x2="6" y2="18"></line>
//               <line x1="6" y1="6" x2="18" y2="18"></line>
//             </svg>
//           </button>
//         )}
//       </div>

//       {/* Error */}
//       {error && <div className="mt-2 text-xs text-amber-600 bg-amber-50 p-2 rounded-lg">{error}</div>}

//       {/* Calendar Dropdown */}
//       {showCalendar && (
//         <div ref={dropdownRef} className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg p-6 z-50 min-w-[300px]">
//           <h3 className="text-sm font-semibold text-gray-700 mb-4">Select Date Range</h3>
//           <div className="mb-4">
//             <label className="block text-xs font-medium text-gray-500 mb-1">Start Date</label>
//             <input
//               type="date"
//               value={startDate}
//               onChange={(e) => setStartDate(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-xs font-medium text-gray-500 mb-1">End Date</label>
//             <input
//               type="date"
//               value={endDate}
//               onChange={(e) => setEndDate(e.target.value)}
//               min={startDate}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
//             />
//           </div>
//           <div className="flex gap-2 pt-2">
//             <button
//               onClick={() => setShowCalendar(false)}
//               className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
//             >
//               Cancel
//             </button>
//             <button
//               onClick={handleApply}
//               disabled={loading || !startDate || !endDate}
//               className="flex-1 px-4 py-2 text-sm font-medium text-white bg-[#526FFF] hover:bg-blue-600 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               {loading ? "Loading..." : "Apply"}
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DateRangePicker;
