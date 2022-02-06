import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  { path: 'material/:Codigo', component: MaterialComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'home'}

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
