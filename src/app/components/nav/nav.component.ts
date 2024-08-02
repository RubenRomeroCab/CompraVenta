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
  precioTotalConIVA: number = 0;
  private palesSubscription!: Subscription;

  constructor(private carritoService: PaleService, private router: Router) {}

  ngOnInit(): void {
    this.palesSubscription = this.carritoService.precioTotal$.subscribe(precioTotal => {
      this.calcularPrecioTotal(precioTotal);
    });
  }

  ngOnDestroy(): void {
    if (this.palesSubscription) {
      this.palesSubscription.unsubscribe();
    }
  }

  calcularPrecioTotal(precioTotal: number): void {
    const iva = 0.21; // 21%
    if (precioTotal > 0) {
      this.precioTotalConIVA = precioTotal + (precioTotal * iva);
    } else {
      this.precioTotalConIVA = 0;
    }
  }

  verCarrito() {
    this.router.navigate(['/carrito-details']);
  }
}
