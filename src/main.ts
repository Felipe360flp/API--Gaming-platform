import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('API-GAME')
    .setDescription('Aplicação para gestão de jogos')
    .setVersion('1.0.0')
    .addTag('status')
    .addTag('Auth')
    .addTag('Users')
    .addTag("Profiles")
    .addTag("Games")
    .addTag("Genders")
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3333);
}
bootstrap();
