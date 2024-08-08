import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Cuadro } from '../models/cuadro.model';

@Injectable({
  providedIn: 'root'
})
export class PaleService {

 
  private carrito: Cuadro[] = [];
  private precioTotalConIVA$ = new BehaviorSubject<number>(0);


  private alertaSubject = new Subject<string>(); // Añadir Subject para alertas
  alerta$ = this.alertaSubject.asObservable(); // Observable para suscribirse a las alertas
 


  private carritoSubject = new BehaviorSubject<Cuadro[]>(this.carrito);
  carrito$ = this.carritoSubject.asObservable();


  getPrecioTotalConIVA$() {
    return this.precioTotalConIVA$.asObservable();
  }

  agregarPale(cuadro: Cuadro) {
    console.log('carrito actualizado')
    if (this.carrito) {
      // Verificar si ya existe un Pale con el mismo id en el carrito
      const existePale = this.carrito.some(item => item.id === cuadro.id);
      
      if (!existePale) {
          this.carrito.push(cuadro);
          this.alertaSubject.next('El artículo ha sido añadido al carrito.'); // Mensaje de éxito
          this.actualizarPrecioTotal();
      } else {
        this.alertaSubject.next('Este artículo ya está en el carrito. Solo puedes añadir uno.');
      
      }
  }
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

  limpiarCarrito(){
    let response =200;
    if(response == 200){
      this.carrito.length=0;
      this.actualizarPrecioTotal()
    }else{
      
    }

  }
  
}
