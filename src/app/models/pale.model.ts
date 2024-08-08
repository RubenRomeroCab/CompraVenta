import { Item } from "./item.model";

export interface Pale{
    vendido:boolean;
    priceId:string;
    destacado?:boolean,
    id:number,
    nombre: string,
    productos: number,
    precio: number,
    items: Item [],

}