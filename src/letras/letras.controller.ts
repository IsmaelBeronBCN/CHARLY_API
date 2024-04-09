import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { LetrasService } from './letras.service';


@Controller('letras')
export class LetrasController {
  constructor(private readonly letrasService: LetrasService) {}

  @Get(':nombre')
  buscarPorNombre(@Param('nombre') nombre: string) {
    return this.letrasService.buscarPorNombre(nombre);
  }

  @Get('id/:id')
  buscarPorId(@Param('id', ParseIntPipe) id: number) {
    return this.letrasService.buscarPorId(id);
  }

}
