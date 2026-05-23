import {
  FiUser,
  FiBell,
  FiShield,
} from "react-icons/fi";

const Settings = () => {
  return (

    <div>
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-5xl font-bold text-[#7c3aed] dark:text-white">
          Settings
        </h1>

        <p className="text-gray-500 dark:text-gray-400 mt-3">
          Manage your dashboard preferences
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        
        {/* Profile */}
        <div className="bg-white dark:bg-[#111827] rounded-3xl p-6 border border-gray-100 dark:border-gray-800">
          
          <div className="w-14 h-14 rounded-2xl bg-[#f3efff] text-[#7c3aed] flex items-center justify-center text-2xl">
            <FiUser />
          </div>

          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mt-6">
            Profile Settings
          </h2>

          <p className="text-gray-500 dark:text-gray-400 mt-3">
            Update your personal information and account preferences.
          </p>
        </div>

        {/* Notifications */}
        <div className="bg-white dark:bg-[#111827] rounded-3xl p-6 border border-gray-100 dark:border-gray-800">
          
          <div className="w-14 h-14 rounded-2xl bg-[#eef7ff] text-blue-500 flex items-center justify-center text-2xl">
            <FiBell />
          </div>

          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mt-6">
            Notifications
          </h2>

          <p className="text-gray-500 dark:text-gray-400 mt-3">
            Configure alerts, updates, and notification preferences.
          </p>
        </div>

        {/* Security */}
        <div className="bg-white dark:bg-[#111827] rounded-3xl p-6 border border-gray-100 dark:border-gray-800">
          
          <div className="w-14 h-14 rounded-2xl bg-[#fff7ed] text-orange-500 flex items-center justify-center text-2xl">
            <FiShield />
          </div>

          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mt-6">
            Security
          </h2>

          <p className="text-gray-500 dark:text-gray-400 mt-3">
            Manage password, authentication, and security settings.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Settings;