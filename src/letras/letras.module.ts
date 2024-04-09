import { Module } from '@nestjs/common';
import { LetrasService } from './letras.service';
import { LetrasController } from './letras.controller';
import { Letra, LetraSchema } from 'src/schema/letra.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[
    MongooseModule.forFeature([
      {
       name: Letra.name,
       schema: LetraSchema
      }
     ])
  ],
  controllers: [LetrasController],
  providers: [LetrasService],
  exports: [
    MongooseModule.forFeature([
      {
       name: Letra.name,
       schema: LetraSchema
      }
     ])
  ]
})
export class LetrasModule {}
