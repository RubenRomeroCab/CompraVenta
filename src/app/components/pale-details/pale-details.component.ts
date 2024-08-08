import { Component, OnInit } from '@angular/core';
import { Pale } from '../../models/pale.model';
import { ActivatedRoute } from '@angular/router';
import { pales } from '../../models/pales';
import { CommonModule } from '@angular/common';
import { PaleService } from '../../services/pale.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pale-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pale-details.component.html',
  styleUrl: './pale-details.component.css'
})

export class PaleDetailsComponent implements OnInit {


  pale!: Pale | undefined;
  precioTotal!:number;
  precioCarrito!:number;

  private subscription: Subscription = new Subscription();
  alertMessage: string = '';


  constructor(private route: ActivatedRoute,
              private servicioPale:PaleService,) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = Number(idParam );
    this.pale = pales.find((p) => p.id ===id);
    
    console.log(this.pale);
    console .log (id, idParam)

    this.subscription.add(
      this.servicioPale.alerta$.subscribe(message => {
        this.alertMessage = message; // Debe ser un string
        setTimeout(() => this.alertMessage = '', 5000); // Ocultar alerta después de 3 segundos
      })
    );
  }

  
  agregarAlCarrito(pale:Pale){
      this.servicioPale.agregarPale(pale)
      console.log(this.servicioPale.mostrarcarrtito())
      
  }

}
