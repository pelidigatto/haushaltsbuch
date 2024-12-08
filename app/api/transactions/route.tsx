import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma'; // Prisma-Client

export async function GET() {
  // Daten aus der Datenbank abrufen
  const transactions = await prisma.transaction.findMany();
  return NextResponse.json(transactions);
}

export async function POST(req: Request) {
  // JSON-Body parsen
  const { amount, category, type,description  } = await req.json();


  const amountNumber = parseFloat(amount);

  try {
    const transaction = await prisma.transaction.create({
      data: { amount: amountNumber, category, type,description  },
    });
    return NextResponse.json(transaction, { status: 201 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: 'Fehler beim Hinzufügen', details: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: 'Unbekannter Fehler' }, { status: 500 });
  }
}
