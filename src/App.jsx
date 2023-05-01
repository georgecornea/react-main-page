import { Outlet, ReactLocation, Router } from '@tanstack/react-location';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';
import { Navbar } from './layout/Navbar';
import { Main } from './layout/Main';
import { Footer } from './layout/Footer';
import { MusicAlbums } from './projects/music-albums/MusicAlbums';
import { RandomPhotosBoard } from './projects/random-photos-board/components/RandomPhotosBoard';

const location = new ReactLocation();
const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/music-albums',
    element: <MusicAlbums />,
  },
  {
    path: '/random-photos-board',
    element: <RandomPhotosBoard />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

function App() {
  return (
    <Router routes={routes} location={location}>
      <Navbar />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </Router>
  );
}

export default App;
