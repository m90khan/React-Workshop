import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import UseStateHook from '../workshop/UseStateHook';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to
          <br />
          <a href='/'>Everything React</a>
        </h1>
        <UseStateHook />
      </main>
    </div>
  );
}
