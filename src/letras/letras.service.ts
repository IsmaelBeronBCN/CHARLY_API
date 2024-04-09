import { BadRequestException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Letra } from 'src/schema/letra.schema';


@Injectable()
export class LetrasService {

  constructor(
    @InjectModel(Letra.name)
    private readonly letraModel: Model<Letra>
  ) {}

  

  formatearInput(inputString: string) {

    let formattedString = inputString[0].toLowerCase() + inputString.slice(1);
    formattedString = formattedString.replace(/([A-Z])/g, (match) => `_${match.toLowerCase()}`);

    return formattedString;
}

  async buscarPorNombre(nombre: string) {
    const input = this.formatearInput(nombre);

    try {
      
      const cancionElegida = await this.letraModel.findOne({ titulo: input });
    
      if (!cancionElegida) {
        throw new NotFoundException(`¡No hay canciones publicadas con ese nombre!`);
      }
    
      return cancionElegida;
    } catch (error) {
      console.log(error)
      throw new NotFoundException(`¡No hay canciones publicadas con ese nombre!`);
    }
  
  }

  async buscarPorId(id: number) {
    if(isNaN(id)){
      throw new BadRequestException("¿Seguro que has puesto una fecha?")
    }
    try {
      const cancion= await this.letraModel.find({id})
      if(cancion.length === 0) throw new NotFoundException(`No hay ninguna canción con el id ${id}`)
      return cancion
    } catch (error) {
      console.log(error)
    } 
  }
}
