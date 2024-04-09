import mongoose, {Document} from 'mongoose'
import {Schema, SchemaFactory, Prop} from '@nestjs/mongoose'
import { Cancion } from 'src/interfaces/caciones.interface'
import { IMusico } from 'src/interfaces/musico.interface'



@Schema()
export class Disco extends Document{

    @Prop({
        index:true,
        type: String
    })
    nombre: string 

    @Prop({
        index:true,
        type: Number
    })
    fecha_publicacion: number

    @Prop({type: String})
    duracion_total: string


    @Prop({ type: Array })
    canciones: Cancion[]

    @Prop({type: String})
    foto: string

    @Prop({type: Array })
    musicos: IMusico[]

    @Prop({type: String})
    descripcion: String

    @Prop({type: Array})
    discografica: string[]

    @Prop({type: Array})
    productores: string[]
    
    @Prop({type: Array})
    grabacion: string[]

    @Prop({type: Array})
    invitados?: IMusico[]

}


export const DiscoSchema = SchemaFactory.createForClass(Disco)
DiscoSchema.index({ name: 1 }, { unique: true, sparse: true });
