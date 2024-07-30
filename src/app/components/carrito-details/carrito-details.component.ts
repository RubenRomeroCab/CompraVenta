import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-carrito-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './carrito-details.component.html',
  styleUrl: './carrito-details.component.css'
})
export class CarritoDetailsComponent {




  borrarPale(event: Event) {
    event.stopPropagation();
    // Aquí va el resto de tu lógica para borrar el pale
    console.log('eliminado')
}
  verPale(){
    console.log('pale seleccionado')
  }

}
