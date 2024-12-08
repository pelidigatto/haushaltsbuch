'use client';
import { useState } from 'react';
import { Transaction } from '@prisma/client';

const AddTransaction = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const fetchTransactions = async () => {
    const res = await fetch('/api/transactions');
    const data: Transaction[] = await res.json();
    setTransactions(data);
  };

  return (
    <div>
      <button onClick={fetchTransactions}>Lade Transaktionen</button>
      <ul>
        {transactions.map((t) => (
          <li key={t.id}>
            {t.category}: {t.amount}€
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddTransaction;
