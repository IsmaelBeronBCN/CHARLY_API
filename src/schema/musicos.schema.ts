import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import mongoose from "mongoose"
import {Document} from "mongoose"
import { Album } from "src/interfaces/album.interface"
import { IMusico} from "src/interfaces/musico.interface"




@Schema()
export class Musico extends Document implements IMusico{

    @Prop({type: String})
    album?: Album

    @Prop({type: String, required: true})
    nombre: string
    
    @Prop({type: Array}) 
    albumes?: Album[]

    @Prop({type: Array})
    instrumento: string[]

    @Prop({type: Array})
    invitados?: string[]
}

export const MusicoSchema = SchemaFactory.createForClass(Musico)
MusicoSchema.index({ name: 1 }, { unique: true, sparse: true });