import { useState } from 'react';
import styles from '../styles/Home.module.css';
import {} from './../workshop/hooks';

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from '@chakra-ui/react';
import dynamic from 'next/dynamic';
// import Destructure from '../workshop/patterns/Destructure';
// import CustomHookComp from '../workshop/CustomHookComp';
// const UseCallbackHook = dynamic(() => import('../workshop/hooks/UseCallbackHook'), {
//   ssr: false,
// });
const CustomHookComp = dynamic(() => import('../workshop/hooks/CustomHookComp'), {
  ssr: false,
});
const Destructure = dynamic(() => import('../workshop/patterns/Destructure'), {
  ssr: false,
});
const hooks = [
  // {
  //   title: 'useState',
  //   component: <UseStateHook />,
  // },
  // {
  //   title: 'useEffect',
  //   component: <UseEffectHook />,
  // },
  // {
  //   title: 'useRef',
  //   component: <UseRefHook />,
  // },
  // {
  //   title: 'useReducer',
  //   component: <UseReducerHook />,
  // },
  // {
  //   title: 'useMemo',
  //   component: <UseMemoHook />,
  // },
  // {
  //   title: 'useCallback',
  //   component: <UseCallbackHook />,
  // },
  // {
  //   title: 'useContext',
  //   component: <UseContextHook />,
  // },
  // {
  //   title: 'Custom Hook',
  //   component: <CustomHookComp />,
  // },
  {
    title: 'Patterns',
    component: <Destructure />,
  },
];

export default function Home() {
  const [items, setItems] = useState(hooks);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href='/'>Everything React</a>
        </h1>
        <Accordion allowMultiple w={'80%'}>
          {items &&
            items.map((hook, index) => (
              <AccordionItem w={'100%'} mt={'.5rem'} key={hook.title + index}>
                <Box w={'100%'}>
                  <AccordionButton>
                    <Box w={'100%'} textAlign='left'>
                      {hook.title}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Box>
                <AccordionPanel pb={4}>{hook.component}</AccordionPanel>
              </AccordionItem>
            ))}
        </Accordion>
        {/* <UseStateHook /> */}
        {/* <UseEffectHook />
        <UseRefHook />
        <UseReducerHook />
        <UseMemoHook />
        <UseCallbackHook />
        <UseContextHook />
        <CustomHookComp /> */}

        {/* Patterns */}

        {/* <Destructure /> */}
        {/* <SlideShow /> */}
      </main>
    </div>
  );
}
