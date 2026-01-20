"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";
import ComplainModal from "./ComplainModal";
// import DateRangePicker from "@/components/FIlteringDate";

interface Complaint {
  id: string;
  requestId: string;
  complaint: string;
  tripOtp: string;
  complaintBy: "Rider" | "Driver";
  status: "Under Investigation" | "Resolved" | "Rejected";
}

const COMPLAINTS_DATA: Complaint[] = [
  {
    id: "1",
    requestId: "#161",
    complaint: "Driver took a wrong route",
    tripOtp: "6789",
    complaintBy: "Rider",
    status: "Under Investigation",
  },
  {
    id: "2",
    requestId: "#161",
    complaint: "Driver took a wrong route",
    tripOtp: "6789",
    complaintBy: "Driver",
    status: "Under Investigation",
  },
  {
    id: "3",
    requestId: "#161",
    complaint: "Driver took a wrong route",
    tripOtp: "6789",
    complaintBy: "Rider",
    status: "Under Investigation",
  },
  {
    id: "4",
    requestId: "#161",
    complaint: "Driver took a wrong route",
    tripOtp: "6789",
    complaintBy: "Driver",
    status: "Under Investigation",
  },
  {
    id: "5",
    requestId: "#161",
    complaint: "Driver took a wrong route",
    tripOtp: "6789",
    complaintBy: "Driver",
    status: "Under Investigation",
  },
  {
    id: "6",
    requestId: "#161",
    complaint: "Driver took a wrong route",
    tripOtp: "6789",
    complaintBy: "Rider",
    status: "Under Investigation",
  },
  {
    id: "7",
    requestId: "#161",
    complaint: "Driver took a wrong route",
    tripOtp: "6789",
    complaintBy: "Rider",
    status: "Under Investigation",
  },
  {
    id: "8",
    requestId: "#161",
    complaint: "Driver took a wrong route",
    tripOtp: "6789",
    complaintBy: "Rider",
    status: "Under Investigation",
  },
  {
    id: "9",
    requestId: "#161",
    complaint: "Driver took a wrong route",
    tripOtp: "6789",
    complaintBy: "Rider",
    status: "Under Investigation",
  },
];

const Complains = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedComplaint, setSelectedComplaint] = useState<Complaint | null>(null);


  const filteredComplaints = COMPLAINTS_DATA.filter(
    (c) =>
      c.requestId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.complaint.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Under Investigation":
        return "bg-[#FF9C2A33] text-[#ED7E00] ";
      case "Resolved":
        return "bg-green-50 text-green-700";
      case "Rejected":
        return "bg-red-50 text-red-700 ";
      default:
        return "bg-gray-50 text-gray-700 ";
    }
  };

  return (
    <div className="flex-1 overflow-auto bg-background rounded-[16px] ">
      <div className="p-3 md:p-6 ">
        <div className="flex flex-col lg:flex-row items-center justify-between">
        <h1 className="text-xl md:text-2xl font-semibold text-titleColor leading-6 mb-6">
          Complaints submitted by riders or drivers
        </h1>

             <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative ">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Search ..."
              className="pl-10 py-2"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" className="gap-2 bg-transparent cursor-pointer">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M5 10H15M2.5 5H17.5M7.5 15H12.5" stroke="#2C2F33" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            Filters
          </Button>
          {/* <div className="w-full md:w-auto md:min-w-[250px]">
  <DateRangePicker/>
</div> */}
        </div>
        </div>

        <div className="bg-card rounded-lg  overflow-x-auto overflow-y-auto">
          <table className="w-full ">
            <thead>
              <tr className="border-b border-border ">
                <th className="px-6 py-4 text-left text-sm md:text-base font-medium text-textColor">
                  Request Id
                </th>
                <th className="px-6 py-4 text-left text-sm md:text-base font-medium text-textColor">
                  Complaints
                </th>
                <th className="px-6 py-4 text-left text-sm md:text-base font-medium text-textColor">
                  Trip OTP
                </th>
                <th className="px-6 py-4 text-left text-sm md:text-base font-medium text-textColor">
                  Complaint By
                </th>
                <th className="px-6 py-4 text-left text-sm md:text-base font-medium text-textColor">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-sm md:text-base font-medium text-textColor">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredComplaints.map((complaint) => (
                <tr
                  key={complaint.id}
                  className="border-b border-border hover:bg-muted/50 transition-colors"
                >
                  <td className="px-6 py-4 text-sm align-middle text-titleColor font-normal">
                    {complaint.requestId}
                  </td>
                  <td className="px-6 py-4 text-sm align-middle text-titleColor font-normal">
                    {complaint.complaint}
                  </td>
                  <td className="px-6 py-4 text-sm align-middle text-titleColor font-normal">
                    {complaint.tripOtp}
                  </td>
                  <td className="px-6 py-4 text-sm align-middle text-titleColor font-normal">
                    {complaint.complaintBy}
                  </td>
                <td className="px-6 py-4 align-middle text-sm">
  <span
    className={`inline-flex items-center justify-center px-3 py-2 rounded-full text-sm font-normal ${getStatusColor(
      complaint.status
    )}`}
  >
    {complaint.status}
  </span>
</td>

                  <td className="px-6 py-4   text-sm  font-medium text-textColor ">
                    <Button  onClick={() => setSelectedComplaint(complaint)}  variant="outline" className="px-4 cursor-pointer bg-transparent rounded-full">
                      View
                    
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Modal */}
{selectedComplaint && (
  <ComplainModal
    selectedComplaint={selectedComplaint}
    onClose={() => setSelectedComplaint(null)}
  />
)}


        </div>

        {/* <div className="flex justify-between items-center mt-6">
          <Button variant="outline">Previous</Button>
          <Button variant="outline">Next</Button>
        </div> */}

         <div className="flex flex-col md:flex-row gap-2 items-center justify-between mt-6 text-sm">
            <span className="text-[#6B7280] text-sm font-normal ">
              Showing 1-8 of {COMPLAINTS_DATA.length} entries
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
      </div>
    </div>
  );
};

export default Complains;
