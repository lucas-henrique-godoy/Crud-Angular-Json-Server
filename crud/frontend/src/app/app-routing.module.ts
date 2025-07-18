import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';


const routes: Routes = [  //Registrando as rotas dos componentes principais
{
  path: "",   //Rota raiz da aplicação(Home)
  component: HomeComponent
}, 
{
  path: "products", //Rota do cadastro de produtos
  component: ProductCrudComponent
},
{
  path: "products/create",
  component: ProductCreateComponent
 },
 {
  path: "products/update/:id", //Passando um parâmetro de id na rota
  component: ProductUpdateComponent
 },
 {
  path: "products/delete/:id",
  component: ProductDeleteComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
