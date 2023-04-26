import { MdOutlineCopyright } from 'react-icons/md';
import styles from './Footer.module.css';

export const Footer = () => {
  const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      //   month: 'long',
    }).format(date);
  };
  return (
    <footer className={styles.footer}>
      George Cornea <MdOutlineCopyright />
      {formatDate(new Date('2023-04-01'))}
    </footer>
  );
};
