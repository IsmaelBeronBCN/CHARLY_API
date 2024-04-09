import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Disco } from 'src/schema/discos.schema';
import { Model } from 'mongoose';
import { Musico } from 'src/schema/musicos.schema';
import { Letra } from 'src/schema/letra.schema';


@Injectable()
export class SeedService {

  constructor(
    @InjectModel(Disco.name)
    private readonly discoModel: Model<Disco>,
    @InjectModel(Musico.name)
    private readonly musicoModel: Model<Musico>,
    @InjectModel(Letra.name)
    private readonly letrasModel: Model<Letra>
  ){}

  async seed() {
    const discosJson= await import('../../src/data/Seed.json')
    
    
      try {
        const {data} = structuredClone(discosJson)
       

         await this.discoModel.deleteMany({})
        

        const arrayDiscos = []
       

        data.forEach(disco=>{
          arrayDiscos.push(disco)
        })

      

        await this.discoModel.insertMany(arrayDiscos)
       
        return 'Seed hecho correctamente!'
      } catch (error) {
        throw new Error(`${error}`)
      }  
    
  }


  async seedMusicos(){
    const musicosJson = await import('../data/Musicos.json')

    try {
      
      const {musicos} = structuredClone(musicosJson)
      await this.musicoModel.deleteMany({}) 
      const arrayMusicos = [] 
      musicos.forEach(musico=>{
        arrayMusicos.push(musico)
      })
  
      await this.musicoModel.insertMany(arrayMusicos)
      return 'Seed hecho correctamente!'
    } catch (error) {
      throw new Error(`${error}`)
    }


  }
  async seedLetras(){
    const musicosJson = await import('../data/Letras.json')

    try {
      
      const {letras} = structuredClone(musicosJson)
      await this.letrasModel.deleteMany({}) 
      const arrayLetras = [] 
      letras.forEach(letra=>{
        arrayLetras.push(letra)
      })
  
      await this.letrasModel.insertMany(arrayLetras)
      return 'Seed hecho correctamente!'
    } catch (error) {
      throw new Error(`${error}`)
    }


  }

  
 
  
}
