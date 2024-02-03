import Link from 'next/link';
import styles from '../styles/Header.module.css'; 

export default function Header() {
    return (
        <header className={styles.header}>
          <nav>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <Link href="/photography">
                  <a>Photography</a>
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/contacts">
                  <a>Contact</a>
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/about">
                  <a>About</a>
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      );
}