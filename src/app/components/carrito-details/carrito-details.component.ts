import { Component, OnInit } from '@angular/core';
import { Route, Router, RouterLink } from '@angular/router';
import { PaleService } from '../../services/pale.service';
import { Pale } from '../../models/pale.model';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { StripeService } from '../../servicestripe/servicestripe.service';





@Component({
  selector: 'app-carrito-details',
  standalone: true,
  imports: [RouterLink, CommonModule,ReactiveFormsModule ],
  templateUrl: './carrito-details.component.html',
  styleUrl: './carrito-details.component.css'
})
export class CarritoDetailsComponent implements OnInit {


  pale !: Pale[]
  precioTotalConIVA: number = 0;
  
 
  checkoutForm: any;
  elementoEliminado!:boolean ;
  paleSelecionado !:number;
  constructor(private carritoService: PaleService,
    private route: Router,
    private fb: FormBuilder,
    private stripeService: StripeService,
  
    
  ) { }




  ngOnInit(): void {
    this.pale = this.carritoService.mostrarcarrtito();
  
    this.precioFinalCompra()

  
      this.checkoutForm = this.fb.group({
        nombre: ['', Validators.required],
        apellidos: ['', Validators.required],
        empresa: [''],
        nif: ['', Validators.required],
        pais: ['', Validators.required],
        direccion: ['', Validators.required],
        codigoPostal: ['', Validators.required],
        poblacion: ['', Validators.required],
        provincia: ['', Validators.required],
        notas: ['']
      });

      this.carritoService.getPrecioTotalConIVA$().subscribe({
        next:(totalConIVA)=>{
          this.precioTotalConIVA = totalConIVA+(totalConIVA *0.21);
        }

      })
      
  
     
  }
  


  

  borrarPale(event: Event, idPale: number) {
    event.stopPropagation();
    const index = this.pale.findIndex(pale => pale.id === idPale);
    if (index !== -1) {
      // Eliminar el objeto usando splice
      this.pale.splice(index, 1);
    }
  
    // Llama al servicio para eliminar el Pale
    this.carritoService.eliminarPale(idPale);
  
    // Actualiza el precio final
    this.precioFinalCompra();
    this.elementoEliminado = true;
    setTimeout(() => {
      this.elementoEliminado = false; // Desactiva el mensaje de alerta después de 5 segundos
    }, 5000); // 5000 milisegundos = 5 segundos

  }

  
  verPale(id: number) {
    this.route.navigate(['/pale-details', id])
    console.log('pale seleccionado')
    this.paleSelecionado = id;
  }

  precioFinalCompra() {
    // Resetear el precioFinal a cero antes de calcularlo de nuevo
    this.precioTotalConIVA = 0;
  
    // Sumar el precio base de todos los palés
    for (let i = 0; i < this.pale.length; i++) {
      // Asegúrate de que pale[i].precio es un número y suma el precio base
      this.precioTotalConIVA += Number(this.pale[i].precio) || 0;
    }
    if(this.pale.length>0){
     
    }

  }

 

  pagoRealizado(){

    for (let i = 0; i < this.pale.length; i++) {
      // Asegúrate de que pale[i].precio es un número y suma el precio base
      this.pale[i].vendido=true;
      this.carritoService.limpiarCarrito()
      
    }
    console.log(this.pale)
  }
  
}
