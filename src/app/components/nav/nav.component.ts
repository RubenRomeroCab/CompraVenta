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
 
     pale !:Pale [] 

  constructor(private carritoService: PaleService, private router: Router) {}

  ngOnInit(): void {

    // Suscripción al Observable del precio total con IVA
    this.carritoService.getPrecioTotalConIVA$().subscribe({
      next: (totalConIVA ) => {
        console.log(totalConIVA)
        this.precioTotalConIVA = totalConIVA ;
        
      },
      
      error: (err) => console.error('Error al recibir el total con IVA:', err)
    });

   

  }


  verCarrito() {
    // Navegar a la vista de detalles del carrito
    this.router.navigate(['/carrito-details']);
  }
}

