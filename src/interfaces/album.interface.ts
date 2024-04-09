import { Cancion } from "./caciones.interface"

export interface Album{

    nombre: string 


    fecha_publicacion: number

    duracion_total: string



    canciones: Cancion[]

   
    foto: string

   
    musicos: string[]

    
    descripcion: string

   
    discografica: string[]

  
    productores: string[]
    
   
    grabacion: string[]

   
    invitados?: string[]
}