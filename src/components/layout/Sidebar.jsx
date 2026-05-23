import { NavLink } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { sidebarLinks } from "../../constants/sidebarLinks";

const Sidebar = () => {
  return (
    <aside className="hidden md:flex w-72 h-full bg-white rounded-[32px] border border-gray-100 shadow-sm flex-col overflow-hidden p-6">

      {/* Logo */}
      <div className="mb-10">
        <h1 className="text-3xl font-black bg-gradient-to-r from-fuchsia-500 to-blue-500 bg-clip-text text-transparent">
          Omega Admin
        </h1>

        <p className="text-gray-500 text-sm mt-2">
          Modern SaaS Dashboard
        </p>
      </div>

      {/* Navigation */}
      <nav className="space-y-2 flex-1">

        {sidebarLinks.map((link) => {
          const Icon = link.icon;

          return (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `flex items-center gap-4 px-4 py-3 rounded-2xl font-medium transition-all duration-300

                ${
                  isActive
                    ? "bg-[#7c3aed] text-white shadow-md"
                    : "text-gray-600 hover:bg-gray-100"
                }`
              }
            >
              <Icon className="text-xl" />
              <span>{link.name}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className="mt-auto pt-6 border-t border-gray-100">

        <button className="flex items-center gap-3 text-gray-500 hover:text-red-500 transition-all font-medium">
          <FiLogOut className="text-lg" />
          Logout
        </button>

      </div>

    </aside>
  );
};

export default Sidebar;