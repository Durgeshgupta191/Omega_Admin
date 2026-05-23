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
    <div className="space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#7c3aed]">
            Dashboard Overview
          </h1>

          <p className="text-gray-500 dark:text-gray-400 mt-3">
            Monitor analytics, products and growth
          </p>
        </div>

        <button className="bg-[#7c3aed] text-white px-6 py-3 rounded-2xl hover:opacity-90 transition-all w-fit">
          Generate Report
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        
        {stats.map((item) => (
          <div
            key={item.title}
            className="bg-white dark:bg-[#1e293b] border border-gray-100 dark:border-gray-800 rounded-3xl p-6 shadow-sm transition-all"
          >
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              {item.title}
            </p>

            <h2 className="text-4xl font-bold mt-4 text-gray-800 dark:text-white">
              {item.value}
            </h2>

            <p className="mt-3 text-green-500 font-medium">
              {item.growth}
            </p>
          </div>
        ))}
      </div>

      {/* Analytics Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        
        {/* Revenue */}
        <div className="xl:col-span-2 bg-white dark:bg-[#1e293b] border border-gray-100 dark:border-gray-800 rounded-3xl p-6 min-h-[350px]">
          
          <div className="flex items-center justify-between mb-6">
            
            <div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                Revenue Analytics
              </h2>

              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Monthly revenue overview
              </p>
            </div>

            <button className="bg-[#f3efff] dark:bg-[#312e81] text-[#7c3aed] px-4 py-2 rounded-2xl text-sm">
              Export
            </button>
          </div>

          <div className="h-[220px] rounded-2xl bg-gradient-to-r from-[#7c3aed] to-[#9333ea] opacity-90" />
        </div>

        {/* Activity */}
        <div className="bg-white dark:bg-[#1e293b] border border-gray-100 dark:border-gray-800 rounded-3xl p-6">
          
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            Recent Activity
          </h2>

          <div className="space-y-5 mt-6">
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium dark:text-white">
                  New Order Received
                </p>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  2 mins ago
                </p>
              </div>

              <span className="text-green-500 text-sm">
                +$240
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium dark:text-white">
                  Product Updated
                </p>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  1 hour ago
                </p>
              </div>

              <span className="text-blue-500 text-sm">
                Updated
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium dark:text-white">
                  New User Joined
                </p>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Today
                </p>
              </div>

              <span className="text-purple-500 text-sm">
                +1 User
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        
        <div className="bg-white dark:bg-[#1e293b] border border-gray-100 dark:border-gray-800 rounded-3xl p-6 min-h-[250px]">
          
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            Customer Growth
          </h2>

          <div className="h-[150px] mt-6 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-400 opacity-90" />
        </div>

        <div className="bg-white dark:bg-[#1e293b] border border-gray-100 dark:border-gray-800 rounded-3xl p-6 min-h-[250px]">
          
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            Category Distribution
          </h2>

          <div className="h-[150px] mt-6 rounded-2xl bg-gradient-to-r from-pink-500 to-fuchsia-500 opacity-90" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;