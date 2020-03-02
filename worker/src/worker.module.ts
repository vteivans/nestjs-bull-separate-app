import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { WorkerProcessor } from './worker.processor';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'audio',
      redis: {
        host: 'redis',
        port: 6379,
      },
    }),
  ],
  providers: [WorkerProcessor],
})
export class WorkerModule {}
