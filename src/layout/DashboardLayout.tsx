import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex">
      {/* Sidebar here */}

      <div className="flex">
        <aside className="w-70">
          <Sidebar />
        </aside>
      </div>
      <main className="flex-1 ">
        <Header />
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
