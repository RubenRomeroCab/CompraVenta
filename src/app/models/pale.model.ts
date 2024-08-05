import { Item } from "./item.model";

export interface Pale{
    priceId:string;
    destacado?:boolean,
    id:number,
    nombre: string,
    productos: number,
    precio: number,
    items: Item [],

}