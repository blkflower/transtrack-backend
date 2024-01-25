import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
        .setTitle('Pitaka API')
        .setDescription('This is the API documentation for Pitaka backend API')
        .setVersion('1.0')
        .addTag('pitaka')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    await app.listen(process.env.PORT || 3000);
    Logger.log(`Application is running on port: ${process.env.PORT}`);
}
bootstrap();
