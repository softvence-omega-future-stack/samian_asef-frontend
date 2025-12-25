"use client";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";

interface Notification {
  id: string;
  date: string;
  title: string;
  description: string;
}

const NOTIFICATIONS_DATA: Notification[] = [
  {
    id: "1",
    date: "11-Jan-2026",
    title: "System Maintenance",
    description: "The system will be under maintenance from 12 AM to 2 AM.",
  },
  {
    id: "2",
    date: "11-Jan-2026",
    title: "Driver Meeting",
    description: "All drivers are required to attend the meeting on Friday.",
  },
  {
    id: "3",
    date: "11-Jan-2026",
    title: "New Feature",
    description: "We have introduced a new ride-scheduling feature.",
  },
  {
    id: "4",
    date: "11-Jan-2026",
    title: "Vehicle Update",
    description: "Seja rápido ao chamar o veículo",
  },
  {
    id: "5",
    date: "11-Jan-2026",
    title: "System Maintenance",
    description: "The system will be under maintenance from 12 AM to 2 AM.",
  },
  {
    id: "6",
    date: "11-Jan-2026",
    title: "System Maintenance",
    description: "The system will be under maintenance from 12 AM to 2 AM.",
  },
  {
    id: "7",
    date: "11-Jan-2026",
    title: "System Maintenance",
    description: "The system will be under maintenance from 12 AM to 2 AM.",
  },
  {
    id: "8",
    date: "11-Jan-2026",
    title: "System Maintenance",
    description: "The system will be under maintenance from 12 AM to 2 AM.",
  },
  {
    id: "9",
    date: "11-Jan-2026",
    title: "System Maintenance",
    description: "The system will be under maintenance from 12 AM to 2 AM.",
  },
];

const NotificationsManagement = () => {
  const [isAdding, setIsAdding] = useState(false);

  return (
    <div className="flex-1 overflow-auto bg-background">
      <div className="p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-foreground">
            Notifications Management
          </h1>
          <Button className="gap-2 bg-teal-600 hover:bg-teal-700 text-white">
            <Plus className="w-4 h-4" />
            Add announcement
          </Button>
        </div>

        <div className="bg-card rounded-lg border border-border overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                  Date
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                  Title
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {NOTIFICATIONS_DATA.map((notif) => (
                <tr
                  key={notif.id}
                  className="border-b border-border hover:bg-muted/50 transition-colors cursor-pointer"
                >
                  <td className="px-6 py-4 text-sm text-foreground font-medium">
                    {notif.date}
                  </td>
                  <td className="px-6 py-4 text-sm text-foreground">
                    {notif.title}
                  </td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">
                    {notif.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center mt-6">
          <Button variant="outline">Previous</Button>
          <Button variant="outline">Next</Button>
        </div>
      </div>
    </div>
  );
};

export default NotificationsManagement;
