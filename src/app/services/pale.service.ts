import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Pale } from '../models/pale.model';

@Injectable({
  providedIn: 'root'
})
export class PaleService {



  // Método para añadir un Pale al carrito
  private carrito: Pale[] = [];
  private precioTotalSubject = new BehaviorSubject<number>(-1);
  precioTotal$ = this.precioTotalSubject.asObservable();

  agregarPale(pale: Pale) {
    this.carrito.push(pale);
    this.actualizarPrecioTotal();
    
  }

   actualizarPrecioTotal() {
    const precioTotal = this.carrito.reduce((total, pale) => total + pale.precio,-1);
    this.precioTotalSubject.next(precioTotal);
  
  }

  mostrarcarrtito(){
    return this.carrito
  }
}
