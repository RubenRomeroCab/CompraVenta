import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Cuadro } from '../../models/cuadro.model';
import { cuadros } from '../../models/cuadros';



@Component({
  selector: 'app-body',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {


  paleId = cuadros[0].id
  paless: Array<Cuadro> = cuadros
  
  constructor( private router:Router) {
  console.log(  cuadros)
  }
  
  mirarPale(cuadro:Cuadro){
    if(!cuadro.vendido){
      this.verPale(cuadro.id)
    }
  }

  verPale(id:number) {
    this.router.navigate(['/pale-details',id])
  }
  
}
