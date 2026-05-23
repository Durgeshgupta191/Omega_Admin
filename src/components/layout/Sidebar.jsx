import { NavLink } from "react-router-dom";
import { FiGrid, FiBox, FiBarChart2, FiSettings, FiLogOut } from "react-icons/fi";

const links = [
  {
    name: "Dashboard",
    path: "/",
    icon: <FiGrid />,
  },
  {
    name: "Products",
    path: "/products",
    icon: <FiBox />,
  },
  {
    name: "Analytics",
    path: "/analytics",
    icon: <FiBarChart2 />,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: <FiSettings />,
  },
];

const Sidebar = () => {
  return (
    <aside className="hidden md:flex w-64 min-h-screen bg-[#0f172a] text-white flex-col border-r border-gray-800">
      
      {/* Logo */}
      <div className="px-6 py-8 border-b border-gray-800">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-fuchsia-500 to-blue-500 bg-clip-text text-transparent">
          Omega Admin
        </h1>

        <p className="text-gray-400 mt-2 text-sm">
          Modern SaaS Dashboard
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-3">
        
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `flex items-center gap-4 px-4 py-3 rounded-2xl transition-all text-base font-medium
              ${
                isActive
                  ? "bg-gradient-to-r from-fuchsia-500 to-blue-500 text-white shadow-lg"
                  : "text-gray-300 hover:bg-[#1e293b]"
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

      {/* Logout */}
      <div className="p-4 border-t border-gray-800">
        
        <button className="flex items-center gap-3 text-gray-400 hover:text-red-400 transition-all">
          <FiLogOut />

          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar; 