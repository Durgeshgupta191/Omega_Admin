import {
  FiBell,
  FiSearch,
  FiMenu,
} from "react-icons/fi";

import {
  useSidebar,
} from "../../context/SidebarContext";

import {
  FiMoon,
  FiSun,
} from "react-icons/fi";

import {
  useTheme,
} from "../../context/ThemeContext";

const Navbar = () => {
  const { setIsSidebarOpen } =
    useSidebar();

const { darkMode, setDarkMode } =
  useTheme();

  return (
    <header className="h-24 border-b border-gray-100 px-4 md:px-8 flex items-center justify-between bg-white dark:bg-[#1e293b]">
      
      {/* Left */}
      <div className="flex items-center gap-4">
        
        {/* Mobile Menu */}
        <button
          onClick={() =>
            setIsSidebarOpen(true)
          }
          className="md:hidden w-12 h-12 rounded-2xl border border-gray-200 flex items-center justify-center"
        >
          <FiMenu />
        </button>

        <div>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-white">
            Dashboard
          </h1>

          <p className="text-gray-400 mt-1 text-sm md:text-base">
            Welcome back, 👋
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3 md:gap-5">
        
        {/* Search */}
        <div className="hidden md:flex items-center gap-3 bg-[#f5f7fb] px-5 py-3 rounded-2xl w-80">
          
          <FiSearch className="text-gray-400" />

          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none w-full text-sm"
          />
        </div>

        <button
          onClick={() => {
            document.documentElement.classList.toggle(
              "dark"
            );
          }}
          className="bg-[#f3efff] text-[#7c3aed] p-3 rounded-2xl"
        >
          🌙
        </button>
        {/* Notification */}
        <button className="w-11 h-11 md:w-12 md:h-12 rounded-2xl border border-gray-200 flex items-center justify-center hover:bg-gray-100">
          <FiBell />
        </button>

        {/* Profile */}
        <div className="flex items-center gap-3">
          
          <div className="w-11 h-11 md:w-12 md:h-12 rounded-2xl bg-linear-to-r from-fuchsia-500 to-blue-500 flex items-center justify-center text-white font-bold">
            D
          </div>

          <div className="hidden md:block">
            <h3 className="font-semibold text-gray-700">
              Durgesh
            </h3>

            <p className="text-sm text-gray-400">
              Administrator
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;