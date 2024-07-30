import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-body',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

  pale: any;
  constructor(){
    this.pale ={
      id:1,
      nombre: 'Palé de Electrodomésticos',
      productos: 23,
      precio: 5000,
      items:[]
    }
  }

  verId(){
    console.log( 'este es el id del pale' + this.pale.id )
  }


   
 

}
