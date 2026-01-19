
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'

const Transactions = () => {
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

  return (
    <div>
        <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle title="Transactions"></CardTitle>
            <Button variant="ghost" size="sm" className="border cursor-pointer">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M5 10H15M2.5 5H17.5M7.5 15H12.5" stroke="#2C2F33" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
              Filters
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="border-b">
                <tr>
                  <th className="text-left text-sm sm:text-base   py-3 px-4 font-medium text-[#6B7280] ">
                    TRX ID
                  </th>
                  <th className="text-left text-sm sm:text-base   py-3 px-4 font-medium text-[#6B7280] ">
                    Name
                  </th>
                  <th className="text-left text-sm sm:text-base   py-3 px-4 font-medium text-[#6B7280] ">
                    Amount
                  </th>
                  <th className="text-left text-sm sm:text-base   py-3 px-4 font-medium text-[#6B7280] ">
                    Method
                  </th>
                  <th className="text-left text-sm sm:text-base   py-3 px-4 font-medium text-[#6B7280] ">
                    Category
                  </th>
                  <th className="text-left text-sm sm:text-base   py-3 px-4 font-medium text-[#6B7280] ">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((txn, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 text-muted-foreground text-sm  font-normal ">
                      {txn.id}
                    </td>
                    <td className="py-3 px-4 text-sm text-[#2C2F33] font-normal">{txn.name}</td>
                    <td
                      className={`py-3 px-4 font-medium ${
                        txn.amount.startsWith("-")
                          ? "text-red-600"
                          : "text-green-600"
                      }`}
                    >
                      {txn.amount}
                    </td>
                    <td className="py-3 px-4 text-muted-foreground text-sm  font-normal">
                      {txn.method}
                    </td>
                    <td className="py-3 px-4 text-muted-foreground text-sm font-normal">
                      {txn.category}
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`text-xs  py-2 w-24 flex items-center justify-center rounded-full ${
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
  )
}

export default Transactions
