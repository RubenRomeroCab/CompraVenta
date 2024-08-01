import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
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

  constructor(){}
  

  ngOnInit(): void {
    // Utilizar filter para obtener un array de pales destacados
    this.paleDestacado = pales.filter(pale => pale.destacado === true);
    
    // Verifica los resultados en la consola
    console.log(this.paleDestacado);
  }

}
