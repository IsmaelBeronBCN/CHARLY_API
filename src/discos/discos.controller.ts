import { Controller, Get, Post, Body, Patch, Param, Delete, UseFilters, ParseIntPipe, BadRequestException } from '@nestjs/common';
import { DiscosService } from './discos.service';
import { DiscoDto } from './dto/create-disco.dto';
import { HttpExceptionFilter } from 'src/filters/exception.filter';
import { Cancion } from 'src/cancion/entities/cancion.entity';



@Controller('discos')
@UseFilters(new HttpExceptionFilter())
export class DiscosController {
  constructor(private readonly discosService: DiscosService) {}

  @Get('/fecha/:fecha')
  buscarPorFecha(@Param('fecha', ParseIntPipe) fecha: number) {



    return this.discosService.buscarPorFecha(fecha);

  }

  @Get('/album/:nombre')
  buscarDisco(@Param('nombre') nombre: string){
    return this.discosService.buscarDisco(nombre)
  }

  @Get('/cancion/:cancion')
  buscarCancion(@Param('cancion') cancion: string){
    return this.discosService.buscarCancion(cancion)
  }

  @Get('discografia')
  discografiaCompleta(){
    return this.discosService.discografiaCompleta()
  }

}
