import { Link } from '@tanstack/react-location';
import gcorneaLogo from '../assets/gcornea.png';
import styles from './Navbar.module.css';
import { useStore } from '../store/store';

export const Navbar = () => {
  const project = useStore((state) => state.projectName);
  const setProject = useStore((state) => state.setProjectName);

  return (
    <div className={styles.navbar}>
      <Link to='/' onClick={() => setProject('React Projects')}>
        <img src={gcorneaLogo} alt='gcornea logo' />
      </Link>
      <div>{project}</div>
      <nav>
        <Link
          to='/'
          className={styles.link}
          onClick={() => setProject('React Projects')}
        >
          Home
        </Link>
        <Link
          to='/about'
          className={styles.link}
          onClick={() => setProject('React Projects')}
        >
          About
        </Link>
      </nav>
    </div>
  );
};
