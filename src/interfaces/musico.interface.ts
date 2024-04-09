import { ClassSerializerInterceptor } from "@nestjs/common"
import { DiscoDto } from "../discos/dto/create-disco.dto"
import { Album } from "./album.interface"

export enum Instrumento {
    GUITARRA = "guitarra",
    BAJO = "bajo",
    BATERIA = "bateria",
    VOZ = "voz",
    SAXO = "saxofon",
    COROS = "coros",
    TECLADOS = "teclados",
    VIOLIN = "violin",
    CONTRABAJO = "contrabajo",
    GUITARRA_ELECTRICA = "guitarra_electrica",
    SINTETIZADORES = "sintetizadores",
    CLARINETE = "clarinete",
    TECLADOS_ADICIONALES = "teclados_adicionales",
    PROGRAMACION_CAJA = "programacion_de_caja_de_ritmos",
    BANDONEON = "bandoneon",
    PROGRAMACION = "programacion",
    GUITARRA_ACUSTICA = "guitarra_acustica",
    PIANO = "piano",
    PERCUSION = "percusion",
    COLABORADOR = "colaborador",
    COLABORADORA = "colaboradora",
    VOCALES = "vocales",
    COMPOSICION = "composicion",
    VIENTOS = "vientos",
    CELLO = "cello",
    ORQUESTA = "orquesta",
    DIRECCION_ORQUESTAL = "direccion_orquestal"
}

export interface IMusico{
    nombre: string
    instrumento: String[]
    album?: Album
    albumes?: Album[]
} 