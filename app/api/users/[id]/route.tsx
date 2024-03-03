import { NextRequest, NextResponse } from 'next/server';
import { schema } from '../schema';

interface Props {
  params: { id: number };
}

export function GET(request: NextRequest, { params: { id } }: Props) {
  //fetch data from DB
  //if data is not found =  404 error
  //Else : actual data

  if (id > 10)
    return NextResponse.json({ error: 'User Not Found' }, { status: 404 });

  return NextResponse.json({ id: 1, name: 'Ahmad' });
}

export async function PUT(request: NextRequest, { params: { id } }: Props) {
  //validate the request body
  const body = await request.json();
  //if invalid we return 400

  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  //if it doesn't exist we return 404
  if (id > 10)
    return NextResponse.json({ error: 'user does not exist' }, { status: 404 });
  //fetch the user with the given id
  //update the user
  //return updated user
  return NextResponse.json({ id: 1, name: body.name }, { status: 200 });
}

export function DELETE(request: NextRequest, { params: { id } }: Props) {
  //check if user doesn't exist return 404
  if (id > 10)
    return NextResponse.json({ error: 'user not found' }, { status: 404 });

  return NextResponse.json({});

  //if user exists delete it and return an alert 200
}
