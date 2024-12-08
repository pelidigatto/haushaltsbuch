'use client';

import { useState } from 'react';

export default function AddTransaction() {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [type, setType] = useState('income');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch('/api/transactions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount, category, type, description }),
    });
    if (res.ok) {
      console.log('Transaktion hinzugefügt');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold">Neue Transaktion hinzufügen</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Betrag"
        />
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Kategorie"
        />
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="income">Einnahme</option>
          <option value="expense">Ausgabe</option>
        </select>
        <textarea placeholder="Beschreibung" value={description} onChange={(e) => setDescription(e.target.value)} />
        <button type="submit">Hinzufügen</button>
      </form>
    </div>
  );
}
