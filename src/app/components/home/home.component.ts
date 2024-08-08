import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { pales } from '../../models/pales';
import { Pale } from '../../models/pale.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  
  paleDestacado: Pale[] = [];

  constructor(private router:Router){}
  

  ngOnInit(): void {
    // Utilizar filter para obtener un array de pales destacados
    this.paleDestacado = pales.filter(pale => pale.destacado === true);
    
    // Verifica los resultados en la consola
    console.log(this.paleDestacado);
  }

  mirarPale(pale:Pale){
    if(!pale.vendido){
      this.verPale(pale.id)
    }
  }
  
  verPale(id:number) {
    
    console.log(id)
      this.router.navigate(['/pale-details',id])
    }
    

}
