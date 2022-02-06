import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialesComponent } from './components/materiales/materiales.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'materiales', component: MaterialesComponent },

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
