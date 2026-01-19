"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {   Search } from "lucide-react";
import { useState } from "react";
import driverImg from "../assets/images/driverImg.png";
import passengerImg from "../assets/images/passengerImg.png";
import { useNavigate } from "react-router-dom";

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
      image: driverImg,
      rating: 4.5,
    },
    passenger: {
      name: "Devon Lane",
      image: passengerImg,
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
      image: driverImg,
      rating: 4.5,
    },
    passenger: {
      name: "Devon Lane",
      image: passengerImg,
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
      image: driverImg,
      rating: 4.5,
    },
    passenger: {
      name: "Devon Lane",
      image: passengerImg,
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
      image: driverImg,
      rating: 4.5,
    },
    passenger: {
      name: "Devon Lane",
      image: passengerImg,
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
      image: driverImg,
      rating: 4.5,
    },
    passenger: {
      name: "Devon Lane",
      image: passengerImg,
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
  const navigate = useNavigate();

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

    const handleViewClick = (tripId: string) => {
    // Navigate to RiderProfile page with history tab
    navigate(`/dashboard/riders/profile/${tripId}?tab=ride-history`);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "OnGoing":
        return "bg-primaryColor text-white";
      case "Completed":
        return "bg-green-100 text-green-800";
      case "Cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className=" bg-white rounded-2xl p-3 md:p-6 space-y-6">
    <div className="flex flex-col md:flex-row w-full items-start md:items-center md:justify-between gap-4 md:gap-6">
  
  {/* Title */}
  <div className="md:w-auto w-full">
    <h1 className="text-xl md:text-2xl font-semibold text-titleColor leading-6">
      Trip Management
    </h1>
  </div>

  {/* Search + Filter */}
  <div className="flex flex-col md:flex-row w-full md:w-auto gap-4 items-center">
    
    <div className="relative w-full md:w-[320px]">
      <Search className="absolute left-3 top-2 h-5 w-5 text-muted-foreground" />
      <Input
        placeholder="Search trips by driver, passenger, or trip ID..."
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
        className="pl-10"
      />
    </div>

    <Button variant="outline" className="border w-full md:w-auto bg-transparent cursor-pointer">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M5 10H15M2.5 5H17.5M7.5 15H12.5"
          stroke="#2C2F33"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Filters
    </Button>

  </div>
</div>


      <div className="grid gap-4">
        {filteredTrips.map((trip) => (
          <Card
            key={trip.id}
            className="border-0 bg-[#F5F5F5] p-2 md:p-4 overflow-hidden"
          >
            <CardContent className="p-6">
           <div className="flex  flex-col md:flex-row w-full items-center justify-between">
              <div className="w-full md:w-3/4">
               <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 ">
                {/* Driver and Passenger Info */}
                <div className="flex flex-1 gap-4 space-y-4">
                  <div className="space-y-2">
                 
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
                        <p className="text-sm md:text-base font-semibold text-titleColor leading-6">
                          {trip.driver.name}
                        </p>
                        <p className="text-sm md:text-base font-semibold text-textColor leading-6">Driver</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    
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
                        <p className="text-sm md:text-base font-semibold text-titleColor leading-6">
                          {trip.passenger.name}
                        </p>
                        <p className="text-sm md:text-base font-semibold text-textColor leading-6">
                          Passenger
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                 <div className="flex-1 justify-center md:justify-center flex">
<Badge className={`block w-full md:w-auto py-1 px-3 md:mr-10 mb-2 md:mb-0 ${getStatusColor(trip.status)}`}>
  Trip {trip.status}
</Badge>


                 </div>
                </div>

                {/* Trip Route Info */}
                <div>
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
        <div className="flex-1 ">
          <p className="text-sm text-textColor font-medium mb-2.5">30 mins (12.7km) trip</p>
          <h4 className="text-sm sm:text-base font-semibold text-titleColor">1901 Thornridge Cir. Shiloh, California</h4>
        </div>
      </div>
      </div>
             </div>

                {/* Status and Action */}
                <div className="w-full md:w-1/4 flex flex-col items-end gap-3">
                  <div className="space-y-3">
                    {/* <div className="flex items-center justify-between">
                  
                      {trip.rating && (
                        <div className="flex items-center gap-1">
                          <span className="text-sm font-semibold text-foreground">
                            {trip.rating}
                          </span>
                          <span className="text-yellow-400">★</span>
                        </div>
                      )}
                    </div> */}
                  </div>

            <Button
  onClick={() => handleViewClick(trip.id)}
  className="bg-white border border-textColor w-full md:w-auto flex-shrink-0 text-textColor py-2.5 px-4 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
>
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
