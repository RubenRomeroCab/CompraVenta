import { Component, OnInit } from '@angular/core';
import { Cuadro} from '../../models/cuadro.model';
import { ActivatedRoute } from '@angular/router';
import { cuadros } from '../../models/cuadros';
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


  cuadro!: Cuadro| undefined;
  precioTotal!:number;
  precioCarrito!:number;

  private subscription: Subscription = new Subscription();
  alertMessage: string = '';


  constructor(private route: ActivatedRoute,
              private servicioPale:PaleService,) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = Number(idParam );
    this.cuadro = cuadros.find((cuadro) => cuadro.id ===id);
    
   
    console .log (id, idParam)

    this.subscription.add(
      this.servicioPale.alerta$.subscribe(message => {
        this.alertMessage = message; // Debe ser un string
        setTimeout(() => this.alertMessage = '', 5000); // Ocultar alerta después de 3 segundos
      })
    );
  }

  
  agregarAlCarrito(cuadro:Cuadro){
      this.servicioPale.agregarPale(cuadro)
      console.log(this.servicioPale.mostrarcarrtito())
      
  }

}
