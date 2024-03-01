'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

const NewUserPage = () => {
  const router = useRouter();
  return (
    <div>
      <button className='btn btn-primary' onClick={() => router.push('/users')}>
        {' '}
        Creates user
      </button>
    </div>
  );
};

export default NewUserPage;
