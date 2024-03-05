import { NextRequest, NextResponse } from 'next/server';
import schema from '../schema';

interface Props {
  params: {
    id: number;
  };
}

export async function PUT(request: NextRequest, { params: { id } }: Props) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  if (id > 10)
    return NextResponse.json(
      { error: 'product doesnt exist' },
      { status: 404 }
    );

  return NextResponse.json(
    { id: id, name: body.name, price: body.price },
    { status: 200 }
  );
}

export function DELETE(request: NextRequest, { params: { id } }: Props) {
  //check if user doesn't exist return 404
  if (id > 10)
    return NextResponse.json({ error: 'product not found' }, { status: 404 });

  return NextResponse.json({});

  //if user exists delete it and return an alert 200
}
