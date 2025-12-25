import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Filter, Search } from "lucide-react";
import { useState } from "react";

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

  return (
    <div className="p-8 space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Riders List</h1>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>All Riders</CardTitle>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg">
                <Search className="w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent outline-none text-sm"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button
                variant="outline"
                size="sm"
                className="gap-2 bg-transparent"
              >
                <Filter className="w-4 h-4" />
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
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                    Serial No.
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                    Name
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                    Phone Number
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                    Address
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                    Emergency Contact
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                    Total Trip
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {riders.map((rider) => (
                  <tr key={rider.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 text-muted-foreground">
                      #{rider.id}
                    </td>
                    <td className="py-3 px-4 font-medium">{rider.name}</td>
                    <td className="py-3 px-4">{rider.phone}</td>
                    <td className="py-3 px-4">{rider.address}</td>
                    <td className="py-3 px-4">{rider.contact}</td>
                    <td className="py-3 px-4">{rider.trips}</td>
                    <td className="py-3 px-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-teal-600 hover:bg-teal-50"
                        // onClick={() => onSelectRider(rider.id)}
                      >
                        Profile
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex items-center justify-between mt-6 text-sm">
            <span className="text-muted-foreground">
              Showing 1-8 of {riders.length} entries
            </span>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                Previous
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Riders;
