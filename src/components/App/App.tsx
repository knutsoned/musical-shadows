import 'primeflex/primeflex.css';

import { createSignal, JSX } from 'solid-js';
import { HelpModal, Sampler } from 'src/components';
import { GlobalState } from 'src/store/AppState';
import { appInit } from 'src/utils';

import style from './App.module.css';

export function App(): JSX.Element {
  const appInitialized = appInit(); // Asyncronously load default samples
  const [showHelp, setShowHelp] = createSignal(true); // Display help modal
  return (
    <div class={style.root}>
      <HelpModal show={showHelp()} setShow={setShowHelp} />
      <header
        class={style.navbar + ' px-4 justify-content-center align-items-center'}
      >
        <h1 class={style['header-title']}>Musical Shadows</h1>
      </header>
      <main
        role="main"
        class="flex flex-1 justify-content-center align-items-center"
      >
        <Sampler
          appInitialized={appInitialized}
          samplers={GlobalState.samplers}
        />
      </main>
      <footer class={style.footer} />
    </div>
  );
}
