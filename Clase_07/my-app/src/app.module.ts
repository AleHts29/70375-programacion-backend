import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import FirstMiddleware from './users/middleware/primer-nestjs-middleware';


// @Module({
//   imports: [UsersModule, MongooseModule.forRoot('mongodb://localhost:27017/clase43-nestjs?retryWrites=true&w=majority')],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule { }




//Usando variables de entorno
@Module({
  imports: [UsersModule, ConfigModule.forRoot(), MongooseModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: async (config: ConfigService) => ({
      uri: config.get<string>('MONGO_URL')
    })
  })],
  controllers: [AppController],
  providers: [AppService],
})



// Middleware a nivel de aplicacion
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(FirstMiddleware).forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}

