import { Module } from '@nestjs/common';
import { DiscosModule } from './discos/discos.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { SeedModule } from './seed/seed.module';
import { MusicosModule } from './musicos/musicos.module';
import { CancionModule } from './cancion/cancion.module';
import { LetrasModule } from './letras/letras.module';
require('dotenv').config(); 

@Module({
  imports: [ConfigModule.forRoot({isGlobal: true}),
 MongooseModule.forRootAsync({
    imports: [ConfigModule], 
    useFactory: async (configService: ConfigService) => ({
      
      uri: configService.get('STRING_MONGO'),
    }),
    inject: [ConfigService], 
  }),
  DiscosModule,
  SeedModule,
  MusicosModule,
  LetrasModule,  
  ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'public')
  }), CancionModule, LetrasModule
],
  controllers: [],
  providers: []
})
export class AppModule {}




