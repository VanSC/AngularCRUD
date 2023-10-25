import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../producto.modelo';
import { ProductoService } from '../producto.service';
@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent {
  
  editedProduct: Producto = { codigo: 0, descripcion: '', precio: 0 };

  constructor(private route: ActivatedRoute, private router: Router, private prodService: ProductoService) {
    this.route.params.subscribe(params => {
      const producto_cod= +params['codigo'];
      const producto = this.prodService.getProductoById(producto_cod);

      if (producto) {
        this.editedProduct = { ...producto };
      } else {
        alert("No se encontro producto")
      }
    });
  }

  saveChanges(): void {
    this.prodService.updateProducto(this.editedProduct);
    this.router.navigate(['/productos']);
  }
}
