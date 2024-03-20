// GET  - getting data
// POST  - getting data
// PUT  - getting data

import { NextRequest, NextResponse } from 'next/server';
import { schema } from './schema';
import { prisma } from '@/prisma/client';

export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
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
