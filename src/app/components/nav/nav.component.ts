import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { PaleService } from '../../services/pale.service';
import { Pale } from '../../models/pale.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {
  nuevoCarrito: Pale [] = []
  precioTotalConIVA: number = 0;
  private precioTotalSubscription!: Subscription;

  constructor(private carritoService: PaleService, private router: Router) {}

  ngOnInit(): void {
    this.precioTotalSubscription = this.carritoService.precioTotal$.subscribe(precioTotal => {
      this.calcularPrecioTotal(precioTotal);
    });
  }

  ngOnDestroy(): void {
    if (this.precioTotalSubscription) {
      this.precioTotalSubscription.unsubscribe();
    }
  }

  calcularPrecioTotal(precioTotal: number): void {
    if(precioTotal>0){
      const iva = 0.21; // 21%
    this.precioTotalConIVA = precioTotal + (precioTotal * iva);
    }else{
      precioTotal=0
    }
    
  }

  verCarrito() {
    this.router.navigate(['/carrito-details']);
  }
}
