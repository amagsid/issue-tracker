'use client';
import React from 'react';

interface Props {
  error: Error;
  reset: () => void;
}

const errorPage = ({ error, reset }: Props) => {
  console.log(error);
  return (
    <>
      <div> an unexpected error occured</div>
      <button className='btn' onClick={() => reset()}>
        {' '}
        Try Again
      </button>
    </>
  );
};

export default errorPage;
