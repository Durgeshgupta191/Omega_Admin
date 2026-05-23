const stats = [
  { title: "Total Revenue", value: "$120K", growth: "+15%" },
  { title: "Active Users", value: "30K", growth: "+5%" },
  { title: "New Signups", value: "10K", growth: "+8%" },
  { title: "Conversion Rate", value: "2.5%", growth: "+10%" },
];

const Dashboard = () => {
  return (
    <div className="space-y-8">

      {/* Heading */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

        <div>
          <h1 className="text-3xl md:text-5xl font-bold text-[#7c3aed] leading-tight">
            Project Management Dashboard
          </h1>

          <p className="text-gray-500 mt-3 text-base md:text-lg">
            Clean modern SaaS analytics overview
          </p>
        </div>

        <button className="bg-[#7c3aed] text-white px-5 py-3 rounded-2xl hover:opacity-90 transition-all shadow-lg w-fit">
          Share
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

        {stats.map((item) => (
          <div
            key={item.title}
            className="bg-linear-to-r from-fuchsia-500 to-blue-500 rounded-3xl p-6 text-white shadow-xl overflow-hidden"
          >
            <p className="text-sm opacity-80">
              {item.title}
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-4 wrap-break-word">
              {item.value}
            </h2>

            <p className="mt-3 text-sm font-medium">
              {item.growth}
            </p>
          </div>
        ))}
      </div>

      {/* Analytics */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 pt-2">

        <div className="bg-white rounded-[28px] min-h-70 p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all overflow-hidden">
          <h3 className="font-bold text-xl text-gray-700 mb-6">
            Revenue Analytics
          </h3>
          <div className="h-45 rounded-2xl bg-linear-to-r from-violet-100 to-fuchsia-100" />
        </div>

        <div className="bg-white rounded-[28px] min-h-70 p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all overflow-hidden">
          <h3 className="font-bold text-xl text-gray-700 mb-6">
            Customer Growth
          </h3>
          <div className="h-45 rounded-2xl bg-linear-to-r from-blue-100 to-cyan-100" />
        </div>

        <div className="bg-white rounded-[28px] min-h-70 p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all overflow-hidden">
          <h3 className="font-bold text-xl text-gray-700 mb-6">
            Category Distribution
          </h3>
          <div className="h-45 rounded-2xl bg-linear-to-r from-pink-100 to-orange-100" />
        </div>

      </div>

    </div>
  );
};

export default Dashboard;