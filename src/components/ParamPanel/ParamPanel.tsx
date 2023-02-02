import { Component, createSignal } from 'solid-js';

import { useDoubleTap } from 'src/hooks/useDoubleTap';
import { useObservable } from 'src/hooks/useObservable';
import { SamplerModel } from 'src/models';

import './ParamPanel.css';

type ParamPanelProps = {
  model: SamplerModel;
};

export const ParamPanel: Component<ParamPanelProps> = (props) => {
  let playbackRateControl: HTMLInputElement;
  const [label, setLabel] = useObservable(props.model.label);
  const [playbackRate, setPlaybackRate] = useObservable(
    props.model.playbackRate,
  );
  const [src, setSrc] = useObservable(props.model.src);
  const [editingLabel, setEditingLabel] = createSignal(false);

  useDoubleTap(
    () => playbackRateControl!,
    () => {
      setPlaybackRate(1.0);
    },
  );
  return (
    <div class="col grid grid-nogutter">
      <div class="col-3">
        {editingLabel() ? (
          <input
            type="text"
            value={label()}
            maxlength="12"
            class="label"
            onInput={(e) => setLabel(e.currentTarget.value)}
            onMouseLeave={() => setEditingLabel(false)}
          />
        ) : (
          <div class="label" onClick={() => setEditingLabel(true)}>
            {label()}
          </div>
        )}
        <label for="playbackRateControl">Playback speed</label>
        <input
          ref={playbackRateControl!}
          id="playbackRateControl"
          type="range"
          min={0.01}
          step={0.01}
          max={2.0}
          style={{ width: '85%' }}
          value={playbackRate()}
          onInput={(e) => setPlaybackRate(e.currentTarget.valueAsNumber)}
        />
      </div>
      <div class="col p-4">
        <div
          class="sampleDropZone"
          onDragOver={(e) => {
            e.preventDefault();
            if (e.dataTransfer) {
              e.dataTransfer.dropEffect = 'link';
            }
          }}
          onDrop={(e) => {
            e.preventDefault();
            if (e.dataTransfer) {
              // Get the id of the target and add the moved element to the target's DOM
              const data = e.dataTransfer.getData('text/plain');
              setSrc(data);
            }
          }}
        >
          <div style={{ position: 'absolute', left: '0.5em' }}>{src()}</div>
        </div>
      </div>
    </div>
  );
};