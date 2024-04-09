import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { DiscosModule } from 'src/discos/discos.module';
import { DiscosService } from 'src/discos/discos.service';
import { MusicosModule } from 'src/musicos/musicos.module';
import { MusicosService } from 'src/musicos/musicos.service';
import { LetrasModule } from 'src/letras/letras.module';
import { LetrasService } from 'src/letras/letras.service';


@Module({
  imports:[DiscosModule, MusicosModule, LetrasModule],
  controllers: [SeedController],
  providers: [SeedService, DiscosService, MusicosService, LetrasService],
})
export class SeedModule {}
