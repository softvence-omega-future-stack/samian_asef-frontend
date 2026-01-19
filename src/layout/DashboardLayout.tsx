

import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

const DashboardLayout = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[#F5F5F5] overflow-hidden">
      
    
      <div
        className={`hidden md:block transition-all duration-300 ${
          isSidebarCollapsed ? "w-20" : "w-64"
        }`}
      >
        <Sidebar
          collapsed={isSidebarCollapsed}
          onToggle={setIsSidebarCollapsed}
          closeMobileMenu={() => {}}
        />
      </div>

 
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

   
      <div
        className={`fixed top-0 left-0 h-full bg-white z-50 md:hidden
        transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ width: "280px" }}
      >
        <Sidebar
          collapsed={false}
          onToggle={() => {}}
          closeMobileMenu={() => setIsMobileMenuOpen(false)}
        />
      </div>


      <div className="flex-1 flex flex-col min-h-screen w-full min-w-0">
        <Header
          onMobileMenuOpen={() => setIsMobileMenuOpen(true)}
          isSidebarCollapsed={isSidebarCollapsed}
          onSidebarToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        />
        
        <main className="flex-1 overflow-y-auto w-full p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;






// import Header from "@/components/Header";
// import Sidebar from "@/components/Sidebar";
// import { Outlet } from "react-router-dom";

// const DashboardLayout = () => {
//   return (
//     <div className="flex">
//       {/* Sidebar here */}

//       <div className="flex">
//         <aside className="w-70">
//           <Sidebar />
//         </aside>
//       </div>
//       <main className="flex-1 ">
//         <Header />
//         <Outlet />
//       </main>
//     </div>
//   );
// };

// export default DashboardLayout;
