import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import MobileSidebar from "./MobileSidebar";

const Layout = () => {
  return (
    <div className="min-h-screen p-2 md:p-6 bg-[#f4f7fb]">
      
      <div className="bg-white rounded-[32px] min-h-[95vh] flex overflow-hidden shadow-2xl">
        
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