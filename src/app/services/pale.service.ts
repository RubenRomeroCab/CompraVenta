import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Pale } from '../models/pale.model';

@Injectable({
  providedIn: 'root'
})
export class PaleService {

 
  private carrito: Pale[] = [];
  private precioTotalSubject = new BehaviorSubject<number>(0);
  precioTotal$ = this.precioTotalSubject.asObservable();

  agregarPale(pale: Pale) {
    this.carrito.push(pale);
    this.actualizarPrecioTotal();
  }

  eliminarPale(paleId: number) {
    this.carrito = this.carrito.filter(pale => pale.id !== paleId);
    this.actualizarPrecioTotal();
  }

  private actualizarPrecioTotal() {
    const precioTotal = this.carrito.reduce((total, pale) => total + pale.precio, 0);
    this.precioTotalSubject.next(precioTotal);
  }

  mostrarcarrtito() {
    return this.carrito;
  }
  
}
