import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader,  } from "@/components/ui/card";
import {  MoreVertical, Search, Trash2,  } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const riders = [
  {
    id: "101",
    name: "Demo-Rider",
    phone: "+8801234567890",
    address: "San Francisco, USA",
    contact: "+8801234567890",
    trips: 20,
  },
  {
    id: "102",
    name: "Demo-Rider",
    phone: "+8801234567890",
    address: "San Francisco, USA",
    contact: "+8801234567890",
    trips: 20,
  },
  {
    id: "103",
    name: "Demo-Rider",
    phone: "+8801234567890",
    address: "San Francisco, USA",
    contact: "+8801234567890",
    trips: 20,
  },
  {
    id: "104",
    name: "Demo-Rider",
    phone: "+8801234567890",
    address: "San Francisco, USA",
    contact: "+8801234567890",
    trips: 20,
  },
  {
    id: "105",
    name: "Demo-Rider",
    phone: "+8801234567890",
    address: "San Francisco, USA",
    contact: "+8801234567890",
    trips: 20,
  },
  {
    id: "106",
    name: "Demo-Rider",
    phone: "+8801234567890",
    address: "San Francisco, USA",
    contact: "+8801234567890",
    trips: 20,
  },
  {
    id: "107",
    name: "Demo-Rider",
    phone: "+8801234567890",
    address: "San Francisco, USA",
    contact: "+8801234567890",
    trips: 20,
  },
  {
    id: "108",
    name: "Demo-Rider",
    phone: "+8801234567890",
    address: "San Francisco, USA",
    contact: "+8801234567890",
    trips: 20,
  },
];


  const Riders = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const navigate = useNavigate()
  const dropdownRef = useRef<HTMLDivElement | null>(null);


  useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setOpenMenuId(null); // close dropdown
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);

  return (
    <div className=" bg-white rounded-2xl space-y-6">


      <Card>
        <CardHeader>
         <div className="flex flex-col md:flex-row w-full gap-2 items-center md:justify-between">
  <h1 className="text-xl md:text-2xl leading-6 font-semibold">Riders List</h1>

  <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto items-center">
    {/* Search box */}
    <div className="flex w-full md:w-64 items-center gap-2 border px-4 py-2 rounded-lg">
      <Search className="w-4 h-4 text-muted-foreground" />
      <input
        type="text"
        placeholder="Search..."
        className="bg-transparent outline-none text-sm w-full"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>

    {/* Filter button */}
    <Button
      variant="outline"
      size="sm"
      className="gap-2 w-full md:w-auto bg-transparent hover:bg-gray-100 cursor-pointer py-2 px-4 flex justify-center"
    >
      <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.33301 5.8335H13.333M0.833008 0.833496H15.833M5.83301 10.8335H10.833" stroke="#2C2F33" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      Filters
    </Button>
  </div>
</div>

        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="border-b">
                <tr>
                  <th className="text-left py-3 px-4 font-medium text-[#6B7280] text-sm sm:text-base">
                    Serial No.
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-[#6B7280] text-sm sm:text-base">
                    Name
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-[#6B7280] text-sm sm:text-base">
                    Phone Number
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-[#6B7280] text-sm sm:text-base">
                    Address
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-[#6B7280] text-sm sm:text-base">
                    Emergency Contact
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-[#6B7280] text-sm sm:text-base">
                    Total Trip
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-[#6B7280] text-sm sm:text-base">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {riders.map((rider) => (
                  <tr key={rider.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 text-[#2C2F33] text-sm font-normal">
                      #{rider.id}
                    </td>
                    <td className="py-3 px-4 text-[#2C2F33] text-sm font-normal">{rider.name}</td>
                    <td className="py-3 px-4 text-[#2C2F33] text-sm font-normal">{rider.phone}</td>
                    <td className="py-3 px-4 text-[#2C2F33] text-sm font-normal">{rider.address}</td>
                    <td className="py-3 px-4 text-[#2C2F33] text-sm font-normal">{rider.contact}</td>
                    <td className="py-3 px-4 text-[#2C2F33] text-sm font-normal">{rider.trips}</td>
                    <td className="py-3 px-4 text-[#2C2F33] text-sm font-normal relative">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-teal-600 hover:bg-teal-50 cursor-pointer"
                        // onClick={() => onSelectRider(rider.id)}
                           onClick={() =>
      setOpenMenuId(openMenuId === rider.id ? null : rider.id)
    }
                      >
                        <MoreVertical/>
                      </Button>
                             {openMenuId === rider.id && (
    <div ref={dropdownRef} className="absolute right-30 mt-2 w-32 bg-white border rounded-lg shadow-lg z-50">
      <button
        onClick={() => {
     navigate(`/dashboard/riders/profile/${rider.id}`);

          // setOpenMenuId(null);
          // onSelectRider(rider.id)
        }}
        className="flex items-center gap-2 w-full px-4 py-2 text-sm text-[#008080] font-normal cursor-pointer hover:bg-gray-100"
      >
        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M2.66669 17.5145C3.16883 17.6667 3.84708 17.6667 5 17.6667H13.6667C14.8196 17.6667 15.4978 17.6667 16 17.5145M2.66669 17.5145C2.55902 17.4819 2.45944 17.4423 2.36502 17.3942C1.89462 17.1545 1.51217 16.772 1.27248 16.3016C1 15.7669 1 15.0668 1 13.6667V5C1 3.59987 1 2.8998 1.27248 2.36502C1.51217 1.89462 1.89462 1.51217 2.36502 1.27248C2.8998 1 3.59987 1 5 1H13.6667C15.0668 1 15.7669 1 16.3016 1.27248C16.772 1.51217 17.1545 1.89462 17.3942 2.36502C17.6667 2.8998 17.6667 3.59987 17.6667 5V13.6667C17.6667 15.0668 17.6667 15.7669 17.3942 16.3016C17.1545 16.772 16.772 17.1545 16.3016 17.3942C16.2072 17.4423 16.1076 17.4819 16 17.5145M2.66669 17.5145C2.66696 16.8401 2.67101 16.4832 2.73072 16.183C2.99374 14.8607 4.0274 13.8271 5.3497 13.564C5.6717 13.5 6.05891 13.5 6.83333 13.5H11.8333C12.6078 13.5 12.995 13.5 13.317 13.564C14.6393 13.8271 15.6729 14.8607 15.936 16.183C15.9957 16.4832 15.9997 16.8401 16 17.5145M12.6667 7.25C12.6667 9.09095 11.1743 10.5833 9.33333 10.5833C7.49238 10.5833 6 9.09095 6 7.25C6 5.40905 7.49238 3.91667 9.33333 3.91667C11.1743 3.91667 12.6667 5.40905 12.6667 7.25Z" stroke="#008080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 Profile
      </button>

      <button
        onClick={() => {
          setOpenMenuId(null);
          // onDeleteRider(rider.id)
        }}
        className="flex items-center gap-2 w-full px-4 py-2 text-sm text-[#6B7280] font-normal cursor-pointer hover:bg-red-50"
      >
        <Trash2 size={14} /> Delete
      </button>
    </div>
  )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex flex-col md:flex-row gap-2 items-center justify-between mt-6 text-sm">
            <span className="text-[#6B7280] text-sm font-normal ">
              Showing 1-8 of {riders.length} entries
            </span>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="border p-2 cursor-pointer text-sm font-normal leading-5">
                Previous
              </Button>
              <Button variant="outline" size="sm" className="border p-2 cursor-pointer text-sm font-normal leading-5">
                Next
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

 <Outlet />
    </div>
  );
};

export default Riders;
