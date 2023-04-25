import { Link } from '@tanstack/react-location';
import gcorneaLogo from '../assets/gcornea.png';
import styles from './Navbar.module.css';

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link to='/'>
        <img src={gcorneaLogo} alt='gcornea logo' />
      </Link>
      <div>React Projects</div>
      <nav>
        <Link to='/' className={styles.link}>
          Home
        </Link>
        <Link to='/about' className={styles.link}>
          About
        </Link>
      </nav>
    </div>
  );
};
