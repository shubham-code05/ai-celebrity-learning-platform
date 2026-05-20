import Navbar from "../components/Navbar";

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Analytics() {

  /* User Growth Data */

  const growthData = [

    { month: "Jan", users: 400 },
    { month: "Feb", users: 700 },
    { month: "Mar", users: 1200 },
    { month: "Apr", users: 1800 },
    { month: "May", users: 2500 },
    { month: "Jun", users: 3200 },

  ];

  /* Revenue Data */

  const revenueData = [

    { month: "Jan", revenue: 1000 },
    { month: "Feb", revenue: 2500 },
    { month: "Mar", revenue: 4000 },
    { month: "Apr", revenue: 6000 },
    { month: "May", revenue: 8500 },
    { month: "Jun", revenue: 12000 },

  ];

  /* Course Data */

  const courseData = [

    { name: "Python", value: 35 },
    { name: "MERN", value: 25 },
    { name: "AI", value: 20 },
    { name: "Cyber", value: 20 },

  ];

  const COLORS = ["#06B6D4", "#3B82F6", "#8B5CF6", "#14B8A6"];

  return (

    <div className="min-h-screen bg-[#081028] text-white">

      <Navbar />

      <div className="px-8 md:px-16 py-14">

        {/* Heading */}

        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-14">

          <div>

            <h1 className="text-5xl font-bold mb-4">

              Analytics{" "}

              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Dashboard
              </span>

            </h1>

            <p className="text-gray-400 text-lg">

              Track platform growth, revenue, and learning analytics.

            </p>

          </div>

          {/* Filters */}

          <div className="flex gap-4 mt-8 md:mt-0">

            <button className="bg-cyan-500 px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition">

              Weekly

            </button>

            <button className="bg-[#111827] border border-cyan-500/20 px-6 py-3 rounded-2xl hover:border-cyan-400 transition">

              Monthly

            </button>

            <button className="bg-[#111827] border border-cyan-500/20 px-6 py-3 rounded-2xl hover:border-cyan-400 transition">

              Yearly

            </button>

          </div>

        </div>

        {/* Stats Cards */}

        <div className="grid md:grid-cols-4 gap-8 mb-16">

          <div className="bg-[#111827] border border-cyan-500/10 rounded-3xl p-8 shadow-2xl hover:border-cyan-400 transition">

            <h2 className="text-gray-400 text-lg mb-4">
              Total Users
            </h2>

            <p className="text-5xl font-bold text-cyan-400">
              1M+
            </p>

          </div>

          <div className="bg-[#111827] border border-cyan-500/10 rounded-3xl p-8 shadow-2xl hover:border-cyan-400 transition">

            <h2 className="text-gray-400 text-lg mb-4">
              Revenue
            </h2>

            <p className="text-5xl font-bold text-cyan-400">
              $120K
            </p>

          </div>

          <div className="bg-[#111827] border border-cyan-500/10 rounded-3xl p-8 shadow-2xl hover:border-cyan-400 transition">

            <h2 className="text-gray-400 text-lg mb-4">
              Courses
            </h2>

            <p className="text-5xl font-bold text-cyan-400">
              250+
            </p>

          </div>

          <div className="bg-[#111827] border border-cyan-500/10 rounded-3xl p-8 shadow-2xl hover:border-cyan-400 transition">

            <h2 className="text-gray-400 text-lg mb-4">
              AI Teachers
            </h2>

            <p className="text-5xl font-bold text-cyan-400">
              100+
            </p>

          </div>

        </div>

        {/* Charts */}

        <div className="grid md:grid-cols-2 gap-10 mb-16">

          {/* User Growth */}

          <div className="bg-[#111827] p-8 rounded-3xl border border-cyan-500/10 shadow-2xl">

            <h2 className="text-3xl font-bold mb-8">
              User Growth
            </h2>

            <ResponsiveContainer width="100%" height={300}>

              <LineChart data={growthData}>

                <XAxis dataKey="month" stroke="#9CA3AF" />

                <YAxis stroke="#9CA3AF" />

                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="users"
                  stroke="#06B6D4"
                  strokeWidth={4}
                />

              </LineChart>

            </ResponsiveContainer>

          </div>

          {/* Revenue Chart */}

          <div className="bg-[#111827] p-8 rounded-3xl border border-cyan-500/10 shadow-2xl">

            <h2 className="text-3xl font-bold mb-8">
              Revenue Analytics
            </h2>

            <ResponsiveContainer width="100%" height={300}>

              <BarChart data={revenueData}>

                <XAxis dataKey="month" stroke="#9CA3AF" />

                <YAxis stroke="#9CA3AF" />

                <Tooltip />

                <Bar
                  dataKey="revenue"
                  fill="#3B82F6"
                  radius={[10, 10, 0, 0]}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </div>

        {/* Pie Chart */}

        <div className="bg-[#111827] p-8 rounded-3xl border border-cyan-500/10 shadow-2xl">

          <h2 className="text-3xl font-bold mb-10">
            Course Popularity
          </h2>

          <ResponsiveContainer width="100%" height={400}>

            <PieChart>

              <Pie
                data={courseData}
                dataKey="value"
                outerRadius={140}
                label
              >

                {courseData.map((entry, index) => (

                  <Cell
                    key={index}
                    fill={COLORS[index % COLORS.length]}
                  />

                ))}

              </Pie>

              <Tooltip />

            </PieChart>

          </ResponsiveContainer>

        </div>

      </div>

    </div>

  );
}

export default Analytics;