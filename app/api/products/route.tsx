import { NextRequest, NextResponse } from 'next/server';
import schema from './schema';

const products = [
  {
    id: 1,
    name: 'milk',
    price: 2.5,
  },
  { id: 2, name: 'bread', price: 3.5 },
];

export function GET(request: NextRequest) {
  return NextResponse.json(products, { status: 200 });
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validation = schema.safeParse(body);
  if (!validation.success) return NextResponse.json(validation.error.errors);
  return NextResponse.json(body);
}
