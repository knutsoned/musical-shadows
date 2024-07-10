import { Component, Setter } from 'solid-js';
import { activateAudioCtx } from 'src/audio';

import { Modal } from './Modal';

type HelpModalProps = {
  show: boolean;
  setShow: Setter<boolean>;
};

/**
 * Renders a toggleable help modal dialogue
 */
export const HelpModal: Component<HelpModalProps> = (props) => (
  <Modal
    show={props.show}
    onClose={() => {
      activateAudioCtx();
      props.setShow(false);
    }}
    buttonText="Ok"
  >
    <div class="grid">
      <div class="col">
        <h2 class="pb-2">Musical Shadows</h2>
        <div class="text-left">
          <div class="py-2">Trigger samples by hitting the pads</div>
        </div>
      </div>
    </div>
  </Modal>
);
