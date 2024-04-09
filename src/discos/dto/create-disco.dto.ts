import { IsArray, IsDate, IsMongoId, IsNotEmpty, IsNumber, IsString } from "class-validator"
import { Cancion } from "../../interfaces/caciones.interface"
import { IMusico} from "../../interfaces/musico.interface"


export class DiscoDto{

    @IsString()
    @IsNotEmpty()
    nombre: String

    @IsNumber()
    fecha_publicacion: number

    @IsArray()
    @IsNotEmpty()
    canciones: Cancion[]

    @IsString()
    cancion?: string

    @IsString()
    foto: string

    @IsArray()   
    musicos: IMusico[]

    @IsString()
    duracion_total: String

    @IsString()
    descripcion: string

    @IsString()
    discografica: string[]

    @IsArray()
    productores: string[]
    
}