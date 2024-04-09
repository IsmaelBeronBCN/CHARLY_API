import { IsNumber, IsPositive, Max, Min } from "class-validator";

export class DiscoFechaDTO{
    
    @IsNumber()
    @IsPositive()
    @Max(2030)
    @Min(1981)
    fecha: number
}