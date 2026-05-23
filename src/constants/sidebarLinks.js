import {
  FiGrid,
  FiFileText,
  FiBarChart2,
  FiSettings,
} from "react-icons/fi";

export const sidebarLinks = [
  {
    name: "Dashboard",
    path: "/",
    icon: FiGrid,
  },

  {
    name: "Products",
    path: "/products",
    icon: FiFileText,
  },

  {
    name: "Analytics",
    path: "/analytics",
    icon: FiBarChart2,
  },

  {
    name: "Settings",
    path: "/settings",
    icon: FiSettings,
  },
];