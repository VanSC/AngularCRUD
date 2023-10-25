import { Injectable } from '@angular/core';
import { Producto } from './producto.modelo';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private productos: Producto[] = [
    { codigo: 1, descripcion: "Collar", precio: 20 },
    { codigo: 2, descripcion: "Anillo", precio: 15 },
    { codigo: 3, descripcion: "Pulsera", precio: 12 },
    { codigo: 4, descripcion: "Aretes", precio: 8 },
    { codigo: 5, descripcion: "Collar", precio: 22 },

  ]
  constructor() { }

  //metodo para obtener los productos del listado
  getProductos(): Producto[] {
    return this.productos;
  }

  //metodo para añadir un producto
  addProducto(producto: Producto): void {
    producto.codigo = this.productos.length + 1;
    this.productos.push(producto);
  }

  //Metodo par actualizar producto
  updateProducto(producto: Producto): void {
    const index = this.productos.findIndex(p => p.codigo === producto.codigo);
    if (index !== -1) {
      this.productos[index] = producto
    }
  }

  //metodo para obtener un producto por Codigo (id)
  getProductoById(producto_cod: number): Producto | undefined {
    return this.productos.find(producto => producto.codigo === producto_cod);
  }

  //metodo para eliminar un producto
  deleteProducto(producto: Producto): void {
    const index = this.productos.findIndex(p => p.codigo === producto.codigo);
    if (index !== -1) {
      this.productos.splice(index, 1)
    }
  }
}
