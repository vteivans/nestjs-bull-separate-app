import { Processor, Process, InjectQueue } from '@nestjs/bull';
import { promises as fs} from 'fs';
import { Job, Queue } from 'bull';
import { join } from 'path';

@Processor('audio')
export class WorkerProcessor {

  constructor(@InjectQueue('audio') private readonly audioQueue: Queue) {
    setTimeout(() => {
      this.audioQueue.add('transcode', {from: 'worker'}).then(job => {
        console.log(job);
      });

    }, 1000*60);
  }

  @Process('transcode')
  async transcode(job: Job<unknown>) {
    let progress = 0;
    for (let i = 0; i < 100; i++) {
      await (new Promise((resolve) => {
        setTimeout(() => {
          console.log('Processing async');
          resolve();
        }, 200);
      }));
      progress += 10;
      job.progress(progress);
    }
    await fs.writeFile(
      join(__dirname, '..', 'cache', `transcode-${job.id}.json`),
      JSON.stringify(job.data, null, 2)
    );
    return {};
  }
}
