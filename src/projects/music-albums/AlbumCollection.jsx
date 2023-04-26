export const AlbumCollection = ({ albums, setAlbum }) => {
  return (
    <>
      <div className='text-right p-2 font-medium'>Select an Album</div>
      <ul className='p-1'>
        {albums.map(({ id, name, coverImg }) => (
          <li key={id} className='flex items-center gap-2 p-2'>
            <img
              className='rounded-full w-12 cursor-pointer'
              src={coverImg}
              alt={name}
              id={id}
              onClick={(e) => setAlbum(albums[e.target.id])}
            />{' '}
            <span
              className='cursor-pointer'
              id={id}
              onClick={(e) => setAlbum(albums[e.target.id])}
            >
              {name}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};
