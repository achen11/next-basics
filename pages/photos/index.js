
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function PhotosList(props) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Photos list
        </h1>

        <ul>
          <li>
            <Link href="/photos/people">People</Link>
          </li>
          <li>
            <Link href="/photos/places">Places</Link>
          </li>
          <li>
            <Link href="/photos/things">Things</Link>
          </li>
        </ul>
        </main>
    </div>
  );
  }
    
