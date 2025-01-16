"use client";

import type { Transaction } from "../page";

interface TransactionListProps {
  transactions: Transaction[];
}

export function TransactionList({ transactions }: TransactionListProps) {
  return (
    <div className="bg-zinc-800 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Transaction History</h2>
      {transactions.length === 0 ? (
        <p className="text-zinc-400">No transactions yet.</p>
      ) : (
        <ul className="space-y-4">
          {transactions.map((transaction) => (
            <li
              key={transaction.id}
              className={`flex justify-between items-center p-3 rounded-md ${
                transaction.type === "income" ? "bg-green-800" : "bg-red-800"
              }`}
            >
              <span>{transaction.description}</span>
              <span className="font-semibold">
                {transaction.type === "income" ? "+" : "-"}$
                {transaction.amount.toFixed(2)}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
