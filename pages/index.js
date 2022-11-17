import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import UseEffectHook from '../workshop/UseEffectHook';
import UseReducerHook from '../workshop/UseReducerHook';
import UseRefHook from '../workshop/UseRefHook';
import UseStateHook from '../workshop/UseStateHook';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href='/'>Everything React</a>
        </h1>
        {/* <UseStateHook /> */}
        {/* <UseEffectHook /> */}
        {/* <UseRefHook /> */}
        <UseReducerHook />
      </main>
    </div>
  );
}
