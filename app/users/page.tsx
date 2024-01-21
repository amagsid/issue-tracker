import React from 'react';
import UserTable from './UserTable';

interface User {
  id: number;
  name: string;
  email: string;
}

const UsersPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    next: { revalidate: 10 },
  });

  const users: User[] = await res.json();

  return (
    <>
      <h1> users</h1>
      <UserTable />
    </>
  );
};

export default UsersPage;
