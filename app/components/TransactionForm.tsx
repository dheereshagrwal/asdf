import { useState } from "react";
import { Transaction } from "../page";

interface TransactionFormProps {
  onAddTransaction: (transaction: Omit<Transaction, "id">) => void;
}

export function TransactionForm({ onAddTransaction }: TransactionFormProps) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState<"income" | "expense">("income");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddTransaction({
      description,
      amount: parseFloat(amount),
      type,
    });
    setDescription("");
    setAmount("");
    setType("income");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-zinc-800 p-6 rounded-lg shadow-md mb-8"
    >
      <h2 className="text-xl font-semibold mb-4">Add Transaction</h2>
      <div className="mb-4">
        <label htmlFor="description" className="block mb-2">
          Description
        </label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="w-full px-3 py-2 bg-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="amount" className="block mb-2">
          Amount
        </label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
          min="0"
          step="0.01"
          className="w-full px-3 py-2 bg-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Type</label>
        <div className="flex space-x-4">
          <label className="flex items-center">
            <input
              type="radio"
              value="income"
              checked={type === "income"}
              onChange={() => setType("income")}
              className="mr-2"
            />
            Income
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              value="expense"
              checked={type === "expense"}
              onChange={() => setType("expense")}
              className="mr-2"
            />
            Expense
          </label>
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-zinc-600 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-zinc-500"
      >
        Add Transaction
      </button>
    </form>
  );
}
