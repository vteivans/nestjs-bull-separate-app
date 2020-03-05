import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { WorkerProcessor } from './worker.processor';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'audio',
      redis: process.env.REDIS_URL,
    }),
  ],
  providers: [WorkerProcessor],
})
export class WorkerModule {}
