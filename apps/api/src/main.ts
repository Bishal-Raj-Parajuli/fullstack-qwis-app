import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {generateOpenApi} from '@ts-rest/open-api'
import { API } from '@qwis/ts-rest';
import { SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const openApiDoc = generateOpenApi(API,{
    info: {
      title: 'Qwis API Documentation',
      version: '0.1.0'
    }
  })

  SwaggerModule.setup('', app, openApiDoc);

  app.enableCors();
  await app.listen(3001);
}
bootstrap();
