"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Eye, Filter, Search } from "lucide-react";
import { useState } from "react";

interface Trip {
  id: string;
  driver: {
    name: string;
    image: string;
    rating: number;
  };
  passenger: {
    name: string;
    image: string;
  };
  pickupDistance: string;
  pickupLocation: string;
  dropoffDistance: string;
  dropoffLocation: string;
  status: "OnGoing" | "Completed" | "Cancelled";
  rating?: number;
}

const tripsData: Trip[] = [
  {
    id: "TRIP001",
    driver: {
      name: "Devon Lane",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Devon",
      rating: 4.5,
    },
    passenger: {
      name: "Devon Lane",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Devon2",
    },
    pickupDistance: "5 mins (0.7km) away",
    pickupLocation: "3891 Ranchview , California 62639",
    dropoffDistance: "30 mins(12.7km) trip",
    dropoffLocation: "1901 Thornridge Cir. Shiloh, California",
    status: "OnGoing",
  },
  {
    id: "TRIP002",
    driver: {
      name: "Devon Lane",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Devon",
      rating: 4.5,
    },
    passenger: {
      name: "Devon Lane",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Devon2",
    },
    pickupDistance: "5 mins (0.7km) away",
    pickupLocation: "3891 Ranchview , California 62639",
    dropoffDistance: "30 mins(12.7km) trip",
    dropoffLocation: "1901 Thornridge Cir. Shiloh, California",
    status: "OnGoing",
  },
  {
    id: "TRIP003",
    driver: {
      name: "Devon Lane",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Devon",
      rating: 4.5,
    },
    passenger: {
      name: "Devon Lane",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Devon2",
    },
    pickupDistance: "5 mins (0.7km) away",
    pickupLocation: "3891 Ranchview , California 62639",
    dropoffDistance: "30 mins(12.7km) trip",
    dropoffLocation: "1901 Thornridge Cir. Shiloh, California",
    status: "OnGoing",
    rating: 4.5,
  },
  {
    id: "TRIP004",
    driver: {
      name: "Devon Lane",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Devon",
      rating: 4.5,
    },
    passenger: {
      name: "Devon Lane",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Devon2",
    },
    pickupDistance: "5 mins (0.7km) away",
    pickupLocation: "3891 Ranchview , California 62639",
    dropoffDistance: "30 mins(12.7km) trip",
    dropoffLocation: "1901 Thornridge Cir. Shiloh, California",
    status: "OnGoing",
    rating: 4.5,
  },
  {
    id: "TRIP005",
    driver: {
      name: "Devon Lane",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Devon",
      rating: 4.5,
    },
    passenger: {
      name: "Devon Lane",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Devon2",
    },
    pickupDistance: "5 mins (0.7km) away",
    pickupLocation: "3891 Ranchview , California 62639",
    dropoffDistance: "30 mins(12.7km) trip",
    dropoffLocation: "1901 Thornridge Cir. Shiloh, California",
    status: "OnGoing",
    rating: 4.5,
  },
];

const TripManagement = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTrips, setFilteredTrips] = useState(tripsData);

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    const filtered = tripsData.filter(
      (trip) =>
        trip.driver.name.toLowerCase().includes(value.toLowerCase()) ||
        trip.passenger.name.toLowerCase().includes(value.toLowerCase()) ||
        trip.id.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredTrips(filtered);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "OnGoing":
        return "bg-teal-100 text-teal-800";
      case "Completed":
        return "bg-green-100 text-green-800";
      case "Cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Trip Management
        </h1>
        <p className="text-muted-foreground">
          Manage and monitor all active trips
        </p>
      </div>

      <div className="flex gap-4 items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search trips by driver, passenger, or trip ID..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline" className="border-teal-200 bg-transparent">
          <Filter className="h-4 w-4 mr-2" />
          Filters
        </Button>
      </div>

      <div className="grid gap-4">
        {filteredTrips.map((trip) => (
          <Card
            key={trip.id}
            className="border-0 shadow-sm hover:shadow-md transition-shadow"
          >
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {/* Driver and Passenger Info */}
                <div className="md:col-span-1 space-y-4">
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-muted-foreground uppercase">
                      Driver
                    </p>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage
                          src={trip.driver.image || "/placeholder.svg"}
                          alt={trip.driver.name}
                        />
                        <AvatarFallback>
                          {trip.driver.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">
                          {trip.driver.name}
                        </p>
                        <p className="text-xs text-muted-foreground">Driver</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-muted-foreground uppercase">
                      Passenger
                    </p>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage
                          src={trip.passenger.image || "/placeholder.svg"}
                          alt={trip.passenger.name}
                        />
                        <AvatarFallback>
                          {trip.passenger.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">
                          {trip.passenger.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Passenger
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trip Route Info */}
                <div className="md:col-span-2 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-start gap-3">
                      <div className="mt-1">
                        <div className="w-2 h-2 rounded-full bg-teal-500" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-muted-foreground">
                          {trip.pickupDistance}
                        </p>
                        <p className="text-sm font-medium text-foreground">
                          {trip.pickupLocation}
                        </p>
                      </div>
                    </div>

                    <div className="ml-1 h-8 border-l-2 border-dashed border-gray-300" />

                    <div className="flex items-start gap-3">
                      <div className="mt-1">
                        <div className="w-2 h-2 rounded-full bg-orange-500" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-muted-foreground">
                          {trip.dropoffDistance}
                        </p>
                        <p className="text-sm font-medium text-foreground">
                          {trip.dropoffLocation}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Status and Action */}
                <div className="md:col-span-2 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Badge className={`${getStatusColor(trip.status)}`}>
                        Trip {trip.status}
                      </Badge>
                      {trip.rating && (
                        <div className="flex items-center gap-1">
                          <span className="text-sm font-semibold text-foreground">
                            {trip.rating}
                          </span>
                          <span className="text-yellow-400">★</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">
                    <Eye className="h-4 w-4 mr-2" />
                    View
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredTrips.length === 0 && (
        <Card className="border-0 shadow-sm">
          <CardContent className="p-12 text-center">
            <p className="text-muted-foreground">
              No trips found matching your search
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default TripManagement;
