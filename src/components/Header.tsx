import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Bell, Globe, LogOut, Search, Menu } from "lucide-react";
import { useState, useEffect } from "react";

interface HeaderProps {
  onMobileMenuOpen?: () => void;
  isSidebarCollapsed?: boolean;
  onSidebarToggle?: () => void;
}

const notifications = [
  { id: 1, title: "New Ride Request", message: "You have a new ride request from John Doe", time: "5 min ago", read: false },
  { id: 2, title: "Ride Completed", message: "Ride with Sarah Smith has been completed", time: "15 min ago", read: false },
  { id: 3, title: "Payment Received", message: "Payment of $45.50 has been received", time: "1 hour ago", read: true },
  { id: 4, title: "System Update", message: "System maintenance scheduled for tonight", time: "3 hours ago", read: true },
];

const Header: React.FC<HeaderProps> = ({ 
  onMobileMenuOpen, 
  // isSidebarCollapsed, 
  onSidebarToggle 
}) => {
  const [openNotifications, setOpenNotifications] = useState(false);
  const [language, setLanguage] = useState("EN");
  const unreadCount = notifications.filter((n) => !n.read).length;

  useEffect(() => {
    if (openNotifications) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [openNotifications]);

  return (
    <header className="bg-white border-b border-border px-4 sm:px-6 py-4 flex items-center justify-between sticky top-0 z-30">
      
      {/* ========== LEFT SECTION ========== */}
      <div className="flex items-center gap-2">
        
        {/* Mobile Menu Button (Only Mobile) */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={onMobileMenuOpen}
        >
          <Menu className="w-5 h-5" />
        </Button>

        {/* Desktop Toggle Button (Only Desktop) */}
        <Button
          variant="ghost"
          size="icon"
          className="hidden md:flex"
          onClick={onSidebarToggle}
        >
          <Menu className="w-5 h-5" />
        </Button>

        {/* Search Input */}
        <div className="relative ml-2 flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            placeholder="Search something..."
            className="pl-10 bg-gray-50 border-0"
          />
        </div>
      </div>

      {/* ========== RIGHT SECTION ========== */}
      <div className="flex items-center gap-3 sm:gap-6 ml-auto">
        
        {/* Language Selector */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="hidden sm:flex items-center gap-2">
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">{language}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setLanguage("EN")}>English</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setLanguage("ES")}>Español</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setLanguage("FR")}>Français</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setLanguage("DE")}>Deutsch</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Notifications */}
        <DropdownMenu open={openNotifications} onOpenChange={setOpenNotifications}>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5 text-gray-600" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">
                  {unreadCount}
                </span>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80 max-h-96 overflow-y-auto">
            <div className="px-4 py-3 border-b border-border">
              <h3 className="font-semibold text-sm">Notifications</h3>
              {unreadCount > 0 && <p className="text-xs text-gray-500">{unreadCount} new</p>}
            </div>
            {notifications.map((notif) => (
              <div 
                key={notif.id} 
                className={`px-4 py-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors ${
                  !notif.read ? "bg-blue-50" : ""
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-2 h-2 rounded-full mt-1.5 ${!notif.read ? "bg-teal-600" : "bg-transparent"}`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">{notif.title}</p>
                    <p className="text-xs text-gray-600 mt-0.5 line-clamp-2">{notif.message}</p>
                    <p className="text-xs text-gray-400 mt-1">{notif.time}</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="px-4 py-2 border-t border-border text-center">
              <Button variant="ghost" size="sm" className="text-xs text-teal-600 hover:text-teal-700">
                View All Notifications
              </Button>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Profile */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Avatar className="w-8 h-8">
                <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Profile Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;








// "use client";

// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Input } from "@/components/ui/input";
// import { Bell, Globe, LogOut, Search } from "lucide-react";
// import { useState } from "react";

// const notifications = [
//   {
//     id: 1,
//     title: "New Ride Request",
//     message: "You have a new ride request from John Doe",
//     time: "5 min ago",
//     read: false,
//   },
//   {
//     id: 2,
//     title: "Ride Completed",
//     message: "Ride with Sarah Smith has been completed",
//     time: "15 min ago",
//     read: false,
//   },
//   {
//     id: 3,
//     title: "Payment Received",
//     message: "Payment of $45.50 has been received",
//     time: "1 hour ago",
//     read: true,
//   },
//   {
//     id: 4,
//     title: "System Update",
//     message: "System maintenance scheduled for tonight",
//     time: "3 hours ago",
//     read: true,
//   },
// ];

// const Header = () => {
//   const [openNotifications, setOpenNotifications] = useState(false);
//   const [language, setLanguage] = useState("EN");
//   const unreadCount = notifications.filter((n) => !n.read).length;

//   return (
//     <header className="bg-white border-b border-border px-6 py-6.5 flex items-center justify-between">
//       {/* Left section - Search */}
//       <div className="flex-1 max-w-md">
//         <div className="relative">
//           <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
//           <Input
//             placeholder="Search something..."
//             className="pl-10 bg-gray-50 border-0"
//           />
//         </div>
//       </div>

//       {/* Right section - Language, Notifications, Profile */}
//       <div className="flex items-center gap-6 ml-auto">
//         {/* Language Selector */}
//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <Button
//               variant="ghost"
//               size="sm"
//               className="flex items-center gap-2"
//             >
//               <Globe className="w-4 h-4" />
//               <span className="text-sm font-medium">{language}</span>
//             </Button>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent align="end">
//             <DropdownMenuItem onClick={() => setLanguage("EN")}>
//               English
//             </DropdownMenuItem>
//             <DropdownMenuItem onClick={() => setLanguage("ES")}>
//               Español
//             </DropdownMenuItem>
//             <DropdownMenuItem onClick={() => setLanguage("FR")}>
//               Français
//             </DropdownMenuItem>
//             <DropdownMenuItem onClick={() => setLanguage("DE")}>
//               Deutsch
//             </DropdownMenuItem>
//           </DropdownMenuContent>
//         </DropdownMenu>

//         {/* Notifications */}
//         <DropdownMenu
//           open={openNotifications}
//           onOpenChange={setOpenNotifications}
//         >
//           <DropdownMenuTrigger asChild>
//             <Button variant="ghost" size="icon" className="relative">
//               <Bell className="w-5 h-5 text-gray-600" />
//               {unreadCount > 0 && (
//                 <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
//               )}
//             </Button>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent align="end" className="w-80">
//             <div className="px-4 py-3 border-b border-border">
//               <h3 className="font-semibold text-sm">Notifications</h3>
//               {unreadCount > 0 && (
//                 <p className="text-xs text-gray-500">{unreadCount} new</p>
//               )}
//             </div>
//             <div className="max-h-96 overflow-y-auto">
//               {notifications.map((notif) => (
//                 <div
//                   key={notif.id}
//                   className={`px-4 py-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors ${
//                     !notif.read ? "bg-blue-50" : ""
//                   }`}
//                 >
//                   <div className="flex items-start gap-3">
//                     <div
//                       className={`w-2 h-2 rounded-full mt-1.5 ${
//                         !notif.read ? "bg-teal-600" : "bg-transparent"
//                       }`}
//                     ></div>
//                     <div className="flex-1 min-w-0">
//                       <p className="text-sm font-medium text-gray-900">
//                         {notif.title}
//                       </p>
//                       <p className="text-xs text-gray-600 mt-0.5 line-clamp-2">
//                         {notif.message}
//                       </p>
//                       <p className="text-xs text-gray-400 mt-1">{notif.time}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <div className="px-4 py-2 border-t border-border text-center">
//               <Button
//                 variant="ghost"
//                 size="sm"
//                 className="text-xs text-teal-600 hover:text-teal-700"
//               >
//                 View All Notifications
//               </Button>
//             </div>
//           </DropdownMenuContent>
//         </DropdownMenu>

//         {/* User Profile */}
//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <Button variant="ghost" size="icon" className="rounded-full">
//               <Avatar className="w-8 h-8">
//                 <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
//                 <AvatarFallback>AD</AvatarFallback>
//               </Avatar>
//             </Button>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent align="end">
//             <DropdownMenuItem>
//               <span>Profile Settings</span>
//             </DropdownMenuItem>
//             <DropdownMenuSeparator />
//             <DropdownMenuItem className="text-red-600">
//               <LogOut className="w-4 h-4 mr-2" />
//               <span>Logout</span>
//             </DropdownMenuItem>
//           </DropdownMenuContent>
//         </DropdownMenu>
//       </div>
//     </header>
//   );
// };
// export default Header;
