import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Disco} from 'src/schema/discos.schema';




@Injectable()
export class DiscosService {

  constructor(
  @InjectModel(Disco.name)
  private readonly discoModel: Model<Disco>
  ){}

  async buscarPorFecha(fecha: number) {

    if(fecha <=1980 || fecha >2025){
      throw new BadRequestException("¡Es imposible que haya discos con esa fecha!")
    }

    if(isNaN(fecha)){
      throw new BadRequestException("¿Estas seguro de que has puesto una fecha?")
    }

    try {
      const disco= await this.discoModel.find({fecha_publicacion: fecha})
      if(disco.length === 0) throw new NotFoundException(`No hay discos publicados con la fecha ${fecha}`)
      return disco
    } catch (error) {
      console.log(error)
      throw new NotFoundException(`No hay discos publicados con la fecha ${fecha}`)
    } 
  }


  formatearInput(inputString: string) {

    let formattedString = inputString[0].toLowerCase() + inputString.slice(1);
    formattedString = formattedString.replace(/([A-Z])/g, (match) => `_${match.toLowerCase()}`);

    return formattedString;
}

  async buscarDisco(nombreDisco: string) {

    const input = this.formatearInput(nombreDisco);
    try {
      const disco = await this.discoModel.find({ nombre: input });

      if (disco.length === 0) {
        throw new NotFoundException(`¡No hay discos publicados con ese nombre!`);
      }

      return disco;
    } catch (error) {
      console.log(error);
      throw new NotFoundException(`¡No hay discos publicados con ese nombre!`);
    }
  }

async buscarCancion(cancion: string) {
  const input = this.formatearInput(cancion);


  try {
    
    const arrayAlbumes = await this.discoModel.find({ 'canciones.titulo': input });
  
    if (arrayAlbumes.length === 0) {
      throw new NotFoundException(`No hay canciones publicadas con ese nombre!`);
    }
  
    const arrayCanciones = arrayAlbumes.map((album) => {
      return album.canciones.filter((cancion) => cancion.titulo === input);
    });

    return arrayCanciones

  } catch (error) {
    console.log(error)
    throw new NotFoundException(`No hay canciones publicadas con ese nombre!`)
  }

}


  async discografiaCompleta(){
    const discos = await this.discoModel.find()

    const result = discos.map(disco=>{
      return [{nombre: disco.nombre, discografica: disco.discografica, fecha_publicacion: disco.fecha_publicacion}]
    })

    return result
  }

}
