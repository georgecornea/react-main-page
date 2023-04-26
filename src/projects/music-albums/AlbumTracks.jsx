import { GoPlay } from 'react-icons/go';

export const AlbumTracks = ({ tracks }) => {
  return tracks ? (
    <ul type='1' className='pt-2'>
      {tracks.map((track, index) => (
        <li className='py-1 flex items-center gap-1' key={track}>
          {++index}. {track}
          <span className='bg-white rounded-full'>
            <GoPlay size='20' color='blue' b />
          </span>
        </li>
      ))}
    </ul>
  ) : null;
};
