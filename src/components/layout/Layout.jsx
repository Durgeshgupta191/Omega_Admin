import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import MobileSidebar from "./MobileSidebar";

const Layout = () => {
  return (
    <div className="min-h-screen p-2 md:p-6 bg-[#f4f7fb]">
      
      <div className="flex bg-[#f5f7fb] dark:bg-[#0f172a] min-h-screen transition-all duration-300">
        
        <Sidebar />

        <MobileSidebar />

        <div className="flex-1 flex flex-col bg-[#fcfcff]">
          
          <Navbar />

          <main className="p-4 md:p-10">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;