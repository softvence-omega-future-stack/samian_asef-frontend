"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Filter, Search } from "lucide-react";
import { useState } from "react";

interface Transaction {
  id: string;
  trxId: string;
  name: string;
  amount: string;
  method: string;
  category: string;
  status: "Completed" | "Pending" | "Failed";
}

const TRANSACTIONS_DATA: Transaction[] = [
  {
    id: "1",
    trxId: "#PT0025",
    name: "Savannah Nguyen",
    amount: "$1,249.99",
    method: "Credit Card",
    category: "Subscription",
    status: "Completed",
  },
  {
    id: "2",
    trxId: "#PT0025",
    name: "Jerome Bell",
    amount: "-$29.99",
    method: "Credit Card",
    category: "Refund",
    status: "Pending",
  },
  {
    id: "3",
    trxId: "#PT0025",
    name: "Esther Howard",
    amount: "$150.00",
    method: "Credit Card",
    category: "Service",
    status: "Completed",
  },
  {
    id: "4",
    trxId: "#PT0025",
    name: "Esther Howard",
    amount: "$150.00",
    method: "Credit Card",
    category: "Service",
    status: "Completed",
  },
  {
    id: "5",
    trxId: "#PT0025",
    name: "Esther Howard",
    amount: "$150.00",
    method: "Credit Card",
    category: "Service",
    status: "Completed",
  },
  {
    id: "6",
    trxId: "#PT0025",
    name: "Esther Howard",
    amount: "$150.00",
    method: "Credit Card",
    category: "Service",
    status: "Completed",
  },
  {
    id: "7",
    trxId: "#PT0025",
    name: "Esther Howard",
    amount: "$150.00",
    method: "Credit Card",
    category: "Service",
    status: "Completed",
  },
  {
    id: "8",
    trxId: "#PT0025",
    name: "Esther Howard",
    amount: "$150.00",
    method: "Credit Card",
    category: "Service",
    status: "Completed",
  },
  {
    id: "9",
    trxId: "#PT0025",
    name: "Esther Howard",
    amount: "$150.00",
    method: "Credit Card",
    category: "Service",
    status: "Completed",
  },
  {
    id: "10",
    trxId: "#PT0025",
    name: "Bessie Cooper",
    amount: "-$150.00",
    method: "Credit Card",
    category: "Service",
    status: "Failed",
  },
];

const TransactionHistory = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRows, setSelectedRows] = useState<string[]>([]);

  const filteredTransactions = TRANSACTIONS_DATA.filter(
    (t) =>
      t.trxId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleRowSelection = (id: string) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleAllRows = () => {
    setSelectedRows(
      selectedRows.length === filteredTransactions.length
        ? []
        : filteredTransactions.map((t) => t.id)
    );
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "text-green-600";
      case "Pending":
        return "text-orange-600";
      case "Failed":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  const isAmountNegative = (amount: string) => amount.startsWith("-");

  return (
    <div className="flex-1 overflow-auto bg-background">
      <div className="p-8">
        <h1 className="text-2xl font-bold text-foreground mb-6">
          Transactions
        </h1>

        <div className="flex gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Search ..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" className="gap-2 bg-transparent">
            <Filter className="w-4 h-4" />
            Filters
          </Button>
        </div>

        <div className="bg-card rounded-lg border border-border overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-6 py-4 text-left">
                  <Checkbox
                    checked={
                      selectedRows.length === filteredTransactions.length &&
                      filteredTransactions.length > 0
                    }
                    onChange={toggleAllRows}
                  />
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                  TRX ID
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                  Name
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                  Amount
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                  Method
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                  Category
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.map((transaction) => (
                <tr
                  key={transaction.id}
                  className="border-b border-border hover:bg-muted/50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <Checkbox
                      checked={selectedRows.includes(transaction.id)}
                      onChange={() => toggleRowSelection(transaction.id)}
                    />
                  </td>
                  <td className="px-6 py-4 text-sm text-foreground">
                    {transaction.trxId}
                  </td>
                  <td className="px-6 py-4 text-sm text-foreground">
                    {transaction.name}
                  </td>
                  <td
                    className={`px-6 py-4 text-sm font-medium ${
                      isAmountNegative(transaction.amount)
                        ? "text-orange-600"
                        : "text-foreground"
                    }`}
                  >
                    {transaction.amount}
                  </td>
                  <td className="px-6 py-4 text-sm text-foreground">
                    {transaction.method}
                  </td>
                  <td className="px-6 py-4 text-sm text-foreground">
                    {transaction.category}
                  </td>
                  <td
                    className={`px-6 py-4 text-sm font-medium ${getStatusColor(
                      transaction.status
                    )}`}
                  >
                    {transaction.status}
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

export default TransactionHistory;
