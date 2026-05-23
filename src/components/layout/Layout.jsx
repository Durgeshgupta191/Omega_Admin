import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="min-h-screen bg-[#f5f7fb] p-4 md:p-5 overflow-hidden">

      {/* Main Wrapper */}
      <div className="flex min-h-[calc(100vh-32px)] gap-5">

        {/* Sidebar */}
        <div className="hidden md:block flex-shrink-0">
          <Sidebar />
        </div>

        {/* Main Area */}
        <div className="flex-1 flex flex-col gap-5 min-w-0">

          {/* Navbar */}
          <Navbar />

          {/* Content */}
          <main className="flex-1 overflow-y-auto rounded-[32px] bg-white border border-gray-100 shadow-sm p-4 md:p-8">

            <div className="max-w-[1400px] mx-auto w-full">
              <Outlet />
            </div>

          </main>

        </div>
      </div>
    </div>
  );
};

export default Layout;