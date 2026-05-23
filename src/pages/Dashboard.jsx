
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

    <div>
      {/* Heading */}
      <div className="flex items-center justify-between mb-10">
        
        <div>
          <h1 className="text-5xl font-bold text-[#7c3aed]">
            Project Management Dashboard
          </h1>

          <p className="text-gray-500 mt-3">
            Clean modern SaaS analytics overview
          </p>
        </div>

        <button className="bg-[#7c3aed] text-white px-6 py-3 rounded-2xl hover:opacity-90">
          Share
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((item) => (
          <div
            key={item.title}
            className="bg-linear-to-r from-fuchsia-500 to-blue-500 rounded-3xl p-6 text-white shadow-lg"
          >
            <p className="text-sm opacity-80">
              {item.title}
            </p>

            <h2 className="text-4xl font-bold mt-5">
              {item.value}
            </h2>

            <p className="mt-3 text-sm">
              {item.growth}
            </p>
          </div>
        ))}
      </div>

      {/* Placeholder Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 pt-10">
        
        <div className="bg-[#f7f5ff] rounded-3xl h-80 p-8 flex flex-col">
         <h3 className="font-bold text-xl text-gray-700 mb-4">
            Revenue Analytics
          </h3>
        </div>

        <div className="bg-[#f7f5ff] rounded-3xl h-80 p-8 flex flex-col">
          <h3 className="font-bold text-xl text-gray-700 mb-4">
            Customer Growth
          </h3>
        </div>

        <div className="bg-[#f7f5ff] rounded-3xl h-80 p-8 flex flex-col">
          <h3 className="font-bold text-xl text-gray-700">
            Category Distribution
          </h3>
        </div>
      </div>
    </div>
   
  );
};

export default Dashboard;