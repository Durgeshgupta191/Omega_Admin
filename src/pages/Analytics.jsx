import {
  useEffect,
  useState,
} from "react";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  BarChart,
  Bar,
} from "recharts";

import {
  getProducts,
} from "../services/productService";

import {
  calculateAnalytics,
} from "../utils/analytics";

import ChartCard from "../components/charts/ChartCard";

const COLORS = [
  "#7c3aed",
  "#2563eb",
  "#06b6d4",
  "#f43f5e",
  "#10b981",
  "#f59e0b",
];

const Analytics = () => {
  const [analytics, setAnalytics] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const fetchAnalytics = async () => {
    try {
      setLoading(true);

      const products =
        await getProducts();

      const data =
        calculateAnalytics(products);

      setAnalytics(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnalytics();
  }, []);

  if (loading) {
    return (
      <div className="text-center text-2xl font-bold text-[#7c3aed]">
        Loading Analytics...
      </div>
    );
  }

  return (
  
    <div>
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-5xl font-bold text-[#7c3aed]">
          Analytics Dashboard
        </h1>

        <p className="text-gray-500 mt-3">
          Product insights and business analytics
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        
        <div className="bg-linear-to-r from-fuchsia-500 to-blue-500 rounded-3xl p-6 text-white">
          <p className="text-sm opacity-80">
            Total Products
          </p>

          <h2 className="text-5xl font-bold mt-5">
            {analytics.totalProducts}
          </h2>
        </div>

        <div className="bg-linear-to-r from-blue-500 to-cyan-500 rounded-3xl p-6 text-white">
          <p className="text-sm opacity-80">
            Average Rating
          </p>

          <h2 className="text-5xl font-bold mt-5">
            {analytics.averageRating}
          </h2>
        </div>

        <div className="bg-linear-to-r from-purple-500 to-pink-500 rounded-3xl p-6 text-white">
          <p className="text-sm opacity-80">
            Inventory Value
          </p>

          <h2 className="text-4xl font-bold mt-5">
            $
            {analytics.inventoryValue.toLocaleString()}
          </h2>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        
        {/* Pie Chart */}
        <ChartCard title="Category Distribution">
          
          <ResponsiveContainer
            width="100%"
            height={350}
          >
            <PieChart>
              <Pie
                data={
                  analytics.categoryData
                }
                dataKey="value"
                outerRadius={120}
                label
              >
                {analytics.categoryData.map(
                  (_, index) => (
                    <Cell
                      key={index}
                      fill={
                        COLORS[
                          index %
                            COLORS.length
                        ]
                      }
                    />
                  )
                )}
              </Pie>

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Area Chart */}
        <ChartCard title="Ratings Overview">
          
          <ResponsiveContainer
            width="100%"
            height={350}
          >
            <AreaChart
              data={
                analytics.ratingData
              }
            >
              <defs>
                <linearGradient
                  id="colorRating"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="5%"
                    stopColor="#7c3aed"
                    stopOpacity={0.8}
                  />

                  <stop
                    offset="95%"
                    stopColor="#7c3aed"
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="name" />

              <YAxis />

              <Tooltip />

              <Area
                type="monotone"
                dataKey="rating"
                stroke="#7c3aed"
                fillOpacity={1}
                fill="url(#colorRating)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Bar Chart */}
        <ChartCard title="Stock Availability">
          
          <ResponsiveContainer
            width="100%"
            height={350}
          >
            <BarChart
              data={
                analytics.stockData
              }
            >
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="name" />

              <YAxis />

              <Tooltip />

              <Bar
                dataKey="stock"
                fill="#2563eb"
                radius={[12, 12, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Summary */}
        <ChartCard title="Business Insights">
          
          <div className="space-y-5">
            
            <div className="bg-[#f7f5ff] rounded-2xl p-5">
              <h3 className="font-bold text-lg text-gray-800">
                High Performing Products
              </h3>

              <p className="text-gray-500 mt-2">
                Products with high ratings
                are driving strong customer
                satisfaction.
              </p>
            </div>

            <div className="bg-[#eef7ff] rounded-2xl p-5">
              <h3 className="font-bold text-lg text-gray-800">
                Inventory Trends
              </h3>

              <p className="text-gray-500 mt-2">
                Monitor stock levels to
                prevent shortages and
                optimize sales.
              </p>
            </div>

            <div className="bg-[#fff7ed] rounded-2xl p-5">
              <h3 className="font-bold text-lg text-gray-800">
                Category Growth
              </h3>

              <p className="text-gray-500 mt-2">
                Diverse product categories
                improve platform engagement.
              </p>
            </div>
          </div>
        </ChartCard>
      </div>
    </div>
   
  );
};

export default Analytics;