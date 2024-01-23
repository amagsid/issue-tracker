import Link from 'next/link';
import React from 'react';
import { sort } from 'fast-sort';

interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  sortOrder: string;
}

const UserTable = async ({ sortOrder }: Props) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    next: { revalidate: 10 },
  });

  const users: User[] = await res.json();

  const sortedUsersAsc = sort(users).asc(
    sortOrder == 'email' ? (user) => user.name : (user) => user.email
  );

  return (
    <>
      {' '}
      <h1>sort order is {sortOrder}</h1>
      <Link href='/users?sortBy=ascending'>
        <h1> ascending</h1>
      </Link>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>
              <Link href={'/users?sortOrder=name'}> Name </Link>
            </th>
            <th>
              <Link href={'/users?sortOrder=email'}> Email </Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedUsersAsc.map(({ name, email, id }) => (
            <tr key={id}>
              <td> {name} </td>
              <td> {email} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UserTable;
