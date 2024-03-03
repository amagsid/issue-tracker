// GET  - getting data
// POST  - getting data
// PUT  - getting data

import { NextRequest, NextResponse } from 'next/server';
import { schema } from './schema';

export function GET(request: NextRequest) {
  return NextResponse.json([
    {
      id: 1,
      name: 'Ahmad',
    },
    {
      id: 2,
      name: 'John',
    },
  ]);
}

export async function POST(request: NextRequest) {
  const reqBody = await request.json();
  //validate
  const validation = schema.safeParse(reqBody);
  //if invalid, return 400
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  //else, return
  return NextResponse.json({ id: 1, name: reqBody.name }, { status: 201 });
}
