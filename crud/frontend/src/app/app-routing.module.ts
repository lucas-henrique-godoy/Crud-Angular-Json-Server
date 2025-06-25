import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';

const routes: Routes = [  //Registrando as rotas dos componentes principais
{
  path: "",   //Rota raiz da aplicação(Home)
  component: HomeComponent
}, 
{
  path: "products", //Rota do cadastro de produtos
  component: ProductCrudComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
