import { Component } from '@angular/core';
import { Producto } from '../producto.modelo';
import { ProductoService } from '../producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-productos',
  templateUrl: './agregar-productos.component.html',
  styleUrls: ['./agregar-productos.component.css']
})
export class AgregarProductosComponent {
  //instanciar el objeto Producto
  nuevoProducto: Producto = { codigo:0, descripcion: "", precio: 0};

  //iniciar el constructor
  constructor(private prodService: ProductoService,private router: Router,) {}

  //añadir nuevo producto
  addProduct(): void {
    this.prodService.addProducto(this.nuevoProducto);
    this.router.navigate(['/productos']);
  }
}
