import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger as PinoLogger } from 'nestjs-pino';

import { DevcrossModule } from './devcross.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    DevcrossModule,
    new FastifyAdapter({
      logger: true,
      trustProxy: true,
    }),
  );

  const configService = app.get(ConfigService);

  app.useLogger(app.get(PinoLogger));
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('')
    .setDescription('The Devscross Backend API description')
    .setVersion('1.0')
    .addTag('Devcross Backend APIs')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api/docs', app, document);

  const HTTP_PORT = configService.get<string>('PORT');

  await app.listen(HTTP_PORT, '0.0.0.0');

  Logger.log(`Server started at http://localhost:${HTTP_PORT}/api`);
  Logger.log(`Swagger UI available at http://localhost:${HTTP_PORT}/api/docs`);
}
bootstrap();
