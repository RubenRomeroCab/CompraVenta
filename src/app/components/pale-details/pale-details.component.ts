import { Component, OnInit } from '@angular/core';
import { Pale } from '../../models/pale.model';
import { ActivatedRoute } from '@angular/router';
import { pales } from '../../models/pales';
import { CommonModule } from '@angular/common';

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

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = Number(idParam );
    this.pale = pales.find((p) => p.id ===id);
    console.log(this.pale);
    console .log (id, idParam)
    this.crearLink();
  }

  crearLink(){
    this.pale?.items[0].ASIN
  }
}
