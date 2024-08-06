import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { pales } from '../../models/pales';
import { Pale } from '../../models/pale.model';



@Component({
  selector: 'app-body',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {


  paleId = pales[0].id
  paless: Array<Pale> = pales
  
  constructor( private router:Router) {
  console.log(  pales)
  }
  
  mirarPale(pale:Pale){
    if(!pale.vendido){
      this.verPale(pale.id)
    }
  }

  verPale(id:number) {
    this.router.navigate(['/pale-details',id])
  }
  
}
