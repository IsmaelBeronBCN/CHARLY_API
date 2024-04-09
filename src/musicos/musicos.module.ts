import { Module } from '@nestjs/common';
import { MusicosService } from './musicos.service';
import { MusicosController } from './musicos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Musico, MusicoSchema } from 'src/schema/musicos.schema';
import { Disco, DiscoSchema } from 'src/schema/discos.schema';

@Module({
  imports:[
    MongooseModule.forFeature([
      {
       name: Musico.name,
       schema: MusicoSchema
      },
      {
        name: Disco.name,
        schema: DiscoSchema
       },
     ])
  ],
  controllers: [MusicosController],
  providers: [MusicosService],
  exports:[  MongooseModule.forFeature([
    {
     name: Musico.name,
     schema: MusicoSchema
    }
   ])]
})
export class MusicosModule {}
