import assert from 'assert';
import { NUM_PADS } from 'src/defaults/constants';
import { DirtSample } from 'src/defaults/DefaultSample';

export class Defaults {
  public static samples = [
    new DirtSample('43_TechNoir_ARP2600_G1.wav', 'Noir'),
    new DirtSample('Marimba DX100 C2.wav', 'Marimba'),
    new DirtSample('55_BillyZaneBass_ARP2600_G2.wav', 'Zane'),
    new DirtSample('Funk Bass AELITA C3.wav', 'Aelita'),
    new DirtSample('Orbit Keys S950 C4.wav', 'Orbit'),
    new DirtSample('19_Sehnsucht_ARP2600_G-1.wav', 'Sehnsucht'),
    new DirtSample('Acoustic Guitar Mirage C6.wav', 'Guitar'),
    new DirtSample('Stutter Bass Mirage C2.wav', 'Stutter'),
  ] as const;
}

assert(Defaults.samples.length > NUM_PADS, 'Not enough default samples');
