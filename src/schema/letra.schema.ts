import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Letra {

    @Prop({type: Number})
    id: number
    
    @Prop({type: String})
    titulo: string

    @Prop({type: String})
    letra: string

    @Prop({type: String})
    album: string
}

export const LetraSchema = SchemaFactory.createForClass(Letra)