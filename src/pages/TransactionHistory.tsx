"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {  Search } from "lucide-react";
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
        return "bg-[#00AF581A] text-[#00AF58]";
      case "Pending":
        return "bg-[#FF9C2A33] text-[#ED7E00]";
      case "Failed":
        return "bg-[#FF2A341A] text-[#FF2A34]";
      default:
        return "text-gray-600";
    }
  };

  const isAmountNegative = (amount: string) => amount.startsWith("-");
//   const ITEMS_PER_PAGE = 5;
// const [currentPage, setCurrentPage] = useState(1);


//   const totalPages = Math.ceil(filteredTransactions.length / ITEMS_PER_PAGE);

// const paginatedTransactions = filteredTransactions.slice(
//   (currentPage - 1) * ITEMS_PER_PAGE,
//   currentPage * ITEMS_PER_PAGE
// );


  return (
    <div className="flex-1 overflow-auto bg-background rounded-[16px]">
      <div className=" p-2 md:p-6 rounded-[16px]">
       
  <div className="flex flex-col md:flex-row w-full items-start md:items-center md:justify-between gap-4 md:gap-6 mb-6">
  
  {/* Title */}
  <div className="md:w-auto w-full">
    <h1 className="text-xl md:text-2xl font-semibold text-titleColor leading-6">
     Transactions
    </h1>
  </div>

  {/* Search + Filter */}
  <div className="flex flex-col md:flex-row w-full md:w-auto gap-4 items-center">
    
    <div className="relative w-full md:w-[320px]">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Search ..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" className="border w-full md:w-auto bg-transparent cursor-pointer">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M5 10H15M2.5 5H17.5M7.5 15H12.5"
          stroke="#2C2F33"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Filters
    </Button>

  </div>
</div>

        <div className="bg-card rounded-lg  overflow-x-auto overflow-y-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border ">
                <th className="px-6 py-4 text-left">
                  <Checkbox
                    checked={
                      selectedRows.length === filteredTransactions.length &&
                      filteredTransactions.length > 0
                    }
                    onChange={toggleAllRows}
                  />
                </th>
                <th className="px-6 py-4 text-left text-sm md:text-base font-medium text-textColor">
                  TRX ID
                </th>
                <th className="px-6 py-4 text-left text-sm md:text-base font-medium text-textColor">
                  Name
                </th>
                <th className="px-6 py-4 text-left text-sm md:text-base font-medium text-textColor">
                  Amount
                </th>
                <th className="px-6 py-4 text-left text-sm md:text-base font-medium text-textColor">
                  Method
                </th>
                <th className="px-6 py-4 text-left text-sm md:text-base font-medium text-textColor">
                  Category
                </th>
                <th className="px-6 py-4 text-left text-sm md:text-base font-medium text-textColor">
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
                  <td className="px-6 py-4 text-sm text-titleColor font-normal">
                    {transaction.trxId}
                  </td>
                  <td className="px-6 py-4 text-sm text-titleColor font-normal">
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
                  <td className="px-6 py-4 text-sm text-titleColor font-normal">
                    {transaction.method}
                  </td>
                  <td className="px-6 py-4 text-sm text-titleColor font-normal">
                    {transaction.category}
                  </td>
                  <td className="p-2 text-center">
  <span
    className={`w-24 flex items-center justify-center px-3 py-1 rounded-full text-sm font-normal ${getStatusColor(
      transaction.status
    )}`}
  >
    {transaction.status}
  </span>
</td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* <div className="flex justify-between items-center mt-6">
          <Button variant="outline">Previous</Button>
          <Button variant="outline">Next</Button>
        </div> */}
    <div className="flex flex-col md:flex-row gap-2 items-center justify-between mt-6 text-sm">
               <span className="text-[#6B7280] text-sm font-normal ">
                 Showing 1-8 of {TRANSACTIONS_DATA.length} entries
               </span>
               <div className="flex gap-2">
                 <Button variant="outline" size="sm" className="border p-2 cursor-pointer text-sm font-normal leading-5">
                   Previous
                 </Button>
                 <Button variant="outline" size="sm" className="border p-2 cursor-pointer text-sm font-normal leading-5">
                   Next
                 </Button>
               </div>
             </div>

      </div>
    </div>
  );
};

export default TransactionHistory;
