import React from 'react';

// interface Props {
//   params: { id: number; photoId: number; photoName: string };
// }

interface Props {
  params: { id: number; photoId: number };
}

const PhotoPage = ({ params: { id, photoId } }: Props) => {
  return (
    <div>
      {' '}
      photopage for user {id} and this is photo {photoId}
    </div>
  );
};

export default PhotoPage;
