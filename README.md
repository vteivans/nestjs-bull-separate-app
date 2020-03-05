# NestJS app with Bull queue processor in separate app

- NestJS app with a controller creates tasks
- Bull processor in separate Micro-service NestJS app processes the tasks
- Make sure to have the same redis configuration in the MICROSERVICE transporter and in the BULL
