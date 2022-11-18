import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import UseCallbackHook from '../workshop/UseCallbackHook';
import UseEffectHook from '../workshop/hooks/UseEffectHook';
import UseMemoHook from '../workshop/hooks/UseMemoHook';
import UseReducerHook from '../workshop/hooks/UseReducerHook';
import UseRefHook from '../workshop/hooks/UseRefHook';
import UseStateHook from '../workshop/hooks/UseStateHook';
import dynamic from 'next/dynamic';
import UseContextHook from '../workshop/UseContextHook';
import CustomHook from '../workshop/hooks/useCustomHook';
import Destructure from '../workshop/patterns/Destructure';
// import CustomHookComp from '../workshop/CustomHookComp';

const CustomHookComp = dynamic(() => import('../workshop/CustomHookComp'), {
  ssr: false,
});

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
        {/* <UseReducerHook /> */}
        {/* <UseMemoHook /> */}
        {/* <UseCallbackHook /> */}
        {/* <UseContextHook /> */}
        {/* <CustomHookComp /> */}

        {/* Patterns */}

        <Destructure />
      </main>
    </div>
  );
}

/**
 * Destructing props
 */
