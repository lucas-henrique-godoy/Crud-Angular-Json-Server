import { FormGroup } from '@angular/forms';
import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  // Inicializa os campos do objeto para uso com Template-driven Forms
  product: Product = {
    name: '',
    price: null
  }

  constructor(private productService: ProductService, private router: Router) { } //Injetando o Productervice parapoder utiizar os métodos

  ngOnInit(): void {
    
  } 

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => { //Subscribe será notificado quando a resposta chegar
      this.productService.showMessage('Produto criado!');  //Chama a função de mensagem quando receber a resposta da API
      this.router.navigate(['/products'])     //Navega para product-crud que é a lista de produtos
    })   
  }

  cancel(): void{
    this.router.navigate(['/products'])
  }

}
