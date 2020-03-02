import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

@Injectable()
export class AppService {

  constructor(
    @InjectQueue('audio') private readonly audioQueue: Queue) {
  }
  getHello(): string {
    return 'Hello Luna!';
  }

  async addAJob() {
    const job = await this.audioQueue.add('transcode', {
      foo: 'bull job'
    });

    return job;
  }
}
