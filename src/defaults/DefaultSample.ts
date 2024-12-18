import { getGitHubFile } from 'src/samples';
import { SampleStore } from 'src/samples';
import { Base64Binary } from 'src/utils/Base64Binary';

/**
 * Base class for cachable samples pulled from web sources on app init
 */
export abstract class DefaultSample {
  /**
   * User-facing label to display if sample is loaded
   */
  abstract readonly label: string;

  /**
   * Resource to fetch the sample from
   */
  abstract readonly location: string;

  public get filename(): string {
    const fname = this.location.split('/').at(-1);
    if (!fname) {
      throw new Error(`Unexpected sample location '${this.location}'`);
    }
    return fname;
  }

  public abstract ensureCached(): void;
}

export class DirtSample extends DefaultSample {
  private async downloadDirtSample(): Promise<Blob> {
    const owner = 'knutsoned';
    const repo = 'musical-shadows';
    const b64 = await getGitHubFile(owner, repo, this.location);
    const decoded = Base64Binary.decodeArrayBuffer(b64);
    return new Blob([decoded], { type: 'audio/wav' });
  }

  readonly label: string;

  readonly location: string;

  constructor(location: string, label: string) {
    super();
    this.location = location;
    this.label = label;
  }

  async ensureCached(): Promise<void> {
    let data: Blob | undefined;
    data = await SampleStore.instance.getSampleBlob(this.filename);
    if (!data) {
      data = await this.downloadDirtSample();
      SampleStore.instance.addSample({
        filename: this.filename,
        data,
      });
    }
  }
}

export class WebSample extends DefaultSample {
  readonly label: string;

  readonly location: string;

  constructor(location: string, label: string) {
    super();
    this.location = location;
    this.label = label;
  }

  public async ensureCached(): Promise<void> {
    let data: Blob | undefined;
    data = await SampleStore.instance.getSampleBlob(this.filename);
    if (!data) {
      const res = await fetch(this.location);
      if (!res.ok) {
        throw new Error(
          `Error fetching file: '${this.filename}'\n${await res.text()}`,
        );
      }
      data = await res.blob();
      SampleStore.instance.addSample({
        filename: this.filename,
        data,
      });
    }
  }
}
