import { motion } from "framer-motion";

import {
  NavLink,
} from "react-router-dom";

import {
  FiGrid,
  FiFileText,
  FiUsers,
  FiSettings,
  FiX,
} from "react-icons/fi";

import {
  useSidebar,
} from "../../context/SidebarContext";

const links = [
  {
    name: "Dashboard",
    path: "/",
    icon: <FiGrid />,
  },
  {
    name: "Products",
    path: "/products",
    icon: <FiFileText />,
  },
  {
    name: "Analytics",
    path: "/analytics",
    icon: <FiUsers />,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: <FiSettings />,
  },
];

const MobileSidebar = () => {
  const {
    isSidebarOpen,
    setIsSidebarOpen,
  } = useSidebar();

  if (!isSidebarOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() =>
          setIsSidebarOpen(false)
        }
        className="fixed inset-0 bg-black/40 z-40 md:hidden"
      />

      {/* Sidebar */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        exit={{ x: -300 }}
        transition={{
          duration: 0.3,
        }}
        className="fixed top-0 left-0 z-50 w-72 h-screen bg-white px-6 py-8 md:hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          
          <h1 className="text-2xl font-extrabold bg-linear-to-r from-fuchsia-500 to-blue-500 bg-clip-text text-transparent">
            Omega Admin
          </h1>

          <button
            onClick={() =>
              setIsSidebarOpen(false)
            }
            className="text-2xl text-gray-700"
          >
            <FiX />
          </button>
        </div>

        {/* Links */}
        <nav className="space-y-3">
          
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() =>
                setIsSidebarOpen(false)
              }
              className={({
                isActive,
              }) =>
                `flex items-center gap-4 px-5 py-4 rounded-2xl font-medium transition-all duration-300
                ${
                  isActive
                    ? "bg-[#f3efff] text-[#7c3aed]"
                    : "text-gray-600 hover:bg-gray-100"
                }`
              }
            >
              <span className="text-xl">
                {link.icon}
              </span>

              {link.name}
            </NavLink>
          ))}
        </nav>
      </motion.aside>
    </>
  );
};

export default MobileSidebar;