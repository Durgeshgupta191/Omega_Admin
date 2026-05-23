import { FiBell, FiMoon, FiSun, FiSearch } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <header className="h-20 bg-white dark:bg-[#111827] border-b border-gray-100 dark:border-gray-800 px-6 flex items-center justify-between">
      
      {/* Search */}
      <div className="hidden md:flex items-center bg-[#f5f7ff] dark:bg-[#1e293b] px-4 py-3 rounded-2xl w-[320px]">
        
        <FiSearch className="text-gray-400" />

        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none border-none ml-3 w-full text-sm dark:text-white"
        />
      </div>

      {/* Right */}
      <div className="flex items-center gap-4 ml-auto">
        
        {/* Dark Mode */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="w-12 h-12 rounded-2xl bg-[#f5f7ff] dark:bg-[#1e293b] flex items-center justify-center"
        >
          {darkMode ? <FiSun /> : <FiMoon />}
        </button>

        {/* Notification */}
        <button className="w-12 h-12 rounded-2xl bg-[#f5f7ff] dark:bg-[#1e293b] flex items-center justify-center">
          <FiBell />
        </button>

        {/* User */}
        <div className="flex items-center gap-3 bg-[#f5f7ff] dark:bg-[#1e293b] px-4 py-2 rounded-2xl">
          
          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-fuchsia-500 to-blue-500 flex items-center justify-center text-white font-bold">
            D
          </div>

          <div className="hidden md:block">
            <h4 className="font-semibold dark:text-white">
              Durgesh
            </h4>

            <p className="text-sm text-gray-500">
              Administrator
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;