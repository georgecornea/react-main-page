import { Link } from '@tanstack/react-location';
import styles from './Project.module.css';

export const Project = ({ name, description, to }) => {
  return (
    <Link className={styles.project} to={to}>
      <h1>{name}</h1>
      <p>{description}</p>
    </Link>
  );
};
