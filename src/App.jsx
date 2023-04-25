import { Outlet, ReactLocation, Router } from '@tanstack/react-location';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';

const location = new ReactLocation();
const routes = [
  {
    path: '/',
    element: <Home />,
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
      <Outlet />
    </Router>
  );
}

export default App;
