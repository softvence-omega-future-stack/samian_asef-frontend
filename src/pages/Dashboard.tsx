import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LocateIcon, MapPin } from "lucide-react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import driverImg1 from '../assets/images/topdriver1.png'
import driverImg2 from '../assets/images/topdriver2.png'
import driverImg3 from '../assets/images/topdriver3.png'
import driverImg4 from '../assets/images/topdriver4.png'

const revenueData = [
  { date: "01", value: 88 },
  { date: "03", value: 70 },
  { date: "06", value: 80 },
  { date: "09", value: 90 },
  { date: "12", value: 80 },
  { date: "15", value: 70 },
  { date: "18", value: 60 },
  { date: "21", value: 62 },
  { date: "24", value: 70 },
  { date: "27", value: 90 },
  { date: "30", value: 95 },
];


const ordersData = [
  { day: "01", orders: 100 },
{ day: "03", orders: 60 },
  { day: "04", orders: 100 },
{ day: "05", orders: 40 },
  { day: "07", orders: 80 },

  { day: "09", orders: 100 },
  { day: "11", orders: 75 },
{ day: "12", orders: 45 },
  { day: "13", orders: 65 },
  { day: "15", orders: 82 },
];

const topDrivers = [
  { id: 1, name: "Selina Cooper", rides: 1008, initials: "SC" , img: driverImg1 },
  { id: 2, name: "Esther Howard", rides: 233, initials: "EH", img: driverImg2 },
  { id: 3, name: "Jerome Bell", rides: 456, initials: "JB", img: driverImg3 },
  { id: 4, name: "Savannah Nguyen", rides: 742, initials: "SN" , img: driverImg4},
];

const rideAnalytics = [
  { name: "Accepted Ride", value: 32, icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M11 5V11L15 13M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z" stroke="#008080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg> },
  { name: "On The Way", value: 24 , icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15.7636 4C16.3206 4.00002 16.8667 4.15513 17.3405 4.44797C17.8144 4.7408 18.1974 5.15979 18.4466 5.658L19.8296 8.423C20.0736 8.323 20.3166 8.222 20.5526 8.105C20.79 7.98645 21.0647 7.96705 21.3164 8.05106C21.568 8.13508 21.776 8.31563 21.8946 8.553C22.0131 8.79037 22.0325 9.06511 21.9485 9.31678C21.8645 9.56846 21.684 9.77645 21.4466 9.895C20.9526 10.141 20.7266 10.217 20.7266 10.217L21.6826 12.13C21.8916 12.547 21.9996 13.006 21.9996 13.472V16C21.9996 16.4221 21.9105 16.8394 21.7382 17.2247C21.5659 17.61 21.3142 17.9546 20.9996 18.236V19.5C20.9996 19.8978 20.8415 20.2794 20.5602 20.5607C20.2789 20.842 19.8974 21 19.4996 21C19.1018 21 18.7202 20.842 18.4389 20.5607C18.1576 20.2794 17.9996 19.8978 17.9996 19.5V19H5.99958V19.5C5.99958 19.8978 5.84155 20.2794 5.56025 20.5607C5.27894 20.842 4.89741 21 4.49958 21C4.10176 21 3.72023 20.842 3.43892 20.5607C3.15762 20.2794 2.99958 19.8978 2.99958 19.5V18.236C2.38558 17.686 1.99958 16.888 1.99958 16V13.472C1.99977 13.0065 2.1083 12.5473 2.31658 12.131L3.27258 10.217C3.03029 10.1167 2.79086 10.0097 2.55458 9.896C2.43671 9.83752 2.33154 9.75635 2.2451 9.65715C2.15866 9.55795 2.09264 9.44266 2.05084 9.3179C2.00903 9.19314 1.99226 9.06135 2.00148 8.93009C2.01071 8.79884 2.04574 8.67069 2.10458 8.553C2.22556 8.31668 2.43472 8.13749 2.68681 8.05421C2.9389 7.97093 3.21364 7.99025 3.45158 8.108C3.68758 8.22133 3.92692 8.32633 4.16958 8.423L5.55258 5.658C5.80177 5.15979 6.18475 4.7408 6.65862 4.44797C7.13249 4.15513 7.67853 4.00002 8.23558 4H15.7636ZM18.8336 10.904C17.1336 11.441 14.7146 12 11.9996 12C9.28458 12 6.86558 11.44 5.16558 10.904L4.10558 13.024C4.03589 13.1631 3.9996 13.3165 3.99958 13.472V16C3.99958 16.2652 4.10494 16.5196 4.29248 16.7071C4.48001 16.8946 4.73437 17 4.99958 17H18.9996C19.2648 17 19.5192 16.8946 19.7067 16.7071C19.8942 16.5196 19.9996 16.2652 19.9996 16V13.472C19.9994 13.3168 19.9631 13.1638 19.8936 13.025L18.8336 10.904ZM7.49958 13C7.89741 13 8.27894 13.158 8.56025 13.4393C8.84155 13.7206 8.99958 14.1022 8.99958 14.5C8.99958 14.8978 8.84155 15.2794 8.56025 15.5607C8.27894 15.842 7.89741 16 7.49958 16C7.10176 16 6.72023 15.842 6.43892 15.5607C6.15762 15.2794 5.99958 14.8978 5.99958 14.5C5.99958 14.1022 6.15762 13.7206 6.43892 13.4393C6.72023 13.158 7.10176 13 7.49958 13ZM16.4996 13C16.8974 13 17.2789 13.158 17.5602 13.4393C17.8415 13.7206 17.9996 14.1022 17.9996 14.5C17.9996 14.8978 17.8415 15.2794 17.5602 15.5607C17.2789 15.842 16.8974 16 16.4996 16C16.1018 16 15.7202 15.842 15.4389 15.5607C15.1576 15.2794 14.9996 14.8978 14.9996 14.5C14.9996 14.1022 15.1576 13.7206 15.4389 13.4393C15.7202 13.158 16.1018 13 16.4996 13ZM15.7636 6H8.23558C8.04992 6.0001 7.86795 6.05188 7.71006 6.14955C7.55216 6.24722 7.42458 6.38692 7.34158 6.553L6.07158 9.09C7.61958 9.555 9.70559 10 11.9996 10C14.2936 10 16.3796 9.555 17.9266 9.09L16.6576 6.553C16.5746 6.38692 16.447 6.24722 16.2891 6.14955C16.1312 6.05188 15.9492 6.0001 15.7636 6Z" fill="#008080"/>
</svg>},
  { name: "Confirmed Ride", value: 56, icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M3 12C3 7.03 7.03 3 12 3C16.97 3 21 7.03 21 12C21 16.97 16.97 21 12 21C7.03 21 3 16.97 3 12Z" stroke="#008080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8 12L11 15L16 10" stroke="#008080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg> },
  { name: "Realtime Rate", value: 92 ,icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17.664 9.75L17.4615 9.678L15.759 6.486C15.4392 5.88614 14.9624 5.38447 14.3796 5.03466C13.7967 4.68484 13.1298 4.50004 12.45 4.5H8.163C7.37576 4.49997 6.60848 4.74769 5.96988 5.20806C5.33128 5.66843 4.85377 6.3181 4.605 7.065L3.7935 9.4995C3.11363 9.78606 2.5334 10.2668 2.12544 10.8815C1.71748 11.4963 1.49992 12.2177 1.5 12.9555V14.625C1.5 15.69 2.1345 16.605 3.045 17.0175C3.16291 17.6931 3.50871 18.3078 4.02482 18.7594C4.54092 19.211 5.19616 19.4722 5.8814 19.4993C6.56664 19.5265 7.24051 19.3181 7.79077 18.9088C8.34102 18.4996 8.73444 17.9141 8.9055 17.25H15.0945C15.2656 17.9141 15.659 18.4996 16.2092 18.9088C16.7595 19.3181 17.4334 19.5265 18.1186 19.4993C18.8038 19.4722 19.4591 19.211 19.9752 18.7594C20.4913 18.3078 20.8371 17.6931 20.955 17.0175C21.4154 16.8097 21.8061 16.4734 22.0802 16.049C22.3542 15.6246 22.5 15.1302 22.5 14.625V14.1165C22.4999 13.3424 22.2602 12.5873 21.8138 11.9548C21.3675 11.3223 20.7363 10.8435 20.007 10.584L17.742 9.7785V9.75H17.664ZM8.163 6H9.75V9.75H5.2905L6.027 7.539C6.17633 7.09067 6.46302 6.70073 6.84642 6.42448C7.22981 6.14824 7.69045 5.99973 8.163 6ZM11.25 6H12.45C12.8579 5.99985 13.2582 6.1106 13.608 6.32038C13.9578 6.53017 14.244 6.8311 14.436 7.191L15.801 9.75H11.25V6ZM17.4045 11.25L19.5045 11.997C19.942 12.1527 20.3207 12.4401 20.5884 12.8195C20.8562 13.199 21 13.6521 21 14.1165V14.625C21 14.8875 20.91 15.129 20.76 15.321C20.5143 14.7443 20.0941 14.259 19.5585 13.9334C19.0228 13.6078 18.3986 13.4581 17.7735 13.5054C17.1485 13.5528 16.5539 13.7947 16.0734 14.1973C15.5929 14.5999 15.2506 15.1429 15.0945 15.75H8.9055C8.74944 15.1429 8.40711 14.5999 7.9266 14.1973C7.4461 13.7947 6.85155 13.5528 6.22647 13.5054C5.60139 13.4581 4.97719 13.6078 4.44154 13.9334C3.90589 14.259 3.4857 14.7443 3.24 15.321C3.0842 15.1225 2.99968 14.8774 3 14.625V12.9555C3 12.2805 3.3 11.6655 3.78 11.25H17.4045ZM4.5 16.5C4.5 16.1022 4.65804 15.7206 4.93934 15.4393C5.22064 15.158 5.60218 15 6 15C6.39782 15 6.77936 15.158 7.06066 15.4393C7.34196 15.7206 7.5 16.1022 7.5 16.5C7.5 16.8978 7.34196 17.2794 7.06066 17.5607C6.77936 17.842 6.39782 18 6 18C5.60218 18 5.22064 17.842 4.93934 17.5607C4.65804 17.2794 4.5 16.8978 4.5 16.5ZM18 15C18.3978 15 18.7794 15.158 19.0607 15.4393C19.342 15.7206 19.5 16.1022 19.5 16.5C19.5 16.8978 19.342 17.2794 19.0607 17.5607C18.7794 17.842 18.3978 18 18 18C17.6022 18 17.2206 17.842 16.9393 17.5607C16.658 17.2794 16.5 16.8978 16.5 16.5C16.5 16.1022 16.658 15.7206 16.9393 15.4393C17.2206 15.158 17.6022 15 18 15Z" fill="#008080"/>
</svg>},
  { name: "Completed Ride", value: 11 , icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_443_20288)">
    <path d="M2.99283 6.88088L4.73383 3.00088C4.89401 2.57341 5.18097 2.20509 5.55628 1.94523C5.93159 1.68537 6.37734 1.54638 6.83383 1.54688H15.6748C16.1313 1.54638 16.5771 1.68537 16.9524 1.94523C17.3277 2.20509 17.6146 2.57341 17.7748 3.00088L19.5168 6.88288M1.54883 13.2939V14.9859C1.54883 15.1819 1.58745 15.3761 1.66248 15.5572C1.73751 15.7384 1.84748 15.9029 1.98612 16.0416C2.12476 16.1802 2.28934 16.2902 2.47048 16.3652C2.65162 16.4403 2.84576 16.4789 3.04183 16.4789C3.23789 16.4789 3.43204 16.4403 3.61317 16.3652C3.79431 16.2902 3.9589 16.1802 4.09754 16.0416C4.23618 15.9029 4.34615 15.7384 4.42118 15.5572C4.49621 15.3761 4.53483 15.1819 4.53483 14.9859V13.4929" stroke="#008080" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M21.3068 8.26693C21.0442 7.81297 20.6669 7.43605 20.2127 7.174C19.7584 6.91194 19.2432 6.77397 18.7188 6.77393H3.7848C2.99304 6.77419 2.2338 7.0889 1.67403 7.64886C1.11426 8.20881 0.799805 8.96816 0.799805 9.75993V11.9999C0.799805 12.3959 0.957102 12.7756 1.23709 13.0556C1.51709 13.3356 1.89684 13.4929 2.2928 13.4929H8.2658" stroke="#008080" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M17.2268 22.4518C18.0176 22.4621 18.8026 22.3152 19.5362 22.0196C20.2698 21.724 20.9373 21.2857 21.5002 20.7301C22.063 20.1745 22.5099 19.5127 22.815 18.783C23.12 18.0533 23.2771 17.2702 23.2771 16.4793C23.2771 15.6885 23.12 14.9054 22.815 14.1757C22.5099 13.446 22.063 12.7842 21.5002 12.2286C20.9373 11.6729 20.2698 11.2346 19.5362 10.9391C18.8026 10.6435 18.0176 10.4966 17.2268 10.5068C15.6562 10.5272 14.1567 11.1654 13.0533 12.2832C11.9498 13.4011 11.3311 14.9086 11.3311 16.4793C11.3311 18.0501 11.9498 19.5576 13.0533 20.6755C14.1567 21.7933 15.6562 22.4315 17.2268 22.4518Z" stroke="#008080" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M19.8899 14.7427L16.9969 18.5987C16.9326 18.6842 16.8507 18.7549 16.7567 18.8061C16.6627 18.8572 16.5589 18.8876 16.4522 18.8952C16.3454 18.9028 16.2383 18.8874 16.138 18.85C16.0378 18.8127 15.9467 18.7542 15.8709 18.6787L14.3779 17.1857" stroke="#008080" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M4.16159 10.5068C4.06253 10.5068 3.96753 10.4674 3.89748 10.3974C3.82744 10.3273 3.78809 10.2323 3.78809 10.1333C3.78809 10.0342 3.82744 9.93921 3.89748 9.86916C3.96753 9.79912 4.06253 9.75977 4.16159 9.75977M4.16159 10.5068C4.26064 10.5068 4.35565 10.4674 4.42569 10.3974C4.49574 10.3273 4.53509 10.2323 4.53509 10.1333C4.53509 10.0342 4.49574 9.93921 4.42569 9.86916C4.35565 9.79912 4.26064 9.75977 4.16159 9.75977" stroke="#008080" stroke-width="1.5"/>
  </g>
  <defs>
    <clipPath id="clip0_443_20288">
      <rect width="24" height="24" fill="white"/>
    </clipPath>
  </defs>
</svg>},
 { name: "Cancelled Ride", value: 11, icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 13.4L14.9 16.3C15.0833 16.4833 15.3167 16.575 15.6 16.575C15.8833 16.575 16.1167 16.4833 16.3 16.3C16.4833 16.1167 16.575 15.8833 16.575 15.6C16.575 15.3167 16.4833 15.0833 16.3 14.9L13.4 12L16.3 9.1C16.4833 8.91667 16.575 8.68333 16.575 8.4C16.575 8.11667 16.4833 7.88333 16.3 7.7C16.1167 7.51667 15.8833 7.425 15.6 7.425C15.3167 7.425 15.0833 7.51667 14.9 7.7L12 10.6L9.1 7.7C8.91667 7.51667 8.68333 7.425 8.4 7.425C8.11667 7.425 7.88333 7.51667 7.7 7.7C7.51667 7.88333 7.425 8.11667 7.425 8.4C7.425 8.68333 7.51667 8.91667 7.7 9.1L10.6 12L7.7 14.9C7.51667 15.0833 7.425 15.3167 7.425 15.6C7.425 15.8833 7.51667 16.1167 7.7 16.3C7.88333 16.4833 8.11667 16.575 8.4 16.575C8.68333 16.575 8.91667 16.4833 9.1 16.3L12 13.4ZM12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88334 20.6867 5.825 19.9743 4.925 19.075C4.025 18.1757 3.31267 17.1173 2.788 15.9C2.26333 14.6827 2.00067 13.3827 2 12C1.99933 10.6173 2.262 9.31733 2.788 8.1C3.314 6.88267 4.02633 5.82433 4.925 4.925C5.82367 4.02567 6.882 3.31333 8.1 2.788C9.318 2.26267 10.618 2 12 2C13.382 2 14.682 2.26267 15.9 2.788C17.118 3.31333 18.1763 4.02567 19.075 4.925C19.9737 5.82433 20.6863 6.88267 21.213 8.1C21.7397 9.31733 22.002 10.6173 22 12C21.998 13.3827 21.7353 14.6827 21.212 15.9C20.6887 17.1173 19.9763 18.1757 19.075 19.075C18.1737 19.9743 17.1153 20.687 15.9 21.213C14.6847 21.739 13.3847 22.0013 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z" fill="#008080"/>
</svg>}
];

const liveDriving = [
  {
    img: driverImg1,
    name: "Annette Black",
    location: "San Francisco, USA",
    locationbar:"Chicago, USA" ,
    time: "12:45 - 01:12 PM",
    dolar: "$10",
  },
  {
    img: driverImg2,
    name: "Jerome Bell",
    location: "San Francisco, USA",
    locationbar:"Chicago, USA" ,
    time: "12:45 - 01:12 PM",
    dolar: "$10",
  },
  {
    img: driverImg3,
    name: "Kathryn Murphy",
    location: "San Francisco, USA",
    locationbar:"Chicago, USA" ,
    time: "12:45 - 01:12 PM",
    dolar: "$10",
  },
  { img: driverImg4, name: "Guy Hawkins", location: "San Francisco, USA", locationbar:"Chicago, USA" , time: "12:45 - 01:12 PM" ,dolar: "$10",},
  { img: driverImg3, name: "Brooklyn Simmons", location: "San Francisco, USA", time: "12:45 - 01:12 PM" ,dolar: "$10",},
];

const transactions = [
  {
    id: "#PT0025",
    name: "Savannah Nguyen",
    amount: "$1,249.99",
    method: "Credit Card",
    category: "Subscription",
    status: "Completed",
  },
  {
    id: "#PT0025",
    name: "Jerome Bell",
    amount: "-$29.99",
    method: "Credit Card",
    category: "Refund",
    status: "Pending",
  },
  {
    id: "#PT0025",
    name: "Esther Howard",
    amount: "$150.00",
    method: "Credit Card",
    category: "Service",
    status: "Completed",
  },
  {
    id: "#PT0025",
    name: "Bessie Cooper",
    amount: "-$150.00",
    method: "Credit Card",
    category: "Service",
    status: "Failed",
  },
];

const Dashboard = () => {
  return (
    <div className="p-8 space-y-6">
  

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
            {/* Header */}
 <div className="flex flex-col justify-between pb-2">
  <h1 className="text-xl sm:text-2xl md:text-[32px] font-semibold leading-[70%] text-titleColor">
  <span className="text-[#6B7280] block mb-4">Hello,</span>
  <span className="block">Keren nix</span>
</h1>

<p className="text-[#6B7280] text-sm sm:text-base font-medium leading-5 mt-2">
  <span className="text-[#909294] block mb-1">Welcome back!</span>
  <span className="block font-normal">Here's what's happening in your app today</span>
</p>

</div>

        <Card bgColor="#E5DFF5" textColor="#171C35" >
          <CardHeader className="pb-2">
              <CardTitle 
    title="Active Drivers" 
    icon={ 
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2ZM8.313 14.781C7.269 13.946 5.853 13.623 4.205 13.809C4.55479 15.3116 5.33104 16.6811 6.44048 17.7531C7.54991 18.8252 8.94532 19.554 10.459 19.852C10.266 17.227 9.403 15.651 8.313 14.781ZM15.687 14.781C14.597 15.653 13.734 17.227 13.541 19.851C15.0544 19.5529 16.4495 18.8241 17.5587 17.7523C18.6679 16.6805 19.4441 15.3112 19.794 13.809C18.147 13.623 16.731 13.946 15.687 14.781ZM12 10C11.05 10 10.268 10.37 9.694 10.778L9.196 11.125C8.672 11.48 8.07 11.845 7.395 12.085C8.18352 12.3202 8.91928 12.7052 9.562 13.219C10.686 14.119 11.515 15.406 12 17.078C12.485 15.406 13.314 14.118 14.438 13.219C15.0808 12.7056 15.8166 12.3209 16.605 12.086C15.93 11.845 15.328 11.48 14.804 11.125L14.306 10.778C13.732 10.37 12.95 10 12 10ZM12 4C10.136 3.99967 8.33043 4.65023 6.89502 5.83935C5.4596 7.02847 4.48447 8.6815 4.138 10.513L4.095 10.761L6.305 10.319C6.887 10.203 7.44 9.896 8.058 9.479L8.535 9.147C9.332 8.581 10.513 8 12 8C13.388 8 14.509 8.506 15.3 9.034L15.942 9.479C16.482 9.844 16.974 10.124 17.478 10.267L17.695 10.319L19.905 10.761C19.6096 8.87675 18.6508 7.16003 17.2013 5.92036C15.7519 4.68069 13.9073 3.99964 12 4Z" fill="#2C2F33"/>
</svg>
    }
    className="text-xs sm:text-sm leading-5 font-medium text-muted-foreground" 
  />

          </CardHeader>
          <CardContent buttonText="+5 since last week">
            <div className=" ">2044</div>
            {/* <button className="text-xs sm:text-sm text-muted-foreground border border-[#171C351A] px-2.5 py-1 rounded-[50px] font-normal leading-5 mt-1">+18.2% last week</button> */}
           
          </CardContent>
        </Card>
        <Card bgColor="#D0E1F5" textColor="#171C35">
          <CardHeader className="pb-2">
             <CardTitle 
    title="Active Riders" 
    icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 10C14.2091 10 16 8.20914 16 6C16 3.79086 14.2091 2 12 2C9.79086 2 8 3.79086 8 6C8 8.20914 9.79086 10 12 10Z" stroke="#2C2F33" stroke-width="2"/>
  <path d="M20 17.5C20 19.985 20 22 12 22C4 22 4 19.985 4 17.5C4 15.015 7.582 13 12 13C16.418 13 20 15.015 20 17.5Z" stroke="#2C2F33" stroke-width="2"/>
</svg>
    }
    className="text-xs sm:text-sm leading-5 font-medium text-muted-foreground" 
  />
          </CardHeader>
          <CardContent buttonText="+8.2% last week">
            <div className="">1500</div>
            {/* <p className="text-xs text-green-600 mt-1">+8.2% last week</p> */}
          </CardContent>
        </Card>
        <Card bgColor="#F5DFEB" textColor="#171C35">
          <CardHeader className="pb-2">
            <CardTitle  
            icon={
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#2C2F33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            }
            title="Completed Trips"  className="text-sm font-medium text-muted-foreground">
              
            </CardTitle>
          </CardHeader>
          <CardContent buttonText="+23.1% last week">
            <div className="text-2xl font-bold">1222</div>
            {/* <p className="text-xs text-green-600 mt-1">+23.1% last week</p> */}
          </CardContent>
        </Card>
        <Card bgColor="#FADACA" textColor="#171C35">
          <CardHeader className="pb-2">
            <CardTitle 
            icon={
       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9 1.50296C8.20435 1.50296 7.44129 1.81904 6.87868 2.38164C6.31607 2.94425 6 3.70732 6 4.50296V7.81046C6.49036 7.67184 6.9925 7.57894 7.5 7.53296V4.50296C7.5 4.10514 7.65804 3.72361 7.93934 3.4423C8.22064 3.161 8.60218 3.00296 9 3.00296H13.5V6.75296C13.5 7.3497 13.7371 7.922 14.159 8.34396C14.581 8.76591 15.1533 9.00296 15.75 9.00296H19.5V19.497C19.5 19.8948 19.342 20.2763 19.0607 20.5576C18.7794 20.8389 18.3978 20.997 18 20.997H14.616C14.144 21.569 13.605 22.069 12.999 22.497H18C18.7956 22.497 19.5587 22.1809 20.1213 21.6183C20.6839 21.0557 21 20.2926 21 19.497V8.12697C20.9995 7.53043 20.7621 6.95852 20.34 6.53696L15.963 2.16146C15.5414 1.73939 14.9695 1.50199 14.373 1.50146L9 1.50296ZM15 6.75296V3.31796L19.1865 7.50296H15.75C15.5511 7.50296 15.3603 7.42395 15.2197 7.2833C15.079 7.14264 15 6.95188 15 6.75296ZM15 15.75C15 17.5402 14.2888 19.2571 13.023 20.5229C11.7571 21.7888 10.0402 22.5 8.25 22.5C6.45979 22.5 4.7429 21.7888 3.47703 20.5229C2.21116 19.2571 1.5 17.5402 1.5 15.75C1.5 13.9598 2.21116 12.2429 3.47703 10.977C4.7429 9.71112 6.45979 8.99997 8.25 8.99996C10.0402 8.99997 11.7571 9.71112 13.023 10.977C14.2888 12.2429 15 13.9598 15 15.75ZM8.25 12C8.05109 12 7.86032 12.079 7.71967 12.2196C7.57902 12.3603 7.5 12.5511 7.5 12.75V15.75C7.5 15.9489 7.57902 16.1396 7.71967 16.2803C7.86032 16.4209 8.05109 16.5 8.25 16.5C8.44891 16.5 8.63968 16.4209 8.78033 16.2803C8.92098 16.1396 9 15.9489 9 15.75V12.75C9 12.5511 8.92098 12.3603 8.78033 12.2196C8.63968 12.079 8.44891 12 8.25 12ZM8.25 19.6875C8.49864 19.6875 8.7371 19.5887 8.91291 19.4129C9.08873 19.2371 9.1875 18.9986 9.1875 18.75C9.1875 18.5013 9.08873 18.2629 8.91291 18.0871C8.7371 17.9112 8.49864 17.8125 8.25 17.8125C8.00136 17.8125 7.7629 17.9112 7.58709 18.0871C7.41127 18.2629 7.3125 18.5013 7.3125 18.75C7.3125 18.9986 7.41127 19.2371 7.58709 19.4129C7.7629 19.5887 8.00136 19.6875 8.25 19.6875Z" fill="#2C2F33"/>
</svg>
            }

            title="Complaints"  className="text-sm font-medium text-muted-foreground">
              
            </CardTitle>
          </CardHeader>
          <CardContent buttonText="-10.1% last week">
            <div className="text-2xl font-bold">10</div>
            {/* <p className="text-xs text-red-600 mt-1">-9.7% last week</p> */}
          </CardContent>
        </Card>
      </div>


      {/* Charts Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Monthly Revenue */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="">
                <CardTitle title="Monthly Revenue"></CardTitle>
                <CardDescription className="text-[#6B7280] mt-2">Last 7 days</CardDescription>
      
              </div>
           
    <Button variant="ghost" size="sm" className="flex items-center gap-2 border border-[#E5ECF6] cursor-pointer">
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 10H15M2.5 5H17.5M7.5 15H12.5"
          stroke="#2C2F33"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Filter
    </Button>

            </div>
          </CardHeader>
          <CardContent>
      <ResponsiveContainer width="100%" height={400}>
  <AreaChart data={revenueData}>

    <defs>
      <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#008080" stopOpacity={0.35} />
        <stop offset="100%" stopColor="#008080" stopOpacity={0} />
      </linearGradient>
    </defs>

    <CartesianGrid strokeDasharray="3 3" />

    <XAxis
      dataKey="date"
      tick={{ fill: "#6B7280", fontSize: 12, fontWeight: 500 }}
    />

    <YAxis
      domain={[0, 100]}
      ticks={[30, 60, 80, 100]}
      tickFormatter={(value) => `${value}%`}
      tick={{ fill: "#6B7280", fontSize: 12, fontWeight: 500 }}
    />

    <Tooltip formatter={(value) => `${value}%`} />

    <Area
      type="monotone"
      dataKey="value"
      stroke="#008080"
      strokeWidth={2}
      fill="url(#lineGradient)"
      dot={false}
    />

  </AreaChart>
</ResponsiveContainer>


          </CardContent>
        </Card>

        {/* Orders of This Month */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle title="Orders Of This Month"></CardTitle>
              </div>
              <Button variant="ghost" size="sm" className="flex items-center gap-2 border border-[#E5ECF6] cursor-pointer">
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 10H15M2.5 5H17.5M7.5 15H12.5"
          stroke="#2C2F33"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Filter
    </Button>

            </div>
          </CardHeader>

       <CardContent className="flex items-end h-[400px]">
  
  {/* Left side: Description */}
  <div className="w-1/4">
    <h2 className="text-titleColor text-lg sm:text-xl md:text-2xl font-semibold leading-6">
      $1224
    </h2>
    <p className="text-[#6B7280] mt-2">
      Last 15 days <br /> orders
    </p>
  </div>

  
  <div className="w-3/4 h-full">
<ResponsiveContainer width="100%" height={400}>
  <BarChart data={ordersData} barCategoryGap="20%">
    
    {/* ✅ Gradient */}
    <defs>
      <linearGradient id="ordersGradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#008080" stopOpacity={0.25} />
        <stop offset="100%" stopColor="#008080" stopOpacity={1} />
      </linearGradient>
    </defs>

    <CartesianGrid vertical={false} stroke="#E5ECF6" />

    <XAxis
      dataKey="day"
      axisLine={false}
      tickLine={false}
      tick={{ fill: "#6B7280", fontSize: 12 }}
    />

    <YAxis
      domain={[0, 100]}
      ticks={[20, 40, 60, 80, 100]}
      tickFormatter={(v) => `${v}%`}
      axisLine={false}
      tickLine={false}
      tick={{ fill: "#6B7280", fontSize: 12 }}
    />

    <Tooltip formatter={(v) => `${v}%`} />

    <Bar
      dataKey="orders"
      fill="url(#ordersGradient)"
      radius={[6, 6, 0, 0]}
      maxBarSize={32}
    />
  </BarChart>
</ResponsiveContainer>


  </div>

</CardContent>


        </Card>
      </div>

      {/* Three Column Section */}
      <div className="grid grid-cols-3 gap-6">
        {/* Top Driver */}
        <Card>
          <CardHeader>
            <CardTitle title="Top Driver"></CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {topDrivers.map((driver) => (
              <div
                key={driver.id}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center justify-between w-full">
 
  <div className="flex items-center gap-3">
    <Avatar>
      <AvatarImage src={driver.img} />
      <AvatarFallback className="bg-teal-200">{driver.initials}</AvatarFallback>
    </Avatar>

    <div className="flex flex-col">
      <p className="text-xs sm:text-sm md:text-base font-medium leading-4 text-titleColor">{driver.name}</p>
      <span className="flex items-center text-textColor text-sm md:text-base font-semibold leading-6 gap-1">
       <svg width="12" height="12" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M5.37403 0C5.89866 0 6.31192 0.396266 6.57575 0.930957L7.45676 2.70758C7.48347 2.76256 7.54681 2.83999 7.64201 2.91082C7.73711 2.98157 7.83025 3.02061 7.89152 3.0309L9.48635 3.29806C10.0624 3.39487 10.5453 3.67725 10.702 4.16895C10.8586 4.66025 10.6292 5.1708 10.2149 5.58582L10.2145 5.58623L8.97553 6.83543C8.92643 6.88494 8.87142 6.97821 8.83692 7.09972C8.80266 7.22041 8.79962 7.33034 8.81516 7.40137L8.81537 7.40236L9.16984 8.94769C9.31685 9.59087 9.26814 10.2287 8.81452 10.5621C8.35933 10.8967 7.73732 10.7484 7.17224 10.4118L5.67725 9.51951C5.61448 9.482 5.50666 9.45162 5.37652 9.45162C5.24734 9.45162 5.13726 9.48159 5.0704 9.52049L5.06945 9.52105L3.57742 10.4116C3.013 10.7493 2.39175 10.895 1.93653 10.5601C1.48322 10.2266 1.43205 9.59002 1.57953 8.94736L1.93393 7.40236L1.93414 7.40137C1.94968 7.33034 1.94664 7.22041 1.91238 7.09972C1.87788 6.97821 1.82287 6.88494 1.77376 6.83543L0.533902 5.58532C0.1223 5.17032 -0.10642 4.6602 0.0489504 4.16963C0.204773 3.67762 0.686691 3.3949 1.26314 3.29803L2.85664 3.0311L2.85714 3.03101C2.91556 3.02087 3.00733 2.98228 3.10221 2.91134C3.19728 2.84027 3.26077 2.76268 3.28754 2.70758L3.28888 2.70483L4.16879 0.930486L4.16914 0.929787C4.43546 0.395538 4.84999 0 5.37403 0Z" fill="#EAB308"/>
</svg>
        4.89
      </span>
    </div>
  </div>

  {/* Right Side: Ride */}
  <p className="text-xs sm:text-sm md:text-base text-primaryColor font-medium leading-4">
    Ride: {driver.rides}
  </p>
</div>

              </div>
            ))}
          </CardContent>
        </Card>

        {/* Ride Analytics */}
        <Card>
          <CardHeader>
            <CardTitle title="Ride Analytics"></CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {rideAnalytics.map((item, index) => (
              <div key={index} className="space-y-1">
                <div className="flex justify-between text-sm">
                <div className="flex items-center gap-2.5">
                     <span>{item.icon}</span>
                  <span className="text-titleColor leading-4  text-xs md:text-sm font-medium">{item.name}</span>
                </div>
                  <span className="text-primaryColor text-sm md:texxt-base font-medium leading-5">{item.value}</span>
                </div>
                <div className="w-full mb-2  border border-[#E5ECF6]">
                  {/* <div
                    className=""
                    style={{ width: `${(item.value / 100) * 100}%` }}
                  ></div> */}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Live Driving */}
        <Card>
          <CardHeader>
            <CardTitle title="Live Driving"></CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {liveDriving.map((driver, index) => (
              <div key={index} className="p-3 flex items-center justify-between w-full bg-gray-50 rounded-lg">
               <div className= " flex items-center gap-2 shrink-0 w-[150px]">
                <Avatar>
                  <AvatarImage src={driver.img} />
                  <AvatarFallback className="bg-teal-200">AB</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                 <p className="text-sm font-medium">{driver.name}</p>
                <p className="text-xs text-textColor font-normal mt-1">{driver.time}</p>
               </div>
               </div>
               
               <div>
                 <div className= "flex items-center gap-2 text-textColor text-xs sm:text-sm font-normal">
                  <LocateIcon className="w-3 h-3"/>
                  {driver.locationbar}
                </div>
                <div className="flex items-center gap-2 text-textColor text-xs sm:text-sm font-normal">
                  <MapPin className="w-3 h-3" />
                  {driver.location}
                </div>
               </div>
               <div>
                  <p className="text-sm font-semibold text-primaryColor">{driver.dolar}</p>
               </div>
                
                
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Transactions */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle title="Transactions"></CardTitle>
            <Button variant="ghost" size="sm">
              ...
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="border-b">
                <tr>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                    TRX ID
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                    Name
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                    Amount
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                    Method
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                    Category
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((txn, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 text-muted-foreground">
                      {txn.id}
                    </td>
                    <td className="py-3 px-4">{txn.name}</td>
                    <td
                      className={`py-3 px-4 font-medium ${
                        txn.amount.startsWith("-")
                          ? "text-red-600"
                          : "text-green-600"
                      }`}
                    >
                      {txn.amount}
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">
                      {txn.method}
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">
                      {txn.category}
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          txn.status === "Completed"
                            ? "bg-green-100 text-green-700"
                            : txn.status === "Pending"
                            ? "bg-orange-100 text-orange-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {txn.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
