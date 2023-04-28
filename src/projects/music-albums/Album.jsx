import { AlbumCoverImage } from './AlbumCoverImage';
import { AlbumTracks } from './AlbumTracks';

export const Album = ({ album }) => {
  return (
    <div className='flex gap-4 pt-1 px-3'>
      <AlbumCoverImage src={album.coverImg} name={album.name} />
      <AlbumTracks tracks={album.tracks} />
    </div>
  );
};
