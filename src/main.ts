//npm install --save @nestjs/swagger swagger-ui-express
//ถ้าใช้ fasity npm install --save @nestjs/swagger fastify-swagger
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  //ติดตั้ง swagger
  const docs = new DocumentBuilder()
    .setTitle('My-project')
    .setDescription('description')
    .setVersion('1.0')
    .addTag('')
    .addBearerAuth({ in: 'header', type: 'http' })
    .build();
  const document = SwaggerModule.createDocument(app, docs);
  SwaggerModule.setup('api/docs', app, document, {
    swaggerOptions: { tagsSorter: 'alpha', operationsSorter: 'alpha' },
  });
  await app.listen(process.env.SERVICE_PORT || 3001);
  //console.log(`service start on ${await app.getUrl()}`); //ต้องอยู่ล่างสุด
}
bootstrap();
