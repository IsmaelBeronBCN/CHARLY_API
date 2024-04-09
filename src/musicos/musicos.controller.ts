import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MusicosService } from './musicos.service';


@Controller('musicos')
export class MusicosController {
  constructor(private readonly musicosService: MusicosService) {}




  @Get(':nombre')
  findOne(@Param('nombre') nombre: string) {
    return this.musicosService.findOne(nombre);
  }


  @Get('album/:album')
  musicosPorAlbum(@Param('album') album: string){
    return this.musicosService.musicosPorAlbum(album)
  }



}
