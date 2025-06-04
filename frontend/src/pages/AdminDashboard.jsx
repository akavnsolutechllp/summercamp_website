import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [registrations, setRegistrations] = useState([]);
  const [error, setError] = useState("");
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const fetchRegistrations = async () => {
    setIsRefreshing(true);
    const token = localStorage.getItem("adminToken");
    if (!token) {
      navigate("/admin-login");
      return;
    }

    try {
      const res = await axios.get("https://summercamp-website.onrender.com/api/admin/registrations", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setRegistrations(res.data);
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Failed to fetch data");
      if (err.response?.status === 401 || err.response?.status === 403) {
        localStorage.removeItem("adminToken");
        navigate("/admin-login");
      }
    } finally {
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    fetchRegistrations();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin-login");
  };

  const total = registrations.filter((r) => r.invoice?.invoiceid).length;
  const boys = registrations.filter(
    (r) => r.gender === "boy" && r.invoice?.invoiceid
  ).length;
  const girls = registrations.filter(
    (r) => r.gender === "girl" && r.invoice?.invoiceid
  ).length;

  const locationCounts = registrations.reduce((acc, r) => {
    const location = r.campSession?.split(" | ")[0]?.trim() || "Unknown";
    if (!acc[location]) acc[location] = 0;
    if (r.invoice?.invoiceid) acc[location] += 1;
    return acc;
  }, {});

  const handleExportCSV = () => {
    setIsExporting(true);
    const headers = [
      "Name",
      "Email",
      "Phone",
      "Gender",
      "Age",
      "Date",
      "Camp Type",
      "Location",
      "Camp Date",
      "Activity",
      "Payment",
    ];
  
    const rows = filteredRegistrations.map((r) => [
      r.camperName,
      r.email,
      r.phone,
      r.gender,
      r.age,
      new Date(r.createdAt).toLocaleDateString(),
      r.camp,
      r.campSession?.split(" | ")[0] || "",
      r.campSession?.split(" | ")[1] || "",
      r.activity,
      r.invoice?.invoiceid ? "Success" : "Not Paid",
    ]);
  
    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers.join(","), ...rows.map((row) => row.map((cell) => `"${cell}"`).join(","))].join("\n");
  
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "registrations_filtered.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  
    setTimeout(() => setIsExporting(false), 500);
  };
  
  const filteredRegistrations = registrations.filter((r) =>
    [
      r.camperName,
      r.email,
      r.invoice?.invoiceid,
      r.phone,
      r.gender,
      r.age?.toString(),
      r.camp,
      r.campSession,
      r.activity,
      r.invoice?.invoiceid ? "Success" : "Not Paid",
    ]
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gradient-to-b from-[#283353] to-[#16003E] min-h-screen w-full flex flex-col items-center p-4 font-montserrat">
      {/* Header */}
      <div className="w-full flex justify-between items-center px-4">
        <h2 className="uppercase text-4xl tracking-wider text-[#f79824] drop-shadow-md">
          Dashboard
        </h2>
        <div className="flex gap-2">
          <button
            onClick={fetchRegistrations}
            className="text-white bg-blue-600 px-4 py-2 rounded cursor-pointer flex items-center gap-2"
            disabled={isRefreshing}
          >
            {isRefreshing && (
              <span className="loader w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            )}
            Refresh
          </button>
          <button
            onClick={handleExportCSV}
            className="text-white bg-green-600 px-4 py-2 rounded cursor-pointer flex items-center gap-2"
            disabled={isExporting}
          >
            {isExporting && (
              <span className="loader w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            )}
            Export CSV
          </button>
          <button
            onClick={handleLogout}
            className="text-white bg-red-600 px-4 py-2 rounded cursor-pointer"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Error */}
      {error && <p className="text-red-500 mt-4">{error}</p>}

      {/* Stat Cards */}
      <div className="w-full lg:w-[70%] flex flex-col lg:flex-row justify-center items-center gap-4 my-6">
        <StatCard title="Total Registrations" count={total} />
        <StatCard title="Total Boys" count={boys} />
        <StatCard title="Total Girls" count={girls} />
      </div>

      {/* Summary Sections */}
      

      {/* Search */}
      <div className="w-full lg:w-[70%] mt-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by name, email, phone, etc..."
          className="w-full px-4 py-2 rounded border border-white/40 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#f79824]"
        />
      </div>

      {/* Table */}
      <div className="w-full mt-6 overflow-x-auto">
        <table className="min-w-full text-white text-left bg-[#16003E] border border-white/50 rounded-xl">
          <thead>
            <tr className="bg-[#f79824] text-[#16003E] uppercase text-xs">
              <th className="p-2">Name</th>
              <th className="p-2">Email</th>
              <th className="p-2">Invoice Id</th>
              <th className="p-2">Phone</th>
              <th className="p-2">Gender</th>
              <th className="p-2">Age</th>
              <th className="p-2">Camp Type</th>
              <th className="p-2">Location</th>
              <th className="p-2">Camp Date</th>
              <th className="p-2">Activity</th>
              <th className="p-2">Payment</th>
            </tr>
          </thead>
          <tbody>
  {filteredRegistrations.length === 0 ? (
    <tr>
      <td colSpan="11" className="text-center text-white py-4">
        No data available.
      </td>
    </tr>
  ) : (
    filteredRegistrations.map((r, i) => (
      <tr
        key={i}
        className={`border-t border-white/30 text-xs ${
          !r.invoice?.invoiceid ? "bg-white/10" : ""
        }`}
      >
        <td className="p-2">{r.camperName}</td>
        <td className="p-2">{r.email}</td>
        <td className="p-2">{r.invoice?.invoiceid}</td>
        <td className="p-2">{r.phone}</td>
        <td className="p-2">{r.gender}</td>
        <td className="p-2">{r.age}</td>
        <td className="p-2">{r.camp}</td>
        <td className="p-2">{r.campSession?.split(" | ")[0]}</td>
        <td className="p-2">{r.campSession?.split(" | ")[1]}</td>
        <td className="p-2">{r.activity}</td>
        <td className="p-2">
          {r.invoice?.invoiceid ? (
            <span className="text-green-400 font-bold">Success</span>
          ) : (
            <span className="text-red-400 font-bold">Not Paid</span>
          )}
        </td>
      </tr>
    ))
  )}
</tbody>

        </table>
      </div>
    </div>
  );
};

// Stat Card Component
const StatCard = ({ title, count }) => (
  <div className="min-h-[20vh] w-full bg-[#16003E] border border-white/70 rounded-xl flex flex-col justify-center items-center text-white relative">
    <h1 className="absolute top-4 left-4 text-lg">{title}</h1>
    <h2 className="text-6xl">{count}</h2>
  </div>
);

// Summary Block Component
const SummaryBlock = ({ title, data }) => (
  <div className="flex-1 bg-[#16003E] border border-white/70 rounded-xl p-4 text-white">
    <h1 className="text-lg mb-2">{title}</h1>
    <div className="divide-y divide-white/30">
      {Object.entries(data).map(([key, value]) => (
        <div
          key={key}
          className="flex justify-between items-center py-1 text-sm"
        >
          <span>{key}</span>
          <span className="font-bold">{value}</span>
        </div>
      ))}
    </div>
  </div>
);

export default AdminDashboard;
