"use client";

import { Button } from "@/components/ui/button";
import { CgMenuRightAlt } from "react-icons/cg";

import { cn } from "@/lib/utils";
import {
  AlertCircle,
  Bell,
  DollarSign,
  History,
  Home,
  MapPin,
  Truck,
  Users,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: Home, path: "/dashboard" },
  { id: "riders", label: "Riders", icon: Users, path: "/dashboard/riders" },
  {
    id: "driver-management",
    label: "Driver Management",
    icon: Truck,
    path: "/dashboard/driver-management",
  },
  {
    id: "trip-management",
    label: "Trip Management",
    icon: MapPin,
    path: "/dashboard/trip-management",
  },
  {
    id: "pricing",
    label: "Pricing Configuration",
    icon: DollarSign,
    path: "/dashboard/pricing-configuration",
  },
  {
    id: "transaction-history",
    label: "Transaction History",
    icon: History,
    path: "/dashboard/transaction-history",
  },
  {
    id: "complaints",
    label: "Complaints",
    icon: AlertCircle,
    path: "/dashboard/complains",
  },
  {
    id: "notifications",
    label: "Notifications Management",
    icon: Bell,
    path: "/dashboard/notifications-management",
  },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className=" bg-white border-r border-border flex flex-col h-screen">
      {/* Header */}
      <div className="p-6  flex items-center gap-2">
        <div className="flex items-center gap-1">
          <img src={logo} alt="logo" />
          <div className="text-green text-3xl font-bold">Hustle</div>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="ml-auto !text-[#6B7280] cursor-pointer"
        >
          <CgMenuRightAlt className="w-5 h-5" />
        </Button>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive =
            location.pathname === item.path ||
            location.pathname.startsWith(item.path + "/");

          return (
            <div
              className={`flex justify-between  py-2 rounded-md hover:bg-gray hover:text-green   ${
                isActive && "bg-gray text-green"
              }`}
            >
              <button
                key={item.id}
                className={cn(
                  "w-full cursor-pointer flex items-center gap-2  transition-all duration-200 px-4",
                  isActive && " text-green"
                )}
                onClick={() => navigate(item.path)}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm">{item.label}</span>
              </button>
              {isActive && (
                <div className="w-1.5 h-7.5 bg-teal-600 rounded-l-xl  " />
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
