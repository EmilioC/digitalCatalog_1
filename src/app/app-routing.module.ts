import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { MaterialesComponent } from './components/materiales/materiales.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { MaterialComponent } from './components/material/material.component'
import { MaterialTarjetaComponent} from './components/material-tarjeta/material-tarjeta.component'


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'materiales', component: MaterialesComponent },
  { path: 'material-tarjeta', component: MaterialTarjetaComponent },
  { path: 'material/:id', component: MaterialComponent },
  { path: 'buscar/:termino', component: BuscadorComponent },

  { path: '**', pathMatch: 'full', redirectTo: ''}
  /* { path: '**', pathMatch: 'full', redirectTo: 'materiales'} */

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// ORIGINAL
// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
