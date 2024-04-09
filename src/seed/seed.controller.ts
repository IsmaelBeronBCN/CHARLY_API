import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SeedService } from './seed.service';


@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  @Get()
  seed() {
    return this.seedService.seed();
  }

  @Get('musicos')
  seedMusicos(){
    return this.seedService.seedMusicos()
  }

  @Get('letras')
  seedLetras(){
    return this.seedService.seedLetras()
  }


}
