import React from 'react';
import UserTable from './UserTable';
import Link from 'next/link';

interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  searchParams: { sortBy: string; sortOrder: string };
}

const UsersPage = async ({ searchParams: { sortBy, sortOrder } }: Props) => {
  return (
    <>
      <h1> users</h1>
      <Link href='/users/new' className='btn btn-primary'>
        {' '}
        New User
      </Link>
      <UserTable sortBy={sortBy} sortOrder={sortOrder} />
    </>
  );
};

export default UsersPage;
