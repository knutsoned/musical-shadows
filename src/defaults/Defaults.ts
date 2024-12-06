import assert from 'assert';
import { NUM_PADS } from 'src/defaults/constants';
import { DirtSample } from 'src/defaults/DefaultSample';

export class Defaults {
  public static samples = [
    new DirtSample('24_TechNoir_ARP2600_C0.wav', 'C'),
    new DirtSample('24_TechNoir_ARP2600_D0.wav', 'D'),
    new DirtSample('24_TechNoir_ARP2600_E0.wav', 'E'),
    new DirtSample('24_TechNoir_ARP2600_F0.wav', 'F'),
    new DirtSample('24_TechNoir_ARP2600_G0.wav', 'G'),
    new DirtSample('24_TechNoir_ARP2600_A0.wav', 'A'),
    new DirtSample('24_TechNoir_ARP2600_B0.wav', 'B'),
    new DirtSample('19_Sehnsucht_ARP2600_G-1', 'dummy'),
  ] as const;
}

assert(Defaults.samples.length > NUM_PADS, 'Not enough default samples');
