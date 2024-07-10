import assert from 'assert';
import { NUM_PADS } from 'src/defaults/constants';
import { DirtSample } from 'src/defaults/DefaultSample';

export class Defaults {
  public static samples = [
    new DirtSample('24_TechNoir_ARP2600_C0.wav', 'TechNoir'),
    new DirtSample('50_Marimba_DX100_D2.wav', 'Marimba'),
    new DirtSample('52 Funk Bass AELITA E2_0001.wav', 'Aelita'),
    new DirtSample('M1 Organ Stab Vinyl Synths Fmaj9 C2.wav', 'Vinyl'),
    new DirtSample('55_BillyZaneBass_ARP2600_G2.wav', 'Zane'),
    new DirtSample('21_Sehnsucht_ARP2600_A-1.wav', 'Sehnsucht'),
    new DirtSample('95 Acoustic Guitar Chorus Mirage B5.wav', 'Guitar'),
    new DirtSample('Orbit Keys S950 C4.wav', 'Orbit'),
    new DirtSample('Stutter Bass Mirage C2.wav', 'Stutter'),
  ] as const;
}

assert(Defaults.samples.length > NUM_PADS, 'Not enough default samples');
