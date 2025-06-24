import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';

const routes: Routes = [  //Registrando as rotas dos componentes principais
{
  path: "",   //Rota raiz da aplicação
  component: HomeComponent
}, 
{
  path: "products",
  component: ProductCrudComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
