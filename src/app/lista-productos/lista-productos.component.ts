import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '../producto.modelo';
import { ProductoService } from '../producto.service';
@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  productos!: Producto[];

  constructor(private prodService: ProductoService, private router: Router) {
    
  }

  //obtener productos
  ngOnInit(): void {
    this.productos = this.prodService.getProductos();
  }

  //Elimianr producto
  deleteProduct(producto: Producto): void {
    if (confirm(`¿Estás seguro de que deseas eliminar este producto "${producto.descripcion}"?`)) {
      this.prodService.deleteProducto(producto);
      this.productos = this.prodService.getProductos();
    }
  }
  editProduct(producto: Producto): void {
    this.router.navigate(['/productos/edit', producto.codigo]);
  }

  //ir a registro
  goToAddProduct(): void {
    this.router.navigate(['/productos/add']);
  }

}
