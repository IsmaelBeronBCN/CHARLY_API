import { Module } from '@nestjs/common';
import { DiscosService } from './discos.service';
import { DiscosController } from './discos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Disco, DiscoSchema } from 'src/schema/discos.schema';
import { Musico, MusicoSchema } from 'src/schema/musicos.schema';

@Module({
  imports:[
    MongooseModule.forFeature([
     {
      name: Disco.name,
      schema: DiscoSchema
     },
     {
      name: Musico.name,
      schema: MusicoSchema
     }

    ])
  ],
  controllers: [DiscosController],
  providers: [DiscosService],
  exports:[MongooseModule.forFeature([
    {
      name: Disco.name,
      schema: DiscoSchema
     }
  ])]
})
export class DiscosModule {}
