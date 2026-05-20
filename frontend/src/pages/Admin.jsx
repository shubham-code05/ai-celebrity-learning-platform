import { useState } from "react";
import Navbar from "../components/Navbar";
import { Bell } from "lucide-react";
import { Link } from "react-router-dom";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

function Admin() {

  const [showModal, setShowModal] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const stats = [

    {
      title: "Total Students",
      value: "1M+",
    },

    {
      title: "Total Courses",
      value: "250+",
    },

    {
      title: "AI Teachers",
      value: "100+",
    },

    {
      title: "Revenue",
      value: "$50K",
    },

  ];

  const courses = [

    {
      name: "Python Programming",
      teacher: "Sachin Tendulkar",
      students: "25K",
    },

    {
      name: "MERN Stack",
      teacher: "Salman Khan",
      students: "18K",
    },

    {
      name: "Full Stack Development",
      teacher: "Virat Kohli",
      students: "30K",
    },

    {
      name: "Machine Learning",
      teacher: "Akshay Kumar",
      students: "19K",
    },

  ];

  /* Charts Data */

  const studentData = [

    { month: "Jan", students: 400 },

    { month: "Feb", students: 700 },

    { month: "Mar", students: 1200 },

    { month: "Apr", students: 1800 },

    { month: "May", students: 2500 },

  ];

  const teacherData = [

    { name: "AI Teachers", value: 100 },

    { name: "Courses", value: 250 },

  ];

  const COLORS = ["#06B6D4", "#3B82F6"];

  return (

    <div className="min-h-screen bg-[#081028] text-white">

      <Navbar />

      <div className="flex">

        {/* Sidebar */}

        <div className="w-[280px] min-h-screen bg-[#111827] border-r border-cyan-500/10 p-8 hidden md:block">

          <h1 className="text-3xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">

            Admin Panel

          </h1>

          <div className="flex flex-col gap-6 text-lg">

            <button className="text-left hover:text-cyan-400 transition">
              Dashboard
            </button>

            <button className="text-left hover:text-cyan-400 transition">
              Courses
            </button>

            <button className="text-left hover:text-cyan-400 transition">
              Students
            </button>

            <button className="text-left hover:text-cyan-400 transition">
              AI Teachers
            </button>

            <Link to="/analytics">

              <button className="text-left hover:text-cyan-400 transition">

                Analytics

              </button>

            </Link>

            <button className="text-left hover:text-cyan-400 transition">
              Settings
            </button>

          </div>

        </div>

        {/* Main Content */}

        <div className="flex-1 p-8 md:p-14">

          {/* Heading */}

          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-14">

            <div>

              <h1 className="text-5xl font-bold mb-4">

                Admin{" "}

                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Dashboard
                </span>

              </h1>

              <p className="text-gray-400 text-lg">

                Manage platform courses, students and AI celebrity teachers.

              </p>

            </div>

            {/* Notification Bell */}

            <div className="relative mt-8 md:mt-0">

              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="bg-[#111827] p-4 rounded-2xl border border-cyan-500/20 hover:border-cyan-400 transition shadow-lg"
              >

                <Bell size={28} className="text-cyan-400" />

              </button>

              {/* Badge */}

              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6 flex items-center justify-center rounded-full">

                3

              </span>

              {/* Notification Dropdown */}

              {showNotifications && (

                <div className="absolute right-0 mt-4 w-[350px] bg-[#111827] border border-cyan-500/20 rounded-3xl shadow-2xl p-6 z-50">

                  <div className="flex items-center justify-between mb-6">

                    <h2 className="text-2xl font-bold">
                      Notifications
                    </h2>

                    <button
                      onClick={() => setShowNotifications(false)}
                      className="text-gray-400 hover:text-white"
                    >
                      ✕
                    </button>

                  </div>

                  <div className="flex flex-col gap-4">

                    <div className="bg-[#0f172a] p-4 rounded-2xl border border-cyan-500/10">

                      <p className="font-semibold mb-1">
                        📚 New Course Added
                      </p>

                      <p className="text-gray-400 text-sm">
                        AI Mastery course was added today.
                      </p>

                    </div>

                    <div className="bg-[#0f172a] p-4 rounded-2xl border border-cyan-500/10">

                      <p className="font-semibold mb-1">
                        👨‍🎓 New Student Registered
                      </p>

                      <p className="text-gray-400 text-sm">
                        120 new students joined this week.
                      </p>

                    </div>

                    <div className="bg-[#0f172a] p-4 rounded-2xl border border-cyan-500/10">

                      <p className="font-semibold mb-1">
                        💰 Revenue Increased
                      </p>

                      <p className="text-gray-400 text-sm">
                        Revenue increased by 18% this month.
                      </p>

                    </div>

                  </div>

                </div>

              )}

            </div>

          </div>

          {/* Stats Cards */}

          <div className="grid md:grid-cols-4 gap-8 mb-16">

            {stats.map((item, index) => (

              <div
                key={index}
                className="bg-[#111827] border border-cyan-500/10 rounded-3xl p-8 hover:border-cyan-400 hover:-translate-y-2 transition duration-500 shadow-2xl"
              >

                <h2 className="text-gray-400 text-lg mb-4">
                  {item.title}
                </h2>

                <p className="text-5xl font-bold text-cyan-400">
                  {item.value}
                </p>

              </div>

            ))}

          </div>

          {/* Quick Actions */}

          <div className="mb-16">

            <div className="flex items-center justify-between mb-8">

              <h2 className="text-3xl font-bold">
                Quick Actions
              </h2>

              <p className="text-gray-400">
                Manage your platform quickly 🚀
              </p>

            </div>

            <div className="grid md:grid-cols-4 gap-6">

              {/* Add Course */}

              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 p-6 rounded-3xl text-left hover:scale-105 transition duration-300 shadow-lg shadow-cyan-500/20">

                <div className="text-5xl mb-4">
                  📚
                </div>

                <h3 className="text-2xl font-bold mb-2">
                  Add Course
                </h3>

                <p className="text-white/80">
                  Create new AI learning courses.
                </p>

              </button>

              {/* Add Student */}

              <button className="bg-[#111827] border border-cyan-500/20 p-6 rounded-3xl text-left hover:border-cyan-400 hover:-translate-y-2 transition duration-300 shadow-2xl">

                <div className="text-5xl mb-4">
                  👨‍🎓
                </div>

                <h3 className="text-2xl font-bold mb-2">
                  Add Student
                </h3>

                <p className="text-gray-400">
                  Manage platform students.
                </p>

              </button>

              {/* Notifications */}

              <button className="bg-[#111827] border border-cyan-500/20 p-6 rounded-3xl text-left hover:border-cyan-400 hover:-translate-y-2 transition duration-300 shadow-2xl">

                <div className="text-5xl mb-4">
                  🔔
                </div>

                <h3 className="text-2xl font-bold mb-2">
                  Notifications
                </h3>

                <p className="text-gray-400">
                  Send updates to users.
                </p>

              </button>

              {/* Reports */}

              <button className="bg-[#111827] border border-cyan-500/20 p-6 rounded-3xl text-left hover:border-cyan-400 hover:-translate-y-2 transition duration-300 shadow-2xl">

                <div className="text-5xl mb-4">
                  📊
                </div>

                <h3 className="text-2xl font-bold mb-2">
                  Reports
                </h3>

                <p className="text-gray-400">
                  Generate analytics reports.
                </p>

              </button>

            </div>

          </div>

          {/* Charts Section */}

          <div className="grid md:grid-cols-2 gap-10 mb-16">

            {/* Students Growth Chart */}

            <div className="bg-[#111827] p-8 rounded-3xl border border-cyan-500/10 shadow-2xl">

              <h2 className="text-3xl font-bold mb-8">
                Students Growth
              </h2>

              <ResponsiveContainer width="100%" height={300}>

                <BarChart data={studentData}>

                  <XAxis dataKey="month" stroke="#9CA3AF" />

                  <YAxis stroke="#9CA3AF" />

                  <Tooltip />

                  <Bar
                    dataKey="students"
                    fill="#06B6D4"
                    radius={[10, 10, 0, 0]}
                  />

                </BarChart>

              </ResponsiveContainer>

            </div>

            {/* AI Teachers Stats */}

            <div className="bg-[#111827] p-8 rounded-3xl border border-cyan-500/10 shadow-2xl">

              <h2 className="text-3xl font-bold mb-8">
                AI Teachers Stats
              </h2>

              <ResponsiveContainer width="100%" height={300}>

                <PieChart>

                  <Pie
                    data={teacherData}
                    dataKey="value"
                    outerRadius={120}
                    label
                  >

                    {teacherData.map((entry, index) => (

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

          {/* Courses Table */}

          <div className="bg-[#111827] border border-cyan-500/10 rounded-3xl overflow-hidden shadow-2xl">

            <div className="flex items-center justify-between p-8 border-b border-cyan-500/10">

              <h2 className="text-3xl font-bold">
                Courses Management
              </h2>

              <button
                onClick={() => setShowModal(true)}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition duration-300"
              >

                Add Course

              </button>

            </div>

            <div className="overflow-x-auto">

              <table className="w-full">

                <thead className="bg-[#0f172a]">

                  <tr>

                    <th className="text-left p-6 text-cyan-400">
                      Course
                    </th>

                    <th className="text-left p-6 text-cyan-400">
                      Teacher
                    </th>

                    <th className="text-left p-6 text-cyan-400">
                      Students
                    </th>

                    <th className="text-left p-6 text-cyan-400">
                      Actions
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {courses.map((course, index) => (

                    <tr
                      key={index}
                      className="border-b border-cyan-500/10 hover:bg-[#0f172a] transition"
                    >

                      <td className="p-6">
                        {course.name}
                      </td>

                      <td className="p-6">
                        {course.teacher}
                      </td>

                      <td className="p-6">
                        {course.students}
                      </td>

                      <td className="p-6">

                        <div className="flex gap-4">

                          <button className="bg-cyan-500 px-5 py-2 rounded-xl hover:scale-105 transition">

                            Edit

                          </button>

                          <button className="bg-red-500 px-5 py-2 rounded-xl hover:scale-105 transition">

                            Delete

                          </button>

                        </div>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </div>

        </div>

      </div>

      {/* Add Course Modal */}

      {showModal && (

        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-6">

          <div className="bg-[#111827] w-full max-w-2xl rounded-3xl p-10 border border-cyan-500/20 shadow-2xl relative">

            {/* Close Button */}

            <button
              onClick={() => setShowModal(false)}
              className="absolute top-5 right-5 text-3xl text-gray-400 hover:text-white"
            >
              ×
            </button>

            <h2 className="text-4xl font-bold mb-8">

              Add New{" "}

              <span className="text-cyan-400">
                Course
              </span>

            </h2>

            {/* Form */}

            <div className="grid md:grid-cols-2 gap-6">

              <input
                type="text"
                placeholder="Course Title"
                className="bg-[#0f172a] border border-cyan-500/20 px-5 py-4 rounded-2xl outline-none focus:border-cyan-400"
              />

              <input
                type="text"
                placeholder="Teacher Name"
                className="bg-[#0f172a] border border-cyan-500/20 px-5 py-4 rounded-2xl outline-none focus:border-cyan-400"
              />

              <input
                type="text"
                placeholder="Students"
                className="bg-[#0f172a] border border-cyan-500/20 px-5 py-4 rounded-2xl outline-none focus:border-cyan-400"
              />

              <input
                type="text"
                placeholder="Duration"
                className="bg-[#0f172a] border border-cyan-500/20 px-5 py-4 rounded-2xl outline-none focus:border-cyan-400"
              />

              <input
                type="text"
                placeholder="Level"
                className="bg-[#0f172a] border border-cyan-500/20 px-5 py-4 rounded-2xl outline-none focus:border-cyan-400"
              />

              <input
                type="text"
                placeholder="Rating"
                className="bg-[#0f172a] border border-cyan-500/20 px-5 py-4 rounded-2xl outline-none focus:border-cyan-400"
              />

            </div>

            {/* Button */}

            <button className="w-full mt-8 bg-gradient-to-r from-cyan-500 to-blue-600 py-4 rounded-2xl font-semibold text-lg hover:scale-[1.02] transition duration-300">

              Save Course

            </button>

          </div>

        </div>

      )}

    </div>

  );
}

export default Admin;