import { useKeyDownEvent } from '@solid-primitives/keyboard';
import { Component, createEffect, createSignal } from 'solid-js';
import { ButtonPad } from 'src/components';
import { SamplePlayer } from 'src/models/SamplePlayer';

import { useSelectedSampler } from '../../hooks/useSelectedSampler';
import { ControlPanel } from '../ControlPanel/ControlPanel';
import style from './Sampler.module.css';

type SamplerProps = {
  appInitialized: Promise<void>;
  samplers: SamplePlayer[];
};

/**
 * Renders a Sampler containing multiple SamplerPlayers
 */
export const Sampler: Component<SamplerProps> = (props) => {
  // Index of the selected sampler
  const { selected, setSelectionIndex } = useSelectedSampler();
  const [playSelected, setPlaySelected] = createSignal(false, {
    equals: false,
  });

  const event = useKeyDownEvent();
  createEffect(() => {
    const e = event();

    if (e) {
      const num = parseInt(e.key);
      if (num > 0) {
        // update selection
        setSelectionIndex(num - 1);

        // trigger selected
        setPlaySelected(true);
      }
      e.preventDefault();
    }
  });

  return (
    <div class={`${style.sampler}`}>
      <ControlPanel />
      <div class={style.buttonGrid}>
        {props.samplers.map((x, i) => (
          <ButtonPad
            // Hide pads on smaller screens
            selected={x === selected()}
            classList={{ [style['hide-md']]: i > 8 }}
            model={x}
            onClick={() => setSelectionIndex(i)}
            playSelected={playSelected}
          />
        ))}
      </div>
    </div>
  );
};
