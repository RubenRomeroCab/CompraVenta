import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { PaleService } from '../../services/pale.service';
import { Pale } from '../../models/pale.model';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {
  nuevoCarrito: Pale [] = []
  totalPrice: number = 0;

  constructor(private router: Router,
    private serviceCarrito: PaleService) { }



    ngOnInit() {
     this.nuevoCarrito= this.serviceCarrito.mostrarcarrtito();
     
    }

  verCarrito() {
    this.router.navigate(['/carrito-details'])
  }
}
