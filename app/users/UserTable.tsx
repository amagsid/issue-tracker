import Link from 'next/link';
import React from 'react';
import { sort } from 'fast-sort';

interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  sortBy: string;
  sortOrder: string;
}

const UserTable = async ({ sortBy, sortOrder }: Props) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    next: { revalidate: 10 },
  });

  const users: User[] = await res.json();

  const sortedUsersAsc = sort(users).asc(
    sortBy == 'email' ? (user) => user.email : (user) => user.name
  );
  const sortedUsersDesc = sort(users).desc(
    sortBy == 'email' ? (user) => user.email : (user) => user.name
  );

  return (
    <>
      {/* todo */}
      {/* add descending order as well */}
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>
              <Link href={'/users?sortBy=name'}> Name </Link>
            </th>
            <th>
              <Link href={'/users?sortBy=email'}> Email </Link>
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
