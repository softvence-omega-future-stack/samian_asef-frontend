import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MapPin } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const revenueData = [
  { date: "12 Jan", value: 900 },
  { date: "13 Jan", value: 1100 },
  { date: "14 Jan", value: 950 },
  { date: "15 Jan", value: 1200 },
  { date: "16 Jan", value: 1050 },
  { date: "17 Jan", value: 1300 },
  { date: "18 Jan", value: 1100 },
];

const ordersData = [
  { day: "01", orders: 400 },
  { day: "02", orders: 500 },
  { day: "03", orders: 600 },
  { day: "04", orders: 700 },
  { day: "05", orders: 550 },
  { day: "06", orders: 650 },
  { day: "07", orders: 750 },
  { day: "08", orders: 600 },
  { day: "09", orders: 700 },
  { day: "10", orders: 800 },
  { day: "11", orders: 750 },
  { day: "12", orders: 900 },
];

const topDrivers = [
  { id: 1, name: "Selina Cooper", rides: 1008, initials: "SC" },
  { id: 2, name: "Esther Howard", rides: 233, initials: "EH" },
  { id: 3, name: "Jerome Bell", rides: 456, initials: "JB" },
  { id: 4, name: "Savannah Nguyen", rides: 742, initials: "SN" },
];

const rideAnalytics = [
  { name: "Accepted Ride", value: 32 },
  { name: "On The Way", value: 24 },
  { name: "Confirmed Ride", value: 56 },
  { name: "Realtime Rate", value: 92 },
  { name: "Completed Ride", value: 11 },
];

const liveDriving = [
  {
    name: "Annette Black",
    location: "San Francisco, USA",
    time: "1:23 (23 min)",
  },
  {
    name: "Jerome Bell",
    location: "San Francisco, USA",
    time: "1:23 (23 min)",
  },
  {
    name: "Kathryn Murphy",
    location: "San Francisco, USA",
    time: "1:23 (23 min)",
  },
  { name: "Guy Hawkins", location: "Chicago, USA", time: "1:23 (23 min)" },
];

const transactions = [
  {
    id: "#PT0025",
    name: "Savannah Nguyen",
    amount: "$1,249.99",
    method: "Credit Card",
    category: "Subscription",
    status: "Completed",
  },
  {
    id: "#PT0025",
    name: "Jerome Bell",
    amount: "-$29.99",
    method: "Credit Card",
    category: "Refund",
    status: "Pending",
  },
  {
    id: "#PT0025",
    name: "Esther Howard",
    amount: "$150.00",
    method: "Credit Card",
    category: "Service",
    status: "Completed",
  },
  {
    id: "#PT0025",
    name: "Bessie Cooper",
    amount: "-$150.00",
    method: "Credit Card",
    category: "Service",
    status: "Failed",
  },
];

const Dashboard = () => {
  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Hello, Keren nix</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's what's happening in your app today
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Active Drivers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2044</div>
            <p className="text-xs text-green-600 mt-1">+18.2% last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Active Rides
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1500</div>
            <p className="text-xs text-green-600 mt-1">+8.2% last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Completed Trips
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1222</div>
            <p className="text-xs text-green-600 mt-1">+23.1% last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Complaints
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">10</div>
            <p className="text-xs text-red-600 mt-1">-9.7% last week</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-2 gap-6">
        {/* Monthly Revenue */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Monthly Revenue</CardTitle>
                <CardDescription>Last 7 days</CardDescription>
              </div>
              <Button variant="ghost" size="sm">
                ...
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#0d9488"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Orders of This Month */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Orders Of This Month</CardTitle>
              </div>
              <Button variant="ghost" size="sm">
                ...
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={ordersData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="orders" fill="#06b6d4" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Three Column Section */}
      <div className="grid grid-cols-3 gap-6">
        {/* Top Driver */}
        <Card>
          <CardHeader>
            <CardTitle>Top Driver</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {topDrivers.map((driver) => (
              <div
                key={driver.id}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="bg-teal-200">
                      {driver.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{driver.name}</p>
                    <p className="text-xs text-muted-foreground">
                      Ride: {driver.rides}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Ride Analytics */}
        <Card>
          <CardHeader>
            <CardTitle>Ride Analytics</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {rideAnalytics.map((item, index) => (
              <div key={index} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{item.name}</span>
                  <span className="font-medium">{item.value}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-teal-600 h-2 rounded-full"
                    style={{ width: `${(item.value / 100) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Live Driving */}
        <Card>
          <CardHeader>
            <CardTitle>Live Driving</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {liveDriving.map((driver, index) => (
              <div key={index} className="p-3 bg-gray-50 rounded-lg">
                <p className="text-sm font-medium">{driver.name}</p>
                <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                  <MapPin className="w-3 h-3" />
                  {driver.location}
                </div>
                <p className="text-xs text-teal-600 mt-1">{driver.time}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Transactions */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Transactions</CardTitle>
            <Button variant="ghost" size="sm">
              ...
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="border-b">
                <tr>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                    TRX ID
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                    Name
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                    Amount
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                    Method
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                    Category
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((txn, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 text-muted-foreground">
                      {txn.id}
                    </td>
                    <td className="py-3 px-4">{txn.name}</td>
                    <td
                      className={`py-3 px-4 font-medium ${
                        txn.amount.startsWith("-")
                          ? "text-red-600"
                          : "text-green-600"
                      }`}
                    >
                      {txn.amount}
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">
                      {txn.method}
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">
                      {txn.category}
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          txn.status === "Completed"
                            ? "bg-green-100 text-green-700"
                            : txn.status === "Pending"
                            ? "bg-orange-100 text-orange-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {txn.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
