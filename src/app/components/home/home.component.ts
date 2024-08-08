import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Cuadro } from '../../models/cuadro.model';
import { CommonModule } from '@angular/common';
import { cuadros } from '../../models/cuadros';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  
  cuadroDestacado: Cuadro[] = [];

  constructor(private router:Router){}
  

  ngOnInit(): void {
    // Utilizar filter para obtener un array de pales destacados
    this.cuadroDestacado = cuadros.filter(cuadros => cuadros.destacado === true);
    
    // Verifica los resultados en la consola
    console.log(this.cuadroDestacado);
  }

  mirarPale(cuadro:Cuadro){
    if(!cuadro.vendido){
      this.verPale(cuadro.id)
    }
  }
  
  verPale(id:number) {
    
    console.log(id)
      this.router.navigate(['/pale-details',id])
    }
    

}
