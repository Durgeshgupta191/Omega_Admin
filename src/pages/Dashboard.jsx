const stats = [
  {
    title: "Total Revenue",
    value: "$120K",
    growth: "+15%",
  },
  {
    title: "Active Users",
    value: "30K",
    growth: "+5%",
  },
  {
    title: "New Signups",
    value: "10K",
    growth: "+8%",
  },
  {
    title: "Conversion Rate",
    value: "2.5%",
    growth: "+10%",
  },
];

const Dashboard = () => {
  return (
    <div className="w-full max-w-350 mx-auto">
      
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">
        
        <div>
          <h1 className="text-3xl md:text-5xl font-bold text-[#7c3aed] leading-tight">
            Project Management Dashboard
          </h1>

          <p className="text-gray-400 mt-3 text-base md:text-lg">
            Clean modern SaaS analytics overview
          </p>
        </div>

        <button className="bg-[#7c3aed] hover:bg-[#6d28d9] transition-all text-white px-6 py-3 rounded-2xl font-semibold shadow-lg w-fit">
          Share
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((item) => (
          <div
            key={item.title}
            className="bg-linear-to-r from-fuchsia-500 to-blue-500 rounded-3xl p-6 text-white shadow-xl"
          >
            <p className="text-sm opacity-80">
              {item.title}
            </p>

            <h2 className="text-5xl font-bold mt-4">
              {item.value}
            </h2>

            <p className="mt-4 text-sm font-medium">
              {item.growth}
            </p>
          </div>
        ))}
      </div>

      {/* Analytics Cards */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-10">
        
        {/* Revenue */}
        <div className="bg-[#f7f5ff] dark:bg-[#111827] rounded-3xl p-8 min-h-80 shadow-lg">
          
          <h3 className="font-bold text-2xl text-gray-800 dark:text-white mb-6">
            Revenue Analytics
          </h3>

          <div className="h-45 bg-linear-to-r from-fuchsia-400 to-blue-500 rounded-2xl opacity-80"></div>
        </div>

        {/* Growth */}
        <div className="bg-[#f7f5ff] dark:bg-[#111827] rounded-3xl p-8 min-h-80 shadow-lg">
          
          <h3 className="font-bold text-2xl text-gray-800 dark:text-white mb-6">
            Customer Growth
          </h3>

          <div className="h-45 bg-linear-to-r from-fuchsia-400 to-blue-500 rounded-2xl opacity-80"></div>
        </div>

        {/* Distribution */}
        <div className="bg-[#f7f5ff] dark:bg-[#111827] rounded-3xl p-8 min-h-80 shadow-lg">
          
          <h3 className="font-bold text-2xl text-gray-800 dark:text-white mb-6">
            Category Distribution
          </h3>

          <div className="h-45 bg-linear-to-r from-fuchsia-400 to-blue-500 rounded-2xl opacity-80"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;