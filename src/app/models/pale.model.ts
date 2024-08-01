import { Item } from "./item.model";

export interface Pale{

    id:number,
    nombre: string,
    productos: number,
    precio: number,
    items: Item [],

}