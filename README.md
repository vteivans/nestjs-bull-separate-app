# NestJS app with Bull queue processor in separate app

- NestJS app with a controller creates tasks
- Bull processor in separate Micro-service NestJS app processes the tasks
- For some reason The processor doesn't work if using NestJS Micro-service in Redis mode:
```ts
const app = await NestFactory.createMicroservice(ApplicationModule, {
  transport: Transport.REDIS,
  options: {
    url: process.env.REDIS_UR,
  },
});
```
  > With this configuration the tasks are added to redis queue but never processed
