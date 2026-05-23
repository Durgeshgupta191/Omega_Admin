import { NavLink } from "react-router-dom";

import { FiLogOut } from "react-icons/fi";

import {
  sidebarLinks,
} from "../../constants/sidebarLinks";

const Sidebar = () => {
  return (
    <aside className="hidden md:flex w-72 bg-white border-r border-gray-100 flex-col px-6 py-8">
      
      {/* Logo */}
      <div className="mb-14">
        
        <h1 className="text-3xl font-black bg-linear-to-r from-fuchsia-500 to-blue-500 bg-clip-text text-transparent">
          Omega Admin
        </h1>

        <p className="text-gray-400 text-sm mt-2">
          Modern SaaS Dashboard
        </p>
      </div>

      {/* Navigation */}
      <nav className="space-y-3">
        
        {sidebarLinks.map((link) => {
  const Icon = link.icon;

  return (
    <NavLink
      key={link.name}
      to={link.path}
      className={({ isActive }) =>
        `flex items-center gap-4 px-5 py-4 rounded-2xl font-semibold transition-all duration-300
        
        ${
          isActive
            ? "bg-[#f3efff] text-[#7c3aed] shadow-sm"
            : "text-gray-600 hover:bg-gray-100"
        }`
      }
    >
      <Icon className="text-xl" />

      <span className="text-[16px]">
        {link.name}
      </span>
    </NavLink>
  );
})}
      </nav>

      {/* Bottom */}
      <div className="mt-auto pt-10 border-t border-gray-100">
        
        <button className="flex items-center gap-3 text-gray-500 hover:text-red-500 transition-all duration-300 font-medium">
          
          <FiLogOut className="text-lg" />

          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;