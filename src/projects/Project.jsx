import { Link } from '@tanstack/react-location';
import styles from './Project.module.css';

export const Project = ({ name, description, to, onClick }) => {
  return (
    <Link className={styles.project} to={to} onClick={onClick}>
      <h1>{name}</h1>
      <p>{description}</p>
    </Link>
  );
};
