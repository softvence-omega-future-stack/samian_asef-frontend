// "use client";

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
  X,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";

interface SidebarProps {
  collapsed?: boolean;
  onToggle?: (state: boolean) => void;
  closeMobileMenu?: () => void;
}

const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: Home, path: "/dashboard" },
  { id: "riders", label: "Riders", icon: Users, path: "/dashboard/riders" },
  { id: "driver-management", label: "Driver Management", icon: Truck, path: "/dashboard/driver-management" },
  { id: "trip-management", label: "Trip Management", icon: MapPin, path: "/dashboard/trip-management" },
  { id: "pricing", label: "Pricing Configuration", icon: DollarSign, path: "/dashboard/pricing-configuration" },
  { id: "transaction-history", label: "Transaction History", icon: History, path: "/dashboard/transaction-history" },
  { id: "complaints", label: "Complaints", icon: AlertCircle, path: "/dashboard/complains" },
  { id: "notifications", label: "Notifications Management", icon: Bell, path: "/dashboard/notifications-management" },
];

const Sidebar: React.FC<SidebarProps> = ({ collapsed = false, onToggle, closeMobileMenu }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className={cn(
      "bg-white border-r border-border flex flex-col h-full transition-all duration-300",
      collapsed ? "w-20" : "w-64"
    )}>
      
      {/* ========== HEADER ========== */}
      <div className="p-6 flex items-center justify-between border-b border-border md:border-b-0">
        
        {/* Logo */}
        <div
          className={cn(
            "flex items-center gap-2 cursor-pointer",
            collapsed && "justify-center w-full"
          )}
          onClick={() => collapsed && onToggle && onToggle(false)}
        >
          <img src={logo} alt="logo" className="h-8 w-8 flex-shrink-0" />
          {!collapsed && (
            <span className="text-green text-2xl font-bold whitespace-nowrap">
              Hustle
            </span>
          )}
        </div>

        {/* Desktop Collapse Button (Only when expanded) */}
        {!collapsed && (
          <Button
            variant="ghost"
            size="icon"
            className="hidden md:flex !text-[#6B7280]"
            onClick={() => onToggle && onToggle(true)}
          >
            <CgMenuRightAlt className="w-5 h-5" />
          </Button>
        )}

        {/* Mobile Close Button */}
        {closeMobileMenu && (
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden !text-[#6B7280]"
            onClick={closeMobileMenu}
          >
            <X className="w-5 h-5" />
          </Button>
        )}
      </div>

      {/* ========== MENU ITEMS ========== */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path || 
                          location.pathname.startsWith(item.path + "/");

          return (
            <div
              key={item.id}
              className={cn(
                "flex items-center justify-between rounded-md transition-colors",
                isActive ? "bg-gray text-green" : "hover:bg-gray hover:text-green"
              )}
            >
              <button
                className={cn(
                  "w-full cursor-pointer flex items-center gap-3 py-3 px-4",
                  collapsed && "justify-center",
                  isActive && "text-green"
                )}
                onClick={() => {
                  navigate(item.path);
                  if (closeMobileMenu) closeMobileMenu();
                }}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                {!collapsed && (
                  <span className="text-sm whitespace-nowrap">{item.label}</span>
                )}
              </button>
              
              {!collapsed && isActive && (
                <div className="w-1.5 h-7.5 bg-teal-600 rounded-l-xl" />
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;









// "use client";

// import { Button } from "@/components/ui/button";
// import { CgMenuRightAlt } from "react-icons/cg";

// import { cn } from "@/lib/utils";
// import {
//   AlertCircle,
//   Bell,
//   DollarSign,
//   History,
//   Home,
//   MapPin,
//   Truck,
//   Users,
// } from "lucide-react";
// import { useLocation, useNavigate } from "react-router-dom";
// import logo from "../assets/images/logo.png";
// const menuItems = [
//   { id: "dashboard", label: "Dashboard", icon: Home, path: "/dashboard" },
//   { id: "riders", label: "Riders", icon: Users, path: "/dashboard/riders" },
//   {
//     id: "driver-management",
//     label: "Driver Management",
//     icon: Truck,
//     path: "/dashboard/driver-management",
//   },
//   {
//     id: "trip-management",
//     label: "Trip Management",
//     icon: MapPin,
//     path: "/dashboard/trip-management",
//   },
//   {
//     id: "pricing",
//     label: "Pricing Configuration",
//     icon: DollarSign,
//     path: "/dashboard/pricing-configuration",
//   },
//   {
//     id: "transaction-history",
//     label: "Transaction History",
//     icon: History,
//     path: "/dashboard/transaction-history",
//   },
//   {
//     id: "complaints",
//     label: "Complaints",
//     icon: AlertCircle,
//     path: "/dashboard/complains",
//   },
//   {
//     id: "notifications",
//     label: "Notifications Management",
//     icon: Bell,
//     path: "/dashboard/notifications-management",
//   },
// ];

// const Sidebar = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   return (
//     <div className=" bg-white border-r border-border flex flex-col h-screen">
//       {/* Header */}
//       <div className="p-6  flex items-center gap-2">
//         <div className="flex items-center gap-1">
//           <img src={logo} alt="logo" />
//           <div className="text-green text-3xl font-bold">Hustle</div>
//         </div>

//         <Button
//           variant="ghost"
//           size="icon"
//           className="ml-auto !text-[#6B7280] cursor-pointer"
//         >
//           <CgMenuRightAlt className="w-5 h-5" />
//         </Button>
//       </div>

//       {/* Menu Items */}
//       <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
//         {menuItems.map((item) => {
//           const Icon = item.icon;
//           const isActive =
//             location.pathname === item.path ||
//             location.pathname.startsWith(item.path + "/");

//           return (
//             <div
//               className={`flex justify-between  py-2 rounded-md hover:bg-gray hover:text-green   ${
//                 isActive && "bg-gray text-green"
//               }`}
//             >
//               <button
//                 key={item.id}
//                 className={cn(
//                   "w-full cursor-pointer flex items-center gap-2  transition-all duration-200 px-4",
//                   isActive && " text-green"
//                 )}
//                 onClick={() => navigate(item.path)}
//               >
//                 <Icon className="w-5 h-5" />
//                 <span className="text-sm">{item.label}</span>
//               </button>
//               {isActive && (
//                 <div className="w-1.5 h-7.5 bg-teal-600 rounded-l-xl  " />
//               )}
//             </div>
//           );
//         })}
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;
