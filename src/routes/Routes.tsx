import DashboardLayout from "@/layout/DashboardLayout";
import Complains from "@/pages/Complains";
import Dashboard from "@/pages/Dashboard";
import DriverManagement from "@/pages/DriverManagement";
import NotificationsManagement from "@/pages/NotificationsManagement";
import PricingConfiguration from "@/pages/PricingConfiguration";
import Riders from "@/pages/Riders";
import TransactionHistory from "@/pages/TransactionHistory";
import TipManagement from "@/pages/TripManagement";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
// import RiderDetails from "@/components/Riders/RiderDetails";
import RiderProfile from "@/components/Riders/Riderprofile";
import AdminProfile from "@/components/AdminProfile";
import DriverProfile from "@/components/Drivers/DriverProfile";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        children: [
          { index: true, element: <Dashboard /> },
       { path: "riders", element: <Riders /> },
{ path: "riders/profile/:id", element: <RiderProfile /> },
 

          { path: "driver-management", element: <DriverManagement /> },
          { path: "driver-management/profile/:id", element: <DriverProfile /> },
          { path: "trip-management", element: <TipManagement /> },
          { path: "pricing-configuration", element: <PricingConfiguration /> },
          { path: "transaction-history", element: <TransactionHistory /> },
          { path: "complains", element: <Complains /> },
          { path: "admin-profile", element: <AdminProfile /> },
          {
            path: "notifications-management",
            element: <NotificationsManagement />,
          },
        ],
      },
    ],
  },
]);

export default routes;
