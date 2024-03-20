import React from 'react';
import tailwind from 'tailwindcss';

const onlineUsers = () => {
  return (
    <div className='flex flex-column'>
      <div>
        <h1 className='flex-1 felx-row gap-2 text-sky-300'> online users</h1>
        <h2 className='flex-1 felx-row hover:first-letter:text-orange-300'>
          {' '}
          Sttaus{' '}
        </h2>
        <h3> hide</h3>
      </div>
    </div>
  );
};

export default onlineUsers;
