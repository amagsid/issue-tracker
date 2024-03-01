import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const AdminLayout = ({ children }: Props) => {
  return (
    <div className='flex row'>
      {' '}
      <aside className='bg-slate-200 p-5 mr-5'> admin sidebar </aside>
      <div className='text-slate-400'> {children} </div>
    </div>
  );
};

export default AdminLayout;
