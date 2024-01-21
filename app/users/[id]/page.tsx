import React from 'react';

interface Props {
  params: { id: number };
}

// props passed bhere are destrcutured, it's originally = (props : Props) => {}
const userDetailPage = ({ params: { id } }: Props) => {
  return <div> Detail Page of user {id}</div>;
};

export default userDetailPage;
