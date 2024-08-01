import { Item } from "./item.model";

export interface Pale{
    destacado?:boolean,
    id:number,
    nombre: string,
    productos: number,
    precio: number,
    items: Item [],

}