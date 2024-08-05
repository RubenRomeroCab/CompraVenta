import { Component, OnInit } from '@angular/core';
import { Route, Router, RouterLink } from '@angular/router';
import { PaleService } from '../../services/pale.service';
import { Pale } from '../../models/pale.model';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-carrito-details',
  standalone: true,
  imports: [RouterLink, CommonModule,ReactiveFormsModule ],
  templateUrl: './carrito-details.component.html',
  styleUrl: './carrito-details.component.css'
})
export class CarritoDetailsComponent implements OnInit {


  pale !: Pale[]
  precioFinal: number = 0;
  ivaTotal!: number
  cantidadIva: number = 0;
checkoutForm: any;
  constructor(private carritoService: PaleService,
    private route: Router,
    private fb: FormBuilder,

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
  }

  
  verPale(id: number) {
    this.route.navigate(['/pale-details', id])
    console.log('pale seleccionado')
  }

  precioFinalCompra() {
    // Resetear el precioFinal a cero antes de calcularlo de nuevo
    this.precioFinal = 0;
  
    // Sumar el precio base de todos los palés
    for (let i = 0; i < this.pale.length; i++) {
      // Asegúrate de que pale[i].precio es un número y suma el precio base
      this.precioFinal += Number(this.pale[i].precio) || 0;
    }
  }

  calcularTotalConIVA(): number {
    const iva = 0.21; // 21%
    // Sumar el IVA al subtotal
    return this.precioFinal + (this.precioFinal * iva);
  }
  

  onSubmit() {
   /*  if (this.checkoutForm.valid) {
      this.stripeService.createToken(this.card!).subscribe(result => {
        if (result.token) {
          // Aquí es donde puedes enviar el token y la información del formulario a tu servidor
          this.processPayment(result.token);
        } else if (result.error) {
          console.error(result.error.message);
        }
      });
    } */
  }
}
