import React from 'react';
import UserTable from './UserTable';

interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  searchParams: { sortOrder: string };
}

const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    next: { revalidate: 10 },
  });

  return (
    <>
      <UserTable sortOrder={sortOrder} />
    </>
  );
};

export default UsersPage;
