import { Transaction } from "../page";

interface AccountSummaryProps {
  transactions: Transaction[];
}

export function AccountSummary({ transactions }: AccountSummaryProps) {
  const balance = transactions.reduce((acc, transaction) => {
    return transaction.type === "income"
      ? acc + transaction.amount
      : acc - transaction.amount;
  }, 0);

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  return (
    <div className="bg-zinc-800 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Account Summary</h2>
      <div className="grid grid-cols-3 gap-4 text-center">
        <div>
          <p className="text-sm text-zinc-400">Balance</p>
          <p
            className={`text-xl font-bold ${
              balance >= 0 ? "text-green-500" : "text-red-500"
            }`}
          >
            ${balance.toFixed(2)}
          </p>
        </div>
        <div>
          <p className="text-sm text-zinc-400">Income</p>
          <p className="text-xl font-bold text-green-500">
            ${income.toFixed(2)}
          </p>
        </div>
        <div>
          <p className="text-sm text-zinc-400">Expenses</p>
          <p className="text-xl font-bold text-red-500">
            ${expenses.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}
