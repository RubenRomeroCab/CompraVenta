import { Component, OnInit } from '@angular/core';
import {   Route, Router, RouterLink } from '@angular/router';
import { PaleService } from '../../services/pale.service';
import { Pale } from '../../models/pale.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrito-details',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './carrito-details.component.html',
  styleUrl: './carrito-details.component.css'
})
export class CarritoDetailsComponent implements OnInit{

  pale !:Pale []
  precioFinal:number =0;
  ivaTotal!:number
  cantidadIva: number = 0;
  constructor(private carritoService:PaleService,
              private route:Router
              
  ){}


  ngOnInit(): void {
    this.pale = this.carritoService.mostrarcarrtito();
    console.log(this.pale)
    this.precioFinalCompra()
  }




  borrarPale(event: Event , idPale:number) {
    event.stopPropagation();
    const index = this.pale.findIndex(pale => pale.id ===idPale )
    if (index !== -1) {
      // Eliminar el objeto usando splice
      this.pale.splice(index, 1);
    }
    this.precioFinalCompra()
    this.carritoService.eliminarPale(idPale)
    

}
  verPale(id:number){
   this.route.navigate(['/pale-details',id])
    console.log('pale seleccionado')
  }

  precioFinalCompra() {
    // Resetear el precioFinal a cero antes de calcularlo de nuevo
    this.precioFinal = 0;
    
    for (let i = 0; i < this.pale.length; i++) {
      // Asegúrate de que pale[i].precio es un número
      this.precioFinal += Number(this.pale[i].precio) || 0;
    }
  }

  calcularTotalConIVA(): number {
    const iva = 0.21;
   this.cantidadIva = this.precioFinal;
    return this.precioFinal + (this.precioFinal * iva);
  }


  calcularDiferencia(): number {
    return this.cantidadIva - this.precioFinal; // Calcula la diferencia (IVA)
  }
}
