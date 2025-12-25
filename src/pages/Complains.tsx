"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRight, Filter, Search } from "lucide-react";
import { useState } from "react";

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

  const filteredComplaints = COMPLAINTS_DATA.filter(
    (c) =>
      c.requestId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.complaint.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Under Investigation":
        return "bg-orange-50 text-orange-700 border-orange-200";
      case "Resolved":
        return "bg-green-50 text-green-700 border-green-200";
      case "Rejected":
        return "bg-red-50 text-red-700 border-red-200";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  return (
    <div className="flex-1 overflow-auto bg-background">
      <div className="p-8">
        <h1 className="text-2xl font-bold text-foreground mb-6">
          Complaints submitted by riders or drivers
        </h1>

        <div className="flex gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Search ..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" className="gap-2 bg-transparent">
            <Filter className="w-4 h-4" />
            Filters
          </Button>
        </div>

        <div className="bg-card rounded-lg border border-border overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                  Request Id
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                  Complaints
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                  Trip OTP
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                  Complaint By
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
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
                  <td className="px-6 py-4 text-sm text-foreground">
                    {complaint.requestId}
                  </td>
                  <td className="px-6 py-4 text-sm text-foreground">
                    {complaint.complaint}
                  </td>
                  <td className="px-6 py-4 text-sm text-foreground">
                    {complaint.tripOtp}
                  </td>
                  <td className="px-6 py-4 text-sm text-foreground">
                    {complaint.complaintBy}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span
                      className={`px-3 py-1 rounded-full border text-xs font-medium ${getStatusColor(
                        complaint.status
                      )}`}
                    >
                      {complaint.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <Button variant="outline" className="gap-2 bg-transparent">
                      View
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center mt-6">
          <Button variant="outline">Previous</Button>
          <Button variant="outline">Next</Button>
        </div>
      </div>
    </div>
  );
};

export default Complains;
