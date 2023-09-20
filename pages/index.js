import styles from '../styles/Home.module.css';
import dynamic from 'next/dynamic';
// import CustomHookComp from '../workshop/CustomHookComp';
const UseCallbackHook = dynamic(() => import('../workshop/hooks/UseCallbackHook'), {
  ssr: false,
});
const CustomHookComp = dynamic(() => import('../workshop/hooks/CustomHookComp'), {
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

        {/* <Destructure /> */}
      </main>
    </div>
  );
}

/**
 * Destructing props
 */
