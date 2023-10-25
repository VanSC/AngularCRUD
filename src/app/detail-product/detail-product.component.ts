import { Component } from '@angular/core';
import { Producto } from '../producto.modelo';
import { ProductoService } from '../producto.service';
@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent {
  productos!: Producto[];

  constructor(private prodService: ProductoService) {
    
  }

  //obtener productos
  ngOnInit(): void {
    this.productos = this.prodService.getProductos();
  }
}
