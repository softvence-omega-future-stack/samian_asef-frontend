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
import RiderDetails from "@/components/Riders/RiderDetails";

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
{ path: "riders/profile/:id", element: <RiderDetails /> },
 

          { path: "driver-management", element: <DriverManagement /> },
          { path: "trip-management", element: <TipManagement /> },
          { path: "pricing-configuration", element: <PricingConfiguration /> },
          { path: "transaction-history", element: <TransactionHistory /> },
          { path: "complains", element: <Complains /> },
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
