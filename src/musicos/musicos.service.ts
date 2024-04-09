import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Musico, MusicoSchema } from 'src/schema/musicos.schema';

@Injectable()
export class MusicosService {

  constructor(
    @InjectModel(Musico.name)
    private readonly musicoModel: Model<Musico>
  ){

  }

  formatearInput(inputString: string) {

    let formattedString = inputString[0].toLowerCase() + inputString.slice(1);
    formattedString = formattedString.replace(/([A-Z])/g, (match) => `_${match.toLowerCase()}`);

    return formattedString;
}



  async findOne(nombre: string) {

    const formatoNombre= this.formatearInput(nombre);

    try {
      const musico= await this.musicoModel.find({ nombre: formatoNombre });
      if(musico.length=== 0) throw new NotFoundException(`¡No hay ningún músico con ese nombre!`)
  
        return musico
      
    } catch (error) {
      console.log(error)
      throw new NotFoundException(`¡No hay ningún músico con ese nombre!`)
    }
  }

  async musicosPorAlbum(album:string){
    const formatoAlbum= this.formatearInput(album);

    try {
      const musicosAlbum =await this.musicoModel.find({ album: formatoAlbum });

      if(musicosAlbum.length === 0) throw new NotFoundException(`¡No hay álbumes con ese nombre!`)
  
        return musicosAlbum
    
    } catch (error) {
      console.log(error)
      throw new  Error()
    }

  }
}
