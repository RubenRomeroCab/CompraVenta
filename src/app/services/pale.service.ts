import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Pale } from '../models/pale.model';

@Injectable({
  providedIn: 'root'
})
export class PaleService {

 
  private carrito: Pale[] = [];
  private precioTotalConIVA$ = new BehaviorSubject<number>(0);



  actualizarPrecioTotalConIVA(nuevoTotal: number) {
    this.precioTotalConIVA$.next(nuevoTotal);
  }

  getPrecioTotalConIVA$() {
    return this.precioTotalConIVA$.asObservable();
  }



  agregarPale(pale: Pale) {
    console.log('carrito actualizado')
    this.carrito.push(pale);
    this.actualizarPrecioTotal();
  }

  //POSIBLE SULUCION MIRAR ELIMINAR PALE 

  eliminarPale(paleId: number) {
    console.log('Intentando eliminar pale con id:', paleId);
    console.log('Carrito antes de eliminar:', this.carrito.map(p => p.id));
  
    this.carrito = this.carrito.filter(pale => pale.id !== paleId);
  
    console.log('Carrito después de eliminar:', this.carrito.map(p => p.id));
    console.log('pale eliminado, número restante en carrito:', this.carrito.length);
  
    this.actualizarPrecioTotal();
  }

  public actualizarPrecioTotal(): void {
    const precioTotal = this.carrito.reduce((total, pale) => total + pale.precio, 0);
    this.precioTotalConIVA$.next(precioTotal);
  }

  mostrarcarrtito() {
    return this.carrito;
  }
  
}
