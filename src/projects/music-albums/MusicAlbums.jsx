import { useState } from 'react';
import { Album } from './Album';
import { AlbumCollection } from './AlbumCollection';
import { albums } from './data/data.js';

export const MusicAlbums = () => {
  const [album, setAlbum] = useState(albums[0]);

  return (
    <div className='shadow-md shadow-black w-[30rem] h-[38rem] text-gray-300 mx-auto flex flex-col justify-start text-center pt-4 px-2 my-4 bg-cyan-900'>
      <Album album={album} />
      <AlbumCollection albums={albums} setAlbum={setAlbum} />
    </div>
  );
};
