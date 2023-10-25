import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';
import { AgregarProductosComponent } from './agregar-productos/agregar-productos.component';
const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'productos', component: ListaProductosComponent },
  { path: 'productos/edit/:codigo', component: EditarProductoComponent },
  { path: 'productos/add', component: AgregarProductosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
